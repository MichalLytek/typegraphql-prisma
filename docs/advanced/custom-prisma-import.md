---
title: Custom Prisma Client import path
sidebar_label: Prisma import path
---

If you have a complex repository structure, e.g. with multiple Prisma clients generated, you can provide a custom Prisma import path as a generator option:

```prisma {3}
generator typegraphql {
  provider               = "typegraphql-prisma"
  customPrismaImportPath = "../client"
}
```

This will replace the standard, default system of detecting Prisma generator output folder, based on the `node_modules` presence in the Prisma `output` option.

The custom Prisma import path will be used in all generated files, treated as a relative path to the `output` folder of `typegraphql-prisma` generator. This means the paths will be prepended with appropriate `'../'` for files in nested directories, like `resolvers/outputs`.
