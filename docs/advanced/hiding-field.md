---
title: Hiding Prisma model field in GraphQL schema
sidebar_label: Hiding model fields
---

Sometimes you may want to not expose some fields in GraphQL schema.
To achieve this, just put the `@TypeGraphQL.omit` doc line above the model field definition in `schema.prisma` file, e.g:

```prisma {4}
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

```graphql {3}
input UserCreateInput {
  email: String!
  password: String!
  posts: PostCreateManyWithoutAuthorInput!
}
```

In order to hide the input fields as well, you need to provide the `input: true` option to `@TypeGraphQL.omit`:

```prisma {4}
model User {
  id        Int     @default(autoincrement()) @id
  email     String  @unique
  /// @TypeGraphQL.omit(output: true, input: true)
  password  String
  posts     Post[]
}
```

So that the field won't show anymore in all model-related input types, like `UserCreateInput`:

```graphql
input UserCreateInput {
  email: String!
  posts: PostCreateManyWithoutAuthorInput!
}
```

If you need more control over hiding field in input types, you can select input kinds by passing an array:

```prisma {4}
model User {
  id        Int     @default(autoincrement()) @id
  email     String  @unique
  /// @TypeGraphQL.omit(input: ["update", "where", "orderBy"])
  password  String
  posts     Post[]
}
```

The available options are: `"create"`,`"update"`, `"where"` and `"orderBy"`.
