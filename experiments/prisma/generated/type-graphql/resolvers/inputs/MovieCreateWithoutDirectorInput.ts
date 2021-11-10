import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("MovieCreateWithoutDirectorInput", {
  isAbstract: true
})
export class MovieCreateWithoutDirectorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
