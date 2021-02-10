import * as TypeGraphQL from "type-graphql";
import GraphQLJSON from "graphql-type-json";
import { Prisma } from "../../../client";
import { MovieCreateManyDirectorInput } from "../inputs/MovieCreateManyDirectorInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MovieCreateManyDirectorInputEnvelope {
  @TypeGraphQL.Field(_type => [MovieCreateManyDirectorInput], {
    nullable: false
  })
  data!: MovieCreateManyDirectorInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
