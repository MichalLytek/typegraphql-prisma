import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
