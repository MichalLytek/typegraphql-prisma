import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryUncheckedUpdateManyInput } from "../../../inputs/CategoryUncheckedUpdateManyInput";
import { CategoryWhereInput } from "../../../inputs/CategoryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCategoryArgs {
  @TypeGraphQL.Field(_type => CategoryUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: CategoryUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => CategoryWhereInput, {
    nullable: true
  })
  where?: CategoryWhereInput | undefined;
}
