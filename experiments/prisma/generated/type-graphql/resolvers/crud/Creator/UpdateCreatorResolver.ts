import * as TypeGraphQL from "type-graphql";
import { UpdateCreatorArgs } from "./args/UpdateCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class UpdateCreatorResolver {
  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: true
  })
  async updateCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateCreatorArgs): Promise<Creator | null> {
    return getPrismaFromContext(ctx).creator.update(args);
  }
}
