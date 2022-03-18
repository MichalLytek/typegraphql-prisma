import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;
}
