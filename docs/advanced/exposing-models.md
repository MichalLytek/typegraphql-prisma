---
title: Exposing selected models Prisma CRUD actions
sidebar_label: Exposing selected models
---

If you want to expose only CRUD Prisma actions for selected models, you can import crud resolver classes only for that models, instead of the all-in-one `resolvers` object.

Then you just have to put them into the `buildSchema`:

```ts {1,4}
import { UserCrudResolver, PostCrudResolver } from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [CustomUserResolver, UserCrudResolver, PostCrudResolver],
  validate: false,
});
```

However, if you also want to have relations like `User -> posts` emitted in schema, you need to import also the relations resolvers and register them in your `buildSchema` call:

```ts {3,8}
import {
  User,
  UserRelationsResolver,
  UserCrudResolver,
} from "@generated/type-graphql";

const schema = await buildSchema({
  resolvers: [CustomUserResolver, UserRelationsResolver, UserCrudResolver],
  validate: false,
});
```
