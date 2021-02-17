import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutProblemsInput } from "../inputs/CreatorCreateOrConnectWithoutProblemsInput";
import { CreatorCreateWithoutProblemsInput } from "../inputs/CreatorCreateWithoutProblemsInput";
import { CreatorUpdateWithoutProblemsInput } from "../inputs/CreatorUpdateWithoutProblemsInput";
import { CreatorUpsertWithoutProblemsInput } from "../inputs/CreatorUpsertWithoutProblemsInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateOneWithoutProblemsInput {
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

  @TypeGraphQL.Field(_type => CreatorWhereUniqueInput, {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => CreatorUpdateWithoutProblemsInput, {
    nullable: true
  })
  update?: CreatorUpdateWithoutProblemsInput | undefined;
}
