import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { FindManyNativeTypeModelArgs } from "./args/FindManyNativeTypeModelArgs";
import { NativeTypeModel } from "../../../models/NativeTypeModel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => NativeTypeModel)
export class FindManyNativeTypeModelResolver {
  @TypeGraphQL.Query(_returns => [NativeTypeModel], {
    nullable: false
  })
  async nativeTypeModels(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyNativeTypeModelArgs): Promise<NativeTypeModel[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).nativeTypeModel.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
