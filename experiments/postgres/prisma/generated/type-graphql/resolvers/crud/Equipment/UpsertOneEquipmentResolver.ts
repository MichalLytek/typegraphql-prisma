import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneEquipmentArgs } from "./args/UpsertOneEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class UpsertOneEquipmentResolver {
  @TypeGraphQL.Mutation(_returns => Equipment, {
    nullable: false
  })
  async upsertOneEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneEquipmentArgs): Promise<Equipment> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).equipment.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
