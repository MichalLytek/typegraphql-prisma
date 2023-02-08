---
title: Overriding generated @ObjectType decorator for model
sidebar_label: Overriding object decorator
---

By default, `typegraphql-prisma` generator emits TypeGraphQL classes for models with all the decorators applied.
Due to the nature of TypeGraphQL, we can't just easily override or replace the applied decorators, so we have to use a workaround.

First, we need to omit registering the type class by TypeGraphQL, using the `@@TypeGraphQL.omit(output: true)` directive, e.g:

```prisma {1}
/// @@TypeGraphQL.omit(output: true)
model User {
  id     Int     @default(autoincrement()) @id
  email  String  @unique
}
```

This way the generated class won't have the `@TypeGraphQL@ObjectType()` decorator applied:

```ts
export class User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  email!: string;
}
```

So, we can register our own version of the decorator using [`applyModelsEnhanceMap` feature](./additional-decorators.md#additional-decorators-for-prisma-schema-classes-and-fields):

```ts
applyModelsEnhanceMap({
  User: {
    class: [
      ObjectType({
        description: "Generated omitted type with custom description",
      }),
    ],
  },
});
```

:::caution
Be aware that using `omit` without `applyModelsEnhanceMap` might result in a runtime error, because the generated class won't have any decorators applied while still being referenced in resolvers as output type.
:::

If we run the GraphQL server with such adjustments, we will get the following output in generated schema file:

```graphql
"""
Generated omitted type with custom description
"""
type User {
  id: ID!
  email: String!
}
```
