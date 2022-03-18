import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
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
