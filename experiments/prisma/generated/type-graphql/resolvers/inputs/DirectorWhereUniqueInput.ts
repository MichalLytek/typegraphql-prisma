import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { DirectorFirstNameLastNameCompoundUniqueInput } from "../inputs/DirectorFirstNameLastNameCompoundUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class DirectorWhereUniqueInput {
  @TypeGraphQL.Field(_type => DirectorFirstNameLastNameCompoundUniqueInput, {
    nullable: true
  })
  firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput | undefined;
}
