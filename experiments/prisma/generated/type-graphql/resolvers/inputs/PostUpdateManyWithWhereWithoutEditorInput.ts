import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { PostScalarWhereInput } from "../inputs/PostScalarWhereInput";
import { PostUpdateManyMutationInput } from "../inputs/PostUpdateManyMutationInput";

@TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutEditorInput", {
  isAbstract: true
})
export class PostUpdateManyWithWhereWithoutEditorInput {
  @TypeGraphQL.Field(_type => PostScalarWhereInput, {
    nullable: false
  })
  where!: PostScalarWhereInput;

  @TypeGraphQL.Field(_type => PostUpdateManyMutationInput, {
    nullable: false
  })
  data!: PostUpdateManyMutationInput;
}
