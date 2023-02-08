---
title: Emit only selected blocks
sidebar_label: Emit selected blocks
---

If you don't want to have generated all the CRUD API with all resolvers, arguments, inputs, outputs, models, etc., you can provide an `emitOnly` generator option, which accepts a string list of values: `enums`, `models`, `crudResolvers`, `relationResolvers`, `inputs` or `outputs`, e.g.:

```prisma {3}
generator typegraphql {
  provider = "typegraphql-prisma"
  emitOnly = "models,inputs"
}
```

This way the generator will emit only the parts that you're interested in, like models and inputs but without outputs or resolvers.

:::note
Be aware that e.g. `models` requires `enums` in order to compile.
So sometimes you will receive more generated items than only those listed in `emitOnly`, especially when it comes to `crudResolvers` that requires almost all the pieces being generated.
:::
