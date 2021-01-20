import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateWithoutDirectorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
