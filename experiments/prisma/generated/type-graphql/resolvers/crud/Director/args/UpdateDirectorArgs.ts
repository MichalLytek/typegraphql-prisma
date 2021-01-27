import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUncheckedUpdateInput } from "../../../inputs/DirectorUncheckedUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorUncheckedUpdateInput, {
    nullable: false
  })
  data!: DirectorUncheckedUpdateInput;

  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;
}
