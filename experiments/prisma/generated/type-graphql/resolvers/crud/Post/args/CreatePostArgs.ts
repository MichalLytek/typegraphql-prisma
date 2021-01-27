import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostUncheckedCreateInput } from "../../../inputs/PostUncheckedCreateInput";

@TypeGraphQL.ArgsType()
export class CreatePostArgs {
  @TypeGraphQL.Field(_type => PostUncheckedCreateInput, {
    nullable: false
  })
  data!: PostUncheckedCreateInput;
}
