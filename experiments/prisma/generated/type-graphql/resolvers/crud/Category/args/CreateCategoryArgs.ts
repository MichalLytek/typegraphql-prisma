import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CategoryCreateInput } from "../../../inputs/CategoryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryCreateInput, {
    nullable: false
  })
  data!: CategoryCreateInput;
}
