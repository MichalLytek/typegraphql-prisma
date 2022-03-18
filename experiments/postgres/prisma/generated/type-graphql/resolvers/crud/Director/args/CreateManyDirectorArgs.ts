import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DirectorCreateManyInput } from "../../../inputs/DirectorCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyDirectorArgs {
  @TypeGraphQL.Field(_type => [DirectorCreateManyInput], {
    nullable: false
  })
  data!: DirectorCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
