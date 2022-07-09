import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CreatorUpdateInput } from "../../../inputs/CreatorUpdateInput";
import { CreatorWhereUniqueInput } from "../../../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCreatorArgs {
  @TypeGraphQL.Field(_type => CreatorUpdateInput, {
    nullable: false
  })
  data!: CreatorUpdateInput;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;
}
