import * as TypeGraphQL from "type-graphql";
import { UpdateNativeTypeModelArgs } from "./args/UpdateNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class UpdateNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: true
  })
  async updateNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateNativeTypeModelArgs): Promise<NativeTypeModel | null> {
    return ctx.prisma.nativeTypeModel.update(args);
  }
}
