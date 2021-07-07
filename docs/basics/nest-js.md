---
title: Nest JS
sidebar_position: 4
---

In order to use generated types and resolvers classes in NestJS, you need to use the [official `typegraphql-nestjs` package](https://github.com/MichalLytek/typegraphql-nestjs). This module allows for basic integration of TypeGraphQL with NestJS. You can find an example in the [`examples/4-nest-js` folder](https://github.com/MichalLytek/typegraphql-prisma/tree/main/examples/4-nest-js).

Due to difference between TypeGraphQL and NestJS decorators, `typegraphql-prisma` doesn't work anymore with `@nestjs/graphql` from version 7.0.
