import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";

@TypeGraphQL.InputType("CreatorUpdateToOneWithWhereWithoutProblemsInput")
export class CreatorUpdateToOneWithWhereWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  where?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: false
  })
  data!: CreatorUpdateWithoutProblemsInput;
}
