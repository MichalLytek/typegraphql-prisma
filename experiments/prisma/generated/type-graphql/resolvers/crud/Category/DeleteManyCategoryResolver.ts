import * as TypeGraphQL from "type-graphql";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Category)
export class DeleteManyCategoryResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyCategory(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyCategoryArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.category.deleteMany(args);
  }
}
