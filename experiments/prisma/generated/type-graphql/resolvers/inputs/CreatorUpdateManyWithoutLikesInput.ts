import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { CreatorCreateOrConnectWithoutlikesInput } from "../inputs/CreatorCreateOrConnectWithoutlikesInput";
import { CreatorCreateWithoutLikesInput } from "../inputs/CreatorCreateWithoutLikesInput";
import { CreatorScalarWhereInput } from "../inputs/CreatorScalarWhereInput";
import { CreatorUpdateManyWithWhereWithoutLikesInput } from "../inputs/CreatorUpdateManyWithWhereWithoutLikesInput";
import { CreatorUpdateWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpdateWithWhereUniqueWithoutLikesInput";
import { CreatorUpsertWithWhereUniqueWithoutLikesInput } from "../inputs/CreatorUpsertWithWhereUniqueWithoutLikesInput";
import { CreatorWhereUniqueInput } from "../inputs/CreatorWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class CreatorUpdateManyWithoutLikesInput {
  @TypeGraphQL.Field(_type => [CreatorCreateWithoutLikesInput], {
    nullable: true
  })
  create?: CreatorCreateWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorCreateOrConnectWithoutlikesInput], {
    nullable: true
  })
  connectOrCreate?: CreatorCreateOrConnectWithoutlikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpsertWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  upsert?: CreatorUpsertWithWhereUniqueWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  connect?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  set?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorWhereUniqueInput], {
    nullable: true
  })
  delete?: CreatorWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpdateWithWhereUniqueWithoutLikesInput], {
    nullable: true
  })
  update?: CreatorUpdateWithWhereUniqueWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorUpdateManyWithWhereWithoutLikesInput], {
    nullable: true
  })
  updateMany?: CreatorUpdateManyWithWhereWithoutLikesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CreatorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CreatorScalarWhereInput[] | undefined;
}
