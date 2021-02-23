import * as TypeGraphQL from "type-graphql";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class FindManyNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    return ctx.prisma.nativeTypeModel.findMany(args);
  }
}
