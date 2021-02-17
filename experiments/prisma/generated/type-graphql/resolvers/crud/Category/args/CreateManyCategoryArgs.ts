import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
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
