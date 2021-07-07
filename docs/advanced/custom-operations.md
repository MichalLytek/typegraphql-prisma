---
title: Custom operations
sidebar_position: 5
---

You can also add custom queries and mutations to the schema as always, using the generated `PrismaClient` client:

```ts
@Resolver()
export class CustomUserResolver {
  @Query(returns => User, { nullable: true })
  async bestUser(@Ctx() { prisma }: Context): Promise<User | null> {
    return await prisma.user.findUnique({
      where: { email: "bob@prisma.io" },
    });
  }
}
```
