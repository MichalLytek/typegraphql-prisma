import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
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
