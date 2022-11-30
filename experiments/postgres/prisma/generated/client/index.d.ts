
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * User model doc
 * @@TypeGraphQL.type(name: "MainUser")
 */
export type User = {
  /**
   * User model field doc
   */
  id: number
  email: string
  /**
   * renamed field doc
   * @TypeGraphQL.field(name: "firstName")
   */
  name: string | null
  age: number
  /**
   * @TypeGraphQL.field(name: "accountBalance")
   */
  balance: number
  amount: number
  role: Role
  grades: number[]
  aliases: string[]
}

/**
 * Model post
 * 
 */
export type post = {
  /**
   * first line of comment
   * second line of comment
   * third line of comment
   */
  uuid: string
  createdAt: Date
  /**
   * @TypeGraphQL.omit(input: ["create", "update"])
   */
  updatedAt: Date
  /**
   * @TypeGraphQL.omit(input: true)
   */
  published: boolean
  title: string
  /**
   * @TypeGraphQL.omit(output: true)
   */
  subtitle: string
  content: string | null
  authorId: number
  /**
   * @TypeGraphQL.omit(output: true)
   */
  editorId: number | null
  kind: PostKind | null
  metadata: Prisma.JsonValue
}

/**
 * Model Category
 * 
 */
export type Category = {
  name: string
  slug: string
  number: number
}

/**
 * Model Patient
 * 
 */
export type Patient = {
  firstName: string
  lastName: string
  email: string
}

/**
 * Model Movie
 * 
 */
export type Movie = {
  directorFirstName: string
  directorLastName: string
  title: string
}

/**
 * Model Director
 * 
 */
export type Director = {
  firstName: string
  lastName: string
}

/**
 * Model Problem
 * 
 */
export type Problem = {
  id: number
  problemText: string
  creatorId: number | null
}

/**
 * Model Creator
 * 
 */
export type Creator = {
  id: number
  name: string
}

/**
 * Model NativeTypeModel
 * 
 */
export type NativeTypeModel = {
  id: number
  bigInt: bigint | null
  byteA: Buffer | null
  decimal: Prisma.Decimal | null
}

/**
 * Model Equipment
 * @@TypeGraphQL.type(plural: "equipments")
 */
