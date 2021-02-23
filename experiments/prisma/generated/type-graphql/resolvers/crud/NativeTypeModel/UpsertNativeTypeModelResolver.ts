import * as TypeGraphQL from "type-graphql";
import { UpsertNativeTypeModelArgs } from "./args/UpsertNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class UpsertNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async upsertNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertNativeTypeModelArgs): Promise<NativeTypeModel> {
    return ctx.prisma.nativeTypeModel.upsert(args);
  }
}
