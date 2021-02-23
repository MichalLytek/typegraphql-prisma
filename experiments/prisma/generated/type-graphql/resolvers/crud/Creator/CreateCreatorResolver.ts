import * as TypeGraphQL from "type-graphql";
import { CreateCreatorArgs } from "./args/CreateCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class CreateCreatorResolver {
  @TypeGraphQL.Mutation(_returns => Creator, {
    nullable: false
  })
  async createCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateCreatorArgs): Promise<Creator> {
    return getPrismaFromContext(ctx).creator.create(args);
  }
}
