import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";

const crudResolversMap = {
  Client: crudResolvers.ClientCrudResolver,
  Post: crudResolvers.PostCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  Director: crudResolvers.DirectorCrudResolver,
  Problem: crudResolvers.ProblemCrudResolver,
  Creator: crudResolvers.CreatorCrudResolver
};
const actionResolversMap = {
  Client: {
    client: actionResolvers.FindUniqueClientResolver,
    findFirstClient: actionResolvers.FindFirstClientResolver,
    clients: actionResolvers.FindManyClientResolver,
    createClient: actionResolvers.CreateClientResolver,
    deleteClient: actionResolvers.DeleteClientResolver,
    updateClient: actionResolvers.UpdateClientResolver,
    deleteManyClient: actionResolvers.DeleteManyClientResolver,
    updateManyClient: actionResolvers.UpdateManyClientResolver,
    upsertClient: actionResolvers.UpsertClientResolver,
    aggregateClient: actionResolvers.AggregateClientResolver
  },
  Post: {
    post: actionResolvers.FindUniquePostResolver,
    findFirstPost: actionResolvers.FindFirstPostResolver,
    posts: actionResolvers.FindManyPostResolver,
    createPost: actionResolvers.CreatePostResolver,
    deletePost: actionResolvers.DeletePostResolver,
    updatePost: actionResolvers.UpdatePostResolver,
    deleteManyPost: actionResolvers.DeleteManyPostResolver,
    updateManyPost: actionResolvers.UpdateManyPostResolver,
    upsertPost: actionResolvers.UpsertPostResolver,
    aggregatePost: actionResolvers.AggregatePostResolver
  },
  Category: {
    category: actionResolvers.FindUniqueCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    createCategory: actionResolvers.CreateCategoryResolver,
    deleteCategory: actionResolvers.DeleteCategoryResolver,
    updateCategory: actionResolvers.UpdateCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    upsertCategory: actionResolvers.UpsertCategoryResolver,
    aggregateCategory: actionResolvers.AggregateCategoryResolver
  },
  Patient: {
    patient: actionResolvers.FindUniquePatientResolver,
    findFirstPatient: actionResolvers.FindFirstPatientResolver,
    patients: actionResolvers.FindManyPatientResolver,
    createPatient: actionResolvers.CreatePatientResolver,
    deletePatient: actionResolvers.DeletePatientResolver,
    updatePatient: actionResolvers.UpdatePatientResolver,
    deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
    updateManyPatient: actionResolvers.UpdateManyPatientResolver,
    upsertPatient: actionResolvers.UpsertPatientResolver,
    aggregatePatient: actionResolvers.AggregatePatientResolver
  },
  Movie: {
    movie: actionResolvers.FindUniqueMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    movies: actionResolvers.FindManyMovieResolver,
    createMovie: actionResolvers.CreateMovieResolver,
    deleteMovie: actionResolvers.DeleteMovieResolver,
    updateMovie: actionResolvers.UpdateMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    upsertMovie: actionResolvers.UpsertMovieResolver,
    aggregateMovie: actionResolvers.AggregateMovieResolver
  },
  Director: {
    director: actionResolvers.FindUniqueDirectorResolver,
    findFirstDirector: actionResolvers.FindFirstDirectorResolver,
    directors: actionResolvers.FindManyDirectorResolver,
    createDirector: actionResolvers.CreateDirectorResolver,
    deleteDirector: actionResolvers.DeleteDirectorResolver,
    updateDirector: actionResolvers.UpdateDirectorResolver,
    deleteManyDirector: actionResolvers.DeleteManyDirectorResolver,
    updateManyDirector: actionResolvers.UpdateManyDirectorResolver,
    upsertDirector: actionResolvers.UpsertDirectorResolver,
    aggregateDirector: actionResolvers.AggregateDirectorResolver
  },
  Problem: {
    problem: actionResolvers.FindUniqueProblemResolver,
    findFirstProblem: actionResolvers.FindFirstProblemResolver,
    problems: actionResolvers.FindManyProblemResolver,
    createProblem: actionResolvers.CreateProblemResolver,
    deleteProblem: actionResolvers.DeleteProblemResolver,
    updateProblem: actionResolvers.UpdateProblemResolver,
    deleteManyProblem: actionResolvers.DeleteManyProblemResolver,
    updateManyProblem: actionResolvers.UpdateManyProblemResolver,
    upsertProblem: actionResolvers.UpsertProblemResolver,
    aggregateProblem: actionResolvers.AggregateProblemResolver
  },
  Creator: {
    creator: actionResolvers.FindUniqueCreatorResolver,
    findFirstCreator: actionResolvers.FindFirstCreatorResolver,
    creators: actionResolvers.FindManyCreatorResolver,
    createCreator: actionResolvers.CreateCreatorResolver,
    deleteCreator: actionResolvers.DeleteCreatorResolver,
    updateCreator: actionResolvers.UpdateCreatorResolver,
    deleteManyCreator: actionResolvers.DeleteManyCreatorResolver,
    updateManyCreator: actionResolvers.UpdateManyCreatorResolver,
    upsertCreator: actionResolvers.UpsertCreatorResolver,
    aggregateCreator: actionResolvers.AggregateCreatorResolver
  }
};

type ModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    for (const modelResolverActionName of Object.keys(resolverActionsConfig)) {
      const decorators = resolverActionsConfig[
        modelResolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const crudTarget = crudResolversMap[modelName].prototype;
      const actionResolversConfig = actionResolversMap[modelName];
      const actionTarget = (actionResolversConfig[
        modelResolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, modelResolverActionName)!,
        );
        decorator(
          actionTarget,
          modelResolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, modelResolverActionName)!,
        );
      }
    }
  }
}

