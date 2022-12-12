---
title: Emit ID fields with type
sidebar_label: Emit ID type
sidebar_position: 12
---

By default, TypeGraphQL Prisma generator emits GraphQL types for fields with the underlying data types, like `Int` or `String` scalars.

However, in some cases like when using GraphQL Relay, you may want to emit the `ID` GraphQL scalar type for those fields.
To accomplish this, use the `emitIdAsIDType` generator option:

```prisma {3}
generator typegraphql {
  provider       = "typegraphql-prisma"
  emitIdAsIDType = true
}
```

It will generate then the id fields using the `TypeGraphQL.ID` GraphQL scalar, e.g.:

```ts {5}
@TypeGraphQL.ObjectType("Post", {
  isAbstract: true,
})
export class Post {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false,
  })
  uuid!: string;

  // ...
}
```
