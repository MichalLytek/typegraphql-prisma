import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindFirstEquipmentArgs } from "./args/FindFirstEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class FindFirstEquipmentResolver {
  @TypeGraphQL.Query(_returns => Equipment, {
    nullable: true
  })
  async findFirstEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstEquipmentArgs): Promise<Equipment | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).equipment.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
