import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../client";
import { Movie } from "../models/Movie";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Director {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  movies?: Movie[] | null;
}
