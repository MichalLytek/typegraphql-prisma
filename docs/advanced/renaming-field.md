---
title: Changing exposed model type field name
sidebar_label: Renaming field
sidebar_position: 7
---

You can also change the name of the model type fields exposed in GraphQL Schema.
To achieve this, just put the `@TypeGraphQL.field` doc line above the model field definition in `schema.prisma` file, e.g:

```prisma {3}
model User {
  id     Int     @default(autoincrement()) @id
  /// @TypeGraphQL.field(name: "emailAddress")
  email  String  @unique
  posts  Post[]
}
```

This will result in the following GraphQL schema representation:

```graphql {3}
type User {
  id: Int!
  emailAddress: String!
  posts: [Post!]!
}
```

All generated CRUD and relations resolvers fully support this feature and they map under the hood the original prisma property to the renamed field exposed in schema.

The same goes to the resolvers input types - they will also be emitted with changed field name, e.g.:

```graphql {2}
input UserCreateInput {
  emailAddress: String!
  posts: PostCreateManyWithoutAuthorInput
}
```

The emitted input type classes automatically map the provided renamed field values from GraphQL query into proper Prisma input properties out of the box.
