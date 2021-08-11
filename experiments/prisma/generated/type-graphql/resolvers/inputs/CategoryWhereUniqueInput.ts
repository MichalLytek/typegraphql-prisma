import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCategoryCompoundUniqueCompoundUniqueInput } from "../inputs/CategoryCategoryCompoundUniqueCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field(_type => CategoryCategoryCompoundUniqueCompoundUniqueInput, {
    nullable: true
  })
  categoryCompoundUnique?: CategoryCategoryCompoundUniqueCompoundUniqueInput | undefined;
}
