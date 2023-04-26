import "reflect-metadata";
import { promises as fs } from "fs";
import { buildSchema, Authorized, Extensions } from "type-graphql";
import { graphql } from "graphql";

import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";

describe("custom resolvers execution", () => {
  let outputDirPath: string;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("functional-enhance");
    await fs.mkdir(outputDirPath, { recursive: true });
    const prismaSchema = /* prisma */ `
      enum Color {
        RED
        GREEN
        BLUE
      }

      model Post {
        cuid     String  @id @default(cuid())
        content  String
        color    Color
      }
    `;
    await generateCodeFromSchema(prismaSchema, { outputDirPath });
  });

  it("should properly apply decorators in enhance map", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        posts: [Authorized()],
      },
    });

    const document = /* graphql */ `
      query {
        posts(
          take: 1
          skip: 1
          where: {
            content: { startsWith: "Test" }
          }
          orderBy: {
            color: desc
          }
        ) {
          cuid
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
    });
    const { errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toMatchInlineSnapshot(`
      Array [
        [GraphQLError: Access denied! You need to be authorized to perform this action!],
      ]
    `);
  }, 10000);

  it("should properly apply decorators for all methods when `_all` is used", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        _all: [Authorized()],
      },
    });

    const document = /* graphql */ `
      query {
        posts(
          take: 1
          skip: 1
          where: {
            content: { startsWith: "Test" }
          }
          orderBy: {
            color: desc
          }
        ) {
          cuid
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
    });
    const { errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toMatchInlineSnapshot(`
      Array [
        [GraphQLError: Access denied! You need to be authorized to perform this action!],
      ]
    `);
  }, 10000);

  it("should properly apply decorators for selected crud methods when `_query` is used", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        _all: [Extensions({ all: true })],
        _query: [Extensions({ read: true })],
      },
    });

    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
    });

    const postQuery = graphQLSchema.getQueryType()!.getFields().post;
    const postsQuery = graphQLSchema.getQueryType()!.getFields().posts;
    const createPostMutation = graphQLSchema
      .getMutationType()!
      .getFields().createOnePost;
    const updatePostMutation = graphQLSchema
      .getMutationType()!
      .getFields().updateOnePost;

    expect(postQuery.extensions).toEqual({ all: true, read: true });
    expect(postsQuery.extensions).toEqual({ all: true, read: true });
    expect(createPostMutation.extensions).toEqual({ all: true });
    expect(updatePostMutation.extensions).toEqual({ all: true });
  }, 10000);

  it("should properly apply decorators for selected crud methods when `_mutation` is used", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        _all: [Extensions({ all: true })],
        _mutation: [Extensions({ write: true })],
      },
    });

    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => false,
    });

    const postQuery = graphQLSchema.getQueryType()!.getFields().post;
    const postsQuery = graphQLSchema.getQueryType()!.getFields().posts;
    const createPostMutation = graphQLSchema
      .getMutationType()!
      .getFields().createOnePost;
    const updatePostMutation = graphQLSchema
      .getMutationType()!
      .getFields().updateOnePost;

    expect(postQuery.extensions).toEqual({ all: true });
    expect(postsQuery.extensions).toEqual({ all: true });
    expect(createPostMutation.extensions).toEqual({ all: true, write: true });
    expect(updatePostMutation.extensions).toEqual({ all: true, write: true });
  }, 10000);

  it("should allow overwrite decorators when `_all` is used", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        _all: [Authorized("ADMIN")],
        posts: () => [Authorized("USER")],
      },
    });

    const document = /* graphql */ `
      query {
        posts(
          take: 1
          skip: 1
          where: {
            content: { startsWith: "Test" }
          }
          orderBy: {
            color: desc
          }
        ) {
          cuid
          color
        }
      }
    `;
    let executedRoles: string[] | undefined;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: ({}, roles) => {
        executedRoles = roles;
        return false;
      },
    });
    const { errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toMatchInlineSnapshot(`
      Array [
        [GraphQLError: Access denied! You don't have permission for this action!],
      ]
    `);
    expect(executedRoles).toEqual(["USER"]);
  }, 10000);

  it("should inject decorators to decorator fn when `_all` is used", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    let injectedDecorators: Function[] | undefined;
    applyResolversEnhanceMap({
      Post: {
        _all: [function TestDecorator() {}],
        posts: (decorators: Function[]) => {
          injectedDecorators = decorators;
          return decorators;
        },
      },
    });

    await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => true,
    });

    expect(injectedDecorators).toHaveLength(1);
    expect(injectedDecorators![0].name).toEqual("TestDecorator");
  }, 10000);

  it("should concat decorators when `_all` and method specific are used together", async () => {
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        _all: [Extensions({ all: true })],
        posts: [Extensions({ posts: true })],
      },
    });

    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => true,
    });

    const postsQuery = graphQLSchema.getQueryType()!.getFields().posts;

    expect(postsQuery.extensions).toEqual({
      all: true,
      posts: true,
    });
  }, 10000);

  it("should properly apply descriptor decorators in enhance map", async () => {
    let descriptorCalledFlag = false;
    const {
      applyResolversEnhanceMap,
      PostCrudResolver,
    } = require(outputDirPath);

    applyResolversEnhanceMap({
      Post: {
        post: [
          (): any => {
            return {
              value: () => {
                descriptorCalledFlag = true;
                return null;
              },
            };
          },
        ],
      },
    });

    const document = /* graphql */ `
      query {
        post(where: { cuid: "cjld2cjxh0000qzrmn831i7rn" }) {
          color
        }
      }
    `;
    const graphQLSchema = await buildSchema({
      resolvers: [PostCrudResolver],
      validate: false,
      authChecker: () => true,
    });
    const { data, errors } = await graphql({
      schema: graphQLSchema,
      source: document,
      contextValue: { prisma: {} },
    });

    expect(errors).toBeUndefined();
    expect(data?.post).toBeNull();
    expect(descriptorCalledFlag).toBe(true);
  }, 30000);
});
