---
title: Prisma version verification
sidebar_label: Prisma version check
sidebar_position: 4
---

## Checking installed Prisma version

`typegraphql-prisma` generator works only with selected versions of Prisma.
By default, it checks if the installed Prisma version matches the required one using semver rules.
So when you try to use other version, like a just published, new minor release (or the `dev` one), you will receive an error about wrong package version, e.g:

```sh
Error: Looks like an incorrect version "3.1.1" of the Prisma packages has been installed.
'typegraphql-prisma' works only with selected versions, so please ensure
that you have installed a version of Prisma that meets the requirement: "~3.0.1".
Find out more about that requirement in docs:
https://prisma.typegraphql.com/docs/basics/prisma-version
```

The reason of such restriction is that `typegraphql-prisma` heavily relies on the DMMF and Prisma generators feature which are not considered a public API, so that there's no guarantee about them having no breaking changes in minor releases.
In plenty of previous releases, changes done in Prisma and DMMF impacted `typegraphql-prisma` a lot, so that the generator have produced e.g. invalid classes or even have broken at all.

So in order to prevent `typegraphql-prisma` users from creating issues on GitHub, when they install the latest version of Prisma, such version check has been implemented and is performed by default. However, when you are sure what you're doing, you can lift the Prisma version restriction and try to use the `typegraphql-prisma` with the newer Prisma version.

## Lifting Prisma version restriction

If you want or need to try other version of Prisma, you can use `SKIP_PRISMA_VERSION_CHECK` env variable to suppress that error:

```sh
$ SKIP_PRISMA_VERSION_CHECK=true npx prisma generate
```

This way there will be no Prisma version check performed and no error thrown. However, using this mode means you are not allowed to report any bug issues as only selected Prisma versions are supported by the `typegraphql-prisma` generator.
