---
title: Changing exposed model type name
sidebar_label: Renaming model
sidebar_position: 6
---

You can also change the name of the model types exposed in GraphQL Schema.
To achieve this, just put the `@@TypeGraphQL.type` doc line above the model definition in `schema.prisma` file, e.g:

```prisma {1}
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
