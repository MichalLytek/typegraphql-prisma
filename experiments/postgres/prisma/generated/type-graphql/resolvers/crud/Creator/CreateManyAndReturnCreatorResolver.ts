import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCreatorArgs } from "./args/CreateManyAndReturnCreatorArgs";
import { Creator } from "../../../models/Creator";
import { CreateManyAndReturnCreator } from "../../outputs/CreateManyAndReturnCreator";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class CreateManyAndReturnCreatorResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCreator], {
    nullable: false
  })
  async createManyAndReturnCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnCreatorArgs) args: CreateManyAndReturnCreatorArgs): Promise<CreateManyAndReturnCreator[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).creator.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
