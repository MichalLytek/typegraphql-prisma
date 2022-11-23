import * as TypeGraphQL from "type-graphql";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneNativeTypeModelArgs } from "./args/UpsertOneNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class UpsertOneNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertOneNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
