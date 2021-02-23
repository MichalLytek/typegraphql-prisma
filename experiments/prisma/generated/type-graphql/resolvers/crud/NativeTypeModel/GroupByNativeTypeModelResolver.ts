import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByNativeTypeModelArgs } from "./args/GroupByNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { NativeTypeModelGroupBy } from "../../outputs/NativeTypeModelGroupBy";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class GroupByNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => [NativeTypeModelGroupBy], {
    nullable: false
  })
  async groupByNativeTypeModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByNativeTypeModelArgs): Promise<NativeTypeModelGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return ctx.prisma.nativeTypeModel.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
