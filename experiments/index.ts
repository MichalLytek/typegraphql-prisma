import "reflect-metadata";
import {
  // ObjectType,
  Resolver,
  Query,
  buildSchema,
  FieldResolver,
  Ctx,
  Args,
  Mutation,
  Authorized,
} from "type-graphql";
import { ApolloServer } from "apollo-server";
import path from "path";

import {
  Client,
  ClientRelationsResolver,
  ClientCrudResolver,
  Post,
  PostRelationsResolver,
  FindOnePostResolver,
  CreatePostResolver,
  UpdateManyPostResolver,
  // Category,
  // Patient,
  PatientCrudResolver,
  FindManyPostResolver,
  MovieCrudResolver,
  DirectorCrudResolver,
  DirectorRelationsResolver,
  MovieRelationsResolver,
  FindManyClientArgs,
  ProblemRelationsResolver,
  CreatorRelationsResolver,
  CreatePostArgs,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  ResolverActionsConfig,
  FindManyCategoryResolver,
} from "./prisma/generated/type-graphql";
import { PrismaClient } from "./prisma/generated/client";
import * as Prisma from "./prisma/generated/client";
import { ProblemCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Problem/ProblemCrudResolver";
import { CreatorCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Creator/CreatorCrudResolver";

const problemActionsConfig: ResolverActionsConfig<"Problem"> = {
  createProblem: [Authorized()],
};

const resolversEnhanceMap: ResolversEnhanceMap = {
  Category: {
    categories: [Authorized()],
  },
  Problem: problemActionsConfig,
};

applyResolversEnhanceMap(resolversEnhanceMap);

interface Context {
  prisma: PrismaClient;
}

@Resolver(of => Client)
class ClientResolver {
  @Query(returns => [Client])
  async allClients(@Ctx() { prisma }: Context): Promise<Prisma.User[]> {
    return await prisma.user.findMany();
  }

  @Query(returns => [Client])
  async customFindClientsWithArgs(
    @Args() args: FindManyClientArgs,
    @Ctx() { prisma }: Context,
  ): Promise<Prisma.User[]> {
    return prisma.user.findMany(args);
  }

  @FieldResolver()
  hello(): string {
    return "world!";
  }
}

@Resolver(of => Post)
class PostResolver {
  @Query(returns => [Post])
  async allPosts(@Ctx() { prisma }: Context): Promise<Post[]> {
    return (await prisma.post.findMany()) as Post[];
  }

  @Mutation(returns => Post)
  async customCreatePost(
    @Ctx() { prisma }: Context,
    @Args() args: CreatePostArgs,
  ): Promise<Post> {
    return await prisma.post.create(args);
  }
}

async function main() {
  const schema = await buildSchema({
    resolvers: [
      ClientResolver,
      ClientRelationsResolver,
      ClientCrudResolver,
      PostResolver,
      PostRelationsResolver,
      FindOnePostResolver,
      CreatePostResolver,
      UpdateManyPostResolver,
      // CategoryCrudResolver,
      FindManyCategoryResolver,
      PatientCrudResolver,
      FindManyPostResolver,
      MovieCrudResolver,
      MovieRelationsResolver,
      DirectorCrudResolver,
      DirectorRelationsResolver,
      ProblemCrudResolver,
      CreatorCrudResolver,
      ProblemRelationsResolver,
      CreatorRelationsResolver,
    ],
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    authChecker: ({ info }) => {
      console.log(
        `${info.parentType.name}.${info.fieldName} requested, access prohibited`,
      );
      return false;
    },
  });

  const prisma = new PrismaClient({
    // see dataloader for relations in action
    log: ["query"],
  });

  await prisma.$connect();

  const server = new ApolloServer({
    schema,
    playground: true,
    context: (): Context => ({ prisma }),
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
