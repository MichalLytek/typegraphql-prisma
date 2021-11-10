import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Problem } from "../models/Problem";
import { CreatorCount } from "../resolvers/outputs/CreatorCount";

@TypeGraphQL.ObjectType("Creator", {
  isAbstract: true
})
export class Creator {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  likes?: Problem[];

  problems?: Problem[];

  @TypeGraphQL.Field(_type => CreatorCount, {
    nullable: true
  })
  _count?: CreatorCount | null;
}
