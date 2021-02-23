import * as TypeGraphQL from "type-graphql";
import { UpdateManyCreatorArgs } from "./args/UpdateManyCreatorArgs";
import { Creator } from "../../../models/Creator";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Creator)
export class UpdateManyCreatorResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyCreator(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyCreatorArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).creator.updateMany(args);
  }
}
