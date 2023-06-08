import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType("CreatorUpsertWithoutProblemsInput")
export class CreatorUpsertWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: false
  })
  update!: CreatorUpdateWithoutProblemsInput;

  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: false
  })
  create!: CreatorCreateWithoutProblemsInput;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;
}
