import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../client";
import { Director } from "../models/Director";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Movie {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  director?: Director;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;
}
