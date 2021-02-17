import * as TypeGraphQL from "type-graphql";
import { CreateNativeTypeModelArgs } from "./args/CreateNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class CreateNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => NativeTypeModel, {
    nullable: false
  })
  async createNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateNativeTypeModelArgs): Promise<NativeTypeModel> {
    return ctx.prisma.nativeTypeModel.create(args);
  }
}
