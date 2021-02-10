import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
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
