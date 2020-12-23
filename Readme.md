![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)

# TypeGraphQL & Prisma 2 integration

Prisma 2 generator to emit TypeGraphQL types and CRUD resolvers from your Prisma 2 schema

## Installation

Fist of all, you have to install the generator, as a dev dependency:

```sh
npm i -D typegraphql-prisma
```

Furthermore, `typegraphql-prisma` requires Prisma 2 to work properly, so please install Prisma dependencies if you don't have it already installed:

```sh
npm i -D @prisma/cli
npm i @prisma/client
```

> Be aware that `typegraphql-prisma` is designed to work with a selected versions of `prisma`.
>
> Please make sure you use `@prisma/cli` and `@prisma/client` of version matching `~2.13.0`.
> Otherwise, the runtime check will report an error when you run the generator.

You also need to install the GraphQL JSON scalar library (to support the Prisma `Json` scalar):

```sh
npm i graphql-type-json
```

as well as the `graphql-fields` that is used to properly support the aggregations queries:

```sh
npm i graphql-fields @types/graphql-fields
```

Also, be aware that due to usage of some ES2019 and newer Node.js features, you also have to use **Node.js v12.4.0 or newer**.

## Configuration

After installation, you need to update your `schema.prisma` file and then add a new generator section below the `client` one:

```prisma
generator client {
  // ...
}

generator typegraphql {
  provider = "typegraphql-prisma"
}
```

Then after running `npx prisma generate`, this will emit the generated TypeGraphQL classes to `@generated/typegraphql-prisma` in `node_modules` folder.

You can also configure the default output folder, e.g.:

```prisma
generator typegraphql {
  provider = "typegraphql-prisma"
  output   = "../prisma/generated/type-graphql"
}
```

By default, when the output path contains `node_modules`, the generated code is transpiled - consist of `*.js` and `*.d.ts` files that are ready to use (import) in your code.
However, if you explicitly choose some other folder in `output` config, the generated code will be emitted as a raw TS files which you can use and import as your other source code files.

You can overwrite that by explicitly setting `emitTranspiledCode` config option:

```prisma
generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "../prisma/generated/type-graphql"
  emitTranspiledCode = true
}
```

## Usage

Given that you have this part of datamodel definitions:

```prisma
enum PostKind {
  BLOG
  ADVERT
}

model User {
  id    String  @default(cuid()) @id @unique
  email String  @unique
  name  String?
  posts Post[]
}
```

It will generate a `User` class in the output folder, with TypeGraphQL decorators, and an enum - you can import them and use normally as a type or an explicit type in your resolvers:

```ts
export enum PostKind {
  BLOG = "BLOG",
  ADVERT = "ADVERT",
}
TypeGraphQL.registerEnumType(PostKind, {
  name: "PostKind",
  description: undefined,
});

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined,
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined,
  })
  name?: string | null;

  posts?: Post[] | null;
}
```

It will also generates a whole bunch of stuffs based on your `schema.prisma` file - models classes, enums, as well as CRUD resolvers and relations resolver.

CRUD resolvers supports this following methods with args that are 1:1 matching with the `PrismaClient` API:

- create
- update
- delete
- findUnique
- findFirst
- findMany
- updateMany
- deleteMany
- upsert
- aggregate

> By default, the method names will be mapped to a GraphQL idiomatic ones (like `findManyUser` -> `users`).
> You can opt-in to use original names by providing `useOriginalMapping = true` generator option.

The fastest way to expose all Prisma CRUD actions is to import `resolvers` from the output folder:

```ts
import { resolvers } from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers,
  validate: false,
});
```

This will emit all CRUD actions and model relations in the schema.

If you need more control, you can import the `crudResolvers` and `relationResolvers` arrays separately to even transform them:

```ts
import { crudResolvers, relationResolvers } from "@generated/type-graphql";
```