export type Equipment = {
  id: string
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const PostKind: {
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
};

export type PostKind = (typeof PostKind)[keyof typeof PostKind]


export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
  ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;


  $extends: { extArgs: ExtArgs } & (<
    R_User_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
    R_post_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.postSelectScalar, ExtArgs['result']['post']>>,
    R_Category_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
    R_Patient_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.PatientSelectScalar, ExtArgs['result']['patient']>>,
    R_Movie_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.MovieSelectScalar, ExtArgs['result']['movie']>>,
    R_Director_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.DirectorSelectScalar, ExtArgs['result']['director']>>,
    R_Problem_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.ProblemSelectScalar, ExtArgs['result']['problem']>>,
    R_Creator_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.CreatorSelectScalar, ExtArgs['result']['creator']>>,
    R_NativeTypeModel_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>>,
    R_Equipment_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.EquipmentSelectScalar, ExtArgs['result']['equipment']>>,
    R extends runtime.Types.Extensions.Args['result'] = {},
    M extends runtime.Types.Extensions.Args['model'] = {},
    Q extends runtime.Types.Extensions.Args['query'] = {},
    C extends runtime.Types.Extensions.Args['client'] = {},
    Args extends runtime.Types.Extensions.Args = { result: R, model: M, query: Q, client: C },
  >(extension: ((client: this) => { $extends: { extArgs: Args } }) | {
    name?: string,
    result?: R & {
      $allModels?: Record<string, {
        compute: (data: unknown) => unknown
      }>
      user?: {
        [K in keyof R_User_Needs]: {
          needs: R_User_Needs[K]
          compute: (data: Prisma.UserGetPayload<{ select: R_User_Needs[K] }, ExtArgs>) => unknown
        }
      }
      post?: {
        [K in keyof R_post_Needs]: {
          needs: R_post_Needs[K]
          compute: (data: Prisma.postGetPayload<{ select: R_post_Needs[K] }, ExtArgs>) => unknown
        }
      }
      category?: {
        [K in keyof R_Category_Needs]: {
          needs: R_Category_Needs[K]
          compute: (data: Prisma.CategoryGetPayload<{ select: R_Category_Needs[K] }, ExtArgs>) => unknown
        }
      }
      patient?: {
        [K in keyof R_Patient_Needs]: {
          needs: R_Patient_Needs[K]
          compute: (data: Prisma.PatientGetPayload<{ select: R_Patient_Needs[K] }, ExtArgs>) => unknown
        }
      }
      movie?: {
        [K in keyof R_Movie_Needs]: {
          needs: R_Movie_Needs[K]
          compute: (data: Prisma.MovieGetPayload<{ select: R_Movie_Needs[K] }, ExtArgs>) => unknown
        }
      }
      director?: {
        [K in keyof R_Director_Needs]: {
          needs: R_Director_Needs[K]
          compute: (data: Prisma.DirectorGetPayload<{ select: R_Director_Needs[K] }, ExtArgs>) => unknown
        }
      }
      problem?: {
        [K in keyof R_Problem_Needs]: {
          needs: R_Problem_Needs[K]
          compute: (data: Prisma.ProblemGetPayload<{ select: R_Problem_Needs[K] }, ExtArgs>) => unknown
        }
      }
      creator?: {
        [K in keyof R_Creator_Needs]: {
          needs: R_Creator_Needs[K]
          compute: (data: Prisma.CreatorGetPayload<{ select: R_Creator_Needs[K] }, ExtArgs>) => unknown
        }
      }
      nativeTypeModel?: {
        [K in keyof R_NativeTypeModel_Needs]: {
          needs: R_NativeTypeModel_Needs[K]
          compute: (data: Prisma.NativeTypeModelGetPayload<{ select: R_NativeTypeModel_Needs[K] }, ExtArgs>) => unknown
        }
      }
      equipment?: {
        [K in keyof R_Equipment_Needs]: {
          needs: R_Equipment_Needs[K]
          compute: (data: Prisma.EquipmentGetPayload<{ select: R_Equipment_Needs[K] }, ExtArgs>) => unknown
        }
      }
    }
    model?: M & {
      $allModels?: Record<string, unknown>
      user?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['user'] }
      post?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['post'] }
      category?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['category'] }
      patient?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['patient'] }
      movie?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['movie'] }
      director?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['director'] }
      problem?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['problem'] }
      creator?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['creator'] }
      nativeTypeModel?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['nativeTypeModel'] }
      equipment?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['equipment'] }
    }
    query?: {
      $allModels?: {
        [K in keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]?: (args: Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]['result']
      }
    } & {
      user?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['User']]?: (args: Prisma.TypeMap<ExtArgs>['User'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['User'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['User'][keyof Prisma.TypeMap<ExtArgs>['User']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['User'][keyof Prisma.TypeMap<ExtArgs>['User']]['result']
      }
      post?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['post']]?: (args: Prisma.TypeMap<ExtArgs>['post'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['post'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['post'][keyof Prisma.TypeMap<ExtArgs>['post']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['post'][keyof Prisma.TypeMap<ExtArgs>['post']]['result']
      }
      category?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Category']]?: (args: Prisma.TypeMap<ExtArgs>['Category'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Category'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Category'][keyof Prisma.TypeMap<ExtArgs>['Category']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Category'][keyof Prisma.TypeMap<ExtArgs>['Category']]['result']
      }
      patient?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Patient']]?: (args: Prisma.TypeMap<ExtArgs>['Patient'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Patient'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Patient'][keyof Prisma.TypeMap<ExtArgs>['Patient']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Patient'][keyof Prisma.TypeMap<ExtArgs>['Patient']]['result']
      }
      movie?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Movie']]?: (args: Prisma.TypeMap<ExtArgs>['Movie'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Movie'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Movie'][keyof Prisma.TypeMap<ExtArgs>['Movie']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Movie'][keyof Prisma.TypeMap<ExtArgs>['Movie']]['result']
      }
      director?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Director']]?: (args: Prisma.TypeMap<ExtArgs>['Director'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Director'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Director'][keyof Prisma.TypeMap<ExtArgs>['Director']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Director'][keyof Prisma.TypeMap<ExtArgs>['Director']]['result']
      }
      problem?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Problem']]?: (args: Prisma.TypeMap<ExtArgs>['Problem'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Problem'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Problem'][keyof Prisma.TypeMap<ExtArgs>['Problem']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Problem'][keyof Prisma.TypeMap<ExtArgs>['Problem']]['result']
      }
      creator?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Creator']]?: (args: Prisma.TypeMap<ExtArgs>['Creator'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Creator'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Creator'][keyof Prisma.TypeMap<ExtArgs>['Creator']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Creator'][keyof Prisma.TypeMap<ExtArgs>['Creator']]['result']
      }
      nativeTypeModel?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]?: (args: Prisma.TypeMap<ExtArgs>['NativeTypeModel'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['NativeTypeModel'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['NativeTypeModel'][keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['NativeTypeModel'][keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]['result']
      }
      equipment?: {
        [K in keyof Prisma.TypeMap<ExtArgs>['Equipment']]?: (args: Prisma.TypeMap<ExtArgs>['Equipment'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Equipment'][K]['result']
      } & {
        $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Equipment'][keyof Prisma.TypeMap<ExtArgs>['Equipment']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Equipment'][keyof Prisma.TypeMap<ExtArgs>['Equipment']]['result']
      }
    }
    client?: C & { [K: symbol]: runtime.Types.Extensions.GetClient<PrismaClient<never, never, false, ExtArgs>, ExtArgs['client'], {}> }
  })=> runtime.Types.Extensions.GetClient<PrismaClient<T, U, GlobalReject, runtime.Types.Extensions.MergeArgs<Args, ExtArgs, 'user' | 'post' | 'category' | 'patient' | 'movie' | 'director' | 'problem' | 'creator' | 'nativeTypeModel' | 'equipment'>>, Args['client'], ExtArgs['client']>);

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): runtime.Types.Extensions.GetModel<Prisma.UserDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['user']>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): runtime.Types.Extensions.GetModel<Prisma.postDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['post']>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): runtime.Types.Extensions.GetModel<Prisma.CategoryDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['category']>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): runtime.Types.Extensions.GetModel<Prisma.PatientDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['patient']>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): runtime.Types.Extensions.GetModel<Prisma.MovieDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['movie']>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): runtime.Types.Extensions.GetModel<Prisma.DirectorDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['director']>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): runtime.Types.Extensions.GetModel<Prisma.ProblemDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['problem']>;

  /**
   * `prisma.creator`: Exposes CRUD operations for the **Creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): runtime.Types.Extensions.GetModel<Prisma.CreatorDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['creator']>;

  /**
   * `prisma.nativeTypeModel`: Exposes CRUD operations for the **NativeTypeModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NativeTypeModels
    * const nativeTypeModels = await prisma.nativeTypeModel.findMany()
    * ```
    */
  get nativeTypeModel(): runtime.Types.Extensions.GetModel<Prisma.NativeTypeModelDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['nativeTypeModel']>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): runtime.Types.Extensions.GetModel<Prisma.EquipmentDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['equipment']>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export type Extension = runtime.Types.Extensions.Args
  export import getExtensionContext = runtime.Extensions.getExtensionContext


  /**
   * Prisma Client JS version: 4.7.0
   * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    post: 'post',
    Category: 'Category',
    Patient: 'Patient',
    Movie: 'Movie',
    Director: 'Director',
    Problem: 'Problem',
    Creator: 'Creator',
    NativeTypeModel: 'NativeTypeModel',
    Equipment: 'Equipment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
  }

  export function defineExtension<
      R_User_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
      R_post_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.postSelectScalar, ExtArgs['result']['post']>>,
      R_Category_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
      R_Patient_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.PatientSelectScalar, ExtArgs['result']['patient']>>,
      R_Movie_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.MovieSelectScalar, ExtArgs['result']['movie']>>,
      R_Director_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.DirectorSelectScalar, ExtArgs['result']['director']>>,
      R_Problem_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.ProblemSelectScalar, ExtArgs['result']['problem']>>,
      R_Creator_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.CreatorSelectScalar, ExtArgs['result']['creator']>>,
      R_NativeTypeModel_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>>,
      R_Equipment_Needs extends Record<string, runtime.Types.Extensions.GetResultSelect<Prisma.EquipmentSelectScalar, ExtArgs['result']['equipment']>>,
      R extends runtime.Types.Extensions.Args['result'] = {},
      M extends runtime.Types.Extensions.Args['model'] = {},
      Q extends runtime.Types.Extensions.Args['query'] = {},
      C extends runtime.Types.Extensions.Args['client'] = {},
      Args extends runtime.Types.Extensions.Args = { result: R, model: M, query: Q, client: C },
      ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs,
    >(extension: ((client: PrismaClient) => { $extends: { extArgs: Args } }) | {
      name?: string,
      result?: R & {
        $allModels?: Record<string, {
          compute: (data: unknown) => unknown
        }>
        user?: {
          [K in keyof R_User_Needs]: {
            needs: R_User_Needs[K]
            compute: (data: Prisma.UserGetPayload<{ select: R_User_Needs[K] }, ExtArgs>) => unknown
          }
        }
        post?: {
          [K in keyof R_post_Needs]: {
            needs: R_post_Needs[K]
            compute: (data: Prisma.postGetPayload<{ select: R_post_Needs[K] }, ExtArgs>) => unknown
          }
        }
        category?: {
          [K in keyof R_Category_Needs]: {
            needs: R_Category_Needs[K]
            compute: (data: Prisma.CategoryGetPayload<{ select: R_Category_Needs[K] }, ExtArgs>) => unknown
          }
        }
        patient?: {
          [K in keyof R_Patient_Needs]: {
            needs: R_Patient_Needs[K]
            compute: (data: Prisma.PatientGetPayload<{ select: R_Patient_Needs[K] }, ExtArgs>) => unknown
          }
        }
        movie?: {
          [K in keyof R_Movie_Needs]: {
            needs: R_Movie_Needs[K]
            compute: (data: Prisma.MovieGetPayload<{ select: R_Movie_Needs[K] }, ExtArgs>) => unknown
          }
        }
        director?: {
          [K in keyof R_Director_Needs]: {
            needs: R_Director_Needs[K]
            compute: (data: Prisma.DirectorGetPayload<{ select: R_Director_Needs[K] }, ExtArgs>) => unknown
          }
        }
        problem?: {
          [K in keyof R_Problem_Needs]: {
            needs: R_Problem_Needs[K]
            compute: (data: Prisma.ProblemGetPayload<{ select: R_Problem_Needs[K] }, ExtArgs>) => unknown
          }
        }
        creator?: {
          [K in keyof R_Creator_Needs]: {
            needs: R_Creator_Needs[K]
            compute: (data: Prisma.CreatorGetPayload<{ select: R_Creator_Needs[K] }, ExtArgs>) => unknown
          }
        }
        nativeTypeModel?: {
          [K in keyof R_NativeTypeModel_Needs]: {
            needs: R_NativeTypeModel_Needs[K]
            compute: (data: Prisma.NativeTypeModelGetPayload<{ select: R_NativeTypeModel_Needs[K] }, ExtArgs>) => unknown
          }
        }
        equipment?: {
          [K in keyof R_Equipment_Needs]: {
            needs: R_Equipment_Needs[K]
            compute: (data: Prisma.EquipmentGetPayload<{ select: R_Equipment_Needs[K] }, ExtArgs>) => unknown
          }
        }
      }
      model?: M & {
        $allModels?: Record<string, unknown>
        user?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['user'] }
        post?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['post'] }
        category?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['category'] }
        patient?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['patient'] }
        movie?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['movie'] }
        director?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['director'] }
        problem?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['problem'] }
        creator?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['creator'] }
        nativeTypeModel?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['nativeTypeModel'] }
        equipment?: { [K: symbol]: PrismaClient<never, never, false, ExtArgs>['equipment'] }
      }
      query?: {
        $allModels?: {
          [K in keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]?: (args: Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>][keyof Prisma.TypeMap<ExtArgs>[keyof Prisma.TypeMap<ExtArgs>]]['result']
        }
      } & {
        user?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['User']]?: (args: Prisma.TypeMap<ExtArgs>['User'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['User'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['User'][keyof Prisma.TypeMap<ExtArgs>['User']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['User'][keyof Prisma.TypeMap<ExtArgs>['User']]['result']
        }
        post?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['post']]?: (args: Prisma.TypeMap<ExtArgs>['post'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['post'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['post'][keyof Prisma.TypeMap<ExtArgs>['post']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['post'][keyof Prisma.TypeMap<ExtArgs>['post']]['result']
        }
        category?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Category']]?: (args: Prisma.TypeMap<ExtArgs>['Category'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Category'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Category'][keyof Prisma.TypeMap<ExtArgs>['Category']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Category'][keyof Prisma.TypeMap<ExtArgs>['Category']]['result']
        }
        patient?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Patient']]?: (args: Prisma.TypeMap<ExtArgs>['Patient'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Patient'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Patient'][keyof Prisma.TypeMap<ExtArgs>['Patient']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Patient'][keyof Prisma.TypeMap<ExtArgs>['Patient']]['result']
        }
        movie?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Movie']]?: (args: Prisma.TypeMap<ExtArgs>['Movie'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Movie'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Movie'][keyof Prisma.TypeMap<ExtArgs>['Movie']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Movie'][keyof Prisma.TypeMap<ExtArgs>['Movie']]['result']
        }
        director?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Director']]?: (args: Prisma.TypeMap<ExtArgs>['Director'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Director'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Director'][keyof Prisma.TypeMap<ExtArgs>['Director']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Director'][keyof Prisma.TypeMap<ExtArgs>['Director']]['result']
        }
        problem?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Problem']]?: (args: Prisma.TypeMap<ExtArgs>['Problem'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Problem'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Problem'][keyof Prisma.TypeMap<ExtArgs>['Problem']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Problem'][keyof Prisma.TypeMap<ExtArgs>['Problem']]['result']
        }
        creator?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Creator']]?: (args: Prisma.TypeMap<ExtArgs>['Creator'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Creator'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Creator'][keyof Prisma.TypeMap<ExtArgs>['Creator']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Creator'][keyof Prisma.TypeMap<ExtArgs>['Creator']]['result']
        }
        nativeTypeModel?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]?: (args: Prisma.TypeMap<ExtArgs>['NativeTypeModel'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['NativeTypeModel'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['NativeTypeModel'][keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['NativeTypeModel'][keyof Prisma.TypeMap<ExtArgs>['NativeTypeModel']]['result']
        }
        equipment?: {
          [K in keyof Prisma.TypeMap<ExtArgs>['Equipment']]?: (args: Prisma.TypeMap<ExtArgs>['Equipment'][K]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Equipment'][K]['result']
        } & {
          $allOperations?: (args: Prisma.TypeMap<ExtArgs>['Equipment'][keyof Prisma.TypeMap<ExtArgs>['Equipment']]['queryExtCbArgs']) => Prisma.TypeMap<ExtArgs>['Equipment'][keyof Prisma.TypeMap<ExtArgs>['Equipment']]['result']
        }
      }
      client?: C & { [K: symbol]: runtime.Types.Extensions.GetClient<PrismaClient<never, never, false, ExtArgs>, ExtArgs['client'], {}> }
    }): (client: any) => PrismaClient<any, any, any, Args>;
  export type TypeMap<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    User: {
      findUnique: {
        args: Prisma.UserFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      findUniqueOrThrow: {
        args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      findFirst: {
        args: Prisma.UserFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      findFirstOrThrow: {
        args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      findMany: {
        args: Prisma.UserFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      create: {
        args: Prisma.UserCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      createMany: {
        args: Prisma.UserCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      delete: {
        args: Prisma.UserDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      update: {
        args: Prisma.UserUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      deleteMany: {
        args: Prisma.UserDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      updateMany: {
        args: Prisma.UserUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      upsert: {
        args: Prisma.UserUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      aggregate: {
        args: Prisma.UserAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      groupBy: {
        args: Prisma.UserGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
      count: {
        args: Prisma.UserCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<User>>
        queryExtCbArgs: { model: 'User', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['User']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<User>> },
      }
    }
    post: {
      findUnique: {
        args: Prisma.postFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      findUniqueOrThrow: {
        args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      findFirst: {
        args: Prisma.postFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      findFirstOrThrow: {
        args: Prisma.postFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      findMany: {
        args: Prisma.postFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      create: {
        args: Prisma.postCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      createMany: {
        args: Prisma.postCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      delete: {
        args: Prisma.postDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      update: {
        args: Prisma.postUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      deleteMany: {
        args: Prisma.postDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      updateMany: {
        args: Prisma.postUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      upsert: {
        args: Prisma.postUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      aggregate: {
        args: Prisma.PostAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      groupBy: {
        args: Prisma.postGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
      count: {
        args: Prisma.postCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<post>>
        queryExtCbArgs: { model: 'post', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['post']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<post>> },
      }
    }
    Category: {
      findUnique: {
        args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      findUniqueOrThrow: {
        args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      findFirst: {
        args: Prisma.CategoryFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      findFirstOrThrow: {
        args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      findMany: {
        args: Prisma.CategoryFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      create: {
        args: Prisma.CategoryCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      createMany: {
        args: Prisma.CategoryCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      delete: {
        args: Prisma.CategoryDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      update: {
        args: Prisma.CategoryUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      deleteMany: {
        args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      updateMany: {
        args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      upsert: {
        args: Prisma.CategoryUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      aggregate: {
        args: Prisma.CategoryAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      groupBy: {
        args: Prisma.CategoryGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
      count: {
        args: Prisma.CategoryCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Category>>
        queryExtCbArgs: { model: 'Category', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Category']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Category>> },
      }
    }
    Patient: {
      findUnique: {
        args: Prisma.PatientFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      findUniqueOrThrow: {
        args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      findFirst: {
        args: Prisma.PatientFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      findFirstOrThrow: {
        args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      findMany: {
        args: Prisma.PatientFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      create: {
        args: Prisma.PatientCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      createMany: {
        args: Prisma.PatientCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      delete: {
        args: Prisma.PatientDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      update: {
        args: Prisma.PatientUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      deleteMany: {
        args: Prisma.PatientDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      updateMany: {
        args: Prisma.PatientUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      upsert: {
        args: Prisma.PatientUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      aggregate: {
        args: Prisma.PatientAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      groupBy: {
        args: Prisma.PatientGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
      count: {
        args: Prisma.PatientCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Patient>>
        queryExtCbArgs: { model: 'Patient', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Patient']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Patient>> },
      }
    }
    Movie: {
      findUnique: {
        args: Prisma.MovieFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      findUniqueOrThrow: {
        args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      findFirst: {
        args: Prisma.MovieFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      findFirstOrThrow: {
        args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      findMany: {
        args: Prisma.MovieFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      create: {
        args: Prisma.MovieCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      createMany: {
        args: Prisma.MovieCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      delete: {
        args: Prisma.MovieDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      update: {
        args: Prisma.MovieUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      deleteMany: {
        args: Prisma.MovieDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      updateMany: {
        args: Prisma.MovieUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      upsert: {
        args: Prisma.MovieUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      aggregate: {
        args: Prisma.MovieAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      groupBy: {
        args: Prisma.MovieGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
      count: {
        args: Prisma.MovieCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Movie>>
        queryExtCbArgs: { model: 'Movie', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Movie']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Movie>> },
      }
    }
    Director: {
      findUnique: {
        args: Prisma.DirectorFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      findUniqueOrThrow: {
        args: Prisma.DirectorFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      findFirst: {
        args: Prisma.DirectorFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      findFirstOrThrow: {
        args: Prisma.DirectorFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      findMany: {
        args: Prisma.DirectorFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      create: {
        args: Prisma.DirectorCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      createMany: {
        args: Prisma.DirectorCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      delete: {
        args: Prisma.DirectorDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      update: {
        args: Prisma.DirectorUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      deleteMany: {
        args: Prisma.DirectorDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      updateMany: {
        args: Prisma.DirectorUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      upsert: {
        args: Prisma.DirectorUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      aggregate: {
        args: Prisma.DirectorAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      groupBy: {
        args: Prisma.DirectorGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
      count: {
        args: Prisma.DirectorCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Director>>
        queryExtCbArgs: { model: 'Director', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Director']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Director>> },
      }
    }
    Problem: {
      findUnique: {
        args: Prisma.ProblemFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      findUniqueOrThrow: {
        args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      findFirst: {
        args: Prisma.ProblemFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      findFirstOrThrow: {
        args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      findMany: {
        args: Prisma.ProblemFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      create: {
        args: Prisma.ProblemCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      createMany: {
        args: Prisma.ProblemCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      delete: {
        args: Prisma.ProblemDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      update: {
        args: Prisma.ProblemUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      deleteMany: {
        args: Prisma.ProblemDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      updateMany: {
        args: Prisma.ProblemUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      upsert: {
        args: Prisma.ProblemUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      aggregate: {
        args: Prisma.ProblemAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      groupBy: {
        args: Prisma.ProblemGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
      count: {
        args: Prisma.ProblemCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Problem>>
        queryExtCbArgs: { model: 'Problem', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Problem']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Problem>> },
      }
    }
    Creator: {
      findUnique: {
        args: Prisma.CreatorFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      findUniqueOrThrow: {
        args: Prisma.CreatorFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      findFirst: {
        args: Prisma.CreatorFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      findFirstOrThrow: {
        args: Prisma.CreatorFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      findMany: {
        args: Prisma.CreatorFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      create: {
        args: Prisma.CreatorCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      createMany: {
        args: Prisma.CreatorCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      delete: {
        args: Prisma.CreatorDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      update: {
        args: Prisma.CreatorUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      deleteMany: {
        args: Prisma.CreatorDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      updateMany: {
        args: Prisma.CreatorUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      upsert: {
        args: Prisma.CreatorUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      aggregate: {
        args: Prisma.CreatorAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      groupBy: {
        args: Prisma.CreatorGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
      count: {
        args: Prisma.CreatorCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Creator>>
        queryExtCbArgs: { model: 'Creator', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Creator']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Creator>> },
      }
    }
    NativeTypeModel: {
      findUnique: {
        args: Prisma.NativeTypeModelFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      findUniqueOrThrow: {
        args: Prisma.NativeTypeModelFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      findFirst: {
        args: Prisma.NativeTypeModelFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      findFirstOrThrow: {
        args: Prisma.NativeTypeModelFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      findMany: {
        args: Prisma.NativeTypeModelFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      create: {
        args: Prisma.NativeTypeModelCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      createMany: {
        args: Prisma.NativeTypeModelCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      delete: {
        args: Prisma.NativeTypeModelDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      update: {
        args: Prisma.NativeTypeModelUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      deleteMany: {
        args: Prisma.NativeTypeModelDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      updateMany: {
        args: Prisma.NativeTypeModelUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      upsert: {
        args: Prisma.NativeTypeModelUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      aggregate: {
        args: Prisma.NativeTypeModelAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      groupBy: {
        args: Prisma.NativeTypeModelGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
      count: {
        args: Prisma.NativeTypeModelCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>>
        queryExtCbArgs: { model: 'NativeTypeModel', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['NativeTypeModel']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<NativeTypeModel>> },
      }
    }
    Equipment: {
      findUnique: {
        args: Prisma.EquipmentFindUniqueArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'findUnique', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['findUnique']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      findUniqueOrThrow: {
        args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'findUniqueOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['findUniqueOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      findFirst: {
        args: Prisma.EquipmentFindFirstArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'findFirst', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['findFirst']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      findFirstOrThrow: {
        args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'findFirstOrThrow', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['findFirstOrThrow']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      findMany: {
        args: Prisma.EquipmentFindManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'findMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['findMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      create: {
        args: Prisma.EquipmentCreateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'create', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['create']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      createMany: {
        args: Prisma.EquipmentCreateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'createMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['createMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      delete: {
        args: Prisma.EquipmentDeleteArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'delete', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['delete']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      update: {
        args: Prisma.EquipmentUpdateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'update', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['update']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      deleteMany: {
        args: Prisma.EquipmentDeleteManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'deleteMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['deleteMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      updateMany: {
        args: Prisma.EquipmentUpdateManyArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'updateMany', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['updateMany']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      upsert: {
        args: Prisma.EquipmentUpsertArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'upsert', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['upsert']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      aggregate: {
        args: Prisma.EquipmentAggregateArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'aggregate', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['aggregate']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      groupBy: {
        args: Prisma.EquipmentGroupByArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'groupBy', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['groupBy']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
      count: {
        args: Prisma.EquipmentCountArgs<ExtArgs>,
        result: Promise<runtime.Types.Utils.OptionalFlat<Equipment>>
        queryExtCbArgs: { model: 'Equipment', operation: 'count', args: runtime.Types.Extensions.ReadonlySelector<TypeMap<ExtArgs>['Equipment']['count']['args']>, query: (args: object) => PrismaPromise<runtime.Types.Utils.OptionalFlat<Equipment>> },
      }
    }
  }
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    posts: number
    editorPosts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    editorPosts?: boolean | UserCountOutputTypeCountEditorPostsArgs
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _UserCountOutputType = runtime.Types.Extensions.GetResultPayload<UserCountOutputType, ExtArgs['result']['userCountOutputType']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? _UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _UserCountOutputType ? _UserCountOutputType[P] : never
  } 
      : _UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: postWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditorPostsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: postWhereInput
  }



  /**
   * Count Type DirectorCountOutputType
   */


  export type DirectorCountOutputType = {
    movies: number
  }

  export type DirectorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | DirectorCountOutputTypeCountMoviesArgs
  }

  export type DirectorCountOutputTypeGetPayload<S extends boolean | null | undefined | DirectorCountOutputTypeArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _DirectorCountOutputType = runtime.Types.Extensions.GetResultPayload<DirectorCountOutputType, ExtArgs['result']['directorCountOutputType']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _DirectorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DirectorCountOutputTypeArgs)
    ? _DirectorCountOutputType 
    : S extends { select: any } & (DirectorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _DirectorCountOutputType ? _DirectorCountOutputType[P] : never
  } 
      : _DirectorCountOutputType




  // Custom InputTypes

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     * 
    **/
    select?: DirectorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeCountMoviesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }



  /**
   * Count Type ProblemCountOutputType
   */


  export type ProblemCountOutputType = {
    likedBy: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likedBy?: boolean | ProblemCountOutputTypeCountLikedByArgs
  }

  export type ProblemCountOutputTypeGetPayload<S extends boolean | null | undefined | ProblemCountOutputTypeArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _ProblemCountOutputType = runtime.Types.Extensions.GetResultPayload<ProblemCountOutputType, ExtArgs['result']['problemCountOutputType']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _ProblemCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProblemCountOutputTypeArgs)
    ? _ProblemCountOutputType 
    : S extends { select: any } & (ProblemCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _ProblemCountOutputType ? _ProblemCountOutputType[P] : never
  } 
      : _ProblemCountOutputType




  // Custom InputTypes

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     * 
    **/
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountLikedByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
  }



  /**
   * Count Type CreatorCountOutputType
   */


  export type CreatorCountOutputType = {
    likes: number
    problems: number
  }

  export type CreatorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likes?: boolean | CreatorCountOutputTypeCountLikesArgs
    problems?: boolean | CreatorCountOutputTypeCountProblemsArgs
  }

  export type CreatorCountOutputTypeGetPayload<S extends boolean | null | undefined | CreatorCountOutputTypeArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _CreatorCountOutputType = runtime.Types.Extensions.GetResultPayload<CreatorCountOutputType, ExtArgs['result']['creatorCountOutputType']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _CreatorCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CreatorCountOutputTypeArgs)
    ? _CreatorCountOutputType 
    : S extends { select: any } & (CreatorCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _CreatorCountOutputType ? _CreatorCountOutputType[P] : never
  } 
      : _CreatorCountOutputType




  // Custom InputTypes

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     * 
    **/
    select?: CreatorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountLikesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }


  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountProblemsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    age: number | null
    balance: number | null
    amount: number | null
    grades: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    age: number | null
    balance: number | null
    amount: number | null
    grades: number[] | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    age: number | null
    balance: number | null
    amount: number | null
    role: Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    age: number | null
    balance: number | null
    amount: number | null
    role: Role | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    age: number
    balance: number
    amount: number
    role: number
    grades: number
    aliases: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
    grades?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
    grades?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    balance?: true
    amount?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    balance?: true
    amount?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    age?: true
    balance?: true
    amount?: true
    role?: true
    grades?: true
    aliases?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades: number[]
    aliases: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    posts?: boolean | postFindManyArgs<ExtArgs>
    editorPosts?: boolean | postFindManyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  } & UserSelectScalar, ExtArgs['result']['user']>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    balance?: boolean
    amount?: boolean
    grades?: boolean
    aliases?: boolean
  }

  export type UserInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | postFindManyArgs<ExtArgs>
    editorPosts?: boolean | postFindManyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  } 

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _User = runtime.Types.Extensions.GetResultPayload<User, ExtArgs['result']['user']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? _User & {
    [P in TruthyKeys<S['include']>]:
        P extends 'posts' ? Array < postGetPayload<S['include'][P], ExtArgs>>  :
        P extends 'editorPosts' ? Array < postGetPayload<S['include'][P], ExtArgs>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P], ExtArgs> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'posts' ? Array < postGetPayload<S['select'][P], ExtArgs>>  :
        P extends 'editorPosts' ? Array < postGetPayload<S['select'][P], ExtArgs>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P], ExtArgs> :  P extends keyof _User ? _User[P] : never
  } 
      : _User


  type UserCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__UserClient<UserGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__UserClient<UserGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<UserGetPayload<T, ExtArgs>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<UserGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends postFindManyArgs<ExtArgs> = {}>(args?: Subset<T, postFindManyArgs<ExtArgs>>): PrismaPromise<Array<postGetPayload<T, ExtArgs>>| Null>;

    editorPosts<T extends postFindManyArgs<ExtArgs> = {}>(args?: Subset<T, postFindManyArgs<ExtArgs>>): PrismaPromise<Array<postGetPayload<T, ExtArgs>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }

  /**
   * User: findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User: findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    authorId: number | null
    editorId: number | null
  }

  export type PostSumAggregateOutputType = {
    authorId: number | null
    editorId: number | null
  }

  export type PostMinAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    title: string | null
    subtitle: string | null
    content: string | null
    authorId: number | null
    editorId: number | null
    kind: PostKind | null
  }

  export type PostMaxAggregateOutputType = {
    uuid: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    title: string | null
    subtitle: string | null
    content: string | null
    authorId: number | null
    editorId: number | null
    kind: PostKind | null
  }

  export type PostCountAggregateOutputType = {
    uuid: number
    createdAt: number
    updatedAt: number
    published: number
    title: number
    subtitle: number
    content: number
    authorId: number
    editorId: number
    kind: number
    metadata: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    authorId?: true
    editorId?: true
  }

  export type PostSumAggregateInputType = {
    authorId?: true
    editorId?: true
  }

  export type PostMinAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    subtitle?: true
    content?: true
    authorId?: true
    editorId?: true
    kind?: true
  }

  export type PostMaxAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    subtitle?: true
    content?: true
    authorId?: true
    editorId?: true
    kind?: true
  }

  export type PostCountAggregateInputType = {
    uuid?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    subtitle?: true
    content?: true
    authorId?: true
    editorId?: true
    kind?: true
    metadata?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByWithAggregationInput>
    by: Array<PostScalarFieldEnum>
    having?: postScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    uuid: string
    createdAt: Date
    updatedAt: Date
    published: boolean
    title: string
    subtitle: string
    content: string | null
    authorId: number
    editorId: number | null
    kind: PostKind | null
    metadata: JsonValue
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    author?: boolean | UserArgs<ExtArgs>
    editor?: boolean | UserArgs<ExtArgs>
  } & postSelectScalar, ExtArgs['result']['post']>

  export type postSelectScalar = {
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    authorId?: boolean
    editorId?: boolean
    metadata?: boolean
  }

  export type postInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | UserArgs<ExtArgs>
    editor?: boolean | UserArgs<ExtArgs>
  } 

  export type postGetPayload<S extends boolean | null | undefined | postArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _post = runtime.Types.Extensions.GetResultPayload<post, ExtArgs['result']['post']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _post :
    S extends undefined ? never :
    S extends { include: any } & (postArgs | postFindManyArgs)
    ? _post & {
    [P in TruthyKeys<S['include']>]:
        P extends 'author' ? UserGetPayload<S['include'][P], ExtArgs> :
        P extends 'editor' ? UserGetPayload<S['include'][P], ExtArgs> | null :  never
  } 
    : S extends { select: any } & (postArgs | postFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'author' ? UserGetPayload<S['select'][P], ExtArgs> :
        P extends 'editor' ? UserGetPayload<S['select'][P], ExtArgs> | null :  P extends keyof _post ? _post[P] : never
  } 
      : _post


  type postCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {postFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__postClient<postGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__postClient<postGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `uuid`
     * const postWithUuidOnly = await prisma.post.findMany({ select: { uuid: true } })
     * 
    **/
    findMany<T extends postFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<postGetPayload<T, ExtArgs>>>

    /**
     * Create a Post.
     * @param {postCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends postCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postCreateArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {postCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {postDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends postDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postDeleteArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {postUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postUpdateArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {postDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {postUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends postUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postUpsertArgs<ExtArgs>>
    ): Prisma__postClient<postGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postCountArgs>(
      args?: Subset<T, postCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<UserGetPayload<T, ExtArgs> | Null, never, ExtArgs>;

    editor<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<UserGetPayload<T, ExtArgs> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * post base type for findUnique actions
   */
  export type postFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }

  /**
   * post: findUnique
   */
  export interface postFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends postFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post base type for findFirst actions
   */
  export type postFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * post: findFirst
   */
  export interface postFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends postFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     * 
    **/
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     * 
    **/
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     * 
    **/
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     * 
    **/
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     * 
    **/
    data: Enumerable<postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     * 
    **/
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     * 
    **/
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     * 
    **/
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     * 
    **/
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     * 
    **/
    where?: postWhereInput
  }


  /**
   * post without action
   */
  export type postArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude<ExtArgs> | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    number: number | null
  }

  export type CategorySumAggregateOutputType = {
    number: number | null
  }

  export type CategoryMinAggregateOutputType = {
    name: string | null
    slug: string | null
    number: number | null
  }

  export type CategoryMaxAggregateOutputType = {
    name: string | null
    slug: string | null
    number: number | null
  }

  export type CategoryCountAggregateOutputType = {
    name: number
    slug: number
    number: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    number?: true
  }

  export type CategorySumAggregateInputType = {
    number?: true
  }

  export type CategoryMinAggregateInputType = {
    name?: true
    slug?: true
    number?: true
  }

  export type CategoryMaxAggregateInputType = {
    name?: true
    slug?: true
    number?: true
  }

  export type CategoryCountAggregateInputType = {
    name?: true
    slug?: true
    number?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: Array<CategoryScalarFieldEnum>
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    name: string
    slug: string
    number: number
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{

  } & CategorySelectScalar, ExtArgs['result']['category']>

  export type CategorySelectScalar = {
    name?: boolean
    slug?: boolean
    number?: boolean
  }

  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Category = runtime.Types.Extensions.GetResultPayload<Category, ExtArgs['result']['category']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? _Category 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _Category ? _Category[P] : never
  } 
      : _Category


  type CategoryCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const categoryWithNameOnly = await prisma.category.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<CategoryGetPayload<T, ExtArgs>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>
    ): Prisma__CategoryClient<CategoryGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }

  /**
   * Category: findUnique
   */
  export interface CategoryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CategoryFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category: findFirst
   */
  export interface CategoryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CategoryFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     * 
    **/
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     * 
    **/
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     * 
    **/
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     * 
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     * 
    **/
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to update a Category.
     * 
    **/
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     * 
    **/
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     * 
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     * 
    **/
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     * 
    **/
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect<ExtArgs> | null
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    firstName: string | null
    lastName: string | null
    email: string | null
  }

  export type PatientMaxAggregateOutputType = {
    firstName: string | null
    lastName: string | null
    email: string | null
  }

  export type PatientCountAggregateOutputType = {
    firstName: number
    lastName: number
    email: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    firstName?: true
    lastName?: true
    email?: true
  }

  export type PatientMaxAggregateInputType = {
    firstName?: true
    lastName?: true
    email?: true
  }

  export type PatientCountAggregateInputType = {
    firstName?: true
    lastName?: true
    email?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: Enumerable<PatientOrderByWithAggregationInput>
    by: Array<PatientScalarFieldEnum>
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }


  export type PatientGroupByOutputType = {
    firstName: string
    lastName: string
    email: string
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{

  } & PatientSelectScalar, ExtArgs['result']['patient']>

  export type PatientSelectScalar = {
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }

  export type PatientGetPayload<S extends boolean | null | undefined | PatientArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Patient = runtime.Types.Extensions.GetResultPayload<Patient, ExtArgs['result']['patient']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Patient :
    S extends undefined ? never :
    S extends { include: any } & (PatientArgs | PatientFindManyArgs)
    ? _Patient 
    : S extends { select: any } & (PatientArgs | PatientFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _Patient ? _Patient[P] : never
  } 
      : _Patient


  type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }
  >

  export interface PatientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PatientFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__PatientClient<PatientGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PatientFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__PatientClient<PatientGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `firstName`
     * const patientWithFirstNameOnly = await prisma.patient.findMany({ select: { firstName: true } })
     * 
    **/
    findMany<T extends PatientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<PatientGetPayload<T, ExtArgs>>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
    **/
    create<T extends PatientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientCreateArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Patients.
     *     @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     *     @example
     *     // Create many Patients
     *     const patient = await prisma.patient.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PatientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
    **/
    delete<T extends PatientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PatientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PatientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PatientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
    **/
    upsert<T extends PatientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>
    ): Prisma__PatientClient<PatientGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Patient base type for findUnique actions
   */
  export type PatientFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }

  /**
   * Patient: findUnique
   */
  export interface PatientFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends PatientFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient base type for findFirst actions
   */
  export type PatientFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     * 
    **/
    distinct?: Enumerable<PatientScalarFieldEnum>
  }

  /**
   * Patient: findFirst
   */
  export interface PatientFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends PatientFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     * 
    **/
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     * 
    **/
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     * 
    **/
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     * 
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     * 
    **/
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     * 
    **/
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     * 
    **/
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     * 
    **/
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     * 
    **/
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     * 
    **/
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     * 
    **/
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect<ExtArgs> | null
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieMinAggregateOutputType = {
    directorFirstName: string | null
    directorLastName: string | null
    title: string | null
  }

  export type MovieMaxAggregateOutputType = {
    directorFirstName: string | null
    directorLastName: string | null
    title: string | null
  }

  export type MovieCountAggregateOutputType = {
    directorFirstName: number
    directorLastName: number
    title: number
    _all: number
  }


  export type MovieMinAggregateInputType = {
    directorFirstName?: true
    directorLastName?: true
    title?: true
  }

  export type MovieMaxAggregateInputType = {
    directorFirstName?: true
    directorLastName?: true
    title?: true
  }

  export type MovieCountAggregateInputType = {
    directorFirstName?: true
    directorLastName?: true
    title?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithAggregationInput>
    by: Array<MovieScalarFieldEnum>
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }


  export type MovieGroupByOutputType = {
    directorFirstName: string
    directorLastName: string
    title: string
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    director?: boolean | DirectorArgs<ExtArgs>
  } & MovieSelectScalar, ExtArgs['result']['movie']>

  export type MovieSelectScalar = {
    directorFirstName?: boolean
    directorLastName?: boolean
    title?: boolean
  }

  export type MovieInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    director?: boolean | DirectorArgs<ExtArgs>
  } 

  export type MovieGetPayload<S extends boolean | null | undefined | MovieArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Movie = runtime.Types.Extensions.GetResultPayload<Movie, ExtArgs['result']['movie']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Movie :
    S extends undefined ? never :
    S extends { include: any } & (MovieArgs | MovieFindManyArgs)
    ? _Movie & {
    [P in TruthyKeys<S['include']>]:
        P extends 'director' ? DirectorGetPayload<S['include'][P], ExtArgs> :  never
  } 
    : S extends { select: any } & (MovieArgs | MovieFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'director' ? DirectorGetPayload<S['select'][P], ExtArgs> :  P extends keyof _Movie ? _Movie[P] : never
  } 
      : _Movie


  type MovieCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__MovieClient<MovieGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Movie that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__MovieClient<MovieGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `directorFirstName`
     * const movieWithDirectorFirstNameOnly = await prisma.movie.findMany({ select: { directorFirstName: true } })
     * 
    **/
    findMany<T extends MovieFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<MovieGetPayload<T, ExtArgs>>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
    **/
    create<T extends MovieCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCreateArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movie = await prisma.movie.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
    **/
    delete<T extends MovieDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
    **/
    upsert<T extends MovieUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>
    ): Prisma__MovieClient<MovieGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    director<T extends DirectorArgs<ExtArgs> = {}>(args?: Subset<T, DirectorArgs<ExtArgs>>): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Movie base type for findUnique actions
   */
  export type MovieFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }

  /**
   * Movie: findUnique
   */
  export interface MovieFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends MovieFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie base type for findFirst actions
   */
  export type MovieFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }

  /**
   * Movie: findFirst
   */
  export interface MovieFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends MovieFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     * 
    **/
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     * 
    **/
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     * 
    **/
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     * 
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     * 
    **/
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     * 
    **/
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     * 
    **/
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     * 
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     * 
    **/
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     * 
    **/
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude<ExtArgs> | null
  }



  /**
   * Model Director
   */


  export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  export type DirectorMinAggregateOutputType = {
    firstName: string | null
    lastName: string | null
  }

  export type DirectorMaxAggregateOutputType = {
    firstName: string | null
    lastName: string | null
  }

  export type DirectorCountAggregateOutputType = {
    firstName: number
    lastName: number
    _all: number
  }


  export type DirectorMinAggregateInputType = {
    firstName?: true
    lastName?: true
  }

  export type DirectorMaxAggregateInputType = {
    firstName?: true
    lastName?: true
  }

  export type DirectorCountAggregateInputType = {
    firstName?: true
    lastName?: true
    _all?: true
  }

  export type DirectorAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Director to aggregate.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directors
    **/
    _count?: true | DirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType
  }

  export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirector[P]>
      : GetScalarType<T[P], AggregateDirector[P]>
  }




  export type DirectorGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: DirectorWhereInput
    orderBy?: Enumerable<DirectorOrderByWithAggregationInput>
    by: Array<DirectorScalarFieldEnum>
    having?: DirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectorCountAggregateInputType | true
    _min?: DirectorMinAggregateInputType
    _max?: DirectorMaxAggregateInputType
  }


  export type DirectorGroupByOutputType = {
    firstName: string
    lastName: string
    _count: DirectorCountAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
  }

  type GetDirectorGroupByPayload<T extends DirectorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorGroupByOutputType[P]>
        }
      >
    >


  export type DirectorSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    movies?: boolean | MovieFindManyArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeArgs<ExtArgs>
  } & DirectorSelectScalar, ExtArgs['result']['director']>

  export type DirectorSelectScalar = {
    firstName?: boolean
    lastName?: boolean
  }

  export type DirectorInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | MovieFindManyArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeArgs<ExtArgs>
  } 

  export type DirectorGetPayload<S extends boolean | null | undefined | DirectorArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Director = runtime.Types.Extensions.GetResultPayload<Director, ExtArgs['result']['director']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Director :
    S extends undefined ? never :
    S extends { include: any } & (DirectorArgs | DirectorFindManyArgs)
    ? _Director & {
    [P in TruthyKeys<S['include']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['include'][P], ExtArgs>>  :
        P extends '_count' ? DirectorCountOutputTypeGetPayload<S['include'][P], ExtArgs> :  never
  } 
    : S extends { select: any } & (DirectorArgs | DirectorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'movies' ? Array < MovieGetPayload<S['select'][P], ExtArgs>>  :
        P extends '_count' ? DirectorCountOutputTypeGetPayload<S['select'][P], ExtArgs> :  P extends keyof _Director ? _Director[P] : never
  } 
      : _Director


  type DirectorCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<DirectorFindManyArgs, 'select' | 'include'> & {
      select?: DirectorCountAggregateInputType | true
    }
  >

  export interface DirectorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Director that matches the filter.
     * @param {DirectorFindUniqueArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DirectorFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Director'> extends True ? Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Director that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DirectorFindUniqueOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DirectorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Director that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DirectorFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Director'> extends True ? Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Director that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindFirstOrThrowArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DirectorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Directors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directors
     * const directors = await prisma.director.findMany()
     * 
     * // Get first 10 Directors
     * const directors = await prisma.director.findMany({ take: 10 })
     * 
     * // Only select the `firstName`
     * const directorWithFirstNameOnly = await prisma.director.findMany({ select: { firstName: true } })
     * 
    **/
    findMany<T extends DirectorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<DirectorGetPayload<T, ExtArgs>>>

    /**
     * Create a Director.
     * @param {DirectorCreateArgs} args - Arguments to create a Director.
     * @example
     * // Create one Director
     * const Director = await prisma.director.create({
     *   data: {
     *     // ... data to create a Director
     *   }
     * })
     * 
    **/
    create<T extends DirectorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorCreateArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Directors.
     *     @param {DirectorCreateManyArgs} args - Arguments to create many Directors.
     *     @example
     *     // Create many Directors
     *     const director = await prisma.director.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DirectorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Director.
     * @param {DirectorDeleteArgs} args - Arguments to delete one Director.
     * @example
     * // Delete one Director
     * const Director = await prisma.director.delete({
     *   where: {
     *     // ... filter to delete one Director
     *   }
     * })
     * 
    **/
    delete<T extends DirectorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorDeleteArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Director.
     * @param {DirectorUpdateArgs} args - Arguments to update one Director.
     * @example
     * // Update one Director
     * const director = await prisma.director.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DirectorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorUpdateArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Directors.
     * @param {DirectorDeleteManyArgs} args - Arguments to filter Directors to delete.
     * @example
     * // Delete a few Directors
     * const { count } = await prisma.director.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DirectorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directors
     * const director = await prisma.director.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DirectorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Director.
     * @param {DirectorUpsertArgs} args - Arguments to update or create a Director.
     * @example
     * // Update or create a Director
     * const director = await prisma.director.upsert({
     *   create: {
     *     // ... data to create a Director
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Director we want to update
     *   }
     * })
    **/
    upsert<T extends DirectorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorUpsertArgs<ExtArgs>>
    ): Prisma__DirectorClient<DirectorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Directors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorCountArgs} args - Arguments to filter Directors to count.
     * @example
     * // Count the number of Directors
     * const count = await prisma.director.count({
     *   where: {
     *     // ... the filter for the Directors we want to count
     *   }
     * })
    **/
    count<T extends DirectorCountArgs>(
      args?: Subset<T, DirectorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DirectorAggregateArgs>(args: Subset<T, DirectorAggregateArgs>): PrismaPromise<GetDirectorAggregateType<T>>

    /**
     * Group by Director.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectorGroupByArgs['orderBy'] }
        : { orderBy?: DirectorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    movies<T extends MovieFindManyArgs<ExtArgs> = {}>(args?: Subset<T, MovieFindManyArgs<ExtArgs>>): PrismaPromise<Array<MovieGetPayload<T, ExtArgs>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Director base type for findUnique actions
   */
  export type DirectorFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where: DirectorWhereUniqueInput
  }

  /**
   * Director: findUnique
   */
  export interface DirectorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends DirectorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Director findUniqueOrThrow
   */
  export type DirectorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director base type for findFirst actions
   */
  export type DirectorFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     * 
    **/
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }

  /**
   * Director: findFirst
   */
  export interface DirectorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends DirectorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Director findFirstOrThrow
   */
  export type DirectorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     * 
    **/
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }


  /**
   * Director findMany
   */
  export type DirectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Directors to fetch.
     * 
    **/
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     * 
    **/
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directors.
     * 
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }


  /**
   * Director create
   */
  export type DirectorCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Director.
     * 
    **/
    data: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
  }


  /**
   * Director createMany
   */
  export type DirectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directors.
     * 
    **/
    data: Enumerable<DirectorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Director.
     * 
    **/
    data: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
    /**
     * Choose, which Director to update.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director updateMany
   */
  export type DirectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Directors.
     * 
    **/
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    /**
     * Filter which Directors to update
     * 
    **/
    where?: DirectorWhereInput
  }


  /**
   * Director upsert
   */
  export type DirectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Director to update in case it exists.
     * 
    **/
    where: DirectorWhereUniqueInput
    /**
     * In case the Director found by the `where` argument doesn't exist, create a new Director with this data.
     * 
    **/
    create: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
    /**
     * In case the Director was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
  }


  /**
   * Director delete
   */
  export type DirectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter which Director to delete.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director deleteMany
   */
  export type DirectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Directors to delete
     * 
    **/
    where?: DirectorWhereInput
  }


  /**
   * Director without action
   */
  export type DirectorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude<ExtArgs> | null
  }



  /**
   * Model Problem
   */


  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type ProblemSumAggregateOutputType = {
    id: number | null
    creatorId: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: number | null
    problemText: string | null
    creatorId: number | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: number | null
    problemText: string | null
    creatorId: number | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    problemText: number
    creatorId: number
    _all: number
  }


  export type ProblemAvgAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type ProblemSumAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type ProblemMinAggregateInputType = {
    id?: true
    problemText?: true
    creatorId?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    problemText?: true
    creatorId?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    problemText?: true
    creatorId?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     * 
    **/
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     * 
    **/
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: Enumerable<ProblemOrderByWithAggregationInput>
    by: Array<ProblemScalarFieldEnum>
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _avg?: ProblemAvgAggregateInputType
    _sum?: ProblemSumAggregateInputType
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }


  export type ProblemGroupByOutputType = {
    id: number
    problemText: string
    creatorId: number | null
    _count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    likedBy?: boolean | CreatorFindManyArgs<ExtArgs>
    creator?: boolean | CreatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeArgs<ExtArgs>
  } & ProblemSelectScalar, ExtArgs['result']['problem']>

  export type ProblemSelectScalar = {
    id?: boolean
    problemText?: boolean
    creatorId?: boolean
  }

  export type ProblemInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likedBy?: boolean | CreatorFindManyArgs<ExtArgs>
    creator?: boolean | CreatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeArgs<ExtArgs>
  } 

  export type ProblemGetPayload<S extends boolean | null | undefined | ProblemArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Problem = runtime.Types.Extensions.GetResultPayload<Problem, ExtArgs['result']['problem']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Problem :
    S extends undefined ? never :
    S extends { include: any } & (ProblemArgs | ProblemFindManyArgs)
    ? _Problem & {
    [P in TruthyKeys<S['include']>]:
        P extends 'likedBy' ? Array < CreatorGetPayload<S['include'][P], ExtArgs>>  :
        P extends 'creator' ? CreatorGetPayload<S['include'][P], ExtArgs> | null :
        P extends '_count' ? ProblemCountOutputTypeGetPayload<S['include'][P], ExtArgs> :  never
  } 
    : S extends { select: any } & (ProblemArgs | ProblemFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'likedBy' ? Array < CreatorGetPayload<S['select'][P], ExtArgs>>  :
        P extends 'creator' ? CreatorGetPayload<S['select'][P], ExtArgs> | null :
        P extends '_count' ? ProblemCountOutputTypeGetPayload<S['select'][P], ExtArgs> :  P extends keyof _Problem ? _Problem[P] : never
  } 
      : _Problem


  type ProblemCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<ProblemFindManyArgs, 'select' | 'include'> & {
      select?: ProblemCountAggregateInputType | true
    }
  >

  export interface ProblemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProblemFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Problem'> extends True ? Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Problem that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProblemFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Problem'> extends True ? Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Problem that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProblemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<ProblemGetPayload<T, ExtArgs>>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
    **/
    create<T extends ProblemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Problems.
     *     @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     *     @example
     *     // Create many Problems
     *     const problem = await prisma.problem.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProblemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
    **/
    delete<T extends ProblemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProblemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProblemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProblemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
    **/
    upsert<T extends ProblemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>
    ): Prisma__ProblemClient<ProblemGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProblemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    likedBy<T extends CreatorFindManyArgs<ExtArgs> = {}>(args?: Subset<T, CreatorFindManyArgs<ExtArgs>>): PrismaPromise<Array<CreatorGetPayload<T, ExtArgs>>| Null>;

    creator<T extends CreatorArgs<ExtArgs> = {}>(args?: Subset<T, CreatorArgs<ExtArgs>>): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Problem base type for findUnique actions
   */
  export type ProblemFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     * 
    **/
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem: findUnique
   */
  export interface ProblemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends ProblemFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     * 
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem base type for findFirst actions
   */
  export type ProblemFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     * 
    **/
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     * 
    **/
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     * 
    **/
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     * 
    **/
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }

  /**
   * Problem: findFirst
   */
  export interface ProblemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends ProblemFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     * 
    **/
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     * 
    **/
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     * 
    **/
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     * 
    **/
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     * 
    **/
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     * 
    **/
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     * 
    **/
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     * 
    **/
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }


  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     * 
    **/
    data: Enumerable<ProblemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     * 
    **/
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     * 
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     * 
    **/
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     * 
    **/
    where?: ProblemWhereInput
  }


  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     * 
    **/
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     * 
    **/
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }


  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     * 
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     * 
    **/
    where?: ProblemWhereInput
  }


  /**
   * Problem without action
   */
  export type ProblemArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude<ExtArgs> | null
  }



  /**
   * Model Creator
   */


  export type AggregateCreator = {
    _count: CreatorCountAggregateOutputType | null
    _avg: CreatorAvgAggregateOutputType | null
    _sum: CreatorSumAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  export type CreatorAvgAggregateOutputType = {
    id: number | null
  }

  export type CreatorSumAggregateOutputType = {
    id: number | null
  }

  export type CreatorMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CreatorMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CreatorCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CreatorAvgAggregateInputType = {
    id?: true
  }

  export type CreatorSumAggregateInputType = {
    id?: true
  }

  export type CreatorMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CreatorMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CreatorCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CreatorAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Creator to aggregate.
     * 
    **/
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     * 
    **/
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Creators
    **/
    _count?: true | CreatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorMaxAggregateInputType
  }

  export type GetCreatorAggregateType<T extends CreatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCreator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreator[P]>
      : GetScalarType<T[P], AggregateCreator[P]>
  }




  export type CreatorGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
    orderBy?: Enumerable<CreatorOrderByWithAggregationInput>
    by: Array<CreatorScalarFieldEnum>
    having?: CreatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreatorCountAggregateInputType | true
    _avg?: CreatorAvgAggregateInputType
    _sum?: CreatorSumAggregateInputType
    _min?: CreatorMinAggregateInputType
    _max?: CreatorMaxAggregateInputType
  }


  export type CreatorGroupByOutputType = {
    id: number
    name: string
    _count: CreatorCountAggregateOutputType | null
    _avg: CreatorAvgAggregateOutputType | null
    _sum: CreatorSumAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
  }

  type GetCreatorGroupByPayload<T extends CreatorGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CreatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorGroupByOutputType[P]>
        }
      >
    >


  export type CreatorSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{
    likes?: boolean | ProblemFindManyArgs<ExtArgs>
    problems?: boolean | ProblemFindManyArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeArgs<ExtArgs>
  } & CreatorSelectScalar, ExtArgs['result']['creator']>

  export type CreatorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CreatorInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likes?: boolean | ProblemFindManyArgs<ExtArgs>
    problems?: boolean | ProblemFindManyArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeArgs<ExtArgs>
  } 

  export type CreatorGetPayload<S extends boolean | null | undefined | CreatorArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Creator = runtime.Types.Extensions.GetResultPayload<Creator, ExtArgs['result']['creator']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Creator :
    S extends undefined ? never :
    S extends { include: any } & (CreatorArgs | CreatorFindManyArgs)
    ? _Creator & {
    [P in TruthyKeys<S['include']>]:
        P extends 'likes' ? Array < ProblemGetPayload<S['include'][P], ExtArgs>>  :
        P extends 'problems' ? Array < ProblemGetPayload<S['include'][P], ExtArgs>>  :
        P extends '_count' ? CreatorCountOutputTypeGetPayload<S['include'][P], ExtArgs> :  never
  } 
    : S extends { select: any } & (CreatorArgs | CreatorFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'likes' ? Array < ProblemGetPayload<S['select'][P], ExtArgs>>  :
        P extends 'problems' ? Array < ProblemGetPayload<S['select'][P], ExtArgs>>  :
        P extends '_count' ? CreatorCountOutputTypeGetPayload<S['select'][P], ExtArgs> :  P extends keyof _Creator ? _Creator[P] : never
  } 
      : _Creator


  type CreatorCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<CreatorFindManyArgs, 'select' | 'include'> & {
      select?: CreatorCountAggregateInputType | true
    }
  >

  export interface CreatorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Creator that matches the filter.
     * @param {CreatorFindUniqueArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CreatorFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CreatorFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Creator'> extends True ? Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Creator that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CreatorFindUniqueOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CreatorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Creator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindFirstArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CreatorFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CreatorFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Creator'> extends True ? Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Creator that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindFirstOrThrowArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CreatorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Creators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Creators
     * const creators = await prisma.creator.findMany()
     * 
     * // Get first 10 Creators
     * const creators = await prisma.creator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creatorWithIdOnly = await prisma.creator.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CreatorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<CreatorGetPayload<T, ExtArgs>>>

    /**
     * Create a Creator.
     * @param {CreatorCreateArgs} args - Arguments to create a Creator.
     * @example
     * // Create one Creator
     * const Creator = await prisma.creator.create({
     *   data: {
     *     // ... data to create a Creator
     *   }
     * })
     * 
    **/
    create<T extends CreatorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorCreateArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Creators.
     *     @param {CreatorCreateManyArgs} args - Arguments to create many Creators.
     *     @example
     *     // Create many Creators
     *     const creator = await prisma.creator.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CreatorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Creator.
     * @param {CreatorDeleteArgs} args - Arguments to delete one Creator.
     * @example
     * // Delete one Creator
     * const Creator = await prisma.creator.delete({
     *   where: {
     *     // ... filter to delete one Creator
     *   }
     * })
     * 
    **/
    delete<T extends CreatorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorDeleteArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Creator.
     * @param {CreatorUpdateArgs} args - Arguments to update one Creator.
     * @example
     * // Update one Creator
     * const creator = await prisma.creator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CreatorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorUpdateArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Creators.
     * @param {CreatorDeleteManyArgs} args - Arguments to filter Creators to delete.
     * @example
     * // Delete a few Creators
     * const { count } = await prisma.creator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CreatorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Creators
     * const creator = await prisma.creator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CreatorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Creator.
     * @param {CreatorUpsertArgs} args - Arguments to update or create a Creator.
     * @example
     * // Update or create a Creator
     * const creator = await prisma.creator.upsert({
     *   create: {
     *     // ... data to create a Creator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Creator we want to update
     *   }
     * })
    **/
    upsert<T extends CreatorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorUpsertArgs<ExtArgs>>
    ): Prisma__CreatorClient<CreatorGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Creators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorCountArgs} args - Arguments to filter Creators to count.
     * @example
     * // Count the number of Creators
     * const count = await prisma.creator.count({
     *   where: {
     *     // ... the filter for the Creators we want to count
     *   }
     * })
    **/
    count<T extends CreatorCountArgs>(
      args?: Subset<T, CreatorCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CreatorAggregateArgs>(args: Subset<T, CreatorAggregateArgs>): PrismaPromise<GetCreatorAggregateType<T>>

    /**
     * Group by Creator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CreatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreatorGroupByArgs['orderBy'] }
        : { orderBy?: CreatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CreatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CreatorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    likes<T extends ProblemFindManyArgs<ExtArgs> = {}>(args?: Subset<T, ProblemFindManyArgs<ExtArgs>>): PrismaPromise<Array<ProblemGetPayload<T, ExtArgs>>| Null>;

    problems<T extends ProblemFindManyArgs<ExtArgs> = {}>(args?: Subset<T, ProblemFindManyArgs<ExtArgs>>): PrismaPromise<Array<ProblemGetPayload<T, ExtArgs>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Creator base type for findUnique actions
   */
  export type CreatorFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     * 
    **/
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator: findUnique
   */
  export interface CreatorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CreatorFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Creator findUniqueOrThrow
   */
  export type CreatorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     * 
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator base type for findFirst actions
   */
  export type CreatorFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     * 
    **/
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     * 
    **/
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     * 
    **/
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     * 
    **/
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }

  /**
   * Creator: findFirst
   */
  export interface CreatorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends CreatorFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Creator findFirstOrThrow
   */
  export type CreatorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     * 
    **/
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     * 
    **/
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     * 
    **/
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     * 
    **/
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }


  /**
   * Creator findMany
   */
  export type CreatorFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creators to fetch.
     * 
    **/
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     * 
    **/
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creators.
     * 
    **/
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }


  /**
   * Creator create
   */
  export type CreatorCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Creator.
     * 
    **/
    data: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
  }


  /**
   * Creator createMany
   */
  export type CreatorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creators.
     * 
    **/
    data: Enumerable<CreatorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Creator update
   */
  export type CreatorUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Creator.
     * 
    **/
    data: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
    /**
     * Choose, which Creator to update.
     * 
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator updateMany
   */
  export type CreatorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Creators.
     * 
    **/
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyInput>
    /**
     * Filter which Creators to update
     * 
    **/
    where?: CreatorWhereInput
  }


  /**
   * Creator upsert
   */
  export type CreatorUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Creator to update in case it exists.
     * 
    **/
    where: CreatorWhereUniqueInput
    /**
     * In case the Creator found by the `where` argument doesn't exist, create a new Creator with this data.
     * 
    **/
    create: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
    /**
     * In case the Creator was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
  }


  /**
   * Creator delete
   */
  export type CreatorDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter which Creator to delete.
     * 
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator deleteMany
   */
  export type CreatorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Creators to delete
     * 
    **/
    where?: CreatorWhereInput
  }


  /**
   * Creator without action
   */
  export type CreatorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude<ExtArgs> | null
  }



  /**
   * Model NativeTypeModel
   */


  export type AggregateNativeTypeModel = {
    _count: NativeTypeModelCountAggregateOutputType | null
    _avg: NativeTypeModelAvgAggregateOutputType | null
    _sum: NativeTypeModelSumAggregateOutputType | null
    _min: NativeTypeModelMinAggregateOutputType | null
    _max: NativeTypeModelMaxAggregateOutputType | null
  }

  export type NativeTypeModelAvgAggregateOutputType = {
    id: number | null
    bigInt: number | null
    decimal: Decimal | null
  }

  export type NativeTypeModelSumAggregateOutputType = {
    id: number | null
    bigInt: bigint | null
    decimal: Decimal | null
  }

  export type NativeTypeModelMinAggregateOutputType = {
    id: number | null
    bigInt: bigint | null
    byteA: Buffer | null
    decimal: Decimal | null
  }

  export type NativeTypeModelMaxAggregateOutputType = {
    id: number | null
    bigInt: bigint | null
    byteA: Buffer | null
    decimal: Decimal | null
  }

  export type NativeTypeModelCountAggregateOutputType = {
    id: number
    bigInt: number
    byteA: number
    decimal: number
    _all: number
  }


  export type NativeTypeModelAvgAggregateInputType = {
    id?: true
    bigInt?: true
    decimal?: true
  }

  export type NativeTypeModelSumAggregateInputType = {
    id?: true
    bigInt?: true
    decimal?: true
  }

  export type NativeTypeModelMinAggregateInputType = {
    id?: true
    bigInt?: true
    byteA?: true
    decimal?: true
  }

  export type NativeTypeModelMaxAggregateInputType = {
    id?: true
    bigInt?: true
    byteA?: true
    decimal?: true
  }

  export type NativeTypeModelCountAggregateInputType = {
    id?: true
    bigInt?: true
    byteA?: true
    decimal?: true
    _all?: true
  }

  export type NativeTypeModelAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NativeTypeModel to aggregate.
     * 
    **/
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     * 
    **/
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NativeTypeModels
    **/
    _count?: true | NativeTypeModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NativeTypeModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NativeTypeModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NativeTypeModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NativeTypeModelMaxAggregateInputType
  }

  export type GetNativeTypeModelAggregateType<T extends NativeTypeModelAggregateArgs> = {
        [P in keyof T & keyof AggregateNativeTypeModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNativeTypeModel[P]>
      : GetScalarType<T[P], AggregateNativeTypeModel[P]>
  }




  export type NativeTypeModelGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: NativeTypeModelWhereInput
    orderBy?: Enumerable<NativeTypeModelOrderByWithAggregationInput>
    by: Array<NativeTypeModelScalarFieldEnum>
    having?: NativeTypeModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NativeTypeModelCountAggregateInputType | true
    _avg?: NativeTypeModelAvgAggregateInputType
    _sum?: NativeTypeModelSumAggregateInputType
    _min?: NativeTypeModelMinAggregateInputType
    _max?: NativeTypeModelMaxAggregateInputType
  }


  export type NativeTypeModelGroupByOutputType = {
    id: number
    bigInt: bigint | null
    byteA: Buffer | null
    decimal: Decimal | null
    _count: NativeTypeModelCountAggregateOutputType | null
    _avg: NativeTypeModelAvgAggregateOutputType | null
    _sum: NativeTypeModelSumAggregateOutputType | null
    _min: NativeTypeModelMinAggregateOutputType | null
    _max: NativeTypeModelMaxAggregateOutputType | null
  }

  type GetNativeTypeModelGroupByPayload<T extends NativeTypeModelGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NativeTypeModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NativeTypeModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NativeTypeModelGroupByOutputType[P]>
            : GetScalarType<T[P], NativeTypeModelGroupByOutputType[P]>
        }
      >
    >


  export type NativeTypeModelSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{

  } & NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>

  export type NativeTypeModelSelectScalar = {
    id?: boolean
    bigInt?: boolean
    byteA?: boolean
    decimal?: boolean
  }

  export type NativeTypeModelGetPayload<S extends boolean | null | undefined | NativeTypeModelArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _NativeTypeModel = runtime.Types.Extensions.GetResultPayload<NativeTypeModel, ExtArgs['result']['nativeTypeModel']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _NativeTypeModel :
    S extends undefined ? never :
    S extends { include: any } & (NativeTypeModelArgs | NativeTypeModelFindManyArgs)
    ? _NativeTypeModel 
    : S extends { select: any } & (NativeTypeModelArgs | NativeTypeModelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _NativeTypeModel ? _NativeTypeModel[P] : never
  } 
      : _NativeTypeModel


  type NativeTypeModelCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<NativeTypeModelFindManyArgs, 'select' | 'include'> & {
      select?: NativeTypeModelCountAggregateInputType | true
    }
  >

  export interface NativeTypeModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one NativeTypeModel that matches the filter.
     * @param {NativeTypeModelFindUniqueArgs} args - Arguments to find a NativeTypeModel
     * @example
     * // Get one NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NativeTypeModelFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NativeTypeModelFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NativeTypeModel'> extends True ? Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one NativeTypeModel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {NativeTypeModelFindUniqueOrThrowArgs} args - Arguments to find a NativeTypeModel
     * @example
     * // Get one NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends NativeTypeModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first NativeTypeModel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelFindFirstArgs} args - Arguments to find a NativeTypeModel
     * @example
     * // Get one NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NativeTypeModelFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NativeTypeModelFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NativeTypeModel'> extends True ? Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first NativeTypeModel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelFindFirstOrThrowArgs} args - Arguments to find a NativeTypeModel
     * @example
     * // Get one NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends NativeTypeModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more NativeTypeModels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NativeTypeModels
     * const nativeTypeModels = await prisma.nativeTypeModel.findMany()
     * 
     * // Get first 10 NativeTypeModels
     * const nativeTypeModels = await prisma.nativeTypeModel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nativeTypeModelWithIdOnly = await prisma.nativeTypeModel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NativeTypeModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<NativeTypeModelGetPayload<T, ExtArgs>>>

    /**
     * Create a NativeTypeModel.
     * @param {NativeTypeModelCreateArgs} args - Arguments to create a NativeTypeModel.
     * @example
     * // Create one NativeTypeModel
     * const NativeTypeModel = await prisma.nativeTypeModel.create({
     *   data: {
     *     // ... data to create a NativeTypeModel
     *   }
     * })
     * 
    **/
    create<T extends NativeTypeModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelCreateArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many NativeTypeModels.
     *     @param {NativeTypeModelCreateManyArgs} args - Arguments to create many NativeTypeModels.
     *     @example
     *     // Create many NativeTypeModels
     *     const nativeTypeModel = await prisma.nativeTypeModel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NativeTypeModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a NativeTypeModel.
     * @param {NativeTypeModelDeleteArgs} args - Arguments to delete one NativeTypeModel.
     * @example
     * // Delete one NativeTypeModel
     * const NativeTypeModel = await prisma.nativeTypeModel.delete({
     *   where: {
     *     // ... filter to delete one NativeTypeModel
     *   }
     * })
     * 
    **/
    delete<T extends NativeTypeModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelDeleteArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one NativeTypeModel.
     * @param {NativeTypeModelUpdateArgs} args - Arguments to update one NativeTypeModel.
     * @example
     * // Update one NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NativeTypeModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelUpdateArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more NativeTypeModels.
     * @param {NativeTypeModelDeleteManyArgs} args - Arguments to filter NativeTypeModels to delete.
     * @example
     * // Delete a few NativeTypeModels
     * const { count } = await prisma.nativeTypeModel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NativeTypeModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more NativeTypeModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NativeTypeModels
     * const nativeTypeModel = await prisma.nativeTypeModel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NativeTypeModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one NativeTypeModel.
     * @param {NativeTypeModelUpsertArgs} args - Arguments to update or create a NativeTypeModel.
     * @example
     * // Update or create a NativeTypeModel
     * const nativeTypeModel = await prisma.nativeTypeModel.upsert({
     *   create: {
     *     // ... data to create a NativeTypeModel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NativeTypeModel we want to update
     *   }
     * })
    **/
    upsert<T extends NativeTypeModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelUpsertArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of NativeTypeModels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelCountArgs} args - Arguments to filter NativeTypeModels to count.
     * @example
     * // Count the number of NativeTypeModels
     * const count = await prisma.nativeTypeModel.count({
     *   where: {
     *     // ... the filter for the NativeTypeModels we want to count
     *   }
     * })
    **/
    count<T extends NativeTypeModelCountArgs>(
      args?: Subset<T, NativeTypeModelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NativeTypeModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NativeTypeModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NativeTypeModelAggregateArgs>(args: Subset<T, NativeTypeModelAggregateArgs>): PrismaPromise<GetNativeTypeModelAggregateType<T>>

    /**
     * Group by NativeTypeModel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NativeTypeModelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NativeTypeModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NativeTypeModelGroupByArgs['orderBy'] }
        : { orderBy?: NativeTypeModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NativeTypeModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNativeTypeModelGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NativeTypeModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NativeTypeModelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * NativeTypeModel base type for findUnique actions
   */
  export type NativeTypeModelFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }

  /**
   * NativeTypeModel: findUnique
   */
  export interface NativeTypeModelFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends NativeTypeModelFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NativeTypeModel findUniqueOrThrow
   */
  export type NativeTypeModelFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel base type for findFirst actions
   */
  export type NativeTypeModelFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     * 
    **/
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     * 
    **/
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NativeTypeModels.
     * 
    **/
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NativeTypeModels.
     * 
    **/
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }

  /**
   * NativeTypeModel: findFirst
   */
  export interface NativeTypeModelFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends NativeTypeModelFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * NativeTypeModel findFirstOrThrow
   */
  export type NativeTypeModelFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     * 
    **/
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     * 
    **/
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NativeTypeModels.
     * 
    **/
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NativeTypeModels.
     * 
    **/
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }


  /**
   * NativeTypeModel findMany
   */
  export type NativeTypeModelFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModels to fetch.
     * 
    **/
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     * 
    **/
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NativeTypeModels.
     * 
    **/
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }


  /**
   * NativeTypeModel create
   */
  export type NativeTypeModelCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The data needed to create a NativeTypeModel.
     * 
    **/
    data: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
  }


  /**
   * NativeTypeModel createMany
   */
  export type NativeTypeModelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many NativeTypeModels.
     * 
    **/
    data: Enumerable<NativeTypeModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NativeTypeModel update
   */
  export type NativeTypeModelUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The data needed to update a NativeTypeModel.
     * 
    **/
    data: XOR<NativeTypeModelUpdateInput, NativeTypeModelUncheckedUpdateInput>
    /**
     * Choose, which NativeTypeModel to update.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel updateMany
   */
  export type NativeTypeModelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update NativeTypeModels.
     * 
    **/
    data: XOR<NativeTypeModelUpdateManyMutationInput, NativeTypeModelUncheckedUpdateManyInput>
    /**
     * Filter which NativeTypeModels to update
     * 
    **/
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel upsert
   */
  export type NativeTypeModelUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The filter to search for the NativeTypeModel to update in case it exists.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
    /**
     * In case the NativeTypeModel found by the `where` argument doesn't exist, create a new NativeTypeModel with this data.
     * 
    **/
    create: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
    /**
     * In case the NativeTypeModel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NativeTypeModelUpdateInput, NativeTypeModelUncheckedUpdateInput>
  }


  /**
   * NativeTypeModel delete
   */
  export type NativeTypeModelDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter which NativeTypeModel to delete.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel deleteMany
   */
  export type NativeTypeModelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NativeTypeModels to delete
     * 
    **/
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel without action
   */
  export type NativeTypeModelArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect<ExtArgs> | null
  }



  /**
   * Model Equipment
   */


  export type AggregateEquipment = {
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  export type EquipmentMinAggregateOutputType = {
    id: string | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     * 
    **/
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipment
    **/
    _count?: true | EquipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipmentMaxAggregateInputType
  }

  export type GetEquipmentAggregateType<T extends EquipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipment[P]>
      : GetScalarType<T[P], AggregateEquipment[P]>
  }




  export type EquipmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: Enumerable<EquipmentOrderByWithAggregationInput>
    by: Array<EquipmentScalarFieldEnum>
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }


  export type EquipmentGroupByOutputType = {
    id: string
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = PrismaPromise<
    Array<
      PickArray<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetResultSelect<{

  } & EquipmentSelectScalar, ExtArgs['result']['equipment']>

  export type EquipmentSelectScalar = {
    id?: boolean
  }

  export type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentArgs, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs, _Equipment = runtime.Types.Extensions.GetResultPayload<Equipment, ExtArgs['result']['equipment']>> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? _Equipment :
    S extends undefined ? never :
    S extends { include: any } & (EquipmentArgs | EquipmentFindManyArgs)
    ? _Equipment 
    : S extends { select: any } & (EquipmentArgs | EquipmentFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof _Equipment ? _Equipment[P] : never
  } 
      : _Equipment


  type EquipmentCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = Merge<
    Omit<EquipmentFindManyArgs, 'select' | 'include'> & {
      select?: EquipmentCountAggregateInputType | true
    }
  >

  export interface EquipmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    /**
     * Find zero or one Equipment that matches the filter.
     * @param {EquipmentFindUniqueArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EquipmentFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Equipment'> extends True ? Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find one Equipment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EquipmentFindUniqueOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EquipmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find the first Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EquipmentFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Equipment'> extends True ? Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs> : Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs> | null, null, ExtArgs>

    /**
     * Find the first Equipment that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindFirstOrThrowArgs} args - Arguments to find a Equipment
     * @example
     * // Get one Equipment
     * const equipment = await prisma.equipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EquipmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Find zero or more Equipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipment
     * const equipment = await prisma.equipment.findMany()
     * 
     * // Get first 10 Equipment
     * const equipment = await prisma.equipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipmentWithIdOnly = await prisma.equipment.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EquipmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentFindManyArgs<ExtArgs>>
    ): PrismaPromise<Array<EquipmentGetPayload<T, ExtArgs>>>

    /**
     * Create a Equipment.
     * @param {EquipmentCreateArgs} args - Arguments to create a Equipment.
     * @example
     * // Create one Equipment
     * const Equipment = await prisma.equipment.create({
     *   data: {
     *     // ... data to create a Equipment
     *   }
     * })
     * 
    **/
    create<T extends EquipmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentCreateArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Create many Equipment.
     *     @param {EquipmentCreateManyArgs} args - Arguments to create many Equipment.
     *     @example
     *     // Create many Equipment
     *     const equipment = await prisma.equipment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EquipmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentCreateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Equipment.
     * @param {EquipmentDeleteArgs} args - Arguments to delete one Equipment.
     * @example
     * // Delete one Equipment
     * const Equipment = await prisma.equipment.delete({
     *   where: {
     *     // ... filter to delete one Equipment
     *   }
     * })
     * 
    **/
    delete<T extends EquipmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentDeleteArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Update one Equipment.
     * @param {EquipmentUpdateArgs} args - Arguments to update one Equipment.
     * @example
     * // Update one Equipment
     * const equipment = await prisma.equipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EquipmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentUpdateArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Delete zero or more Equipment.
     * @param {EquipmentDeleteManyArgs} args - Arguments to filter Equipment to delete.
     * @example
     * // Delete a few Equipment
     * const { count } = await prisma.equipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EquipmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentDeleteManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipment
     * const equipment = await prisma.equipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EquipmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentUpdateManyArgs<ExtArgs>>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Equipment.
     * @param {EquipmentUpsertArgs} args - Arguments to update or create a Equipment.
     * @example
     * // Update or create a Equipment
     * const equipment = await prisma.equipment.upsert({
     *   create: {
     *     // ... data to create a Equipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipment we want to update
     *   }
     * })
    **/
    upsert<T extends EquipmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentUpsertArgs<ExtArgs>>
    ): Prisma__EquipmentClient<EquipmentGetPayload<T, ExtArgs>, never, ExtArgs>

    /**
     * Count the number of Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentCountArgs} args - Arguments to filter Equipment to count.
     * @example
     * // Count the number of Equipment
     * const count = await prisma.equipment.count({
     *   where: {
     *     // ... the filter for the Equipment we want to count
     *   }
     * })
    **/
    count<T extends EquipmentCountArgs>(
      args?: Subset<T, EquipmentCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): PrismaPromise<GetEquipmentAggregateType<T>>

    /**
     * Group by Equipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EquipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipmentGroupByArgs['orderBy'] }
        : { orderBy?: EquipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EquipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Equipment base type for findUnique actions
   */
  export type EquipmentFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     * 
    **/
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment: findUnique
   */
  export interface EquipmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends EquipmentFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     * 
    **/
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment base type for findFirst actions
   */
  export type EquipmentFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     * 
    **/
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     * 
    **/
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     * 
    **/
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }

  /**
   * Equipment: findFirst
   */
  export interface EquipmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends EquipmentFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     * 
    **/
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     * 
    **/
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     * 
    **/
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }


  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     * 
    **/
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     * 
    **/
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     * 
    **/
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     * 
    **/
    skip?: number
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }


  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     * 
    **/
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }


  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     * 
    **/
    data: Enumerable<EquipmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     * 
    **/
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     * 
    **/
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     * 
    **/
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     * 
    **/
    where?: EquipmentWhereInput
  }


  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     * 
    **/
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     * 
    **/
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }


  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     * 
    **/
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     * 
    **/
    where?: EquipmentWhereInput
  }


  /**
   * Equipment without action
   */
  export type EquipmentArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     * 
    **/
    select?: EquipmentSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const CategoryScalarFieldEnum: {
    name: 'name',
    slug: 'slug',
    number: 'number'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CreatorOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CreatorOrderByRelevanceFieldEnum = (typeof CreatorOrderByRelevanceFieldEnum)[keyof typeof CreatorOrderByRelevanceFieldEnum]


  export const CreatorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CreatorScalarFieldEnum = (typeof CreatorScalarFieldEnum)[keyof typeof CreatorScalarFieldEnum]


  export const DirectorOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type DirectorOrderByRelevanceFieldEnum = (typeof DirectorOrderByRelevanceFieldEnum)[keyof typeof DirectorOrderByRelevanceFieldEnum]


  export const DirectorScalarFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum]


  export const EquipmentOrderByRelevanceFieldEnum: {
    id: 'id'
  };

  export type EquipmentOrderByRelevanceFieldEnum = (typeof EquipmentOrderByRelevanceFieldEnum)[keyof typeof EquipmentOrderByRelevanceFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const MovieOrderByRelevanceFieldEnum: {
    directorFirstName: 'directorFirstName',
    directorLastName: 'directorLastName',
    title: 'title'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const MovieScalarFieldEnum: {
    directorFirstName: 'directorFirstName',
    directorLastName: 'directorLastName',
    title: 'title'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const NativeTypeModelScalarFieldEnum: {
    id: 'id',
    bigInt: 'bigInt',
    byteA: 'byteA',
    decimal: 'decimal'
  };

  export type NativeTypeModelScalarFieldEnum = (typeof NativeTypeModelScalarFieldEnum)[keyof typeof NativeTypeModelScalarFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PatientOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const PatientScalarFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const PostScalarFieldEnum: {
    uuid: 'uuid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    published: 'published',
    title: 'title',
    subtitle: 'subtitle',
    content: 'content',
    authorId: 'authorId',
    editorId: 'editorId',
    kind: 'kind',
    metadata: 'metadata'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ProblemOrderByRelevanceFieldEnum: {
    problemText: 'problemText'
  };

  export type ProblemOrderByRelevanceFieldEnum = (typeof ProblemOrderByRelevanceFieldEnum)[keyof typeof ProblemOrderByRelevanceFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    problemText: 'problemText',
    creatorId: 'creatorId'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    aliases: 'aliases'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    age: 'age',
    balance: 'balance',
    amount: 'amount',
    role: 'role',
    grades: 'grades',
    aliases: 'aliases'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const postOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    subtitle: 'subtitle',
    content: 'content'
  };

  export type postOrderByRelevanceFieldEnum = (typeof postOrderByRelevanceFieldEnum)[keyof typeof postOrderByRelevanceFieldEnum]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    age?: IntFilter | number
    balance?: FloatFilter | number
    amount?: FloatFilter | number
    posts?: PostListRelationFilter
    role?: EnumRoleFilter | Role
    editorPosts?: PostListRelationFilter
    grades?: IntNullableListFilter
    aliases?: StringNullableListFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    posts?: postOrderByRelationAggregateInput
    role?: SortOrder
    editorPosts?: postOrderByRelationAggregateInput
    grades?: SortOrder
    aliases?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    name?: StringNullableFilter | string | null
    age?: IntFilter | number
    balance?: FloatFilter | number
    amount?: FloatFilter | number
    posts?: PostListRelationFilter
    role?: EnumRoleFilter | Role
    editorPosts?: PostListRelationFilter
    grades?: IntNullableListFilter
    aliases?: StringNullableListFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
    grades?: SortOrder
    aliases?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    age?: IntWithAggregatesFilter | number
    balance?: FloatWithAggregatesFilter | number
    amount?: FloatWithAggregatesFilter | number
    role?: EnumRoleWithAggregatesFilter | Role
    grades?: IntNullableListFilter
    aliases?: StringNullableListFilter
  }

  export type postWhereInput = {
    AND?: Enumerable<postWhereInput>
    OR?: Enumerable<postWhereInput>
    NOT?: Enumerable<postWhereInput>
    uuid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    published?: BoolFilter | boolean
    title?: StringFilter | string
    subtitle?: StringFilter | string
    content?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    editor?: XOR<UserRelationFilter, UserWhereInput> | null
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
  }

  export type postOrderByWithRelationAndSearchRelevanceInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrderInput | SortOrder
    author?: UserOrderByWithRelationAndSearchRelevanceInput
    authorId?: SortOrder
    editor?: UserOrderByWithRelationAndSearchRelevanceInput
    editorId?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    metadata?: SortOrder
    _relevance?: postOrderByRelevanceInput
  }

  export type postWhereUniqueInput = Prisma.AtLeast<{
    uuid?: string
    AND?: Enumerable<postWhereInput>
    OR?: Enumerable<postWhereInput>
    NOT?: Enumerable<postWhereInput>
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    published?: BoolFilter | boolean
    title?: StringFilter | string
    subtitle?: StringFilter | string
    content?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    editor?: XOR<UserRelationFilter, UserWhereInput> | null
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
  }, "uuid">

  export type postOrderByWithAggregationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrderInput | SortOrder
    authorId?: SortOrder
    editorId?: SortOrderInput | SortOrder
    kind?: SortOrderInput | SortOrder
    metadata?: SortOrder
    _count?: postCountOrderByAggregateInput
    _avg?: postAvgOrderByAggregateInput
    _max?: postMaxOrderByAggregateInput
    _min?: postMinOrderByAggregateInput
    _sum?: postSumOrderByAggregateInput
  }

  export type postScalarWhereWithAggregatesInput = {
    AND?: Enumerable<postScalarWhereWithAggregatesInput>
    OR?: Enumerable<postScalarWhereWithAggregatesInput>
    NOT?: Enumerable<postScalarWhereWithAggregatesInput>
    uuid?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    published?: BoolWithAggregatesFilter | boolean
    title?: StringWithAggregatesFilter | string
    subtitle?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    authorId?: IntWithAggregatesFilter | number
    editorId?: IntNullableWithAggregatesFilter | number | null
    kind?: EnumPostKindNullableWithAggregatesFilter | PostKind | null
    metadata?: JsonWithAggregatesFilter
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    name?: StringFilter | string
    slug?: StringFilter | string
    number?: IntFilter | number
  }

  export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryCompoundUnique?: CategoryCategoryCompoundUniqueCompoundUniqueInput
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    name?: StringFilter | string
    slug?: StringFilter | string
    number?: IntFilter | number
  }, "categoryCompoundUnique">

  export type CategoryOrderByWithAggregationInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    name?: StringWithAggregatesFilter | string
    slug?: StringWithAggregatesFilter | string
    number?: IntWithAggregatesFilter | number
  }

  export type PatientWhereInput = {
    AND?: Enumerable<PatientWhereInput>
    OR?: Enumerable<PatientWhereInput>
    NOT?: Enumerable<PatientWhereInput>
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
  }

  export type PatientOrderByWithRelationAndSearchRelevanceInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput
    AND?: Enumerable<PatientWhereInput>
    OR?: Enumerable<PatientWhereInput>
    NOT?: Enumerable<PatientWhereInput>
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    email?: StringFilter | string
  }, "firstName_lastName">

  export type PatientOrderByWithAggregationInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PatientScalarWhereWithAggregatesInput>
    OR?: Enumerable<PatientScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PatientScalarWhereWithAggregatesInput>
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
  }

  export type MovieWhereInput = {
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    directorFirstName?: StringFilter | string
    directorLastName?: StringFilter | string
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
    title?: StringFilter | string
  }

  export type MovieOrderByWithRelationAndSearchRelevanceInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    director?: DirectorOrderByWithRelationAndSearchRelevanceInput
    title?: SortOrder
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    movieCompoundId?: MovieMovieCompoundIdCompoundUniqueInput
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    directorFirstName?: StringFilter | string
    directorLastName?: StringFilter | string
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
    title?: StringFilter | string
  }, "movieCompoundId">

  export type MovieOrderByWithAggregationInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MovieScalarWhereWithAggregatesInput>
    OR?: Enumerable<MovieScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MovieScalarWhereWithAggregatesInput>
    directorFirstName?: StringWithAggregatesFilter | string
    directorLastName?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
  }

  export type DirectorWhereInput = {
    AND?: Enumerable<DirectorWhereInput>
    OR?: Enumerable<DirectorWhereInput>
    NOT?: Enumerable<DirectorWhereInput>
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    movies?: MovieListRelationFilter
  }

  export type DirectorOrderByWithRelationAndSearchRelevanceInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
    _relevance?: DirectorOrderByRelevanceInput
  }

  export type DirectorWhereUniqueInput = Prisma.AtLeast<{
    firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput
    AND?: Enumerable<DirectorWhereInput>
    OR?: Enumerable<DirectorWhereInput>
    NOT?: Enumerable<DirectorWhereInput>
    firstName?: StringFilter | string
    lastName?: StringFilter | string
    movies?: MovieListRelationFilter
  }, "firstName_lastName">

  export type DirectorOrderByWithAggregationInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    _count?: DirectorCountOrderByAggregateInput
    _max?: DirectorMaxOrderByAggregateInput
    _min?: DirectorMinOrderByAggregateInput
  }

  export type DirectorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    OR?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DirectorScalarWhereWithAggregatesInput>
    firstName?: StringWithAggregatesFilter | string
    lastName?: StringWithAggregatesFilter | string
  }

  export type ProblemWhereInput = {
    AND?: Enumerable<ProblemWhereInput>
    OR?: Enumerable<ProblemWhereInput>
    NOT?: Enumerable<ProblemWhereInput>
    id?: IntFilter | number
    problemText?: StringFilter | string
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorRelationFilter, CreatorWhereInput> | null
    creatorId?: IntNullableFilter | number | null
  }

  export type ProblemOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    problemText?: SortOrder
    likedBy?: CreatorOrderByRelationAggregateInput
    creator?: CreatorOrderByWithRelationAndSearchRelevanceInput
    creatorId?: SortOrderInput | SortOrder
    _relevance?: ProblemOrderByRelevanceInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<ProblemWhereInput>
    OR?: Enumerable<ProblemWhereInput>
    NOT?: Enumerable<ProblemWhereInput>
    problemText?: StringFilter | string
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorRelationFilter, CreatorWhereInput> | null
    creatorId?: IntNullableFilter | number | null
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _avg?: ProblemAvgOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
    _sum?: ProblemSumOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProblemScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProblemScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProblemScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    problemText?: StringWithAggregatesFilter | string
    creatorId?: IntNullableWithAggregatesFilter | number | null
  }

  export type CreatorWhereInput = {
    AND?: Enumerable<CreatorWhereInput>
    OR?: Enumerable<CreatorWhereInput>
    NOT?: Enumerable<CreatorWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    likes?: ProblemListRelationFilter
    problems?: ProblemListRelationFilter
  }

  export type CreatorOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrder
    likes?: ProblemOrderByRelationAggregateInput
    problems?: ProblemOrderByRelationAggregateInput
    _relevance?: CreatorOrderByRelevanceInput
  }

  export type CreatorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<CreatorWhereInput>
    OR?: Enumerable<CreatorWhereInput>
    NOT?: Enumerable<CreatorWhereInput>
    name?: StringFilter | string
    likes?: ProblemListRelationFilter
    problems?: ProblemListRelationFilter
  }, "id">

  export type CreatorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CreatorCountOrderByAggregateInput
    _avg?: CreatorAvgOrderByAggregateInput
    _max?: CreatorMaxOrderByAggregateInput
    _min?: CreatorMinOrderByAggregateInput
    _sum?: CreatorSumOrderByAggregateInput
  }

  export type CreatorScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CreatorScalarWhereWithAggregatesInput>
    OR?: Enumerable<CreatorScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CreatorScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type NativeTypeModelWhereInput = {
    AND?: Enumerable<NativeTypeModelWhereInput>
    OR?: Enumerable<NativeTypeModelWhereInput>
    NOT?: Enumerable<NativeTypeModelWhereInput>
    id?: IntFilter | number
    bigInt?: BigIntNullableFilter | bigint | number | null
    byteA?: BytesNullableFilter | Buffer | null
    decimal?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    bigInt?: SortOrderInput | SortOrder
    byteA?: SortOrderInput | SortOrder
    decimal?: SortOrderInput | SortOrder
  }

  export type NativeTypeModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<NativeTypeModelWhereInput>
    OR?: Enumerable<NativeTypeModelWhereInput>
    NOT?: Enumerable<NativeTypeModelWhereInput>
    bigInt?: BigIntNullableFilter | bigint | number | null
    byteA?: BytesNullableFilter | Buffer | null
    decimal?: DecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }, "id">

  export type NativeTypeModelOrderByWithAggregationInput = {
    id?: SortOrder
    bigInt?: SortOrderInput | SortOrder
    byteA?: SortOrderInput | SortOrder
    decimal?: SortOrderInput | SortOrder
    _count?: NativeTypeModelCountOrderByAggregateInput
    _avg?: NativeTypeModelAvgOrderByAggregateInput
    _max?: NativeTypeModelMaxOrderByAggregateInput
    _min?: NativeTypeModelMinOrderByAggregateInput
    _sum?: NativeTypeModelSumOrderByAggregateInput
  }

  export type NativeTypeModelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NativeTypeModelScalarWhereWithAggregatesInput>
    OR?: Enumerable<NativeTypeModelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NativeTypeModelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bigInt?: BigIntNullableWithAggregatesFilter | bigint | number | null
    byteA?: BytesNullableWithAggregatesFilter | Buffer | null
    decimal?: DecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type EquipmentWhereInput = {
    AND?: Enumerable<EquipmentWhereInput>
    OR?: Enumerable<EquipmentWhereInput>
    NOT?: Enumerable<EquipmentWhereInput>
    id?: StringFilter | string
  }

  export type EquipmentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    _relevance?: EquipmentOrderByRelevanceInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<EquipmentWhereInput>
    OR?: Enumerable<EquipmentWhereInput>
    NOT?: Enumerable<EquipmentWhereInput>
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    posts?: postCreateNestedManyWithoutAuthorInput
    role: Role
    editorPosts?: postCreateNestedManyWithoutEditorInput
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    role: Role
    editorPosts?: postUncheckedCreateNestedManyWithoutEditorInput
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    posts?: postUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    editorPosts?: postUpdateManyWithoutEditorNestedInput
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    editorPosts?: postUncheckedUpdateManyWithoutEditorNestedInput
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type postCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    author: UserCreateNestedOneWithoutPostsInput
    editor?: UserCreateNestedOneWithoutEditorPostsInput
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    authorId: number
    editorId?: number | null
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    editor?: UserUpdateOneWithoutEditorPostsNestedInput
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    editorId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postCreateManyInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    authorId: number
    editorId?: number | null
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateManyInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    editorId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    number: number
  }

  export type CategoryUncheckedCreateInput = {
    name: string
    slug: string
    number: number
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateManyInput = {
    name: string
    slug: string
    number: number
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
  }

  export type PatientCreateInput = {
    firstName: string
    lastName: string
    email: string
  }

  export type PatientUncheckedCreateInput = {
    firstName: string
    lastName: string
    email: string
  }

  export type PatientUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateManyInput = {
    firstName: string
    lastName: string
    email: string
  }

  export type PatientUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PatientUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateInput = {
    director: DirectorCreateNestedOneWithoutMoviesInput
    title: string
  }

  export type MovieUncheckedCreateInput = {
    directorFirstName: string
    directorLastName: string
    title: string
  }

  export type MovieUpdateInput = {
    director?: DirectorUpdateOneRequiredWithoutMoviesNestedInput
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateInput = {
    directorFirstName?: StringFieldUpdateOperationsInput | string
    directorLastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateManyInput = {
    directorFirstName: string
    directorLastName: string
    title: string
  }

  export type MovieUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateManyInput = {
    directorFirstName?: StringFieldUpdateOperationsInput | string
    directorLastName?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DirectorCreateInput = {
    firstName: string
    lastName: string
    movies?: MovieCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUncheckedCreateInput = {
    firstName: string
    lastName: string
    movies?: MovieUncheckedCreateNestedManyWithoutDirectorInput
  }

  export type DirectorUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    movies?: MovieUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutDirectorNestedInput
  }

  export type DirectorCreateManyInput = {
    firstName: string
    lastName: string
  }

  export type DirectorUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type DirectorUncheckedUpdateManyInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemCreateInput = {
    problemText: string
    likedBy?: CreatorCreateNestedManyWithoutLikesInput
    creator?: CreatorCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: number
    problemText: string
    likedBy?: CreatorUncheckedCreateNestedManyWithoutLikesInput
    creatorId?: number | null
  }

  export type ProblemUpdateInput = {
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUpdateManyWithoutLikesNestedInput
    creator?: CreatorUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUncheckedUpdateManyWithoutLikesNestedInput
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProblemCreateManyInput = {
    id?: number
    problemText: string
    creatorId?: number | null
  }

  export type ProblemUpdateManyMutationInput = {
    problemText?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CreatorCreateInput = {
    name: string
    likes?: ProblemCreateNestedManyWithoutLikedByInput
    problems?: ProblemCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateInput = {
    id?: number
    name: string
    likes?: ProblemUncheckedCreateNestedManyWithoutLikedByInput
    problems?: ProblemUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUpdateManyWithoutLikedByNestedInput
    problems?: ProblemUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUncheckedUpdateManyWithoutLikedByNestedInput
    problems?: ProblemUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorCreateManyInput = {
    id?: number
    name: string
  }

  export type CreatorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CreatorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type NativeTypeModelCreateInput = {
    bigInt?: bigint | number | null
    byteA?: Buffer | null
    decimal?: Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelUncheckedCreateInput = {
    id?: number
    bigInt?: bigint | number | null
    byteA?: Buffer | null
    decimal?: Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelUpdateInput = {
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelCreateManyInput = {
    id?: number
    bigInt?: bigint | number | null
    byteA?: Buffer | null
    decimal?: Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelUpdateManyMutationInput = {
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type EquipmentCreateInput = {
    id?: string
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentCreateManyInput = {
    id?: string
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
  }

  export type EnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type IntNullableListFilter = {
    equals?: Enumerable<number> | null
    has?: number | null
    hasEvery?: Enumerable<number>
    hasSome?: Enumerable<number>
    isEmpty?: boolean
  }

  export type StringNullableListFilter = {
    equals?: Enumerable<string> | null
    has?: string | null
    hasEvery?: Enumerable<string>
    hasSome?: Enumerable<string>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: Enumerable<UserOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
    grades?: SortOrder
    aliases?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    grades?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    grades?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type FloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type EnumPostKindNullableFilter = {
    equals?: PostKind | null
    in?: Enumerable<PostKind> | null
    notIn?: Enumerable<PostKind> | null
    not?: NestedEnumPostKindNullableFilter | PostKind | null
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type postOrderByRelevanceInput = {
    fields: Enumerable<postOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type postCountOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    editorId?: SortOrder
    kind?: SortOrder
    metadata?: SortOrder
  }

  export type postAvgOrderByAggregateInput = {
    authorId?: SortOrder
    editorId?: SortOrder
  }

  export type postMaxOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    editorId?: SortOrder
    kind?: SortOrder
  }

  export type postMinOrderByAggregateInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    editorId?: SortOrder
    kind?: SortOrder
  }

  export type postSumOrderByAggregateInput = {
    authorId?: SortOrder
    editorId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type EnumPostKindNullableWithAggregatesFilter = {
    equals?: PostKind | null
    in?: Enumerable<PostKind> | null
    notIn?: Enumerable<PostKind> | null
    not?: NestedEnumPostKindNullableWithAggregatesFilter | PostKind | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPostKindNullableFilter
    _max?: NestedEnumPostKindNullableFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type CategoryOrderByRelevanceInput = {
    fields: Enumerable<CategoryOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CategoryCategoryCompoundUniqueCompoundUniqueInput = {
    slug: string
    number: number
  }

  export type CategoryCountOrderByAggregateInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type PatientOrderByRelevanceInput = {
    fields: Enumerable<PatientOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type PatientFirstNameLastNameCompoundUniqueInput = {
    firstName: string
    lastName: string
  }

  export type PatientCountOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type DirectorRelationFilter = {
    is?: DirectorWhereInput
    isNot?: DirectorWhereInput
  }

  export type MovieOrderByRelevanceInput = {
    fields: Enumerable<MovieOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type MovieMovieCompoundIdCompoundUniqueInput = {
    directorFirstName: string
    directorLastName: string
    title: string
  }

  export type MovieCountOrderByAggregateInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type MovieOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DirectorOrderByRelevanceInput = {
    fields: Enumerable<DirectorOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type DirectorFirstNameLastNameCompoundUniqueInput = {
    firstName: string
    lastName: string
  }

  export type DirectorCountOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type DirectorMaxOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type DirectorMinOrderByAggregateInput = {
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type CreatorListRelationFilter = {
    every?: CreatorWhereInput
    some?: CreatorWhereInput
    none?: CreatorWhereInput
  }

  export type CreatorRelationFilter = {
    is?: CreatorWhereInput | null
    isNot?: CreatorWhereInput | null
  }

  export type CreatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemOrderByRelevanceInput = {
    fields: Enumerable<ProblemOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemAvgOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemSumOrderByAggregateInput = {
    id?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CreatorOrderByRelevanceInput = {
    fields: Enumerable<CreatorOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type CreatorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CreatorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CreatorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CreatorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CreatorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelCountOrderByAggregateInput = {
    id?: SortOrder
    bigInt?: SortOrder
    byteA?: SortOrder
    decimal?: SortOrder
  }

  export type NativeTypeModelAvgOrderByAggregateInput = {
    id?: SortOrder
    bigInt?: SortOrder
    decimal?: SortOrder
  }

  export type NativeTypeModelMaxOrderByAggregateInput = {
    id?: SortOrder
    bigInt?: SortOrder
    byteA?: SortOrder
    decimal?: SortOrder
  }

  export type NativeTypeModelMinOrderByAggregateInput = {
    id?: SortOrder
    bigInt?: SortOrder
    byteA?: SortOrder
    decimal?: SortOrder
  }

  export type NativeTypeModelSumOrderByAggregateInput = {
    id?: SortOrder
    bigInt?: SortOrder
    decimal?: SortOrder
  }

  export type BigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type EquipmentOrderByRelevanceInput = {
    fields: Enumerable<EquipmentOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type EquipmentCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type postCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type postCreateNestedManyWithoutEditorInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type UserCreategradesInput = {
    set: Enumerable<number>
  }

  export type UserCreatealiasesInput = {
    set: Enumerable<string>
  }

  export type postUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type postUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type postUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type postUpdateManyWithoutEditorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutEditorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutEditorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type UserUpdategradesInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type UserUpdatealiasesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type postUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type postUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    connect?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutEditorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutEditorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEditorPostsInput = {
    create?: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditorPostsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneWithoutEditorPostsNestedInput = {
    create?: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditorPostsInput
    upsert?: UserUpsertWithoutEditorPostsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEditorPostsInput, UserUpdateWithoutEditorPostsInput>, UserUncheckedUpdateWithoutEditorPostsInput>
  }

  export type NullableEnumPostKindFieldUpdateOperationsInput = {
    set?: PostKind | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DirectorCreateNestedOneWithoutMoviesInput = {
    create?: XOR<DirectorCreateWithoutMoviesInput, DirectorUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput
    connect?: DirectorWhereUniqueInput
  }

  export type DirectorUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<DirectorCreateWithoutMoviesInput, DirectorUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput
    upsert?: DirectorUpsertWithoutMoviesInput
    connect?: DirectorWhereUniqueInput
    update?: XOR<XOR<DirectorUpdateToOneWithWhereWithoutMoviesInput, DirectorUpdateWithoutMoviesInput>, DirectorUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieCreateNestedManyWithoutDirectorInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
  }

  export type MovieUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutDirectorInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutDirectorInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    connect?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutDirectorInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutDirectorInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type CreatorCreateNestedManyWithoutLikesInput = {
    create?: XOR<Enumerable<CreatorCreateWithoutLikesInput>, Enumerable<CreatorUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<CreatorCreateOrConnectWithoutLikesInput>
    connect?: Enumerable<CreatorWhereUniqueInput>
  }

  export type CreatorCreateNestedOneWithoutProblemsInput = {
    create?: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput
    connect?: CreatorWhereUniqueInput
  }

  export type CreatorUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<Enumerable<CreatorCreateWithoutLikesInput>, Enumerable<CreatorUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<CreatorCreateOrConnectWithoutLikesInput>
    connect?: Enumerable<CreatorWhereUniqueInput>
  }

  export type CreatorUpdateManyWithoutLikesNestedInput = {
    create?: XOR<Enumerable<CreatorCreateWithoutLikesInput>, Enumerable<CreatorUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<CreatorCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<CreatorUpsertWithWhereUniqueWithoutLikesInput>
    set?: Enumerable<CreatorWhereUniqueInput>
    disconnect?: Enumerable<CreatorWhereUniqueInput>
    delete?: Enumerable<CreatorWhereUniqueInput>
    connect?: Enumerable<CreatorWhereUniqueInput>
    update?: Enumerable<CreatorUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<CreatorUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<CreatorScalarWhereInput>
  }

  export type CreatorUpdateOneWithoutProblemsNestedInput = {
    create?: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput
    upsert?: CreatorUpsertWithoutProblemsInput
    disconnect?: CreatorWhereInput | boolean
    delete?: CreatorWhereInput | boolean
    connect?: CreatorWhereUniqueInput
    update?: XOR<XOR<CreatorUpdateToOneWithWhereWithoutProblemsInput, CreatorUpdateWithoutProblemsInput>, CreatorUncheckedUpdateWithoutProblemsInput>
  }

  export type CreatorUncheckedUpdateManyWithoutLikesNestedInput = {
    create?: XOR<Enumerable<CreatorCreateWithoutLikesInput>, Enumerable<CreatorUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<CreatorCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<CreatorUpsertWithWhereUniqueWithoutLikesInput>
    set?: Enumerable<CreatorWhereUniqueInput>
    disconnect?: Enumerable<CreatorWhereUniqueInput>
    delete?: Enumerable<CreatorWhereUniqueInput>
    connect?: Enumerable<CreatorWhereUniqueInput>
    update?: Enumerable<CreatorUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<CreatorUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<CreatorScalarWhereInput>
  }

  export type ProblemCreateNestedManyWithoutLikedByInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutLikedByInput>, Enumerable<ProblemUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutLikedByInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
  }

  export type ProblemCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: Enumerable<ProblemWhereUniqueInput>
  }

  export type ProblemUncheckedCreateNestedManyWithoutLikedByInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutLikedByInput>, Enumerable<ProblemUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutLikedByInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
  }

  export type ProblemUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: Enumerable<ProblemWhereUniqueInput>
  }

  export type ProblemUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutLikedByInput>, Enumerable<ProblemUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutLikedByInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutLikedByInput>
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutLikedByInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutLikedByInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type ProblemUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type ProblemUncheckedUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutLikedByInput>, Enumerable<ProblemUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutLikedByInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutLikedByInput>
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutLikedByInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutLikedByInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type ProblemUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleFilter | Role
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    search?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    _max?: NestedFloatFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedEnumPostKindNullableFilter = {
    equals?: PostKind | null
    in?: Enumerable<PostKind> | null
    notIn?: Enumerable<PostKind> | null
    not?: NestedEnumPostKindNullableFilter | PostKind | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedEnumPostKindNullableWithAggregatesFilter = {
    equals?: PostKind | null
    in?: Enumerable<PostKind> | null
    notIn?: Enumerable<PostKind> | null
    not?: NestedEnumPostKindNullableWithAggregatesFilter | PostKind | null
    _count?: NestedIntNullableFilter
    _min?: NestedEnumPostKindNullableFilter
    _max?: NestedEnumPostKindNullableFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedBigIntNullableFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableWithAggregatesFilter | bigint | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | null
    notIn?: Enumerable<Buffer> | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
  }

  export type postCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    editor?: UserCreateNestedOneWithoutEditorPostsInput
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    editorId?: number | null
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postCreateOrConnectWithoutAuthorInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput>
  }

  export type postCreateManyAuthorInputEnvelope = {
    data: Enumerable<postCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type postCreateWithoutEditorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    author: UserCreateNestedOneWithoutPostsInput
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedCreateWithoutEditorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    authorId: number
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postCreateOrConnectWithoutEditorInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput>
  }

  export type postCreateManyEditorInputEnvelope = {
    data: Enumerable<postCreateManyEditorInput>
    skipDuplicates?: boolean
  }

  export type postUpsertWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutAuthorInput, postUncheckedUpdateWithoutAuthorInput>
    create: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput>
  }

  export type postUpdateWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutAuthorInput, postUncheckedUpdateWithoutAuthorInput>
  }

  export type postUpdateManyWithWhereWithoutAuthorInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutPostsInput>
  }

  export type postScalarWhereInput = {
    AND?: Enumerable<postScalarWhereInput>
    OR?: Enumerable<postScalarWhereInput>
    NOT?: Enumerable<postScalarWhereInput>
    uuid?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    published?: BoolFilter | boolean
    title?: StringFilter | string
    subtitle?: StringFilter | string
    content?: StringNullableFilter | string | null
    authorId?: IntFilter | number
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
  }

  export type postUpsertWithWhereUniqueWithoutEditorInput = {
    where: postWhereUniqueInput
    update: XOR<postUpdateWithoutEditorInput, postUncheckedUpdateWithoutEditorInput>
    create: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput>
  }

  export type postUpdateWithWhereUniqueWithoutEditorInput = {
    where: postWhereUniqueInput
    data: XOR<postUpdateWithoutEditorInput, postUncheckedUpdateWithoutEditorInput>
  }

  export type postUpdateManyWithWhereWithoutEditorInput = {
    where: postScalarWhereInput
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutEditorPostsInput>
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    editorPosts?: postCreateNestedManyWithoutEditorInput
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    editorPosts?: postUncheckedCreateNestedManyWithoutEditorInput
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserCreateWithoutEditorPostsInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    posts?: postCreateNestedManyWithoutAuthorInput
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedCreateWithoutEditorPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
  }

  export type UserCreateOrConnectWithoutEditorPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    editorPosts?: postUpdateManyWithoutEditorNestedInput
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    editorPosts?: postUncheckedUpdateManyWithoutEditorNestedInput
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserUpsertWithoutEditorPostsInput = {
    update: XOR<UserUpdateWithoutEditorPostsInput, UserUncheckedUpdateWithoutEditorPostsInput>
    create: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEditorPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEditorPostsInput, UserUncheckedUpdateWithoutEditorPostsInput>
  }

  export type UserUpdateWithoutEditorPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    posts?: postUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type UserUncheckedUpdateWithoutEditorPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
  }

  export type DirectorCreateWithoutMoviesInput = {
    firstName: string
    lastName: string
  }

  export type DirectorUncheckedCreateWithoutMoviesInput = {
    firstName: string
    lastName: string
  }

  export type DirectorCreateOrConnectWithoutMoviesInput = {
    where: DirectorWhereUniqueInput
    create: XOR<DirectorCreateWithoutMoviesInput, DirectorUncheckedCreateWithoutMoviesInput>
  }

  export type DirectorUpsertWithoutMoviesInput = {
    update: XOR<DirectorUpdateWithoutMoviesInput, DirectorUncheckedUpdateWithoutMoviesInput>
    create: XOR<DirectorCreateWithoutMoviesInput, DirectorUncheckedCreateWithoutMoviesInput>
    where?: DirectorWhereInput
  }

  export type DirectorUpdateToOneWithWhereWithoutMoviesInput = {
    where?: DirectorWhereInput
    data: XOR<DirectorUpdateWithoutMoviesInput, DirectorUncheckedUpdateWithoutMoviesInput>
  }

  export type DirectorUpdateWithoutMoviesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type DirectorUncheckedUpdateWithoutMoviesInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCreateWithoutDirectorInput = {
    title: string
  }

  export type MovieUncheckedCreateWithoutDirectorInput = {
    title: string
  }

  export type MovieCreateOrConnectWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput>
  }

  export type MovieCreateManyDirectorInputEnvelope = {
    data: Enumerable<MovieCreateManyDirectorInput>
    skipDuplicates?: boolean
  }

  export type MovieUpsertWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    update: XOR<MovieUpdateWithoutDirectorInput, MovieUncheckedUpdateWithoutDirectorInput>
    create: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput>
  }

  export type MovieUpdateWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    data: XOR<MovieUpdateWithoutDirectorInput, MovieUncheckedUpdateWithoutDirectorInput>
  }

  export type MovieUpdateManyWithWhereWithoutDirectorInput = {
    where: MovieScalarWhereInput
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutMoviesInput>
  }

  export type MovieScalarWhereInput = {
    AND?: Enumerable<MovieScalarWhereInput>
    OR?: Enumerable<MovieScalarWhereInput>
    NOT?: Enumerable<MovieScalarWhereInput>
    directorFirstName?: StringFilter | string
    directorLastName?: StringFilter | string
    title?: StringFilter | string
  }

  export type CreatorCreateWithoutLikesInput = {
    name: string
    problems?: ProblemCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUncheckedCreateWithoutLikesInput = {
    id?: number
    name: string
    problems?: ProblemUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutLikesInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput>
  }

  export type CreatorCreateWithoutProblemsInput = {
    name: string
    likes?: ProblemCreateNestedManyWithoutLikedByInput
  }

  export type CreatorUncheckedCreateWithoutProblemsInput = {
    id?: number
    name: string
    likes?: ProblemUncheckedCreateNestedManyWithoutLikedByInput
  }

  export type CreatorCreateOrConnectWithoutProblemsInput = {
    where: CreatorWhereUniqueInput
    create: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
  }

  export type CreatorUpsertWithWhereUniqueWithoutLikesInput = {
    where: CreatorWhereUniqueInput
    update: XOR<CreatorUpdateWithoutLikesInput, CreatorUncheckedUpdateWithoutLikesInput>
    create: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput>
  }

  export type CreatorUpdateWithWhereUniqueWithoutLikesInput = {
    where: CreatorWhereUniqueInput
    data: XOR<CreatorUpdateWithoutLikesInput, CreatorUncheckedUpdateWithoutLikesInput>
  }

  export type CreatorUpdateManyWithWhereWithoutLikesInput = {
    where: CreatorScalarWhereInput
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyWithoutLikedByInput>
  }

  export type CreatorScalarWhereInput = {
    AND?: Enumerable<CreatorScalarWhereInput>
    OR?: Enumerable<CreatorScalarWhereInput>
    NOT?: Enumerable<CreatorScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
  }

  export type CreatorUpsertWithoutProblemsInput = {
    update: XOR<CreatorUpdateWithoutProblemsInput, CreatorUncheckedUpdateWithoutProblemsInput>
    create: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
    where?: CreatorWhereInput
  }

  export type CreatorUpdateToOneWithWhereWithoutProblemsInput = {
    where?: CreatorWhereInput
    data: XOR<CreatorUpdateWithoutProblemsInput, CreatorUncheckedUpdateWithoutProblemsInput>
  }

  export type CreatorUpdateWithoutProblemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUpdateManyWithoutLikedByNestedInput
  }

  export type CreatorUncheckedUpdateWithoutProblemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUncheckedUpdateManyWithoutLikedByNestedInput
  }

  export type ProblemCreateWithoutLikedByInput = {
    problemText: string
    creator?: CreatorCreateNestedOneWithoutProblemsInput
  }

  export type ProblemUncheckedCreateWithoutLikedByInput = {
    id?: number
    problemText: string
    creatorId?: number | null
  }

  export type ProblemCreateOrConnectWithoutLikedByInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput>
  }

  export type ProblemCreateWithoutCreatorInput = {
    problemText: string
    likedBy?: CreatorCreateNestedManyWithoutLikesInput
  }

  export type ProblemUncheckedCreateWithoutCreatorInput = {
    id?: number
    problemText: string
    likedBy?: CreatorUncheckedCreateNestedManyWithoutLikesInput
  }

  export type ProblemCreateOrConnectWithoutCreatorInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput>
  }

  export type ProblemCreateManyCreatorInputEnvelope = {
    data: Enumerable<ProblemCreateManyCreatorInput>
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutLikedByInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutLikedByInput, ProblemUncheckedUpdateWithoutLikedByInput>
    create: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutLikedByInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutLikedByInput, ProblemUncheckedUpdateWithoutLikedByInput>
  }

  export type ProblemUpdateManyWithWhereWithoutLikedByInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutLikesInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: Enumerable<ProblemScalarWhereInput>
    OR?: Enumerable<ProblemScalarWhereInput>
    NOT?: Enumerable<ProblemScalarWhereInput>
    id?: IntFilter | number
    problemText?: StringFilter | string
    creatorId?: IntNullableFilter | number | null
  }

  export type ProblemUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutCreatorInput, ProblemUncheckedUpdateWithoutCreatorInput>
    create: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutCreatorInput, ProblemUncheckedUpdateWithoutCreatorInput>
  }

  export type ProblemUpdateManyWithWhereWithoutCreatorInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutProblemsInput>
  }

  export type postCreateManyAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    editorId?: number | null
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postCreateManyEditorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    authorId: number
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postUpdateWithoutAuthorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    editor?: UserUpdateOneWithoutEditorPostsNestedInput
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateWithoutAuthorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    editorId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateManyWithoutPostsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    editorId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUpdateWithoutEditorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateWithoutEditorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateManyWithoutEditorPostsInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type MovieCreateManyDirectorInput = {
    title: string
  }

  export type MovieUpdateWithoutDirectorInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateWithoutDirectorInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateManyWithoutMoviesInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CreatorUpdateWithoutLikesInput = {
    name?: StringFieldUpdateOperationsInput | string
    problems?: ProblemUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    problems?: ProblemUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type CreatorUncheckedUpdateManyWithoutLikedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProblemCreateManyCreatorInput = {
    id?: number
    problemText: string
  }

  export type ProblemUpdateWithoutLikedByInput = {
    problemText?: StringFieldUpdateOperationsInput | string
    creator?: CreatorUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateWithoutLikedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProblemUncheckedUpdateManyWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProblemUpdateWithoutCreatorInput = {
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUpdateManyWithoutLikesNestedInput
  }

  export type ProblemUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUncheckedUpdateManyWithoutLikesNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutProblemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}