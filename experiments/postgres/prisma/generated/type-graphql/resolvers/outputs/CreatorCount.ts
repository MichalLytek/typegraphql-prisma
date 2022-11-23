import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCountLikesArgs } from "./args/CreatorCountLikesArgs";
import { CreatorCountProblemsArgs } from "./args/CreatorCountProblemsArgs";

@TypeGraphQL.ObjectType("CreatorCount", {
  isAbstract: true
})
export class CreatorCount {
  likes!: number;
  problems!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "likes",
    nullable: false
  })
  getLikes(@TypeGraphQL.Root() root: CreatorCount, @TypeGraphQL.Args() args: CreatorCountLikesArgs): number {
    return root.likes;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "problems",
    nullable: false
  })
  getProblems(@TypeGraphQL.Root() root: CreatorCount, @TypeGraphQL.Args() args: CreatorCountProblemsArgs): number {
    return root.problems;
  }
}
