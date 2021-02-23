import * as TypeGraphQL from "type-graphql";
import { UpdateManyDirectorArgs } from "./args/UpdateManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class UpdateManyDirectorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyDirectorArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.director.updateMany(args);
  }
}
