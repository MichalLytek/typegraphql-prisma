import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { HiddenCreateManyInput } from "../../../inputs/HiddenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnHiddenArgs {
  @TypeGraphQL.Field(_type => [HiddenCreateManyInput], {
    nullable: false
  })
  data!: HiddenCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
