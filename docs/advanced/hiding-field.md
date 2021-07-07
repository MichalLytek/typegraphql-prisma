---
title: Hiding Prisma model field in GraphQL schema
sidebar_label: Hiding field
sidebar_position: 3
---

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
