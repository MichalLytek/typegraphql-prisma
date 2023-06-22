import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { HiddenCountAggregate } from "../outputs/HiddenCountAggregate";
import { HiddenMaxAggregate } from "../outputs/HiddenMaxAggregate";
import { HiddenMinAggregate } from "../outputs/HiddenMinAggregate";

@TypeGraphQL.ObjectType("HiddenGroupBy", {})
export class HiddenGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => HiddenCountAggregate, {
    nullable: true
  })
  _count!: HiddenCountAggregate | null;

  @TypeGraphQL.Field(_type => HiddenMinAggregate, {
    nullable: true
  })
  _min!: HiddenMinAggregate | null;

  @TypeGraphQL.Field(_type => HiddenMaxAggregate, {
    nullable: true
  })
  _max!: HiddenMaxAggregate | null;
}
