import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType("CreatorCreateOrConnectWithoutProblemsInput", {
  isAbstract: true
})
export class CreatorCreateOrConnectWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: false
  })
  where!: CreatorWhereUniqueInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutProblemsInput;
}
