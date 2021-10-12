import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../client";
import { DecimalJSScalar } from "../scalars";
import { Post } from "../models/Post";
import { Role } from "../enums/Role";
import { MainUserCount } from "../resolvers/outputs/MainUserCount";

/**
 * User model doc
 */
@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: "User model doc"
})
export class MainUser {
  /**
   * User model field doc
   */
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false,
    description: "User model field doc"
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  /**
   * renamed field doc
   */
  name!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  age!: number;

  balance!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  amount!: number;

  posts?: Post[];

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  editorPosts?: Post[];

  @TypeGraphQL.Field(_type => [TypeGraphQL.Int], {
    nullable: false
  })
  grades!: number[];

  @TypeGraphQL.Field(_type => [String], {
    nullable: false
  })
  aliases!: string[];

  @TypeGraphQL.Field(_type => MainUserCount, {
    nullable: true
  })
  _count?: MainUserCount | null;

  /**
   * renamed field doc
   */
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: "renamed field doc"
  })
  get firstName(): string | null {
    return this.name ?? null;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  get accountBalance(): number {
    return this.balance;
  }
}
