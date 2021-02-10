import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateManyDirectorInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
