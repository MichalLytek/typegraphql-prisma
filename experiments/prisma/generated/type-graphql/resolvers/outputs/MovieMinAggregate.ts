import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MovieMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  directorFirstName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  directorLastName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  title!: string | null;
}
