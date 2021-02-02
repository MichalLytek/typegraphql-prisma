import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../client";
import { Problem } from "../models/Problem";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Creator {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  likes?: Problem[];

  problems?: Problem[];
}
