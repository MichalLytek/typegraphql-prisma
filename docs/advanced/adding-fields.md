---
title: Adding fields to model type
sidebar_label: Adding model fields
---


### Adding Custom Fields to a Generated Model

By default, `typegraphql-prisma` generates GraphQL types directly from your Prisma schema. However, if you need to add fields to your GraphQL schema that **do not exist in your Prisma database schema**, you can define them as **computed fields**. These fields are dynamically resolved at runtime rather than stored in the database.  

**Because of this, they cannot be used in Prisma queries for filtering or sorting.** Instead, you can use a `@FieldResolver` to compute them on demand.

### Why Use `@FieldResolver`?

`@FieldResolver` allows you to define **computed fields**—fields that are derived from existing data rather than being stored in the database. These fields are useful for:

- Formatting or transforming existing fields  
- Aggregating related data  
- Resolving additional information dynamically  

### Example: Adding a `favoritePost` Field to the `User` Model

Let’s say you want to add a `favoritePost` field to the `User` type, which fetches the user's first post. This field does not exist in the Prisma schema but can be derived dynamically.

Here’s how you can implement it:

```ts
import { Resolver, FieldResolver, Root, Ctx } from "type-graphql";
import { User, Post } from "@generated/type-graphql";
import { Context } from "../context";

@Resolver(of => User)
export class CustomUserResolver {
  @FieldResolver(type => Post, { nullable: true })
  async favoritePost(
    @Root() user: User,
    @Ctx() { prisma }: Context,
  ): Promise<Post | undefined> {
    // Fetch the first post of the user
    const [favoritePost] = await prisma.user
      .findUniqueOrThrow({ where: { id: user.id } })
      .posts({ take: 1 });

    return favoritePost;
  }
}
