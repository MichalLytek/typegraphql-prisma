---
title: Exposing selected Prisma actions only
sidebar_label: Exposing selected actions
sidebar_position: 2
---

If you want to expose only certain Prisma actions, like `findManyUser` or `createOneUser`, you can import resolver classes only for them, instead of the whole model `XYZCrudResolver`.
Then you just have to put them into the `buildSchema`:

```ts {3-5,11-13}
import {
  User,
  FindManyUserResolver,
  CreateUserResolver,
  UserRelationsResolver,
} from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [
    CustomUserResolver,
    FindManyUserResolver,
    CreateUserResolver,
    UserRelationsResolver,
  ],
  validate: false,
});
```
