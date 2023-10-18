---
title: Installation
sidebar_position: 1
---

:::info
Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use **Node.js v12.4.0 or newer**.
:::

### TypeGraphQL

First of all, you should perform all the steps described in the TypeGraphQL installation instruction:

https://typegraphql.com/docs/installation.html

### `typegraphql-prisma` generator

After that, you have to install the generator, as a dev dependency:

```sh
npm i -D typegraphql-prisma
```

Furthermore, `typegraphql-prisma` requires Prisma to work properly, so please install Prisma dependencies if you don't have it already installed:

```sh
npm i -D prisma
npm i @prisma/client
```

:::caution
Be aware that `typegraphql-prisma` is designed to work with a selected versions of Prisma.
This generator is designed to work and tested with the features of the `5.0.0` release.

You can update both `prisma` and `@prisma/client` to a newer version, matching `^5.0.0`, like `5.4.2`, in order to receive important bugfixes.
However, make sure you don't use the new features from a newer Prisma version, especially the ones behind a preview flag.

If you encounter a new Prisma feature not supported yet, please check on GitHub issues and create a new issue, if that wasn't already reported, and downgrade the Prisma version, if needed.

:::

### Additional dependencies

You also need to install the GraphQL Scalars library (to support the Prisma `Json`, `BigInt` and `Byte` types):

```sh
npm i graphql-scalars
```

In order to properly support the aggregate and group by queries, the `graphql-fields` package is used, so it also has to be installed:

```sh
npm i graphql-fields @types/graphql-fields
```

Finally, please also install the `tslib` package, which is required for [applying the additional decorators](../advanced/additional-decorators.md) properly:

```sh
npm i tslib
```

### TypeScript configuration

As prisma emits multiple files, make sure you have your tsconfig set properly to `"module": "commonjs"`:

```json {4}
{
  "compilerOptions": {
    "target": "es2018",
    "module": "commonjs",
    "lib": ["es2018", "esnext.asynciterable"],
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true
  }
}
```

Otherwise you may experience runtime errors like `ReferenceError: Cannot access 'BankAccountWhereInput' before initialization`.
It's because those generated files rely on each other, so `commonjs` is needed to handle that cyclic imports.
