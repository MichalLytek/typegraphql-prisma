---
title: Custom Mapping function
sidebar_label: Mapping function
sidebar_position: 13
---

By default, `typegraphql-prisma` uses a mapper which will camelCase and
pluralize your methods, however, in cases where there is no plural, it will be
mapped with `findUnique*` and `findMany*` which may not always be desirable.

In cases where you would like to customize the original mapping, you can
customize it by specifying a file that exports a function to the
`customMappingFn`.

```prisma {3}
generator typegraphql {
  provider         = "typegraphql-prisma"
  customMappingFn  = "./customMappingFn.js"
}
```

```typescript
import { GeneratorOptions } from "@prisma/generator-helper";
import { DMMF } from "typegraphql-prisma/generator/types";
import { camelCase } from "typegraphql-prisma/generator/helpers";
import pluralize from "pluralize";

export default function getMappedActionName(
  actionName: DMMF.ModelAction,
  typeName: string,
  options: GeneratorOptions,
) : string {
  const defaultMappedActionName = `${actionName}${typeName}`;
  const hasNoPlural = typeName === pluralize(typeName);

  switch (actionName) {
    case "findUnique": {
      return camelCase(typeName);
    }
    case "findMany": {
      return hasNoPlural ? camelCase(typeName) + "_" : pluralize(camelCase(typeName));
    }
    default: {
      return defaultMappedActionName;
    }
  }
}
```
