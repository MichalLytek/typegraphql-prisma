---
title: Custom Prisma Client context key
sidebar_label: Prisma context key
sidebar_position: 14
---

By default, `typegraphql-prisma` looks in runtime for Prisma Client in the GraphQL context under the `prisma` key.

However, in some cases like when you have multiple Prisma clients generated, you can provide a generator option to set the custom key for context object, where the Prisma Client can be found:

```prisma {3}
generator typegraphql {
  provider         = "typegraphql-prisma"
  contextPrismaKey = "customPrisma"
}
```

By using this option, all the generated resolvers will try to use the Prisma Client from `context["customPrisma"]` instead of the standard `context.prisma`.
