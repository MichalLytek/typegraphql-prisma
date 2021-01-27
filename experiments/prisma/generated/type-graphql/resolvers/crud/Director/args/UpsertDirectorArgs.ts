import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUncheckedCreateInput } from "../../../inputs/DirectorUncheckedCreateInput";
import { DirectorUncheckedUpdateInput } from "../../../inputs/DirectorUncheckedUpdateInput";
import { DirectorWhereUniqueInput } from "../../../inputs/DirectorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorWhereUniqueInput, {
    nullable: false
  })
  where!: DirectorWhereUniqueInput;

  @TypeGraphQL.Field(_type => DirectorUncheckedCreateInput, {
    nullable: false
  })
  create!: DirectorUncheckedCreateInput;

  @TypeGraphQL.Field(_type => DirectorUncheckedUpdateInput, {
    nullable: false
  })
  update!: DirectorUncheckedUpdateInput;
}
