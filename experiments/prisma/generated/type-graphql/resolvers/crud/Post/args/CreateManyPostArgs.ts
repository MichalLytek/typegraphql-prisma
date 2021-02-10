import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { PostCreateManyInput } from "../../../inputs/PostCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPostArgs {
  @TypeGraphQL.Field(_type => [PostCreateManyInput], {
    nullable: false
  })
  data!: PostCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
