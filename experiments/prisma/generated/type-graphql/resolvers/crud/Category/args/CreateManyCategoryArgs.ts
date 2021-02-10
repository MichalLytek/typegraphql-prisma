import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { CategoryCreateManyInput } from "../../../inputs/CategoryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategoryArgs {
  @TypeGraphQL.Field(_type => [CategoryCreateManyInput], {
    nullable: false
  })
  data!: CategoryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
