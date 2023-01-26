import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorWhereInput } from "../../../inputs/CreatorWhereInput";

@TypeGraphQL.ArgsType()
export class ProblemCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;
}
