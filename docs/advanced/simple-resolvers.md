---
title: Simple resolvers (performance)
sidebar_label: Simple resolvers
---

If you don't have any global middlewares and you want to tune the generated schema performance, you can turn on the `simpleResolvers` generator option:

```prisma {3}
generator typegraphql {
  provider        = "typegraphql-prisma"
  simpleResolvers = true
}
```

It will generate then all the output type and model type classes with `simpleResolvers: true` option of `@ObjectType` decorator, [which can improve performance of underlying field resolvers](https://typegraphql.com/docs/performance.html#further-performance-tweaks), e.g.:

```ts {4}
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: true,
})
export class BatchPayload {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined,
  })
  count!: number;
}
```
