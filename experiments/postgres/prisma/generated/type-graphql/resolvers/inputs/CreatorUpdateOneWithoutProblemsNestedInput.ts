import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CreatorCreateOrConnectWithoutProblemsInput } from "../inputs/CreatorCreateOrConnectWithoutProblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateToOneWithWhereWithoutProblemsInput } from "../inputs/CreatorUpdateToOneWithWhereWithoutProblemsInput";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput";
import { CreatorWhereInput } from "../inputs/CreatorWhereInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType("CreatorUpdateOneWithoutProblemsNestedInput", {
  isAbstract: true
})
export class CreatorUpdateOneWithoutProblemsNestedInput {
  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutProblemsInput, {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpsertWithoutProblemsInput, {
    nullable: true
  })
  upsert?: CreatorUpsertWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  disconnect?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereInput, {
    nullable: true
  })
  delete?: CreatorWhereInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateToOneWithWhereWithoutProblemsInput, {
    nullable: true
  })
  update?: CreatorUpdateToOneWithWhereWithoutProblemsInput | undefined;
}
