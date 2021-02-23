import * as TypeGraphQL from "type-graphql";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class FindManyCreatorResolver {
  @TypeGraphQL.Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCreatorArgs): Promise<Creator[]> {
    return ctx.prisma.creator.findMany(args);
  }
}
