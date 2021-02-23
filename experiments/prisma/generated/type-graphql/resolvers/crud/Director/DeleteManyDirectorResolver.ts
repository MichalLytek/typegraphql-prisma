import * as TypeGraphQL from "type-graphql";
import { DeleteManyDirectorArgs } from "./args/DeleteManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class DeleteManyDirectorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyDirectorArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.director.deleteMany(args);
  }
}
