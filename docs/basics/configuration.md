---
title: Configuration
sidebar_position: 2
---

## Creating generator block

After installation, you need to update your `schema.prisma` file and then add a new generator section below the `client` one:

```prisma {10-12}
datasource postgres {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

generator typegraphql {
  provider = "typegraphql-prisma"
}
```

Then run `npx prisma generate` - this will emit the generated TypeGraphQL classes to the `@generated/type-graphql` folder inside `node_modules`.

## Changing output folder

When you want to emit the generated files into a different folder, you can configure the default output folder via the `output` config option, e.g.:

```prisma {3}
generator typegraphql {
  provider = "typegraphql-prisma"
  output   = "../prisma/generated/type-graphql"
}
```

## Emitting transpiled code

By default, when the output path contains `node_modules`, the generated code is transpiled - consist of `*.js` and `*.d.ts` files that are ready to use (import) in your code.

However, if you explicitly choose some other (non `node_modules`) folder in `output` config, the generated code will be emitted as a raw TS source code files which you can just use and import like your other source code files.

You can overwrite that behavior by explicitly setting `emitTranspiledCode` config option:

```prisma {4}
generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "../prisma/generated/type-graphql"
  emitTranspiledCode = true
}
```

## Emitting ID

By default, the system generate the next schema `id:BigInt!` based on your schema.prisma `
model Person {
  id  BigInt    @id
}
`. You can overwrite that behavior by explicitly setting `emitIdAsIDType` config option:

```prisma {4}
generator typegraphql {
  provider           = "typegraphql-prisma"
  emitIdAsIDType     = true
}
```
As a result, you will get `id:ID!` graphql schema for the same schema.prisma
