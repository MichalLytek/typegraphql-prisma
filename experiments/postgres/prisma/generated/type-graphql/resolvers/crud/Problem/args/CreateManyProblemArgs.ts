import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProblemCreateManyInput } from "../../../inputs/ProblemCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProblemArgs {
  @TypeGraphQL.Field(_type => [ProblemCreateManyInput], {
    nullable: false
  })
  data!: ProblemCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