When using the generated resolvers, you have to first provide the `PrismaClient` instance into the context under `prisma` key, to make it available for the crud and relations resolvers:

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema, // from previous step
  playground: true,
  context: (): Context => ({ prisma }),
});
```

### Nest JS

In order to use generated types and resolvers classes in NestJS, you need to use the [official `typegraphql-nestjs` package](https://github.com/MichalLytek/typegraphql-nestjs). This module allows for basic integration of TypeGraphQL with NestJS. You can find an example in the [`examples/4-nest-js` folder](https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/4-nest-js).

Due to difference between TypeGraphQL and NestJS decorators, `typegraphql-prisma` doesn't work anymore with `@nestjs/graphql` from version 7.0.

### Advanced usage

#### Exposing selected models Prisma CRUD actions

If you want to expose only CRUD Prisma actions for selected models, you can import crud resolver classes only for that models, instead of the all-in-one `resolvers` object.

Then you just have to put them into the `buildSchema`:

```ts
import { UserCrudResolver, PostCrudResolver } from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [CustomUserResolver, UserCrudResolver, PostCrudResolver],
  validate: false,
});
```

However, if you also want to have relations like `User -> posts` emitted in schema, you need to import also the relations resolvers and register them in your `buildSchema` call:

```ts
import {
  User,
  UserRelationsResolver,
  UserCrudResolver,
} from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [CustomUserResolver, UserRelationsResolver, UserCrudResolver],
  validate: false,
});
```

#### Exposing selected Prisma actions only

If you want to expose only certain Prisma actions, like `findManyUser` or `createOneUser`, you can import resolver classes only for them, instead of the whole model `XYZCrudResolver`.
Then you just have to put them into the `buildSchema`:

```ts
import {
  User,
  FindManyUserResolver,
  CreateUserResolver,
  UserRelationsResolver,
} from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [
    CustomUserResolver,
    FindManyUserResolver,
    CreateUserResolver,
    UserRelationsResolver,
  ],
  validate: false,
});
```

#### Custom operations

You can also add custom queries and mutations to the schema as always, using the generated `PrismaClient` client:

```ts
@Resolver()
export class CustomUserResolver {
  @Query(returns => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: "bob@prisma.io" },
    });
  }
}
```

#### Additional decorators for Prisma schema resolvers

When you need to apply some decorators like `@Authorized`, `@UseMiddleware` or `@Extensions` on the generated resolvers methods, you don't need to modify the generated source files.

To support this, `typegraphql-prisma` generates two things: `applyResolversEnhanceMap` function and a `ResolversEnhanceMap` type. All you need to do is to create a config object, where you put the decorator functions (without `@`) in an array, and then call that function with that config, eg.:

```ts
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { Authorized } from "type-graphql";

