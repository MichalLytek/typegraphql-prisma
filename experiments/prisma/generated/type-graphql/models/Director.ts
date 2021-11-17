import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Movie } from "../models/Movie";
import { DirectorCount } from "../resolvers/outputs/DirectorCount";

@TypeGraphQL.ObjectType("Director", {
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

  movies?: Movie[];

  @TypeGraphQL.Field(_type => DirectorCount, {
    nullable: false
  })
  _count!: DirectorCount;
}
