import * as TypeGraphQL from "type-graphql";
import { DeleteNativeTypeModelArgs } from "./args/DeleteNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class DeleteNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async deleteNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    return ctx.prisma.nativeTypeModel.delete(args);
  }
}
