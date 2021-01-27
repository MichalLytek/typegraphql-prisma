import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { DirectorUncheckedUpdateManyInput } from "../../../inputs/DirectorUncheckedUpdateManyInput";
import { DirectorWhereInput } from "../../../inputs/DirectorWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectorArgs {
  @TypeGraphQL.Field(_type => DirectorUncheckedUpdateManyInput, {
    nullable: false
  })
  data!: DirectorUncheckedUpdateManyInput;

  @TypeGraphQL.Field(_type => DirectorWhereInput, {
    nullable: true
  })
  where?: DirectorWhereInput | undefined;
}
