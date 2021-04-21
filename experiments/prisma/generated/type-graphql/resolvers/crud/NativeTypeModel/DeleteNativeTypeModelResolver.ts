import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteNativeTypeModelArgs } from "./args/DeleteNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class DeleteNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
