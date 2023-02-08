---
title: Unchecked scalars input
---

GraphQL does not support input unions, hence it's not possible to support both normal inputs and unchecked scalars input at the same time like the Prisma does.

If you prefer simplicity over more sophisticated solutions like `connectOrCreate`, you can to provide the `useUncheckedScalarInputs` generator option:

```prisma {4}
generator typegraphql {
  provider                 = "typegraphql-prisma"
  output                   = "../prisma/generated/type-graphql"
  useUncheckedScalarInputs = true
}
```

This way there will be generate input classes with relation id fields, instead of the normal "nested" inputs for creating/updating relations, e.g.:

```ts
@TypeGraphQL.InputType({
  isAbstract: true,
})
export class PostUncheckedCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  authorId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  editorId?: number | undefined;
}
```
