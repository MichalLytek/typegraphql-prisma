import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUncheckedCreateInput } from "../../../inputs/PostUncheckedCreateInput";
import { PostUncheckedUpdateInput } from "../../../inputs/PostUncheckedUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertPostArgs {
  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field(_type => PostUncheckedCreateInput, {
    nullable: false
  })
  create!: PostUncheckedCreateInput;

  @TypeGraphQL.Field(_type => PostUncheckedUpdateInput, {
    nullable: false
  })
  update!: PostUncheckedUpdateInput;
}
