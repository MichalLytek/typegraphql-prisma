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

You can override that behavior by explicitly setting `emitTranspiledCode` config option:

```prisma {4}
generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "../prisma/generated/type-graphql"
  emitTranspiledCode = true
}
```

## Formatting generated code

By default, the generated code is formatted by TypeScript compiler while emitting.

However, if you prefer some other code style, you can provide `formatGeneratedCode` generator option to format the codebase with [Prettier](https://prettier.io/):

```prisma {4}
generator typegraphql {
  provider            = "typegraphql-prisma"
  output              = "../prisma/generated/type-graphql"
  formatGeneratedCode = "prettier"
}
```

Prettier will look for the configuration file in your project tree and use it to format the generated code. If no config file detected, default settings will be applied.

:::caution
Be aware that formatting code by Prettier has a quite huge impact on the generation time, so use it with caution.
:::

If you git-ignore the generated files or you don't want to read the generated source code, you can ignore the generated code style and disable the formatting at all - by providing `false` value to `formatGeneratedCode` generator option:

```prisma {4}
generator typegraphql {
  provider            = "typegraphql-prisma"
  output              = "../prisma/generated/type-graphql"
  formatGeneratedCode = false
}
```

This way you can save even up to 33% of the generation process time.

:::info
When the generator is configured to emit transpiled code, the generated JS code is always formatted by TypeScript compiler and you can't change it to Prettier or disable the formatting by the `formatGeneratedCode` option.
:::
