---
title: Installation
sidebar_position: 1
---

:::info
Be aware that due to usage of some ES2019 and newer Node.js features, you also have to use **Node.js v12.4.0 or newer**.
:::

### `typegraphql-prisma` generator

First of all, you have to install the generator, as a dev dependency:

```sh
npm i -D typegraphql-prisma
```

Furthermore, `typegraphql-prisma` requires Prisma to work properly, so please install Prisma dependencies if you don't have it already installed:

```sh
npm i -D prisma
npm i @prisma/client
```

:::caution
Be aware that `typegraphql-prisma` is designed to work with a selected versions of `prisma`.

Please make sure you use `prisma` and `@prisma/client` of version matching `~2.27.0`.
Otherwise, the runtime check will report an error when you run the generator.
:::

### Additional dependencies

You also need to install the GraphQL Scalars library (to support the Prisma `Json`, `BigInt` and `Byte` types):

```sh
npm i graphql-scalars
```

as well as the `graphql-fields` that is used to properly support the aggregate and group by queries:

```sh
npm i graphql-fields @types/graphql-fields
```
