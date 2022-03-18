import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieCreateManyDirectorInput", {
  isAbstract: true
})
export class MovieCreateManyDirectorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
