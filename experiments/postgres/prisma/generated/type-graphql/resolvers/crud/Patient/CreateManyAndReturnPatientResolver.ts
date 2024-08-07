import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPatientArgs } from "./args/CreateManyAndReturnPatientArgs";
import { Patient } from "../../../models/Patient";
import { CreateManyAndReturnPatient } from "../../outputs/CreateManyAndReturnPatient";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Patient)
export class CreateManyAndReturnPatientResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPatient], {
    nullable: false
  })
  async createManyAndReturnPatient(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args(_type => CreateManyAndReturnPatientArgs) args: CreateManyAndReturnPatientArgs): Promise<CreateManyAndReturnPatient[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).patient.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
