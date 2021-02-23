import * as TypeGraphQL from "type-graphql";
import { CreatePatientArgs } from "./args/CreatePatientArgs";
import { Patient } from "../../../models/Patient";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class CreatePatientResolver {
  @TypeGraphQL.Mutation(_returns => Patient, {
    nullable: false
  })
  async createPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreatePatientArgs): Promise<Patient> {
    return getPrismaFromContext(ctx).patient.create(args);
  }
}
