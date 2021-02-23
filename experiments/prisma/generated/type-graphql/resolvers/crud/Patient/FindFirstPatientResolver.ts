import * as TypeGraphQL from "type-graphql";
import { FindFirstPatientArgs } from "./args/FindFirstPatientArgs";
import { Patient } from "../../../models/Patient";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class FindFirstPatientResolver {
  @TypeGraphQL.Query(_returns => Patient, {
    nullable: true
  })
  async findFirstPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstPatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.findFirst(args);
  }
}