const resolversEnhanceMap: ResolversEnhanceMap = {
  Category: {
    createCategory: [Authorized(Role.ADMIN)],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
```

This way, when you call `createCategory` GraphQL mutation, it will trigger the `type-graphql` `authChecker` function, providing a `Role.ADMIN` role, just like you would put the `@Authorized` on top of the resolver method.

Also, if you have a large schema and you need to provide plenty of decorators, you can split the config definition into multiple smaller objects placed in different files.
To accomplish this, just import the generic `ResolverActionsConfig` type and define the resolvers config separately for every Prisma schema model, e.g:

```ts
import {
  ResolversEnhanceMap,
  ResolverActionsConfig,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { Authorized, Extensions } from "type-graphql";

// define the decorators config using generic ResolverActionsConfig<TModelName> type
const categoryActionsConfig: ResolverActionsConfig<"Category"> = {
  deleteCategory: [
    Authorized(Role.ADMIN),
    Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),
  ],
};
const problemActionsConfig: ResolverActionsConfig<"Problem"> = {
  createProblem: [Authorized()],
};

// join the actions config into a single resolvers enhance object
const resolversEnhanceMap: ResolversEnhanceMap = {
  Category: categoryActionsConfig,
  Problem: problemActionsConfig,
};

// apply the config (it will apply decorators on the resolver class methods)
applyResolversEnhanceMap(resolversEnhanceMap);
```

#### Additional decorators for Prisma schema classes and fields

If you need to apply some decorators, like `@Authorized` or `@Extensions`, on the model `@ObjectType` and its fields, you can use similar pattern as for the resolver actions described above.

All you need to do is to import `ModelsEnhanceMap` type and `applyModelsEnhanceMap` function, and then create a config object, where you put the decorator functions (without `@`) in an array.
If you want to split the config definitions, you can use `ModelConfig` and `ModelFieldsConfig` type in the same way like `ResolverActionsConfig`, e.g.:

```ts
import {
  ResolversEnhanceMap,
  ResolverActionsConfig,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { Authorized, Extensions } from "type-graphql";

// define the decorators configs
const userEnhanceConfig: ModelConfig<"User"> = {
  fields: {
    email: [
      Authorized(Role.ADMIN),
      Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),
    ],
  },
};
const modelsEnhanceMap: ModelsEnhanceMap = {
  User: userEnhanceConfig,
  // or apply it inline
  Recipe: {
    class: [
      // decorators for @ObjectType model class
      Extensions({ logMessage: "Secret recipe", logLevel: LogLevel.INFO }),
    ],
    fields: {
      // decorator for model class fields
      averageRating: [Authorized()],
    },
  },
};

// apply the config (it will apply decorators on the model class and its properties)
applyModelsEnhanceMap(modelsEnhanceMap);
```

This way, you can apply some rules on single model or its fields, like `User.email` visible only for Admin.

In case of other output types like `AggregateFooBar`, you can use the same pattern but this time using the `applyOutputTypeEnhanceMap` function and `OutputTypeConfig` or `OutputTypesEnhanceMap` types:

```ts
const aggregateClientConfig: OutputTypeConfig<"AggregateClient"> = {
  fields: {
    avg: [Extensions({ complexity: 10 })],
  },
};

applyOutputTypeEnhanceMap({
  // separate config
  AggregateClient: aggregateClientConfig,
  // or an inline one
  ClientAvgAggregate: {
    fields: {
      age: [Authorized()],
    },
  },
});
```

#### Adding fields to model type

If you want to add a field to the generated type like `User`, you have to add a proper `@FieldResolver` for that:

```ts
@Resolver(of => User)
export class CustomUserResolver {
  @FieldResolver(type => Post, { nullable: true })
  async favoritePost(
    @Root() user: User,
    @Ctx() { prisma }: Context,
  ): Promise<Post | undefined> {
    const [favoritePost] = await prisma.user
      .findUnique({ where: { id: user.id } })
      .posts({ first: 1 });

    return favoritePost;
  }
}
```

#### Changing exposed model type name

You can also change the name of the model types exposed in GraphQL Schema.
To achieve this, just put the `@@TypeGraphQL.type` doc line above the model definition in `schema.prisma` file, e.g:

```prisma
/// @@TypeGraphQL.type(name: "Client")
model User {
  id     Int     @default(autoincrement()) @id
  email  String  @unique
  posts  Post[]
}
```

Be aware that this feature changes the name everywhere in the schema, so you can import `FindManyClientResolver` (not `FindManyUserResolver`), as well as only `ClientUpdateInput` is available (not `UserUpdateInput`), which means that the GraphQL queries/mutations will also be renamed, e.g.:

```graphql
type Mutation {
  createClient(data: ClientCreateInput!): Client!
}
```

#### Changing exposed model type field name

You can also change the name of the model type fields exposed in GraphQL Schema.
To achieve this, just put the `@TypeGraphQL.field` doc line above the model field definition in `schema.prisma` file, e.g:

```prisma
model User {
  id     Int     @default(autoincrement()) @id
  /// @TypeGraphQL.field(name: "emailAddress")
  email  String  @unique
  posts  Post[]
}
```

This will result in the following GraphQL schema representation:

```graphql
type User {
  id: Int!
  emailAddress: String!
  posts: [Post!]!
}
```

All generated CRUD and relations resolvers fully support this feature and they map under the hood the original prisma property to the renamed field exposed in schema.

The same goes to the resolvers input types - they will also be emitted with changed field name, e.g.:

```graphql
input UserCreateInput {
  emailAddress: String!
  posts: PostCreateManyWithoutAuthorInput
}
```

The emitted input type classes automatically map the provided renamed field values from GraphQL query into proper Prisma input properties out of the box.

#### Hiding Prisma model field in GraphQL schema

Sometimes you may want to not expose some fields in GraphQL schema.
To achieve this, just put the `@TypeGraphQL.omit` doc line above the model field definition in `schema.prisma` file, e.g:

```prisma
model User {
  id        Int     @default(autoincrement()) @id
  email     String  @unique
  /// @TypeGraphQL.omit(output: true)
  password  String
  posts     Post[]
}
```

Thanks to that, the field won't show up in the GraphQL schema representation:

```graphql
type User {
  id: Int!
  email: String!
  posts: [Post!]!
}
```

However, the prisma model field will be still visible in all input types, like `UserWhereInput` or `UserCreateInput`:

```graphql
input UserCreateInput {
  email: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput!
}
```

This behavior is temporary and will be improved soon by introducing `input: true` option to `@TypeGraphQL.omit`.

#### Simple resolvers (performance)

If you don't have any global middlewares and you want to tune the generated schema performance, you can turn on the `simpleResolvers` generator option:

```prisma
generator typegraphql {
  provider        = "typegraphql-prisma"
  simpleResolvers = true
}
```

It will generate then all the output type and model type classes with `simpleResolvers: true` option of `ObjectType` decorator, [which can improve performance of underlying field resolvers](https://typegraphql.com/docs/performance.html#further-performance-tweaks), e.g.:

```ts
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: true,
})
export class BatchPayload {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  count!: number;
}
```

#### Lifting Prisma version restriction

By default, `typegraphql-prisma` generator checks is the installed Prisma version matches the one required one using semver rules.
So when you try to use other version, like just released minor or the `dev` one, you will receive an error about wrong package version.

If you want or need to try other version and you are sure what you're doing, you can use `SKIP_PRISMA_VERSION_CHECK` env variable to suppress that error:

```sh
SKIP_PRISMA_VERSION_CHECK=true npx prisma generate
```

## Examples

You can check out some integration examples on this repo:

https://github.com/MichalLytek/typegraphql-prisma/blob/main/examples/Readme.md

## Feedback

Currently released version `0.x` is just a preview of the upcoming integration. For now it lacks customization option - picking/omitting fields of object types to expose in the schema, as well as picking exposed args fields.

However, the base functionality is working well, so I strongly encourage you to give it a try and play with it. Any feedback about the developers experience, bug reports or ideas about new features or enhancements are very welcome - please feel free to put your two cents into [discussion in the issue](https://github.com/MichalLytek/type-graphql/issues/476).

In near feature, when Prisma SDK will be ready, the `typegraphql-prisma` integration will also allow to use a code-first approach to build a `schema.prisma` and GraphQL schema at once, using classes with decorators as a single source of truth. Stay tuned! :muscle:
