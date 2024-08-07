import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEquipmentArgs } from "./args/CreateManyAndReturnEquipmentArgs";
import { Equipment } from "../../../models/Equipment";
import { CreateManyAndReturnEquipment } from "../../outputs/CreateManyAndReturnEquipment";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Equipment)
export class CreateManyAndReturnEquipmentResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEquipment], {
    nullable: false
  })
  async createManyAndReturnEquipment(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnEquipmentArgs) args: CreateManyAndReturnEquipmentArgs): Promise<CreateManyAndReturnEquipment[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).equipment.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
