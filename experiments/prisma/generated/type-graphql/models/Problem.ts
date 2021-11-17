import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Creator } from "../models/Creator";
import { ProblemCount } from "../resolvers/outputs/ProblemCount";

@TypeGraphQL.ObjectType("Problem", {
  isAbstract: true
})
export class Problem {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  problemText!: string;

  likedBy?: Creator[];

  creator?: Creator | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  creatorId?: number | null;

  @TypeGraphQL.Field(_type => ProblemCount, {
    nullable: false
  })
  _count!: ProblemCount;
}
