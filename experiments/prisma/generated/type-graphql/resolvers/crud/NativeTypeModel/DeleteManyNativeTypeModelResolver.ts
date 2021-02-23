import * as TypeGraphQL from "type-graphql";
import { DeleteManyNativeTypeModelArgs } from "./args/DeleteManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class DeleteManyNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.nativeTypeModel.deleteMany(args);
  }
}
