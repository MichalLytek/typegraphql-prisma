---
title: Introduction
sidebar_position: 1
---

# Introduction

Let's discover **TypeGraphQL Prisma in less than 3 minutes**.

## What it is?

The [`typegraphql-prisma` package](https://www.npmjs.com/package/typegraphql-prisma) provides a [TypeGraphQL](https://typegraphql.com) integration with Prisma.

It generates the type classes and CRUD resolvers based on the Prisma schema, so you can execute complex queries or mutations that corresponds to the Prisma actions, without having to write any code for that.

## Getting Started

To make use of the prisma integration, first you need to add a new generator to the `schema.prisma` file:

```prisma
generator typegraphql {
  provider = "typegraphql-prisma"
}
```

Then, after running `prisma generate` you can import the generated resolvers classes and use them to build your GraphQL schema:

```typescript
import { resolvers } from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers,
  validate: false,
});
```

When you expose that schema over the HTTP, following the [bootstrap guide](https://typegraphql.com/docs/bootstrap.html#create-an-http-graphql-endpoint), you will be able to execute a complex query, that talks with the real database, in just a few minutes!

```graphql
query GetSomeUsers {
  users(where: { email: { contains: "prisma" } }, orderBy: { name: desc }) {
    id
    name
    email
    posts(take: 10, orderBy: { updatedAt: desc }) {
      published
      title
      content
    }
  }
}
```

Sounds really easy and quick to setup, doesn't it? 😉
