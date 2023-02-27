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
  Extensions,
  UseMiddleware,
  ObjectType,
} from "type-graphql";
import path from "path";
import {
  IsDefined,
  MinLength,
  NotEquals,
  ValidateNested,
} from "class-validator";

import {
  MainUser,
  MainUserRelationsResolver,
  MainUserCrudResolver,
  Post,
  PostRelationsResolver,
  FindUniquePostResolver,
  CreateOnePostResolver,
  UpdateManyPostResolver,
  // Category,
  // Patient,
  PatientCrudResolver,
  FindManyPostResolver,
  MovieCrudResolver,
  DirectorCrudResolver,
  DirectorRelationsResolver,
  MovieRelationsResolver,
  FindManyMainUserArgs,
  ProblemRelationsResolver,
  CreatorRelationsResolver,
  CreateOnePostArgs,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
  ResolverActionsConfig,
  FindManyCategoryResolver,
  ModelsEnhanceMap,
  applyModelsEnhanceMap,
  ModelConfig,
  applyOutputTypesEnhanceMap,
  OutputTypeConfig,
  GroupByCategoryResolver,
  GroupByPostResolver,
  applyInputTypesEnhanceMap,
  applyArgsTypesEnhanceMap,
  NativeTypeModelCrudResolver,
  applyRelationResolversEnhanceMap,
  RelationResolverActionsConfig,
  HiddenCrudResolver,
} from "./prisma/generated/type-graphql";
import * as Prisma from "./prisma/generated/client";
import { ProblemCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Problem/ProblemCrudResolver";
import { CreatorCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Creator/CreatorCrudResolver";
import { createYoga } from "graphql-yoga";
import { createServer } from "node:http";

const problemTypeFieldsConfig: ModelConfig<"Problem"> = {
  fields: {
    likedBy: [Authorized()],
  },
};
const modelsEnhanceMap: ModelsEnhanceMap = {
  Problem: problemTypeFieldsConfig,
  Director: {
    class: [Extensions({ isDirector: true })],
    fields: {
      movies: [Authorized()],
    },
  },
  Post: {
    fields: {
      _all: [
        UseMiddleware(({ info }, next) => {
          console.log(
            `${info.parentType.name}.${info.fieldName} field accessed`,
          );
          return next();
        }),
      ],
    },
  },
  Hidden: {
    class: [
      ObjectType({
        description: "Generated omitted type with custom description",
      }),
    ],
  },
};
applyModelsEnhanceMap(modelsEnhanceMap);

const aggregateMainUserConfig: OutputTypeConfig<"AggregateMainUser"> = {
  fields: {
    _avg: [Extensions({ complexity: 10 })],
  },
};
applyOutputTypesEnhanceMap({
  AggregateMainUser: aggregateMainUserConfig,
  MainUserAvgAggregate: {
    fields: {
      age: [Authorized()],
    },
  },
  AggregateCreator: {
    fields: {
      _all: [Extensions({ test: true })],
    },
  },
});

applyArgsTypesEnhanceMap({
  CreateOneProblemArgs: {
    fields: {
      data: [ValidateNested()],
    },
  },
  FindManyDirectorArgs: {
    fields: {
      _all: [IsDefined()],
      cursor: () => [IsDefined()],
    },
  },
});

applyInputTypesEnhanceMap({
  MainUserCreateInput: {
    fields: {
      _all: [Extensions({ test: true })],
    },
  },
  ProblemCreateInput: {
    fields: {
      problemText: [MinLength(10)],
    },
  },
});

const clientRelationEnhanceConfig: RelationResolverActionsConfig<"MainUser"> = {
  clientPosts: [
    UseMiddleware(({ info }, next) => {
      console.log(`${info.parentType.name}.${info.fieldName} field accessed`);
      return next();
    }),
  ],
};

applyRelationResolversEnhanceMap({
  MainUser: clientRelationEnhanceConfig,
  Movie: {
    _all: [
      UseMiddleware(({ info }, next) => {
        console.log(`${info.parentType.name}.${info.fieldName} field accessed`);
        return next();
      }),
    ],
  },
});

const directorActionsConfig: ResolverActionsConfig<"Director"> = {
  createOneDirector: [Authorized()],
};
const resolversEnhanceMap: ResolversEnhanceMap = {
  MainUser: {
    mainUser: [
      (target, propertyKey, descriptor): any => {
        return {
          value: () => {
            console.log(
              `${target.constructor.name}.${String(
                propertyKey,
              )} descriptor.value called!`,
            );
            return null;
          },
        };
      },
    ],
  },
  Patient: {
    _all: [
      UseMiddleware(({ info }, next) => {
        console.log(`Query "${info.fieldName}" accessed`);
        return next();
      }),
    ],
  },
  Category: {
    categories: [Authorized()],
  },
  Director: directorActionsConfig,
};
applyResolversEnhanceMap(resolversEnhanceMap);

interface Context {
  prismaClient: Prisma.PrismaClient;
}

@Resolver(of => MainUser)
class MainUserResolver {
  @Query(returns => [MainUser])
  async allMainUsers(@Ctx() { prismaClient }: Context): Promise<Prisma.User[]> {
    return await prismaClient.user.findMany();
  }

  @Query(returns => [MainUser])
  async customFindMainUsersWithArgs(
    @Args() args: FindManyMainUserArgs,
    @Ctx() { prismaClient }: Context,
  ): Promise<Prisma.User[]> {
    // @ts-expect-error fix required at least fields
    return prismaClient.user.findMany(args);
  }

  @FieldResolver()
  hello(): string {
    return "world!";
  }
}

@Resolver(of => Post)
class PostResolver {
  @Query(returns => [Post])
  async allPosts(@Ctx() { prismaClient }: Context): Promise<Post[]> {
    return (await prismaClient.post.findMany()) as Post[];
  }

  @Mutation(returns => Post)
  async customCreatePost(
    @Ctx() { prismaClient }: Context,
    @Args() args: CreateOnePostArgs,
  ): Promise<Post> {
    // @ts-expect-error fix required at least fields
    return await prismaClient.post.create(args);
  }
}

async function main() {
  const schema = await buildSchema({
    resolvers: [
      MainUserResolver,
      MainUserRelationsResolver,
      MainUserCrudResolver,
      PostResolver,
      PostRelationsResolver,
      FindUniquePostResolver,
      CreateOnePostResolver,
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
      GroupByCategoryResolver,
      GroupByPostResolver,
      NativeTypeModelCrudResolver,
      HiddenCrudResolver,
    ],
    validate: { forbidUnknownValues: false },
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
    authChecker: ({ info }) => {
      console.log(
        `${info.parentType.name}.${info.fieldName} requested, access prohibited`,
      );
      return false;
    },
  });

  const prisma = new Prisma.PrismaClient({
    // see dataloader for relations in action
    log: ["query"],
  });

  await prisma.$connect();

  const yoga = createYoga({
    schema,
    context: (): Context => ({ prismaClient: prisma }),
    graphiql: true,
  });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.info("GraphQL Server is running on http://localhost:4000/graphql");
  });
}

main().catch(console.error);
