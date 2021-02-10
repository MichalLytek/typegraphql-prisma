import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ClientCreateManyInput } from "../../../inputs/ClientCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyClientArgs {
  @TypeGraphQL.Field(_type => [ClientCreateManyInput], {
    nullable: false
  })
  data!: ClientCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
