---
title: Adding fields to model type
sidebar_label: Adding model fields
sidebar_position: 4
---

If you want to add a field to the generated type like `User`, you have to add a proper `@FieldResolver` for that:

```ts
@Resolver(of => User)
export class CustomUserResolver {
  @FieldResolver(type => Post, { nullable: true })
  async favoritePost(
    @Root() user: User,
    @Ctx() { prisma }: Context,
  ): Promise<Post | undefined> {
    const [favoritePost] = await prisma.user
      .findUnique({ where: { id: user.id } })
      .posts({ first: 1 });

    return favoritePost;
  }
}
```
