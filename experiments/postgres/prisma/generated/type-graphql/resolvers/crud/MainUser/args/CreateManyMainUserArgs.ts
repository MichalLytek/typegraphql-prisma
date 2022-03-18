import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserCreateManyInput } from "../../../inputs/MainUserCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMainUserArgs {
  @TypeGraphQL.Field(_type => [MainUserCreateManyInput], {
    nullable: false
  })
  data!: MainUserCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
