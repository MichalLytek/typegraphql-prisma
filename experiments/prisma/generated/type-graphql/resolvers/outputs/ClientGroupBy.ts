import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { ClientAvgAggregate } from "../outputs/ClientAvgAggregate";
import { ClientCountAggregate } from "../outputs/ClientCountAggregate";
import { ClientMaxAggregate } from "../outputs/ClientMaxAggregate";
import { ClientMinAggregate } from "../outputs/ClientMinAggregate";
import { ClientSumAggregate } from "../outputs/ClientSumAggregate";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class ClientGroupBy {
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

  @TypeGraphQL.Field(_type => ClientCountAggregate, {
    nullable: true
  })
  _count!: ClientCountAggregate | null;

  @TypeGraphQL.Field(_type => ClientAvgAggregate, {
    nullable: true
  })
  _avg!: ClientAvgAggregate | null;

  @TypeGraphQL.Field(_type => ClientSumAggregate, {
    nullable: true
  })
  _sum!: ClientSumAggregate | null;

  @TypeGraphQL.Field(_type => ClientMinAggregate, {
    nullable: true
  })
  _min!: ClientMinAggregate | null;

  @TypeGraphQL.Field(_type => ClientMaxAggregate, {
    nullable: true
  })
  _max!: ClientMaxAggregate | null;
}
