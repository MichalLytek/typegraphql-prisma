import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorUncheckedCreateWithoutProblemsInput } from "../inputs/CreatorUncheckedCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorCreateOrConnectWithoutproblemsInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorUncheckedCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorUncheckedCreateWithoutProblemsInput;
}
