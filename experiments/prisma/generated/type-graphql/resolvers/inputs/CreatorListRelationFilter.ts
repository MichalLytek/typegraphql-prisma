import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorListRelationFilter {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  every?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  some?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  none?: CreatorWhereInput | undefined;
}
