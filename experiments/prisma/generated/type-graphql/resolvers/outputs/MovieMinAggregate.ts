import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MovieMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  directorFirstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  directorLastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;
}
