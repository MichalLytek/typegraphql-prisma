---
title: Lifting Prisma version restriction
sidebar_label: Prisma version check
sidebar_position: 10
---

By default, `typegraphql-prisma` generator checks is the installed Prisma version matches the one required one using semver rules.
So when you try to use other version, like just released minor or the `dev` one, you will receive an error about wrong package version.

If you want or need to try other version and you are sure what you're doing, you can use `SKIP_PRISMA_VERSION_CHECK` env variable to suppress that error:

```sh
SKIP_PRISMA_VERSION_CHECK=true npx prisma generate
```
