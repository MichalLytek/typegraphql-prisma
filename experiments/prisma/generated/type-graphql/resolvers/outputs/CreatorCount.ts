import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class CreatorCount {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  likes!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  problems!: number;
}
