import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { Director } from "../../models/Director";

@TypeGraphQL.ObjectType("CreateManyAndReturnMovie", {})
export class CreateManyAndReturnMovie {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorFirstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  directorLastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => Director, {
    nullable: false
  })
  director!: Director;
}
