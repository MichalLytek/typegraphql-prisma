---
title: Usage
sidebar_position: 3
---

Having installed all the deps and configured the Prisma generator, let's see the capabilities of `typegraphql-prisma`.

## Showcase

Let's assume you have this statements in your Prisma schema:

```prisma title=prisma/schema.prisma
enum UserKind {
  NORMAL
  ADMIN
}

model User {
  id    String  @default(cuid()) @id @unique
  email String  @unique
  age   Int?
  kind  UserKind
}
```

It will generate a `User` class (with TypeGraphQL decorators) in the output folder and an enum:

```ts title=generated/type-graphql/enums/UserKind.ts
export enum UserKind {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN",
}
TypeGraphQL.registerEnumType(UserKind, {
  name: "UserKind",
  description: undefined,
});
```

```ts title=generated/type-graphql/models/User.ts
@TypeGraphQL.ObjectType({
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

  @TypeGraphQL.Field(_type => Int, {
    nullable: true,
    description: undefined,
  })
  age?: number | null;

  @TypeGraphQL.Field(_type => UserKind, {
    nullable: false,
    description: undefined,
  })
  kind!: UserKind;
}
```

You can import them and use normally as a type or an explicit type in your resolvers, e.g:

```ts title=src/custom-resolver.ts
import {
  User,
  UserWhereUniqueInput,
  UserKind,
} from "../generated/type-graphql";

@Resolver()
class CustomUserResolver {
  @Mutation(() => User)
  changeUserKind(
    @Arg("where") where: UserWhereUniqueInput,
    @Arg("kind") kind: UserKind,
  ) {
    log.info("Changing user kind", { where, kind });
    return prisma.user.update({ where, data: { kind } });
  }
}
```

However, it will also generates a whole bunch of stuffs based on your `schema.prisma` file - not only models classes and enums but also input types, arguments, CRUD resolvers and relations resolver.

:::note Main concept

The design goal of TypeGraphQL Prisma integration is to generate all the building blocks that you can then use to quickly build your domain logic using custom resolvers.

However, it can also generate some resolvers which might be handy especially on the prototyping phase or on the early stage, when the customization options are not limiting yet.

:::

## CRUD resolvers

`typegraphql-prisma` generator also can emit CRUD resolvers. The API is almost 1:1 matching with the `PrismaClient` API and supports this following methods with their args:

- findUnique
- findFirst
- findMany
- create
- createMany
- update
- updateMany
- delete
- deleteMany
- upsert
- aggregate
- groupBy

An example of a crud resolver file content:

```ts title=generated/type-graphql/resolvers/crud/User/UserCrudResolver.ts
@TypeGraphQL.Resolver(_of => User)
export class UserCrudResolver {
  @TypeGraphQL.Query(_returns => [User], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs,
  ): Promise<User[]> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false,
  })
  async createUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateUserArgs,
  ): Promise<User> {
    const { _count } = transformFields(graphqlFields(info as any));
    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  // more methods goes here...
}
```

:::info
By default, the method names will be mapped to a GraphQL idiomatic ones (like `findManyUser` -> `users`).

You can opt-in to use original names by providing `useOriginalMapping = true` generator option.
:::

## Relations resolvers

TypeGraphQL Prisma integration also generates resolvers that are resolving the relations between Prisma models.
Thanks to that, you don't need to write any field resolvers by yourself in order to register relation fields in GraphQL schema.

```ts title=generated/type-graphql/resolvers/relations/User/UserRelationsResolver.ts
@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserPostsArgs,
  ): Promise<Post[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id,
        },
      })
      .posts(args);
  }
}
```

The generated relation resolvers also supports providing arguments that allows you to filter, sort and paginate over the relation list items.

## Bootstrapping

The fastest way to expose all Prisma CRUD actions is to import `resolvers` from the output folder and just use it in the `buildSchema` function known from TypeGraphQL:

```ts {1,4}
import { resolvers } from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers,
  validate: false,
});
```

With this approach you will emit all CRUD actions and model relations in the schema.

If you need more control, you can import the `crudResolvers` and `relationResolvers` arrays separately:

```ts
import { crudResolvers, relationResolvers } from "@generated/type-graphql";
```

to even transform them dynamically (e.g. excluding all with `User` in name).

## Context configuration

When using the generated resolvers, you have to first provide the `PrismaClient` instance into the context under `prisma` key, to make it available for the crud and relations resolvers.

Below you can find an example using Apollo Server V4:

```ts {5,11}
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const prisma = new PrismaClient();

const server = new ApolloServer<MyContext>({
  schema, // from previous step
});
const { url } = await startStandaloneServer(server, {
  context: () => ({ prisma }),
  listen: { port: 4000 },
});
```

But you can also use any other GraphQL server library, like `graphql-yoga` v3:

```ts {3,7}
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const yoga = createYoga<{}, MyContext>({
  schema, // from previous step
  context: () => ({ prisma }),
});
```
