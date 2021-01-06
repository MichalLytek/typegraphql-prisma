import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<TModel extends ResolverModelNames> = {
  [TActionName in ModelResolverActionNames<TModel>]?: MethodDecorator[];
};

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
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

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[]>
>;

export function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    for (const modelFieldName of Object.keys(enhanceConfig.fields)) {
      const decorators = enhanceConfig.fields[
        modelFieldName as keyof typeof enhanceConfig.fields
      ]!;

      for (const decorator of decorators) {
        decorator(typePrototype, modelFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

export type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
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
    applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget);
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TModel extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TModel]["prototype"],
  number | symbol
>;

export type OutputTypeFieldsConfig<
  TModel extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TModel>>;

export type OutputTypeConfig<TModel extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TModel>;
};

export type OutputTypesEnhanceMap = {
  [TModel in OutputTypesNames]?: OutputTypeConfig<TModel>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget);
  }
}




