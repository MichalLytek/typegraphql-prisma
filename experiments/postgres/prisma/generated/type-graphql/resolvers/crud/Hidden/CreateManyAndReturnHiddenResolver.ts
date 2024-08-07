import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnHiddenArgs } from "./args/CreateManyAndReturnHiddenArgs";
import { Hidden } from "../../../models/Hidden";
import { CreateManyAndReturnHidden } from "../../outputs/CreateManyAndReturnHidden";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Hidden)
export class CreateManyAndReturnHiddenResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnHidden], {
    nullable: false
  })
  async createManyAndReturnHidden(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnHiddenArgs) args: CreateManyAndReturnHiddenArgs): Promise<CreateManyAndReturnHidden[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).hidden.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
