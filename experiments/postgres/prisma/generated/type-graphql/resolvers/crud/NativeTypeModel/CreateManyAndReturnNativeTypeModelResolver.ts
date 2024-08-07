import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnNativeTypeModelArgs } from "./args/CreateManyAndReturnNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { CreateManyAndReturnNativeTypeModel } from "../../outputs/CreateManyAndReturnNativeTypeModel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class CreateManyAndReturnNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnNativeTypeModel], {
    nullable: false
  })
  async createManyAndReturnNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnNativeTypeModelArgs) args: CreateManyAndReturnNativeTypeModelArgs): Promise<CreateManyAndReturnNativeTypeModel[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
