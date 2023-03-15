---
title: Emit redundant types info
sidebar_label: Redundant types
---

By default, `typegraphql-prisma` tries to minimize the generated LOC by omitting the redundant types info.

However, if you need to have all the types info generated, you can use the `emitRedundantTypesInfo` generator option:

```prisma {3}
generator typegraphql {
  provider               = "typegraphql-prisma"
  emitRedundantTypesInfo = true
}
```

By using this option, the generated code will have all the types info emitted in a form of decorator payload (`@Args(_type => AggregateCategoryArgs)`), even if it's redundant and not necessary.

However, thanks to this, you can use any other compiler that does not supports type metadata, like `esbuild`, so you're not limited to using standard Typescript compiler with `emitDecoratorMetadata` option enabled.
