import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertNativeTypeModelArgs } from "./args/UpsertNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class UpsertNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertNativeTypeModelArgs): Promise<NativeTypeModel> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
