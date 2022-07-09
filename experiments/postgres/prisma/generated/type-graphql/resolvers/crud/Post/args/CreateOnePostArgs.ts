import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PostCreateInput } from "../../../inputs/PostCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePostArgs {
  @TypeGraphQL.Field(_type => PostCreateInput, {
    nullable: false
  })
  data!: PostCreateInput;
}
