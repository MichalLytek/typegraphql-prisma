import * as TypeGraphQL from "type-graphql";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { Category } from "../../../models/Category";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class FindFirstCategoryResolver {
  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async findFirstCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstCategoryArgs): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.findFirst(args);
  }
}
