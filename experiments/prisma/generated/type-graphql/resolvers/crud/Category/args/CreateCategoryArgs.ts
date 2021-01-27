import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUncheckedCreateInput } from "../../../inputs/CategoryUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryUncheckedCreateInput, {
    nullable: false
  })
  data!: CategoryUncheckedCreateInput;
}
