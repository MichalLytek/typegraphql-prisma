import * as TypeGraphQL from "type-graphql";
import { DeleteNativeTypeModelArgs } from "./args/DeleteNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class DeleteNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    return getPrismaFromContext(ctx).nativeTypeModel.delete(args);
  }
}
