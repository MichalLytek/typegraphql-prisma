import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { ProblemOrderByInput } from "../../../inputs/ProblemOrderByInput";
import { ProblemScalarWhereWithAggregatesInput } from "../../../inputs/ProblemScalarWhereWithAggregatesInput";
import { ProblemWhereInput } from "../../../inputs/ProblemWhereInput";
import { ProblemScalarFieldEnum } from "../../../../enums/ProblemScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProblemArgs {
  @TypeGraphQL.Field(_type => ProblemWhereInput, {
    nullable: true
  })
  where?: ProblemWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProblemOrderByInput], {
    nullable: true
  })
  orderBy?: ProblemOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProblemScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "problemText" | "creatorId">;

  @TypeGraphQL.Field(_type => ProblemScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProblemScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
