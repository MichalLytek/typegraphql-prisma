import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUncheckedUpdateInput } from "../../../inputs/PostUncheckedUpdateInput";
import { PostWhereUniqueInput } from "../../../inputs/PostWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdatePostArgs {
  @TypeGraphQL.Field(_type => PostUncheckedUpdateInput, {
    nullable: false
  })
  data!: PostUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => PostWhereUniqueInput, {
    nullable: false
  })
  where!: PostWhereUniqueInput;
}
