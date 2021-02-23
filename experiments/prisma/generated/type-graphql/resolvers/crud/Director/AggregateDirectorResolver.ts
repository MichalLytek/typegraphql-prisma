import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateDirectorArgs } from "./args/AggregateDirectorArgs";
import { Director } from "../../../models/Director";
import { AggregateDirector } from "../../outputs/AggregateDirector";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Director)
export class AggregateDirectorResolver {
  @TypeGraphQL.Query(_returns => AggregateDirector, {
    nullable: false
  })
  async aggregateDirector(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateDirectorArgs): Promise<AggregateDirector> {
    return ctx.prisma.director.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
