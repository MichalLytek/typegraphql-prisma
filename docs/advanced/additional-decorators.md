---
title: Additional decorators for CRUD resolvers and Prisma classes and fields
sidebar_label: Applying decorators
sidebar_position: 10
---

#### Additional decorators for Prisma schema resolvers

When you need to apply some decorators like `@Authorized`, `@UseMiddleware` or `@Extensions` on the generated resolvers methods, you don't need to modify the generated source files.

To support this, `typegraphql-prisma` generates two things: `applyResolversEnhanceMap` function and a `ResolversEnhanceMap` type. All you need to do is to create a config object, where you put the decorator functions (without `@`) in an array, and then call that function with that config, eg.:

```ts
import {
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { Authorized } from "type-graphql";

const resolversEnhanceMap: ResolversEnhanceMap = {
  Category: {
    createCategory: [Authorized(Role.ADMIN)],
  },
};

applyResolversEnhanceMap(resolversEnhanceMap);
```

This way, when you call `createCategory` GraphQL mutation, it will trigger the `type-graphql` `authChecker` function, providing a `Role.ADMIN` role, just like you would put the `@Authorized` on top of the resolver method.

Also, if you have a large schema and you need to provide plenty of decorators, you can split the config definition into multiple smaller objects placed in different files.
To accomplish this, just import the generic `ResolverActionsConfig` type and define the resolvers config separately for every Prisma schema model, e.g:

```ts
import {
  ResolversEnhanceMap,
  ResolverActionsConfig,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { Authorized, Extensions } from "type-graphql";

// define the decorators config using generic ResolverActionsConfig<TModelName> type
const categoryActionsConfig: ResolverActionsConfig<"Category"> = {
  deleteCategory: [
    Authorized(Role.ADMIN),
    Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),
  ],
};
const problemActionsConfig: ResolverActionsConfig<"Problem"> = {
  createProblem: [Authorized()],
};

// join the actions config into a single resolvers enhance object
const resolversEnhanceMap: ResolversEnhanceMap = {
  Category: categoryActionsConfig,
  Problem: problemActionsConfig,
};

// apply the config (it will apply decorators on the resolver class methods)
applyResolversEnhanceMap(resolversEnhanceMap);
```

If you want to apply some decorators on all the methods of a model CRUD resolver, you can use the special `_all` property to achieve that:

```ts
applyResolversEnhanceMap({
  Client: {
    _all: [Authorized()],
  },
});
```

#### Additional decorators for Prisma schema classes and fields

If you need to apply some decorators, like `@Authorized` or `@Extensions`, on the model `@ObjectType` and its fields, you can use similar pattern as for the resolver actions described above.

All you need to do is to import `ModelsEnhanceMap` type and `applyModelsEnhanceMap` function, and then create a config object, where you put the decorator functions (without `@`) in an array.
If you want to split the config definitions, you can use `ModelConfig` type in the same way like `ResolverActionsConfig`, e.g.:

```ts
import {
  ModelsEnhanceMap,
  ModelConfig,
  applyModelsEnhanceMap,
} from "@generated/type-graphql";
import { Authorized, Extensions } from "type-graphql";

// define the decorators configs
const userEnhanceConfig: ModelConfig<"User"> = {
  fields: {
    email: [
      Authorized(Role.ADMIN),
      Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),
    ],
  },
};
const modelsEnhanceMap: ModelsEnhanceMap = {
  User: userEnhanceConfig,
  // or apply it inline
  Recipe: {
    class: [
      // decorators for @ObjectType model class
      Extensions({ logMessage: "Secret recipe", logLevel: LogLevel.INFO }),
    ],
    fields: {
      // decorator for model class fields
      averageRating: [Authorized()],
    },
  },
};

// apply the config (it will apply decorators on the model class and its properties)
applyModelsEnhanceMap(modelsEnhanceMap);
```

This way, you can apply some rules on single model or its fields, like `User.email` visible only for Admin.

If you want to apply some decorators on all the fields of a model, you can use the special `_all` property to achieve that:

```ts
applyModelsEnhanceMap({
  User: {
    fields: {
      // all fields are protected against unauthorized access
      _all: [Authorized()],
      // this field  has additional decorators to apply
      password: [
        Extensions({ logMessage: "Danger zone", logLevel: LogLevel.WARN }),
      ],
    },
  },
});
```

If you want to apply decorator to model's relation field, you need to use the `applyRelationResolversEnhanceMap` function and `RelationResolverActionsConfig<TModel>` type if you need to separate the configs. In order to apply some decorators on all the fields of a model, you can use the special `_all` property to achieve that:

```ts
const clientRelationEnhanceConfig: RelationResolverActionsConfig<"Client"> = {
  posts: [
    UseMiddleware((_data, next) => {
      console.log("Client.posts relation field accessed");
      return next();
    }),
  ],
};

applyRelationResolversEnhanceMap({
  Client: clientRelationEnhanceConfig,
  Product: {
    fields: {
      // all fields are protected against unauthorized access
      _all: [Authorized()],
    },
  },
});
```

In case of other output types like `AggregateFooBar`, you can use the same pattern but this time using the `applyOutputTypesEnhanceMap` function and `OutputTypeConfig` or `OutputTypesEnhanceMap` types:

```ts
const aggregateClientConfig: OutputTypeConfig<"AggregateClient"> = {
  fields: {
    avg: [Extensions({ complexity: 10 })],
  },
};

applyOutputTypesEnhanceMap({
  // separate config
  AggregateClient: aggregateClientConfig,
  // or an inline one
  ClientAvgAggregate: {
    fields: {
      _all: [Extensions({ complexity: 10 })],
      age: [Authorized()],
    },
  },
});
```

If you want to add decorators for input types or args classes, you can leverage `applyArgsTypesEnhanceMap` and `applyInputTypesEnhanceMap` functions and use `ArgsTypesEnhanceMap`, `ArgConfig<TArgsType>`, `InputTypesEnhanceMap`, `InputTypeConfig<TInput>` types if you want to split the definitions. The special `_all` property also can apply the decorators to all the fields:

```ts
applyArgsTypesEnhanceMap({
  CreateProblemArgs: {
    fields: {
      data: [ValidateNested()],
    },
  },
});

applyInputTypesEnhanceMap({
  ProblemCreateInput: {
    fields: {
      _all: [Allow()],
      problemText: [MinLength(10)],
    },
  },
});
```

Be aware that in case of `class-validator` you need to add `@ValidateNested` decorator to the args classes to trigger validation of the proper input types.
