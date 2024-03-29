import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorCreateInput } from "../../../inputs/CreatorCreateInput";
import { CreatorUpdateInput } from "../../../inputs/CreatorUpdateInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateInput, {
    nullable: false
  })
  create!: CreatorCreateInput;

  @TypeGraphQL.Field(_type => CreatorUpdateInput, {
    nullable: false
  })
  update!: CreatorUpdateInput;
}
