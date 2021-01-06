import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { DirectorFirstNameLastNameCompoundUniqueInput } from "../inputs/DirectorFirstNameLastNameCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class DirectorWhereUniqueInput {
  @TypeGraphQL.Field(_type => DirectorFirstNameLastNameCompoundUniqueInput, {
    nullable: true,
    description: undefined
  })
  firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput | undefined;
}
