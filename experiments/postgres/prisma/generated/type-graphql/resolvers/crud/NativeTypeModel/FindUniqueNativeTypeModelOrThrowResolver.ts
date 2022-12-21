import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueNativeTypeModelOrThrowArgs } from "./args/FindUniqueNativeTypeModelOrThrowArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class FindUniqueNativeTypeModelOrThrowResolver {
  @TypeGraphQL.Query(_returns => NativeTypeModel, {
    nullable: true
  })
  async getNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueNativeTypeModelOrThrowArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).nativeTypeModel.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
