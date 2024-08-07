import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MainUserOrderByWithRelationInput } from "../../../inputs/MainUserOrderByWithRelationInput";
import { MainUserWhereInput } from "../../../inputs/MainUserWhereInput";
import { MainUserWhereUniqueInput } from "../../../inputs/MainUserWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMainUserArgs {
  @TypeGraphQL.Field(_type => MainUserWhereInput, {
    nullable: true
  })
  where?: MainUserWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MainUserOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MainUserOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MainUserWhereUniqueInput, {
    nullable: true
  })
  cursor?: MainUserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
