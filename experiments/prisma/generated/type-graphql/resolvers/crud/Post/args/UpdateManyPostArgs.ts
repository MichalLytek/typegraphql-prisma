import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUncheckedUpdateManyInput } from "../../../inputs/PostUncheckedUpdateManyInput";
import { PostWhereInput } from "../../../inputs/PostWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPostArgs {
  @TypeGraphQL.Field(_type => PostUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: PostUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => PostWhereInput, {
    nullable: true
  })
  where?: PostWhereInput | undefined;
}
