import * as TypeGraphQL from "type-graphql";
import { CreateManyNativeTypeModelArgs } from "./args/CreateManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class CreateManyNativeTypeModelResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyNativeTypeModelArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.nativeTypeModel.createMany(args);
  }
}
