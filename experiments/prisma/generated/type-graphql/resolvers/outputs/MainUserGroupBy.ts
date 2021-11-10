import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { MainUserAvgAggregate } from "../outputs/MainUserAvgAggregate";
import { MainUserCountAggregate } from "../outputs/MainUserCountAggregate";
import { MainUserMaxAggregate } from "../outputs/MainUserMaxAggregate";
import { MainUserMinAggregate } from "../outputs/MainUserMinAggregate";
import { MainUserSumAggregate } from "../outputs/MainUserSumAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType("MainUserGroupBy", {
  isAbstract: true
})
export class MainUserGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  balance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: true
  })
  grades!: number[] | null;

  @TypeGraphQL.Field(_type => [String], {
    nullable: true
  })
  aliases!: string[] | null;

  @TypeGraphQL.Field(_type => MainUserCountAggregate, {
    nullable: true
  })
  _count!: MainUserCountAggregate | null;

  @TypeGraphQL.Field(_type => MainUserAvgAggregate, {
    nullable: true
  })
  _avg!: MainUserAvgAggregate | null;

  @TypeGraphQL.Field(_type => MainUserSumAggregate, {
    nullable: true
  })
  _sum!: MainUserSumAggregate | null;

  @TypeGraphQL.Field(_type => MainUserMinAggregate, {
    nullable: true
  })
  _min!: MainUserMinAggregate | null;

  @TypeGraphQL.Field(_type => MainUserMaxAggregate, {
    nullable: true
  })
  _max!: MainUserMaxAggregate | null;
}
