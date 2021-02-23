import * as TypeGraphQL from "type-graphql";
import { CreateManyDirectorArgs } from "./args/CreateManyDirectorArgs";
import { Director } from "../../../models/Director";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class CreateManyDirectorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateManyDirectorArgs): Promise<AffectedRowsOutput> {
    return ctx.prisma.director.createMany(args);
  }
}
