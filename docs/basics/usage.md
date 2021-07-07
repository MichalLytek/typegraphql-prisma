---
title: Usage
sidebar_position: 3
---

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
