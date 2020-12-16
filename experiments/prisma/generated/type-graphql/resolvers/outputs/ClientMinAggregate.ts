import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { JsonValue, InputJsonValue } from "../../../client";
import { Role } from "../../enums/Role";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
  simpleResolvers: undefined,
})
export class ClientMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  age!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  balance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false,
    description: undefined
  })
  amount!: number;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
    description: undefined
  })
  role!: "USER" | "ADMIN" | null;
}
