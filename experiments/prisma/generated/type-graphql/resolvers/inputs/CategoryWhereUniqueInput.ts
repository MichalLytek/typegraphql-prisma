import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CategorySlugNumberCompoundUniqueInput } from "../inputs/CategorySlugNumberCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => CategorySlugNumberCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  slug_number?: CategorySlugNumberCompoundUniqueInput | undefined;
}
