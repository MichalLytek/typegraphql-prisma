import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Client: crudResolvers.ClientCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  Director: crudResolvers.DirectorCrudResolver,
  Problem: crudResolvers.ProblemCrudResolver,
  Creator: crudResolvers.CreatorCrudResolver,
  NativeTypeModel: crudResolvers.NativeTypeModelCrudResolver
};
const relationResolversMap = {
  Client: relationResolvers.ClientRelationsResolver,
  Post: relationResolvers.PostRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  Director: relationResolvers.DirectorRelationsResolver,
  Problem: relationResolvers.ProblemRelationsResolver,
  Creator: relationResolvers.CreatorRelationsResolver
};
const actionResolversMap = {
  Client: {
    client: actionResolvers.FindUniqueClientResolver,
    findFirstClient: actionResolvers.FindFirstClientResolver,
    clients: actionResolvers.FindManyClientResolver,
    createClient: actionResolvers.CreateClientResolver,
    createManyClient: actionResolvers.CreateManyClientResolver,
    deleteClient: actionResolvers.DeleteClientResolver,
    updateClient: actionResolvers.UpdateClientResolver,
    deleteManyClient: actionResolvers.DeleteManyClientResolver,
    updateManyClient: actionResolvers.UpdateManyClientResolver,
    upsertClient: actionResolvers.UpsertClientResolver,
    aggregateClient: actionResolvers.AggregateClientResolver,
    groupByClient: actionResolvers.GroupByClientResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    createManyPost: actionResolvers.CreateManyPostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver,
    groupByPost: actionResolvers.GroupByPostResolver
  },
  Category: {
    category: actionResolvers.FindUniqueCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    createCategory: actionResolvers.CreateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    deleteCategory: actionResolvers.DeleteCategoryResolver,
    updateCategory: actionResolvers.UpdateCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    upsertCategory: actionResolvers.UpsertCategoryResolver,
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver
  },
  Patient: {
    patient: actionResolvers.FindUniquePatientResolver,
    findFirstPatient: actionResolvers.FindFirstPatientResolver,
    patients: actionResolvers.FindManyPatientResolver,
    createPatient: actionResolvers.CreatePatientResolver,
    createManyPatient: actionResolvers.CreateManyPatientResolver,
    deletePatient: actionResolvers.DeletePatientResolver,
    updatePatient: actionResolvers.UpdatePatientResolver,
    deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
    updateManyPatient: actionResolvers.UpdateManyPatientResolver,
    upsertPatient: actionResolvers.UpsertPatientResolver,
    aggregatePatient: actionResolvers.AggregatePatientResolver,
    groupByPatient: actionResolvers.GroupByPatientResolver
  },
  Movie: {
    movie: actionResolvers.FindUniqueMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    movies: actionResolvers.FindManyMovieResolver,
    createMovie: actionResolvers.CreateMovieResolver,
    createManyMovie: actionResolvers.CreateManyMovieResolver,
    deleteMovie: actionResolvers.DeleteMovieResolver,
    updateMovie: actionResolvers.UpdateMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    upsertMovie: actionResolvers.UpsertMovieResolver,
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver
  },
  Director: {
    director: actionResolvers.FindUniqueDirectorResolver,
    findFirstDirector: actionResolvers.FindFirstDirectorResolver,
    directors: actionResolvers.FindManyDirectorResolver,
    createDirector: actionResolvers.CreateDirectorResolver,
    createManyDirector: actionResolvers.CreateManyDirectorResolver,
    deleteDirector: actionResolvers.DeleteDirectorResolver,
    updateDirector: actionResolvers.UpdateDirectorResolver,
    deleteManyDirector: actionResolvers.DeleteManyDirectorResolver,
    updateManyDirector: actionResolvers.UpdateManyDirectorResolver,
    upsertDirector: actionResolvers.UpsertDirectorResolver,
    aggregateDirector: actionResolvers.AggregateDirectorResolver,
    groupByDirector: actionResolvers.GroupByDirectorResolver
  },
  Problem: {
    problem: actionResolvers.FindUniqueProblemResolver,
    findFirstProblem: actionResolvers.FindFirstProblemResolver,
    problems: actionResolvers.FindManyProblemResolver,
    createProblem: actionResolvers.CreateProblemResolver,
    createManyProblem: actionResolvers.CreateManyProblemResolver,
    deleteProblem: actionResolvers.DeleteProblemResolver,
    updateProblem: actionResolvers.UpdateProblemResolver,
    deleteManyProblem: actionResolvers.DeleteManyProblemResolver,
    updateManyProblem: actionResolvers.UpdateManyProblemResolver,
    upsertProblem: actionResolvers.UpsertProblemResolver,
    aggregateProblem: actionResolvers.AggregateProblemResolver,
    groupByProblem: actionResolvers.GroupByProblemResolver
  },
  Creator: {
    creator: actionResolvers.FindUniqueCreatorResolver,
    findFirstCreator: actionResolvers.FindFirstCreatorResolver,
    creators: actionResolvers.FindManyCreatorResolver,
    createCreator: actionResolvers.CreateCreatorResolver,
    createManyCreator: actionResolvers.CreateManyCreatorResolver,
    deleteCreator: actionResolvers.DeleteCreatorResolver,
    updateCreator: actionResolvers.UpdateCreatorResolver,
    deleteManyCreator: actionResolvers.DeleteManyCreatorResolver,
    updateManyCreator: actionResolvers.UpdateManyCreatorResolver,
    upsertCreator: actionResolvers.UpsertCreatorResolver,
    aggregateCreator: actionResolvers.AggregateCreatorResolver,
    groupByCreator: actionResolvers.GroupByCreatorResolver
  },
  NativeTypeModel: {
    nativeTypeModel: actionResolvers.FindUniqueNativeTypeModelResolver,
    findFirstNativeTypeModel: actionResolvers.FindFirstNativeTypeModelResolver,
    nativeTypeModels: actionResolvers.FindManyNativeTypeModelResolver,
    createNativeTypeModel: actionResolvers.CreateNativeTypeModelResolver,
    createManyNativeTypeModel: actionResolvers.CreateManyNativeTypeModelResolver,
    deleteNativeTypeModel: actionResolvers.DeleteNativeTypeModelResolver,
    updateNativeTypeModel: actionResolvers.UpdateNativeTypeModelResolver,
    deleteManyNativeTypeModel: actionResolvers.DeleteManyNativeTypeModelResolver,
    updateManyNativeTypeModel: actionResolvers.UpdateManyNativeTypeModelResolver,
    upsertNativeTypeModel: actionResolvers.UpsertNativeTypeModelResolver,
    aggregateNativeTypeModel: actionResolvers.AggregateNativeTypeModelResolver,
    groupByNativeTypeModel: actionResolvers.GroupByNativeTypeModelResolver
  }
};
const resolversInfo = {
  Client: ["client", "findFirstClient", "clients", "createClient", "createManyClient", "deleteClient", "updateClient", "deleteManyClient", "updateManyClient", "upsertClient", "aggregateClient", "groupByClient"],
  Post: ["post", "findFirstPost", "posts", "createPost", "createManyPost", "deletePost", "updatePost", "deleteManyPost", "updateManyPost", "upsertPost", "aggregatePost", "groupByPost"],
  Category: ["category", "findFirstCategory", "categories", "createCategory", "createManyCategory", "deleteCategory", "updateCategory", "deleteManyCategory", "updateManyCategory", "upsertCategory", "aggregateCategory", "groupByCategory"],
  Patient: ["patient", "findFirstPatient", "patients", "createPatient", "createManyPatient", "deletePatient", "updatePatient", "deleteManyPatient", "updateManyPatient", "upsertPatient", "aggregatePatient", "groupByPatient"],
  Movie: ["movie", "findFirstMovie", "movies", "createMovie", "createManyMovie", "deleteMovie", "updateMovie", "deleteManyMovie", "updateManyMovie", "upsertMovie", "aggregateMovie", "groupByMovie"],
  Director: ["director", "findFirstDirector", "directors", "createDirector", "createManyDirector", "deleteDirector", "updateDirector", "deleteManyDirector", "updateManyDirector", "upsertDirector", "aggregateDirector", "groupByDirector"],
  Problem: ["problem", "findFirstProblem", "problems", "createProblem", "createManyProblem", "deleteProblem", "updateProblem", "deleteManyProblem", "updateManyProblem", "upsertProblem", "aggregateProblem", "groupByProblem"],
  Creator: ["creator", "findFirstCreator", "creators", "createCreator", "createManyCreator", "deleteCreator", "updateCreator", "deleteManyCreator", "updateManyCreator", "upsertCreator", "aggregateCreator", "groupByCreator"],
  NativeTypeModel: ["nativeTypeModel", "findFirstNativeTypeModel", "nativeTypeModels", "createNativeTypeModel", "createManyNativeTypeModel", "deleteNativeTypeModel", "updateNativeTypeModel", "deleteManyNativeTypeModel", "updateManyNativeTypeModel", "upsertNativeTypeModel", "aggregateNativeTypeModel", "groupByNativeTypeModel"]
};
const relationResolversInfo = {
  Client: ["posts"],
  Post: ["author"],
  Movie: ["director"],
  Director: ["movies"],
  Problem: ["likedBy", "creator"],
  Creator: ["likes", "problems"]
};
const modelsInfo = {
  Client: ["id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  Post: ["uuid", "createdAt", "updatedAt", "published", "title", "content", "authorId", "kind", "metadata"],
  Category: ["name", "slug", "number"],
  Patient: ["firstName", "lastName", "email"],
  Movie: ["directorFirstName", "directorLastName", "title"],
  Director: ["firstName", "lastName"],
  Problem: ["id", "problemText", "creatorId"],
  Creator: ["id", "name"],
  NativeTypeModel: ["id", "bigInt", "byteA", "decimal"]
};
const inputsInfo = {
  ClientWhereInput: ["AND", "OR", "NOT", "id", "email", "firstName", "age", "accountBalance", "amount", "clientPosts", "role", "editorPosts"],
  ClientOrderByInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  ClientWhereUniqueInput: ["id", "email"],
  ClientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  PostWhereInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "author", "authorId", "editor", "editorId", "kind", "metadata"],
  PostOrderByInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "author", "authorId", "editor", "editorId", "kind", "metadata"],
  PostWhereUniqueInput: ["uuid"],
  PostScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  CategoryWhereInput: ["AND", "OR", "NOT", "name", "slug", "number"],
  CategoryOrderByInput: ["name", "slug", "number"],
  CategoryWhereUniqueInput: ["slug_number"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "name", "slug", "number"],
  PatientWhereInput: ["AND", "OR", "NOT", "firstName", "lastName", "email"],
  PatientOrderByInput: ["firstName", "lastName", "email"],
  PatientWhereUniqueInput: ["firstName_lastName"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "firstName", "lastName", "email"],
  MovieWhereInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "director", "title"],
  MovieOrderByInput: ["directorFirstName", "directorLastName", "director", "title"],
  MovieWhereUniqueInput: ["directorFirstName_directorLastName_title"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "title"],
  DirectorWhereInput: ["AND", "OR", "NOT", "firstName", "lastName", "movies"],
  DirectorOrderByInput: ["firstName", "lastName"],
  DirectorWhereUniqueInput: ["firstName_lastName"],
  DirectorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "firstName", "lastName"],
  ProblemWhereInput: ["AND", "OR", "NOT", "id", "problemText", "likedBy", "creator", "creatorId"],
  ProblemOrderByInput: ["id", "problemText", "creator", "creatorId"],
  ProblemWhereUniqueInput: ["id"],
  ProblemScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "problemText", "creatorId"],
  CreatorWhereInput: ["AND", "OR", "NOT", "id", "name", "likes", "problems"],
  CreatorOrderByInput: ["id", "name"],
  CreatorWhereUniqueInput: ["id"],
  CreatorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  NativeTypeModelWhereInput: ["AND", "OR", "NOT", "id", "bigInt", "byteA", "decimal"],
  NativeTypeModelOrderByInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelWhereUniqueInput: ["id"],
  NativeTypeModelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "bigInt", "byteA", "decimal"],
  ClientCreateInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "clientPosts", "editorPosts"],
  ClientUpdateInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "clientPosts", "editorPosts"],
  ClientCreateManyInput: ["id", "email", "firstName", "age", "accountBalance", "amount", "role"],
  ClientUpdateManyMutationInput: ["email", "firstName", "age", "accountBalance", "amount", "role"],
  PostCreateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author", "editor"],
  PostUpdateInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author", "editor"],
  PostCreateManyInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  PostUpdateManyMutationInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata"],
  CategoryCreateInput: ["name", "slug", "number"],
  CategoryUpdateInput: ["name", "slug", "number"],
  CategoryCreateManyInput: ["name", "slug", "number"],
  CategoryUpdateManyMutationInput: ["name", "slug", "number"],
  PatientCreateInput: ["firstName", "lastName", "email"],
  PatientUpdateInput: ["firstName", "lastName", "email"],
  PatientCreateManyInput: ["firstName", "lastName", "email"],
  PatientUpdateManyMutationInput: ["firstName", "lastName", "email"],
  MovieCreateInput: ["title", "director"],
  MovieUpdateInput: ["title", "director"],
  MovieCreateManyInput: ["directorFirstName", "directorLastName", "title"],
  MovieUpdateManyMutationInput: ["title"],
  DirectorCreateInput: ["firstName", "lastName", "movies"],
  DirectorUpdateInput: ["firstName", "lastName", "movies"],
  DirectorCreateManyInput: ["firstName", "lastName"],
  DirectorUpdateManyMutationInput: ["firstName", "lastName"],
  ProblemCreateInput: ["problemText", "likedBy", "creator"],
  ProblemUpdateInput: ["problemText", "likedBy", "creator"],
  ProblemCreateManyInput: ["id", "problemText", "creatorId"],
  ProblemUpdateManyMutationInput: ["problemText"],
  CreatorCreateInput: ["name", "likes", "problems"],
  CreatorUpdateInput: ["name", "likes", "problems"],
  CreatorCreateManyInput: ["id", "name"],
  CreatorUpdateManyMutationInput: ["name"],
  NativeTypeModelCreateInput: ["bigInt", "byteA", "decimal"],
  NativeTypeModelUpdateInput: ["bigInt", "byteA", "decimal"],
  NativeTypeModelCreateManyInput: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelUpdateManyMutationInput: ["bigInt", "byteA", "decimal"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PostListRelationFilter: ["every", "some", "none"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "count", "min", "max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  ClientRelationFilter: ["is", "isNot"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumPostKindNullableFilter: ["equals", "in", "notIn", "not"],
  JsonFilter: ["equals", "not"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  BoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  EnumPostKindNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  JsonWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  CategorySlugNumberCompoundUniqueInput: ["slug", "number"],
  PatientFirstNameLastNameCompoundUniqueInput: ["firstName", "lastName"],
  DirectorRelationFilter: ["is", "isNot"],
  MovieDirectorFirstNameDirectorLastNameTitleCompoundUniqueInput: ["directorFirstName", "directorLastName", "title"],
  MovieListRelationFilter: ["every", "some", "none"],
  DirectorFirstNameLastNameCompoundUniqueInput: ["firstName", "lastName"],
  CreatorListRelationFilter: ["every", "some", "none"],
  CreatorRelationFilter: ["is", "isNot"],
  ProblemListRelationFilter: ["every", "some", "none"],
  BigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BytesNullableFilter: ["equals", "not"],
  DecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  BytesNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  DecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  PostCreateNestedManyWithoutAuthorInput: ["create", "connectOrCreate", "createMany", "connect"],
  PostCreateNestedManyWithoutEditorInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  PostUpdateManyWithoutAuthorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  PostUpdateManyWithoutEditorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ClientCreateNestedOneWithoutPostsInput: ["create", "connectOrCreate", "connect"],
  ClientCreateNestedOneWithoutEditorPostsInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableEnumPostKindFieldUpdateOperationsInput: ["set"],
  ClientUpdateOneRequiredWithoutPostsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ClientUpdateOneWithoutEditorPostsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  DirectorCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  DirectorUpdateOneRequiredWithoutMoviesInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCreateNestedManyWithoutDirectorInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieUpdateManyWithoutDirectorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CreatorCreateNestedManyWithoutLikesInput: ["create", "connectOrCreate", "connect"],
  CreatorCreateNestedOneWithoutProblemsInput: ["create", "connectOrCreate", "connect"],
  CreatorUpdateManyWithoutLikesInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  CreatorUpdateOneWithoutProblemsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ProblemCreateNestedManyWithoutLikedByInput: ["create", "connectOrCreate", "connect"],
  ProblemCreateNestedManyWithoutCreatorInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProblemUpdateManyWithoutLikedByInput: ["create", "connectOrCreate", "upsert", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProblemUpdateManyWithoutCreatorInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NullableBigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableBytesFieldUpdateOperationsInput: ["set"],
  NullableDecimalFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "count", "min", "max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedEnumPostKindNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "min", "max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumPostKindNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "count", "min", "max"],
  NestedJsonFilter: ["equals", "not"],
  NestedBigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBytesNullableFilter: ["equals", "not"],
  NestedDecimalNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  NestedBytesNullableWithAggregatesFilter: ["equals", "not", "count", "min", "max"],
  NestedDecimalNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "count", "avg", "sum", "min", "max"],
  PostCreateWithoutAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "editor"],
  PostCreateOrConnectWithoutAuthorInput: ["where", "create"],
  PostCreateManyAuthorInputEnvelope: ["data", "skipDuplicates"],
  PostCreateWithoutEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author"],
  PostCreateOrConnectWithoutEditorInput: ["where", "create"],
  PostCreateManyEditorInputEnvelope: ["data", "skipDuplicates"],
  PostUpsertWithWhereUniqueWithoutAuthorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutAuthorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutAuthorInput: ["where", "data"],
  PostScalarWhereInput: ["AND", "OR", "NOT", "uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata"],
  PostUpsertWithWhereUniqueWithoutEditorInput: ["where", "update", "create"],
  PostUpdateWithWhereUniqueWithoutEditorInput: ["where", "data"],
  PostUpdateManyWithWhereWithoutEditorInput: ["where", "data"],
  ClientCreateWithoutPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "editorPosts"],
  ClientCreateOrConnectWithoutPostsInput: ["where", "create"],
  ClientCreateWithoutEditorPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "clientPosts"],
  ClientCreateOrConnectWithoutEditorPostsInput: ["where", "create"],
  ClientUpsertWithoutPostsInput: ["update", "create"],
  ClientUpdateWithoutPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "editorPosts"],
  ClientUpsertWithoutEditorPostsInput: ["update", "create"],
  ClientUpdateWithoutEditorPostsInput: ["email", "firstName", "age", "accountBalance", "amount", "role", "clientPosts"],
  DirectorCreateWithoutMoviesInput: ["firstName", "lastName"],
  DirectorCreateOrConnectWithoutMoviesInput: ["where", "create"],
  DirectorUpsertWithoutMoviesInput: ["update", "create"],
  DirectorUpdateWithoutMoviesInput: ["firstName", "lastName"],
  MovieCreateWithoutDirectorInput: ["title"],
  MovieCreateOrConnectWithoutDirectorInput: ["where", "create"],
  MovieCreateManyDirectorInputEnvelope: ["data", "skipDuplicates"],
  MovieUpsertWithWhereUniqueWithoutDirectorInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutDirectorInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutDirectorInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "directorFirstName", "directorLastName", "title"],
  CreatorCreateWithoutLikesInput: ["name", "problems"],
  CreatorCreateOrConnectWithoutLikesInput: ["where", "create"],
  CreatorCreateWithoutProblemsInput: ["name", "likes"],
  CreatorCreateOrConnectWithoutProblemsInput: ["where", "create"],
  CreatorUpsertWithWhereUniqueWithoutLikesInput: ["where", "update", "create"],
  CreatorUpdateWithWhereUniqueWithoutLikesInput: ["where", "data"],
  CreatorUpdateManyWithWhereWithoutLikesInput: ["where", "data"],
  CreatorScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  CreatorUpsertWithoutProblemsInput: ["update", "create"],
  CreatorUpdateWithoutProblemsInput: ["name", "likes"],
  ProblemCreateWithoutLikedByInput: ["problemText", "creator"],
  ProblemCreateOrConnectWithoutLikedByInput: ["where", "create"],
  ProblemCreateWithoutCreatorInput: ["problemText", "likedBy"],
  ProblemCreateOrConnectWithoutCreatorInput: ["where", "create"],
  ProblemCreateManyCreatorInputEnvelope: ["data", "skipDuplicates"],
  ProblemUpsertWithWhereUniqueWithoutLikedByInput: ["where", "update", "create"],
  ProblemUpdateWithWhereUniqueWithoutLikedByInput: ["where", "data"],
  ProblemUpdateManyWithWhereWithoutLikedByInput: ["where", "data"],
  ProblemScalarWhereInput: ["AND", "OR", "NOT", "id", "problemText", "creatorId"],
  ProblemUpsertWithWhereUniqueWithoutCreatorInput: ["where", "update", "create"],
  ProblemUpdateWithWhereUniqueWithoutCreatorInput: ["where", "data"],
  ProblemUpdateManyWithWhereWithoutCreatorInput: ["where", "data"],
  PostCreateManyAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "editorId", "kind", "metadata"],
  PostCreateManyEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "kind", "metadata"],
  PostUpdateWithoutAuthorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "editor"],
  PostUpdateWithoutEditorInput: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "kind", "metadata", "author"],
  MovieCreateManyDirectorInput: ["title"],
  MovieUpdateWithoutDirectorInput: ["title"],
  CreatorUpdateWithoutLikesInput: ["name", "problems"],
  ProblemCreateManyCreatorInput: ["id", "problemText"],
  ProblemUpdateWithoutLikedByInput: ["problemText", "creator"],
  ProblemUpdateWithoutCreatorInput: ["problemText", "likedBy"]
};
const outputsInfo = {
  Query: ["findFirstUser", "findManyUser", "aggregateUser", "groupByUser", "findUniqueUser", "findFirstpost", "findManypost", "aggregatepost", "groupBypost", "findUniquepost", "findFirstCategory", "findManyCategory", "aggregateCategory", "groupByCategory", "findUniqueCategory", "findFirstPatient", "findManyPatient", "aggregatePatient", "groupByPatient", "findUniquePatient", "findFirstMovie", "findManyMovie", "aggregateMovie", "groupByMovie", "findUniqueMovie", "findFirstDirector", "findManyDirector", "aggregateDirector", "groupByDirector", "findUniqueDirector", "findFirstProblem", "findManyProblem", "aggregateProblem", "groupByProblem", "findUniqueProblem", "findFirstCreator", "findManyCreator", "aggregateCreator", "groupByCreator", "findUniqueCreator", "findFirstNativeTypeModel", "findManyNativeTypeModel", "aggregateNativeTypeModel", "groupByNativeTypeModel", "findUniqueNativeTypeModel"],
  Mutation: ["createOneUser", "upsertOneUser", "createManyUser", "deleteOneUser", "updateOneUser", "updateManyUser", "deleteManyUser", "createOnepost", "upsertOnepost", "createManypost", "deleteOnepost", "updateOnepost", "updateManypost", "deleteManypost", "createOneCategory", "upsertOneCategory", "createManyCategory", "deleteOneCategory", "updateOneCategory", "updateManyCategory", "deleteManyCategory", "createOnePatient", "upsertOnePatient", "createManyPatient", "deleteOnePatient", "updateOnePatient", "updateManyPatient", "deleteManyPatient", "createOneMovie", "upsertOneMovie", "createManyMovie", "deleteOneMovie", "updateOneMovie", "updateManyMovie", "deleteManyMovie", "createOneDirector", "upsertOneDirector", "createManyDirector", "deleteOneDirector", "updateOneDirector", "updateManyDirector", "deleteManyDirector", "createOneProblem", "upsertOneProblem", "createManyProblem", "deleteOneProblem", "updateOneProblem", "updateManyProblem", "deleteManyProblem", "createOneCreator", "upsertOneCreator", "createManyCreator", "deleteOneCreator", "updateOneCreator", "updateManyCreator", "deleteManyCreator", "createOneNativeTypeModel", "upsertOneNativeTypeModel", "createManyNativeTypeModel", "deleteOneNativeTypeModel", "updateOneNativeTypeModel", "updateManyNativeTypeModel", "deleteManyNativeTypeModel", "executeRaw", "queryRaw"],
  AggregateClient: ["count", "avg", "sum", "min", "max"],
  ClientGroupBy: ["id", "email", "name", "age", "balance", "amount", "role", "count", "avg", "sum", "min", "max"],
  AggregatePost: ["count", "avg", "sum", "min", "max"],
  PostGroupBy: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "count", "avg", "sum", "min", "max"],
  AggregateCategory: ["count", "avg", "sum", "min", "max"],
  CategoryGroupBy: ["name", "slug", "number", "count", "avg", "sum", "min", "max"],
  AggregatePatient: ["count", "min", "max"],
  PatientGroupBy: ["firstName", "lastName", "email", "count", "min", "max"],
  AggregateMovie: ["count", "min", "max"],
  MovieGroupBy: ["directorFirstName", "directorLastName", "title", "count", "min", "max"],
  AggregateDirector: ["count", "min", "max"],
  DirectorGroupBy: ["firstName", "lastName", "count", "min", "max"],
  AggregateProblem: ["count", "avg", "sum", "min", "max"],
  ProblemGroupBy: ["id", "problemText", "creatorId", "count", "avg", "sum", "min", "max"],
  AggregateCreator: ["count", "avg", "sum", "min", "max"],
  CreatorGroupBy: ["id", "name", "count", "avg", "sum", "min", "max"],
  AggregateNativeTypeModel: ["count", "avg", "sum", "min", "max"],
  NativeTypeModelGroupBy: ["id", "bigInt", "byteA", "decimal", "count", "avg", "sum", "min", "max"],
  AffectedRowsOutput: ["count"],
  ClientCountAggregate: ["id", "email", "name", "age", "balance", "amount", "role", "_all"],
  ClientAvgAggregate: ["id", "age", "balance", "amount"],
  ClientSumAggregate: ["id", "age", "balance", "amount"],
  ClientMinAggregate: ["id", "email", "name", "age", "balance", "amount", "role"],
  ClientMaxAggregate: ["id", "email", "name", "age", "balance", "amount", "role"],
  PostCountAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind", "metadata", "_all"],
  PostAvgAggregate: ["authorId", "editorId"],
  PostSumAggregate: ["authorId", "editorId"],
  PostMinAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  PostMaxAggregate: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "authorId", "editorId", "kind"],
  CategoryCountAggregate: ["name", "slug", "number", "_all"],
  CategoryAvgAggregate: ["number"],
  CategorySumAggregate: ["number"],
  CategoryMinAggregate: ["name", "slug", "number"],
  CategoryMaxAggregate: ["name", "slug", "number"],
  PatientCountAggregate: ["firstName", "lastName", "email", "_all"],
  PatientMinAggregate: ["firstName", "lastName", "email"],
  PatientMaxAggregate: ["firstName", "lastName", "email"],
  MovieCountAggregate: ["directorFirstName", "directorLastName", "title", "_all"],
  MovieMinAggregate: ["directorFirstName", "directorLastName", "title"],
  MovieMaxAggregate: ["directorFirstName", "directorLastName", "title"],
  DirectorCountAggregate: ["firstName", "lastName", "_all"],
  DirectorMinAggregate: ["firstName", "lastName"],
  DirectorMaxAggregate: ["firstName", "lastName"],
  ProblemCountAggregate: ["id", "problemText", "creatorId", "_all"],
  ProblemAvgAggregate: ["id", "creatorId"],
  ProblemSumAggregate: ["id", "creatorId"],
  ProblemMinAggregate: ["id", "problemText", "creatorId"],
  ProblemMaxAggregate: ["id", "problemText", "creatorId"],
  CreatorCountAggregate: ["id", "name", "_all"],
  CreatorAvgAggregate: ["id"],
  CreatorSumAggregate: ["id"],
  CreatorMinAggregate: ["id", "name"],
  CreatorMaxAggregate: ["id", "name"],
  NativeTypeModelCountAggregate: ["id", "bigInt", "byteA", "decimal", "_all"],
  NativeTypeModelAvgAggregate: ["id", "bigInt", "decimal"],
  NativeTypeModelSumAggregate: ["id", "bigInt", "decimal"],
  NativeTypeModelMinAggregate: ["id", "bigInt", "byteA", "decimal"],
  NativeTypeModelMaxAggregate: ["id", "bigInt", "byteA", "decimal"],
  User: ["id", "email", "name", "age", "balance", "amount", "posts", "role", "editorPosts"],
  post: ["uuid", "createdAt", "updatedAt", "published", "title", "subtitle", "content", "author", "authorId", "editor", "editorId", "kind", "metadata"],
  Category: ["name", "slug", "number"],
  Patient: ["firstName", "lastName", "email"],
  Movie: ["directorFirstName", "directorLastName", "director", "title"],
  Director: ["firstName", "lastName", "movies"],
  Problem: ["id", "problemText", "likedBy", "creator", "creatorId"],
  Creator: ["id", "name", "likes", "problems"],
  NativeTypeModel: ["id", "bigInt", "byteA", "decimal"]
};
const argsInfo = {
  FindUniqueClientArgs: ["where"],
  FindFirstClientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyClientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateClientArgs: ["data"],
  CreateManyClientArgs: ["data", "skipDuplicates"],
  DeleteClientArgs: ["where"],
  UpdateClientArgs: ["data", "where"],
  DeleteManyClientArgs: ["where"],
  UpdateManyClientArgs: ["data", "where"],
  UpsertClientArgs: ["where", "create", "update"],
  AggregateClientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByClientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePostArgs: ["where"],
  FindFirstPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPostArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePostArgs: ["data"],
  CreateManyPostArgs: ["data", "skipDuplicates"],
  DeletePostArgs: ["where"],
  UpdatePostArgs: ["data", "where"],
  DeleteManyPostArgs: ["where"],
  UpdateManyPostArgs: ["data", "where"],
  UpsertPostArgs: ["where", "create", "update"],
  AggregatePostArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPostArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCategoryArgs: ["data"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  DeleteCategoryArgs: ["where"],
  UpdateCategoryArgs: ["data", "where"],
  DeleteManyCategoryArgs: ["where"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpsertCategoryArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniquePatientArgs: ["where"],
  FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreatePatientArgs: ["data"],
  CreateManyPatientArgs: ["data", "skipDuplicates"],
  DeletePatientArgs: ["where"],
  UpdatePatientArgs: ["data", "where"],
  DeleteManyPatientArgs: ["where"],
  UpdateManyPatientArgs: ["data", "where"],
  UpsertPatientArgs: ["where", "create", "update"],
  AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMovieArgs: ["data"],
  CreateManyMovieArgs: ["data", "skipDuplicates"],
  DeleteMovieArgs: ["where"],
  UpdateMovieArgs: ["data", "where"],
  DeleteManyMovieArgs: ["where"],
  UpdateManyMovieArgs: ["data", "where"],
  UpsertMovieArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueDirectorArgs: ["where"],
  FindFirstDirectorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyDirectorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateDirectorArgs: ["data"],
  CreateManyDirectorArgs: ["data", "skipDuplicates"],
  DeleteDirectorArgs: ["where"],
  UpdateDirectorArgs: ["data", "where"],
  DeleteManyDirectorArgs: ["where"],
  UpdateManyDirectorArgs: ["data", "where"],
  UpsertDirectorArgs: ["where", "create", "update"],
  AggregateDirectorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByDirectorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueProblemArgs: ["where"],
  FindFirstProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProblemArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProblemArgs: ["data"],
  CreateManyProblemArgs: ["data", "skipDuplicates"],
  DeleteProblemArgs: ["where"],
  UpdateProblemArgs: ["data", "where"],
  DeleteManyProblemArgs: ["where"],
  UpdateManyProblemArgs: ["data", "where"],
  UpsertProblemArgs: ["where", "create", "update"],
  AggregateProblemArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProblemArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueCreatorArgs: ["where"],
  FindFirstCreatorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCreatorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateCreatorArgs: ["data"],
  CreateManyCreatorArgs: ["data", "skipDuplicates"],
  DeleteCreatorArgs: ["where"],
  UpdateCreatorArgs: ["data", "where"],
  DeleteManyCreatorArgs: ["where"],
  UpdateManyCreatorArgs: ["data", "where"],
  UpsertCreatorArgs: ["where", "create", "update"],
  AggregateCreatorArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByCreatorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueNativeTypeModelArgs: ["where"],
  FindFirstNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateNativeTypeModelArgs: ["data"],
  CreateManyNativeTypeModelArgs: ["data", "skipDuplicates"],
  DeleteNativeTypeModelArgs: ["where"],
  UpdateNativeTypeModelArgs: ["data", "where"],
  DeleteManyNativeTypeModelArgs: ["where"],
  UpdateManyNativeTypeModelArgs: ["data", "where"],
  UpsertNativeTypeModelArgs: ["where", "create", "update"],
  AggregateNativeTypeModelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByNativeTypeModelArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







