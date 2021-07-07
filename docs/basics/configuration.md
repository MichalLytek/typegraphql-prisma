---
title: Configuration
sidebar_position: 2
---

After installation, you need to update your `schema.prisma` file and then add a new generator section below the `client` one:

```prisma
generator client {
  // ...
}

generator typegraphql {
  provider = "typegraphql-prisma"
}
```

Then after running `npx prisma generate`, this will emit the generated TypeGraphQL classes to `@generated/typegraphql-prisma` in `node_modules` folder.

You can also configure the default output folder, e.g.:

```prisma
generator typegraphql {
  provider = "typegraphql-prisma"
  output   = "../prisma/generated/type-graphql"
}
```

By default, when the output path contains `node_modules`, the generated code is transpiled - consist of `*.js` and `*.d.ts` files that are ready to use (import) in your code.
However, if you explicitly choose some other folder in `output` config, the generated code will be emitted as a raw TS files which you can use and import as your other source code files.

You can overwrite that by explicitly setting `emitTranspiledCode` config option:

```prisma
generator typegraphql {
  provider           = "typegraphql-prisma"
  output             = "../prisma/generated/type-graphql"
  emitTranspiledCode = true
}
```
