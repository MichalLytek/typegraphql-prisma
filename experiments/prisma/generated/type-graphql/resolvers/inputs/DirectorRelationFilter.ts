import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { DirectorWhereInput } from "../inputs/DirectorWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorRelationFilter {
  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  is?: DirectorWhereInput | undefined;

  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  isNot?: DirectorWhereInput | undefined;
}
