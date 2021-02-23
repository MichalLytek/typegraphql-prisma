import * as TypeGraphQL from "type-graphql";
import { FindManyCreatorArgs } from "./args/FindManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class FindManyCreatorResolver {
  @TypeGraphQL.Query(_returns => [Creator], {
    nullable: false
  })
  async creators(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyCreatorArgs): Promise<Creator[]> {
    return getPrismaFromContext(ctx).creator.findMany(args);
  }
}
