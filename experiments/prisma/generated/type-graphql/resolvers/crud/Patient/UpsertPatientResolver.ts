import * as TypeGraphQL from "type-graphql";
import { UpsertPatientArgs } from "./args/UpsertPatientArgs";
import { Patient } from "../../../models/Patient";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class UpsertPatientResolver {
  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: false
  })
  async upsertPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertPatientArgs): Promise<Patient> {
    return getPrismaFromContext(ctx).patient.upsert(args);
  }
}
