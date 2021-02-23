import * as TypeGraphQL from "type-graphql";
import { UpdateManyNativeTypeModelArgs } from "./args/UpdateManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class UpdateManyNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.nativeTypeModel.updateMany(args);
  }
}
