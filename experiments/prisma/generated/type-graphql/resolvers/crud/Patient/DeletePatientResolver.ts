import * as TypeGraphQL from "type-graphql";
import { DeletePatientArgs } from "./args/DeletePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class DeletePatientResolver {
  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: true
  })
  async deletePatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeletePatientArgs): Promise<Patient | null> {
    return getPrismaFromContext(ctx).patient.delete(args);
  }
}
