import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUncheckedCreateInput } from "../../../inputs/CategoryUncheckedCreateInput";
import { CategoryUncheckedUpdateInput } from "../../../inputs/CategoryUncheckedUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field(_type => CategoryUncheckedCreateInput, {
    nullable: false
  })
  create!: CategoryUncheckedCreateInput;

  @TypeGraphQL.Field(_type => CategoryUncheckedUpdateInput, {
    nullable: false
  })
  update!: CategoryUncheckedUpdateInput;
}
