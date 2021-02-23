import * as TypeGraphQL from "type-graphql";
import { FindUniqueCreatorArgs } from "./args/FindUniqueCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class FindUniqueCreatorResolver {
  @TypeGraphQL.Query(_returns => Creator, {
    nullable: true
  })
  async creator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueCreatorArgs): Promise<Creator | null> {
    return ctx.prisma.creator.findUnique(args);
  }
}
