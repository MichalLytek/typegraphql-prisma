import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
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
