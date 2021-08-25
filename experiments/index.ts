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
} from "type-graphql";
import { ApolloServer } from "apollo-server";
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
  FindManyMainUserArgs,
  ProblemRelationsResolver,
  CreatorRelationsResolver,
  CreatePostArgs,
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
} from "./prisma/generated/type-graphql";
import * as Prisma from "./prisma/generated/client";
import { ProblemCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Problem/ProblemCrudResolver";
import { CreatorCrudResolver } from "./prisma/generated/type-graphql/resolvers/crud/Creator/CreatorCrudResolver";

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
  CreateProblemArgs: {
    fields: {
      data: [ValidateNested()],
    },
  },
  FindManyDirectorArgs: {
    fields: {
      _all: [IsDefined()],
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
  createDirector: [Authorized()],
};
const resolversEnhanceMap: ResolversEnhanceMap = {
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
  prisma: Prisma.PrismaClient;
}

@Resolver(of => MainUser)
class MainUserResolver {
  @Query(returns => [MainUser])
  async allMainUsers(@Ctx() { prisma }: Context): Promise<Prisma.User[]> {
    return await prisma.user.findMany();
  }

  @Query(returns => [MainUser])
  async customFindMainUsersWithArgs(
    @Args() args: FindManyMainUserArgs,
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
      MainUserResolver,
      MainUserRelationsResolver,
      MainUserCrudResolver,
      PostResolver,
      PostRelationsResolver,
      FindUniquePostResolver,
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
      GroupByCategoryResolver,
      GroupByPostResolver,
      NativeTypeModelCrudResolver,
    ],
    validate: true,
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

  const server = new ApolloServer({
    schema,
    context: (): Context => ({ prisma }),
  });
  const { port } = await server.listen(4000);
  console.log(`GraphQL is listening on ${port}!`);
}

main().catch(console.error);
