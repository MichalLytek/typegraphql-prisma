import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnDirectorArgs } from "./args/CreateManyAndReturnDirectorArgs";
import { Director } from "../../../models/Director";
import { CreateManyAndReturnDirector } from "../../outputs/CreateManyAndReturnDirector";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class CreateManyAndReturnDirectorResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnDirector], {
    nullable: false
  })
  async createManyAndReturnDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnDirectorArgs) args: CreateManyAndReturnDirectorArgs): Promise<CreateManyAndReturnDirector[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).director.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
