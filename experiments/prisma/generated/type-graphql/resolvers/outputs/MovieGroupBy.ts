import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieCountAggregate } from "../outputs/MovieCountAggregate";
import { MovieMaxAggregate } from "../outputs/MovieMaxAggregate";
import { MovieMinAggregate } from "../outputs/MovieMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MovieGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => MovieCountAggregate, {
    nullable: true
  })
  count?: MovieCountAggregate | null;

  @TypeGraphQL.Field(_type => MovieMinAggregate, {
    nullable: true
  })
  min?: MovieMinAggregate | null;

  @TypeGraphQL.Field(_type => MovieMaxAggregate, {
    nullable: true
  })
  max?: MovieMaxAggregate | null;
}
