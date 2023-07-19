---
title: Hiding Prisma model field in GraphQL schema
sidebar_label: Hiding model fields
---

## Hiding field in output types

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

## Hiding field in input types

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

### Hiding field in specific input types

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

## Omit fields by default

In some cases, it might become repetitive to add `@TypeGraphQL.omit` to every field you want to hide.
That's why you can set in generator options to omit selected fields by default.

Basically, there are two options you can set in - `omitInputFieldsByDefault` and `omitOutputFieldsByDefault`.
They both accept an array of field names:

```prisma {3,4}
generator typegraphql {
  provider                  = "typegraphql-prisma"
  omitInputFieldsByDefault  = ["createdAt", "updatedAt"]
  omitOutputFieldsByDefault = ["password"]
}
```

The list is then used to compare against each model to find matching fields and apply the default omit settings to hide those fields.

Unfortunately, the Prisma parser for generator options is very limited and doesn't support complex objects, so for now the functionality is limited just to boolean-like behavior, with no options for granular control like `input: ["update", "where", "orderBy"]`.

### Overriding default omit settings

However, if you want to override the global default omit setting, you can just pass `false` to the `@TypeGraphQL.omit`, e.g.:

```prisma {4}
model User {
  id        Int     @default(autoincrement()) @id
  email     String  @unique
  /// @TypeGraphQL.omit(output: false)
  password  String
  posts     Post[]
}
```

This way, the field will be still emitted in the GraphQL output type, even if the `omitOutputFieldsByDefault` was set to `"password"`.
