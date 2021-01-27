import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUncheckedUpdateInput } from "../../../inputs/CategoryUncheckedUpdateInput";
import { CategoryWhereUniqueInput } from "../../../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryUncheckedUpdateInput, {
    nullable: false
  })
  data!: CategoryUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => CategoryWhereUniqueInput, {
    nullable: false
  })
  where!: CategoryWhereUniqueInput;
}
