import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryAvgAggregate } from "../outputs/CategoryAvgAggregate";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";
import { CategorySumAggregate } from "../outputs/CategorySumAggregate";

@TypeGraphQL.ObjectType("CategoryGroupBy", {
  isAbstract: true
})
export class CategoryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  slug!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  number!: number;

  @TypeGraphQL.Field(_type => CategoryCountAggregate, {
    nullable: true
  })
  _count!: CategoryCountAggregate | null;

  @TypeGraphQL.Field(_type => CategoryAvgAggregate, {
    nullable: true
  })
  _avg!: CategoryAvgAggregate | null;

  @TypeGraphQL.Field(_type => CategorySumAggregate, {
    nullable: true
  })
  _sum!: CategorySumAggregate | null;

  @TypeGraphQL.Field(_type => CategoryMinAggregate, {
    nullable: true
  })
  _min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field(_type => CategoryMaxAggregate, {
    nullable: true
  })
  _max!: CategoryMaxAggregate | null;
}
