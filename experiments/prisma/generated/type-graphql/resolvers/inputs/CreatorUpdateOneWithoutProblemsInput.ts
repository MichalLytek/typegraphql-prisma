import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { CreatorCreateOrConnectWithoutproblemsInput } from "../inputs/CreatorCreateOrConnectWithoutproblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class CreatorUpdateOneWithoutProblemsInput {
  @TypeGraphQL.Field(_type => CreatorCreateWithoutProblemsInput, {
    nullable: true,
    description: undefined
  })
  create?: CreatorCreateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: true,
    description: undefined
  })
  update?: CreatorUpdateWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorUpsertWithoutProblemsInput, {
    nullable: true,
    description: undefined
  })
  upsert?: CreatorUpsertWithoutProblemsInput | undefined;

  @TypeGraphQL.Field(_type => CreatorCreateOrConnectWithoutproblemsInput, {
    nullable: true,
    description: undefined
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput | undefined;
}
