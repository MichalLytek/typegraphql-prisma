import * as TypeGraphQL from "type-graphql";
import { FindUniquePatientArgs } from "./args/FindUniquePatientArgs";
import { Patient } from "../../../models/Patient";

@TypeGraphQL.Resolver(_of => Patient)
export class FindUniquePatientResolver {
  @TypeGraphQL.Query(_returns => Patient, {
    nullable: true,
    description: undefined
  })
  async patient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniquePatientArgs): Promise<Patient | null> {
    return ctx.prisma.patient.findUnique(args);
  }
}
