import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserCountEditorPostsArgs } from "./args/MainUserCountEditorPostsArgs";
import { MainUserCountPostsArgs } from "./args/MainUserCountPostsArgs";

@TypeGraphQL.ObjectType("MainUserCount", {
  isAbstract: true
})
export class MainUserCount {
  posts!: number;
  editorPosts!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "posts",
    nullable: false
  })
  getPosts(@TypeGraphQL.Root() root: MainUserCount, @TypeGraphQL.Args() args: MainUserCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "editorPosts",
    nullable: false
  })
  getEditorPosts(@TypeGraphQL.Root() root: MainUserCount, @TypeGraphQL.Args() args: MainUserCountEditorPostsArgs): number {
    return root.editorPosts;
  }
}
