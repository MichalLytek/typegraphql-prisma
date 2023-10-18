import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostCountCommentsArgs } from "./args/PostCountCommentsArgs";

@TypeGraphQL.ObjectType("PostCount", {})
export class PostCount {
  comments!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "comments",
    nullable: false
  })
  getComments(@TypeGraphQL.Root() root: PostCount, @TypeGraphQL.Args() args: PostCountCommentsArgs): number {
    return root.comments;
  }
}
