import * as TypeGraphQL from "type-graphql";
import { FindFirstCreatorArgs } from "./args/FindFirstCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class FindFirstCreatorResolver {
  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async findFirstCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCreatorArgs): Promise<Creator | null> {
    return getPrismaFromContext(ctx).creator.findFirst(args);
  }
}
