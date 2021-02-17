import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
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
