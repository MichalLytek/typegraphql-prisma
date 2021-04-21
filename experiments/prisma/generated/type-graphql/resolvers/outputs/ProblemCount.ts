import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ProblemCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likedBy!: number;
}
