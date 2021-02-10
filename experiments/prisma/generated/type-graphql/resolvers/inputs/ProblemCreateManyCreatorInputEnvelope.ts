import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { ProblemCreateManyCreatorInput } from "../inputs/ProblemCreateManyCreatorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProblemCreateManyCreatorInputEnvelope {
  @TypeGraphQL.Field(_type => [ProblemCreateManyCreatorInput], {
    nullable: false
  })
  data!: ProblemCreateManyCreatorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
