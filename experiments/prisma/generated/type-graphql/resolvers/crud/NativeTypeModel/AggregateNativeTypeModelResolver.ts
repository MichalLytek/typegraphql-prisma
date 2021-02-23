import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateNativeTypeModelArgs } from "./args/AggregateNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { AggregateNativeTypeModel } from "../../outputs/AggregateNativeTypeModel";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class AggregateNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => AggregateNativeTypeModel, {
    nullable: false
  })
  async aggregateNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateNativeTypeModelArgs): Promise<AggregateNativeTypeModel> {
    return ctx.prisma.nativeTypeModel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
