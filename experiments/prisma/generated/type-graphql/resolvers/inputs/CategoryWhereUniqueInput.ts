import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CategorySlugNumberCompoundUniqueInput } from "../inputs/CategorySlugNumberCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => CategorySlugNumberCompoundUniqueInput, {
    nullable: true
  })
  slug_number?: CategorySlugNumberCompoundUniqueInput | undefined;
}
