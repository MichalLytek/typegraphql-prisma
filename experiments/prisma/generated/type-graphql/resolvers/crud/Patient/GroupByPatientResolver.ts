import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { GroupByPatientArgs } from "./args/GroupByPatientArgs";
import { Patient } from "../../../models/Patient";
import { PatientGroupBy } from "../../outputs/PatientGroupBy";
import { transformFields } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class GroupByPatientResolver {
  @TypeGraphQL.Query(_returns => [PatientGroupBy], {
    nullable: false
  })
  async groupByPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPatientArgs): Promise<PatientGroupBy[]> {
    const { count, avg, sum, min, max } = transformFields(
      graphqlFields(info as any)
    );
    return ctx.prisma.patient.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ count, avg, sum, min, max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
