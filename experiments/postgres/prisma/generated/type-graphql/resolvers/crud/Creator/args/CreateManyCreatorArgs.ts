import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateManyInput } from "../../../inputs/CreatorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCreatorArgs {
  @TypeGraphQL.Field(_type => [CreatorCreateManyInput], {
    nullable: false
  })
  data!: CreatorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
