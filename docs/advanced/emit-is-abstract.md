---
title: Emit `isAbstract` decorator option
sidebar_label: Emit isAbstract
---

By default, TypeGraphQL Prisma generator aims to work with newest release of TypeGraphQL.
However, for backward compatibility reasons, there are some config options introduced.

One of such options is `emitIsAbstract` generator option:

```prisma {3}
generator typegraphql {
  provider       = "typegraphql-prisma"
  emitIsAbstract = true
}
```

When this option is set to true, it generates `isAbstract: true` decorator option for `@ObjectType` (models, outputs) and `@InputType` classes:

```ts {2}
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

This decorator option prevents from emitting those types in GraphQL schema if they are not referenced directly in the other types consumed by resolvers.
It only matters if you use the resolvers auto discovery feature (e.g. `resolvers: ["./src/**/*.resolver.ts"]`), that was supported in TypeGraphQL up to the `v2.0.0-beta.1` and removed in newer releases.

Hence this option is set to `false` by default, so if you still using some old version of TypeGraphQL together with resolvers auto discovery feature, you need to enable `emitIsAbstract = true` in your Prisma schema.
