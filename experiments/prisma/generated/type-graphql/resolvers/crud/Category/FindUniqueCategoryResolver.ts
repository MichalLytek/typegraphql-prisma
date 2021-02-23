import * as TypeGraphQL from "type-graphql";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { Category } from "../../../models/Category";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class FindUniqueCategoryResolver {
  @TypeGraphQL.Query(_returns => Category, {
    nullable: true
  })
  async category(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCategoryArgs): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.findUnique(args);
  }
}
