
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 */

export type User = {
  id: number
  email: string
  name: string | null
  age: number
  balance: number
  amount: number
  role: Role
  grades: number[]
  aliases: string[]
}

/**
 * Model post
 */

export type post = {
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
  metadata: Prisma.JsonValue
}

/**
 * Model Category
 */

export type Category = {
  name: string
  slug: string
  number: number
}

/**
 * Model Patient
 */

export type Patient = {
  firstName: string
  lastName: string
  email: string
}

/**
 * Model Movie
 */

export type Movie = {
  directorFirstName: string
  directorLastName: string
  title: string
}

/**
 * Model Director
 */

export type Director = {
  firstName: string
  lastName: string
}

/**
 * Model Problem
 */

export type Problem = {
  id: number
  problemText: string
  creatorId: number | null
}

/**
 * Model Creator
 */

export type Creator = {
  id: number
  name: string
}

/**
 * Model NativeTypeModel
 */

export type NativeTypeModel = {
  id: number
  bigInt: bigint | null
  byteA: Buffer | null
  decimal: Prisma.Decimal | null
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const PostKind: {
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
};

export type PostKind = (typeof PostKind)[keyof typeof PostKind]


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
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

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
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<GlobalReject>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<GlobalReject>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.DirectorDelegate<GlobalReject>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<GlobalReject>;

  /**
   * `prisma.creator`: Exposes CRUD operations for the **Creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): Prisma.CreatorDelegate<GlobalReject>;

  /**
   * `prisma.nativeTypeModel`: Exposes CRUD operations for the **NativeTypeModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NativeTypeModels
    * const nativeTypeModels = await prisma.nativeTypeModel.findMany()
    * ```
    */
  get nativeTypeModel(): Prisma.NativeTypeModelDelegate<GlobalReject>;
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

  /**
   * Prisma Client JS version: 2.30.0
   * Query Engine version: 60b19f4a1de4fe95741da371b4c44a92f4d1adcb
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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
    NativeTypeModel: 'NativeTypeModel'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
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
      ? GlobalRejectSettings[Action] extends boolean
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
     *  * @example
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
     * Overwrites the datasource url from your prisma.schema file
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

  /**
   * These options are being passed in to the middleware as "params"
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

  export type UserCountOutputTypeSelect = {
    posts?: boolean
    editorPosts?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserCountOutputType ?UserCountOutputType [P]
  : 
     never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type DirectorCountOutputType
   */


  export type DirectorCountOutputType = {
    movies: number
  }

  export type DirectorCountOutputTypeSelect = {
    movies?: boolean
  }

  export type DirectorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DirectorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DirectorCountOutputType
    : S extends undefined
    ? never
    : S extends DirectorCountOutputTypeArgs
    ?'include' extends U
    ? DirectorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DirectorCountOutputType ?DirectorCountOutputType [P]
  : 
     never
  } 
    : DirectorCountOutputType
  : DirectorCountOutputType




  // Custom InputTypes

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     * 
    **/
    select?: DirectorCountOutputTypeSelect | null
  }



  /**
   * Count Type ProblemCountOutputType
   */


  export type ProblemCountOutputType = {
    likedBy: number
  }

  export type ProblemCountOutputTypeSelect = {
    likedBy?: boolean
  }

  export type ProblemCountOutputTypeGetPayload<
    S extends boolean | null | undefined | ProblemCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? ProblemCountOutputType
    : S extends undefined
    ? never
    : S extends ProblemCountOutputTypeArgs
    ?'include' extends U
    ? ProblemCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof ProblemCountOutputType ?ProblemCountOutputType [P]
  : 
     never
  } 
    : ProblemCountOutputType
  : ProblemCountOutputType




  // Custom InputTypes

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     * 
    **/
    select?: ProblemCountOutputTypeSelect | null
  }



  /**
   * Count Type CreatorCountOutputType
   */


  export type CreatorCountOutputType = {
    likes: number
    problems: number
  }

  export type CreatorCountOutputTypeSelect = {
    likes?: boolean
    problems?: boolean
  }

  export type CreatorCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CreatorCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CreatorCountOutputType
    : S extends undefined
    ? never
    : S extends CreatorCountOutputTypeArgs
    ?'include' extends U
    ? CreatorCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof CreatorCountOutputType ?CreatorCountOutputType [P]
  : 
     never
  } 
    : CreatorCountOutputType
  : CreatorCountOutputType




  // Custom InputTypes

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     * 
    **/
    select?: CreatorCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
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

  export type UserAggregateArgs = {
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
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

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
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


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    balance?: boolean
    amount?: boolean
    posts?: boolean | postFindManyArgs
    role?: boolean
    editorPosts?: boolean | postFindManyArgs
    grades?: boolean
    aliases?: boolean
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    posts?: boolean | postFindManyArgs
    editorPosts?: boolean | postFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < postGetPayload<S['include'][P]>>  :
        P extends 'editorPosts'
        ? Array < postGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'posts'
        ? Array < postGetPayload<S['select'][P]>>  :
        P extends 'editorPosts'
        ? Array < postGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? UserCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
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
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
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
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
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
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
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

    posts<T extends postFindManyArgs = {}>(args?: Subset<T, postFindManyArgs>): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>;

    editorPosts<T extends postFindManyArgs = {}>(args?: Subset<T, postFindManyArgs>): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>;

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
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
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
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
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
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
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

  export type PostAggregateArgs = {
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
    orderBy?: Enumerable<postOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }


    
    
  export type PostGroupByArgs = {
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

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
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


  export type postSelect = {
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    editor?: boolean | UserArgs
    editorId?: boolean
    kind?: boolean
    metadata?: boolean
  }

  export type postInclude = {
    author?: boolean | UserArgs
    editor?: boolean | UserArgs
  }

  export type postGetPayload<
    S extends boolean | null | undefined | postArgs,
    U = keyof S
      > = S extends true
        ? post
    : S extends undefined
    ? never
    : S extends postArgs | postFindManyArgs
    ?'include' extends U
    ? post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'editor'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof post ?post [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'editor'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : post
  : post


  type postCountArgs = Merge<
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface postDelegate<GlobalRejectSettings> {
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
    findUnique<T extends postFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, postFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

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
    findFirst<T extends postFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, postFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>> : CheckSelect<T, Prisma__postClient<post | null >, Prisma__postClient<postGetPayload<T> | null >>

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
    findMany<T extends postFindManyArgs>(
      args?: SelectSubset<T, postFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<post>>, PrismaPromise<Array<postGetPayload<T>>>>

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
    create<T extends postCreateArgs>(
      args: SelectSubset<T, postCreateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

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
    createMany<T extends postCreateManyArgs>(
      args?: SelectSubset<T, postCreateManyArgs>
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
    delete<T extends postDeleteArgs>(
      args: SelectSubset<T, postDeleteArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

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
    update<T extends postUpdateArgs>(
      args: SelectSubset<T, postUpdateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

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
    deleteMany<T extends postDeleteManyArgs>(
      args?: SelectSubset<T, postDeleteManyArgs>
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
    updateMany<T extends postUpdateManyArgs>(
      args: SelectSubset<T, postUpdateManyArgs>
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
    upsert<T extends postUpsertArgs>(
      args: SelectSubset<T, postUpsertArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>

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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T> implements PrismaPromise<T> {
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

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    editor<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

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
   * post findUnique
   */
  export type postFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Throw an Error if a post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which post to fetch.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post findFirst
   */
  export type postFindFirstArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Throw an Error if a post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<postOrderByWithRelationInput>
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
  export type postFindManyArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
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
    orderBy?: Enumerable<postOrderByWithRelationInput>
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
  export type postCreateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * The data needed to create a post.
     * 
    **/
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs = {
    data: Enumerable<postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
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
  export type postUpdateManyArgs = {
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
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
  export type postDeleteArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
    /**
     * Filter which post to delete.
     * 
    **/
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs = {
    where?: postWhereInput
  }


  /**
   * post without action
   */
  export type postArgs = {
    /**
     * Select specific fields to fetch from the post
     * 
    **/
    select?: postSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: postInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
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

  export type CategoryAggregateArgs = {
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
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }


    
    
  export type CategoryGroupByArgs = {
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

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Promise<
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


  export type CategorySelect = {
    name?: boolean
    slug?: boolean
    number?: boolean
  }

  export type CategoryGetPayload<
    S extends boolean | null | undefined | CategoryArgs,
    U = keyof S
      > = S extends true
        ? Category
    : S extends undefined
    ? never
    : S extends CategoryArgs | CategoryFindManyArgs
    ?'include' extends U
    ? Category 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Category ?Category [P]
  : 
     never
  } 
    : Category
  : Category


  type CategoryCountArgs = Merge<
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }
  >

  export interface CategoryDelegate<GlobalRejectSettings> {
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
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

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
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>> : CheckSelect<T, Prisma__CategoryClient<Category | null >, Prisma__CategoryClient<CategoryGetPayload<T> | null >>

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
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Category>>, PrismaPromise<Array<CategoryGetPayload<T>>>>

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
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

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
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
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
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

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
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

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
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
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
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
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
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>

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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements PrismaPromise<T> {
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
   * Category findUnique
   */
  export type CategoryFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Category to fetch.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Throw an Error if a Category can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
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
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
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
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
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
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * The data needed to create a Category.
     * 
    **/
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
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
  export type CategoryUpdateManyArgs = {
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
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
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
    /**
     * Filter which Category to delete.
     * 
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     * 
    **/
    select?: CategorySelect | null
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
    max: PatientMaxAggregateOutputType | null
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

  export type PatientAggregateArgs = {
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
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }


    
    
  export type PatientGroupByArgs = {
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

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Promise<
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


  export type PatientSelect = {
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }

  export type PatientGetPayload<
    S extends boolean | null | undefined | PatientArgs,
    U = keyof S
      > = S extends true
        ? Patient
    : S extends undefined
    ? never
    : S extends PatientArgs | PatientFindManyArgs
    ?'include' extends U
    ? Patient 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Patient ?Patient [P]
  : 
     never
  } 
    : Patient
  : Patient


  type PatientCountArgs = Merge<
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }
  >

  export interface PatientDelegate<GlobalRejectSettings> {
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
    findUnique<T extends PatientFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PatientFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>> : CheckSelect<T, Prisma__PatientClient<Patient | null >, Prisma__PatientClient<PatientGetPayload<T> | null >>

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
    findFirst<T extends PatientFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PatientFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>> : CheckSelect<T, Prisma__PatientClient<Patient | null >, Prisma__PatientClient<PatientGetPayload<T> | null >>

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
    findMany<T extends PatientFindManyArgs>(
      args?: SelectSubset<T, PatientFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Patient>>, PrismaPromise<Array<PatientGetPayload<T>>>>

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
    create<T extends PatientCreateArgs>(
      args: SelectSubset<T, PatientCreateArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

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
    createMany<T extends PatientCreateManyArgs>(
      args?: SelectSubset<T, PatientCreateManyArgs>
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
    delete<T extends PatientDeleteArgs>(
      args: SelectSubset<T, PatientDeleteArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

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
    update<T extends PatientUpdateArgs>(
      args: SelectSubset<T, PatientUpdateArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

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
    deleteMany<T extends PatientDeleteManyArgs>(
      args?: SelectSubset<T, PatientDeleteManyArgs>
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
    updateMany<T extends PatientUpdateManyArgs>(
      args: SelectSubset<T, PatientUpdateManyArgs>
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
    upsert<T extends PatientUpsertArgs>(
      args: SelectSubset<T, PatientUpsertArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>

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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T> implements PrismaPromise<T> {
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
   * Patient findUnique
   */
  export type PatientFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Throw an Error if a Patient can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Patient to fetch.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Throw an Error if a Patient can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
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
  export type PatientFindManyArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
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
    orderBy?: Enumerable<PatientOrderByWithRelationInput>
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
  export type PatientCreateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * The data needed to create a Patient.
     * 
    **/
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs = {
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
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
  export type PatientUpdateManyArgs = {
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
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
  export type PatientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
    /**
     * Filter which Patient to delete.
     * 
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs = {
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
     * 
    **/
    select?: PatientSelect | null
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
    max: MovieMaxAggregateOutputType | null
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

  export type MovieAggregateArgs = {
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
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }


    
    
  export type MovieGroupByArgs = {
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

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Promise<
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


  export type MovieSelect = {
    directorFirstName?: boolean
    directorLastName?: boolean
    director?: boolean | DirectorArgs
    title?: boolean
  }

  export type MovieInclude = {
    director?: boolean | DirectorArgs
  }

  export type MovieGetPayload<
    S extends boolean | null | undefined | MovieArgs,
    U = keyof S
      > = S extends true
        ? Movie
    : S extends undefined
    ? never
    : S extends MovieArgs | MovieFindManyArgs
    ?'include' extends U
    ? Movie  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'director'
        ? DirectorGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Movie ?Movie [P]
  : 
          P extends 'director'
        ? DirectorGetPayload<S['select'][P]> : never
  } 
    : Movie
  : Movie


  type MovieCountArgs = Merge<
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }
  >

  export interface MovieDelegate<GlobalRejectSettings> {
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
    findUnique<T extends MovieFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MovieFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

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
    findFirst<T extends MovieFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MovieFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>> : CheckSelect<T, Prisma__MovieClient<Movie | null >, Prisma__MovieClient<MovieGetPayload<T> | null >>

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
    findMany<T extends MovieFindManyArgs>(
      args?: SelectSubset<T, MovieFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>

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
    create<T extends MovieCreateArgs>(
      args: SelectSubset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

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
    createMany<T extends MovieCreateManyArgs>(
      args?: SelectSubset<T, MovieCreateManyArgs>
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
    delete<T extends MovieDeleteArgs>(
      args: SelectSubset<T, MovieDeleteArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

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
    update<T extends MovieUpdateArgs>(
      args: SelectSubset<T, MovieUpdateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

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
    deleteMany<T extends MovieDeleteManyArgs>(
      args?: SelectSubset<T, MovieDeleteManyArgs>
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
    updateMany<T extends MovieUpdateManyArgs>(
      args: SelectSubset<T, MovieUpdateManyArgs>
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
    upsert<T extends MovieUpsertArgs>(
      args: SelectSubset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>

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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T> implements PrismaPromise<T> {
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

    director<T extends DirectorArgs = {}>(args?: Subset<T, DirectorArgs>): CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>;

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
   * Movie findUnique
   */
  export type MovieFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Throw an Error if a Movie can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Movie to fetch.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Throw an Error if a Movie can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
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
  export type MovieFindManyArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
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
    orderBy?: Enumerable<MovieOrderByWithRelationInput>
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
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * The data needed to create a Movie.
     * 
    **/
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs = {
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
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
  export type MovieUpdateManyArgs = {
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
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
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
    /**
     * Filter which Movie to delete.
     * 
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs = {
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
     * 
    **/
    select?: MovieSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MovieInclude | null
  }



  /**
   * Model Director
   */


  export type AggregateDirector = {
    _count: DirectorCountAggregateOutputType | null
    count: DirectorCountAggregateOutputType | null
    _min: DirectorMinAggregateOutputType | null
    min: DirectorMinAggregateOutputType | null
    _max: DirectorMaxAggregateOutputType | null
    max: DirectorMaxAggregateOutputType | null
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

  export type DirectorAggregateArgs = {
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
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | DirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectorMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: DirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectorMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: DirectorMaxAggregateInputType
  }

  export type GetDirectorAggregateType<T extends DirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirector[P]>
      : GetScalarType<T[P], AggregateDirector[P]>
  }


    
    
  export type DirectorGroupByArgs = {
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

  type GetDirectorGroupByPayload<T extends DirectorGroupByArgs> = Promise<
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


  export type DirectorSelect = {
    firstName?: boolean
    lastName?: boolean
    movies?: boolean | MovieFindManyArgs
    _count?: boolean | DirectorCountOutputTypeArgs
  }

  export type DirectorInclude = {
    movies?: boolean | MovieFindManyArgs
    _count?: boolean | DirectorCountOutputTypeArgs
  }

  export type DirectorGetPayload<
    S extends boolean | null | undefined | DirectorArgs,
    U = keyof S
      > = S extends true
        ? Director
    : S extends undefined
    ? never
    : S extends DirectorArgs | DirectorFindManyArgs
    ?'include' extends U
    ? Director  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'movies'
        ? Array < MovieGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? DirectorCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Director ?Director [P]
  : 
          P extends 'movies'
        ? Array < MovieGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? DirectorCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Director
  : Director


  type DirectorCountArgs = Merge<
    Omit<DirectorFindManyArgs, 'select' | 'include'> & {
      select?: DirectorCountAggregateInputType | true
    }
  >

  export interface DirectorDelegate<GlobalRejectSettings> {
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
    findUnique<T extends DirectorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DirectorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Director'> extends True ? CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>> : CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>

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
    findFirst<T extends DirectorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DirectorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Director'> extends True ? CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>> : CheckSelect<T, Prisma__DirectorClient<Director | null >, Prisma__DirectorClient<DirectorGetPayload<T> | null >>

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
    findMany<T extends DirectorFindManyArgs>(
      args?: SelectSubset<T, DirectorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Director>>, PrismaPromise<Array<DirectorGetPayload<T>>>>

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
    create<T extends DirectorCreateArgs>(
      args: SelectSubset<T, DirectorCreateArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

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
    createMany<T extends DirectorCreateManyArgs>(
      args?: SelectSubset<T, DirectorCreateManyArgs>
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
    delete<T extends DirectorDeleteArgs>(
      args: SelectSubset<T, DirectorDeleteArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

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
    update<T extends DirectorUpdateArgs>(
      args: SelectSubset<T, DirectorUpdateArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

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
    deleteMany<T extends DirectorDeleteManyArgs>(
      args?: SelectSubset<T, DirectorDeleteManyArgs>
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
    updateMany<T extends DirectorUpdateManyArgs>(
      args: SelectSubset<T, DirectorUpdateManyArgs>
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
    upsert<T extends DirectorUpsertArgs>(
      args: SelectSubset<T, DirectorUpsertArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>

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
    >(args: SubsetIntersection<T, DirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectorClient<T> implements PrismaPromise<T> {
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

    movies<T extends MovieFindManyArgs = {}>(args?: Subset<T, MovieFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Movie>>, PrismaPromise<Array<MovieGetPayload<T>>>>;

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
   * Director findUnique
   */
  export type DirectorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Throw an Error if a Director can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Director to fetch.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director findFirst
   */
  export type DirectorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Throw an Error if a Director can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
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
  export type DirectorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
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
    orderBy?: Enumerable<DirectorOrderByWithRelationInput>
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
  export type DirectorCreateArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * The data needed to create a Director.
     * 
    **/
    data: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
  }


  /**
   * Director createMany
   */
  export type DirectorCreateManyArgs = {
    data: Enumerable<DirectorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
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
  export type DirectorUpdateManyArgs = {
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    where?: DirectorWhereInput
  }


  /**
   * Director upsert
   */
  export type DirectorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
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
  export type DirectorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
    /**
     * Filter which Director to delete.
     * 
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director deleteMany
   */
  export type DirectorDeleteManyArgs = {
    where?: DirectorWhereInput
  }


  /**
   * Director without action
   */
  export type DirectorArgs = {
    /**
     * Select specific fields to fetch from the Director
     * 
    **/
    select?: DirectorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DirectorInclude | null
  }



  /**
   * Model Problem
   */


  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    count: ProblemCountAggregateOutputType | null
    _avg: ProblemAvgAggregateOutputType | null
    avg: ProblemAvgAggregateOutputType | null
    _sum: ProblemSumAggregateOutputType | null
    sum: ProblemSumAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
    max: ProblemMaxAggregateOutputType | null
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

  export type ProblemAggregateArgs = {
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
    orderBy?: Enumerable<ProblemOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProblemAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: ProblemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProblemSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: ProblemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }


    
    
  export type ProblemGroupByArgs = {
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

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Promise<
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


  export type ProblemSelect = {
    id?: boolean
    problemText?: boolean
    likedBy?: boolean | CreatorFindManyArgs
    creator?: boolean | CreatorArgs
    creatorId?: boolean
    _count?: boolean | ProblemCountOutputTypeArgs
  }

  export type ProblemInclude = {
    likedBy?: boolean | CreatorFindManyArgs
    creator?: boolean | CreatorArgs
    _count?: boolean | ProblemCountOutputTypeArgs
  }

  export type ProblemGetPayload<
    S extends boolean | null | undefined | ProblemArgs,
    U = keyof S
      > = S extends true
        ? Problem
    : S extends undefined
    ? never
    : S extends ProblemArgs | ProblemFindManyArgs
    ?'include' extends U
    ? Problem  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'likedBy'
        ? Array < CreatorGetPayload<S['include'][P]>>  :
        P extends 'creator'
        ? CreatorGetPayload<S['include'][P]> | null :
        P extends '_count'
        ? ProblemCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Problem ?Problem [P]
  : 
          P extends 'likedBy'
        ? Array < CreatorGetPayload<S['select'][P]>>  :
        P extends 'creator'
        ? CreatorGetPayload<S['select'][P]> | null :
        P extends '_count'
        ? ProblemCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Problem
  : Problem


  type ProblemCountArgs = Merge<
    Omit<ProblemFindManyArgs, 'select' | 'include'> & {
      select?: ProblemCountAggregateInputType | true
    }
  >

  export interface ProblemDelegate<GlobalRejectSettings> {
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
    findUnique<T extends ProblemFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProblemFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Problem'> extends True ? CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>> : CheckSelect<T, Prisma__ProblemClient<Problem | null >, Prisma__ProblemClient<ProblemGetPayload<T> | null >>

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
    findFirst<T extends ProblemFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProblemFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Problem'> extends True ? CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>> : CheckSelect<T, Prisma__ProblemClient<Problem | null >, Prisma__ProblemClient<ProblemGetPayload<T> | null >>

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
    findMany<T extends ProblemFindManyArgs>(
      args?: SelectSubset<T, ProblemFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Problem>>, PrismaPromise<Array<ProblemGetPayload<T>>>>

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
    create<T extends ProblemCreateArgs>(
      args: SelectSubset<T, ProblemCreateArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>

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
    createMany<T extends ProblemCreateManyArgs>(
      args?: SelectSubset<T, ProblemCreateManyArgs>
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
    delete<T extends ProblemDeleteArgs>(
      args: SelectSubset<T, ProblemDeleteArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>

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
    update<T extends ProblemUpdateArgs>(
      args: SelectSubset<T, ProblemUpdateArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>

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
    deleteMany<T extends ProblemDeleteManyArgs>(
      args?: SelectSubset<T, ProblemDeleteManyArgs>
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
    updateMany<T extends ProblemUpdateManyArgs>(
      args: SelectSubset<T, ProblemUpdateManyArgs>
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
    upsert<T extends ProblemUpsertArgs>(
      args: SelectSubset<T, ProblemUpsertArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>

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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProblemClient<T> implements PrismaPromise<T> {
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

    likedBy<T extends CreatorFindManyArgs = {}>(args?: Subset<T, CreatorFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Creator>>, PrismaPromise<Array<CreatorGetPayload<T>>>>;

    creator<T extends CreatorArgs = {}>(args?: Subset<T, CreatorArgs>): CheckSelect<T, Prisma__CreatorClient<Creator | null >, Prisma__CreatorClient<CreatorGetPayload<T> | null >>;

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
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
    /**
     * Throw an Error if a Problem can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Problem to fetch.
     * 
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
    /**
     * Throw an Error if a Problem can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ProblemOrderByWithRelationInput>
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
  export type ProblemFindManyArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
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
    orderBy?: Enumerable<ProblemOrderByWithRelationInput>
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
  export type ProblemCreateArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
    /**
     * The data needed to create a Problem.
     * 
    **/
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }


  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs = {
    data: Enumerable<ProblemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Problem update
   */
  export type ProblemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
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
  export type ProblemUpdateManyArgs = {
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    where?: ProblemWhereInput
  }


  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
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
  export type ProblemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
    /**
     * Filter which Problem to delete.
     * 
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs = {
    where?: ProblemWhereInput
  }


  /**
   * Problem without action
   */
  export type ProblemArgs = {
    /**
     * Select specific fields to fetch from the Problem
     * 
    **/
    select?: ProblemSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProblemInclude | null
  }



  /**
   * Model Creator
   */


  export type AggregateCreator = {
    _count: CreatorCountAggregateOutputType | null
    count: CreatorCountAggregateOutputType | null
    _avg: CreatorAvgAggregateOutputType | null
    avg: CreatorAvgAggregateOutputType | null
    _sum: CreatorSumAggregateOutputType | null
    sum: CreatorSumAggregateOutputType | null
    _min: CreatorMinAggregateOutputType | null
    min: CreatorMinAggregateOutputType | null
    _max: CreatorMaxAggregateOutputType | null
    max: CreatorMaxAggregateOutputType | null
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

  export type CreatorAggregateArgs = {
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
    orderBy?: Enumerable<CreatorOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | CreatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreatorAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: CreatorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreatorSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: CreatorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreatorMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: CreatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreatorMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: CreatorMaxAggregateInputType
  }

  export type GetCreatorAggregateType<T extends CreatorAggregateArgs> = {
        [P in keyof T & keyof AggregateCreator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreator[P]>
      : GetScalarType<T[P], AggregateCreator[P]>
  }


    
    
  export type CreatorGroupByArgs = {
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

  type GetCreatorGroupByPayload<T extends CreatorGroupByArgs> = Promise<
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


  export type CreatorSelect = {
    id?: boolean
    name?: boolean
    likes?: boolean | ProblemFindManyArgs
    problems?: boolean | ProblemFindManyArgs
    _count?: boolean | CreatorCountOutputTypeArgs
  }

  export type CreatorInclude = {
    likes?: boolean | ProblemFindManyArgs
    problems?: boolean | ProblemFindManyArgs
    _count?: boolean | CreatorCountOutputTypeArgs
  }

  export type CreatorGetPayload<
    S extends boolean | null | undefined | CreatorArgs,
    U = keyof S
      > = S extends true
        ? Creator
    : S extends undefined
    ? never
    : S extends CreatorArgs | CreatorFindManyArgs
    ?'include' extends U
    ? Creator  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'likes'
        ? Array < ProblemGetPayload<S['include'][P]>>  :
        P extends 'problems'
        ? Array < ProblemGetPayload<S['include'][P]>>  :
        P extends '_count'
        ? CreatorCountOutputTypeGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Creator ?Creator [P]
  : 
          P extends 'likes'
        ? Array < ProblemGetPayload<S['select'][P]>>  :
        P extends 'problems'
        ? Array < ProblemGetPayload<S['select'][P]>>  :
        P extends '_count'
        ? CreatorCountOutputTypeGetPayload<S['select'][P]> | null : never
  } 
    : Creator
  : Creator


  type CreatorCountArgs = Merge<
    Omit<CreatorFindManyArgs, 'select' | 'include'> & {
      select?: CreatorCountAggregateInputType | true
    }
  >

  export interface CreatorDelegate<GlobalRejectSettings> {
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
    findUnique<T extends CreatorFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CreatorFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Creator'> extends True ? CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>> : CheckSelect<T, Prisma__CreatorClient<Creator | null >, Prisma__CreatorClient<CreatorGetPayload<T> | null >>

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
    findFirst<T extends CreatorFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CreatorFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Creator'> extends True ? CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>> : CheckSelect<T, Prisma__CreatorClient<Creator | null >, Prisma__CreatorClient<CreatorGetPayload<T> | null >>

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
    findMany<T extends CreatorFindManyArgs>(
      args?: SelectSubset<T, CreatorFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Creator>>, PrismaPromise<Array<CreatorGetPayload<T>>>>

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
    create<T extends CreatorCreateArgs>(
      args: SelectSubset<T, CreatorCreateArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>

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
    createMany<T extends CreatorCreateManyArgs>(
      args?: SelectSubset<T, CreatorCreateManyArgs>
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
    delete<T extends CreatorDeleteArgs>(
      args: SelectSubset<T, CreatorDeleteArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>

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
    update<T extends CreatorUpdateArgs>(
      args: SelectSubset<T, CreatorUpdateArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>

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
    deleteMany<T extends CreatorDeleteManyArgs>(
      args?: SelectSubset<T, CreatorDeleteManyArgs>
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
    updateMany<T extends CreatorUpdateManyArgs>(
      args: SelectSubset<T, CreatorUpdateManyArgs>
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
    upsert<T extends CreatorUpsertArgs>(
      args: SelectSubset<T, CreatorUpsertArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>

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
    >(args: SubsetIntersection<T, CreatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CreatorClient<T> implements PrismaPromise<T> {
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

    likes<T extends ProblemFindManyArgs = {}>(args?: Subset<T, ProblemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Problem>>, PrismaPromise<Array<ProblemGetPayload<T>>>>;

    problems<T extends ProblemFindManyArgs = {}>(args?: Subset<T, ProblemFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Problem>>, PrismaPromise<Array<ProblemGetPayload<T>>>>;

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
   * Creator findUnique
   */
  export type CreatorFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
    /**
     * Throw an Error if a Creator can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Creator to fetch.
     * 
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator findFirst
   */
  export type CreatorFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
    /**
     * Throw an Error if a Creator can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<CreatorOrderByWithRelationInput>
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
  export type CreatorFindManyArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
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
    orderBy?: Enumerable<CreatorOrderByWithRelationInput>
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
  export type CreatorCreateArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
    /**
     * The data needed to create a Creator.
     * 
    **/
    data: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
  }


  /**
   * Creator createMany
   */
  export type CreatorCreateManyArgs = {
    data: Enumerable<CreatorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Creator update
   */
  export type CreatorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
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
  export type CreatorUpdateManyArgs = {
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyInput>
    where?: CreatorWhereInput
  }


  /**
   * Creator upsert
   */
  export type CreatorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
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
  export type CreatorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
    /**
     * Filter which Creator to delete.
     * 
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator deleteMany
   */
  export type CreatorDeleteManyArgs = {
    where?: CreatorWhereInput
  }


  /**
   * Creator without action
   */
  export type CreatorArgs = {
    /**
     * Select specific fields to fetch from the Creator
     * 
    **/
    select?: CreatorSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: CreatorInclude | null
  }



  /**
   * Model NativeTypeModel
   */


  export type AggregateNativeTypeModel = {
    _count: NativeTypeModelCountAggregateOutputType | null
    count: NativeTypeModelCountAggregateOutputType | null
    _avg: NativeTypeModelAvgAggregateOutputType | null
    avg: NativeTypeModelAvgAggregateOutputType | null
    _sum: NativeTypeModelSumAggregateOutputType | null
    sum: NativeTypeModelSumAggregateOutputType | null
    _min: NativeTypeModelMinAggregateOutputType | null
    min: NativeTypeModelMinAggregateOutputType | null
    _max: NativeTypeModelMaxAggregateOutputType | null
    max: NativeTypeModelMaxAggregateOutputType | null
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

  export type NativeTypeModelAggregateArgs = {
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
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationInput>
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
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | NativeTypeModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NativeTypeModelAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: NativeTypeModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NativeTypeModelSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: NativeTypeModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NativeTypeModelMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: NativeTypeModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NativeTypeModelMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: NativeTypeModelMaxAggregateInputType
  }

  export type GetNativeTypeModelAggregateType<T extends NativeTypeModelAggregateArgs> = {
        [P in keyof T & keyof AggregateNativeTypeModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNativeTypeModel[P]>
      : GetScalarType<T[P], AggregateNativeTypeModel[P]>
  }


    
    
  export type NativeTypeModelGroupByArgs = {
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

  type GetNativeTypeModelGroupByPayload<T extends NativeTypeModelGroupByArgs> = Promise<
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


  export type NativeTypeModelSelect = {
    id?: boolean
    bigInt?: boolean
    byteA?: boolean
    decimal?: boolean
  }

  export type NativeTypeModelGetPayload<
    S extends boolean | null | undefined | NativeTypeModelArgs,
    U = keyof S
      > = S extends true
        ? NativeTypeModel
    : S extends undefined
    ? never
    : S extends NativeTypeModelArgs | NativeTypeModelFindManyArgs
    ?'include' extends U
    ? NativeTypeModel 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof NativeTypeModel ?NativeTypeModel [P]
  : 
     never
  } 
    : NativeTypeModel
  : NativeTypeModel


  type NativeTypeModelCountArgs = Merge<
    Omit<NativeTypeModelFindManyArgs, 'select' | 'include'> & {
      select?: NativeTypeModelCountAggregateInputType | true
    }
  >

  export interface NativeTypeModelDelegate<GlobalRejectSettings> {
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
    findUnique<T extends NativeTypeModelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NativeTypeModelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NativeTypeModel'> extends True ? CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>> : CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel | null >, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T> | null >>

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
    findFirst<T extends NativeTypeModelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NativeTypeModelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NativeTypeModel'> extends True ? CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>> : CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel | null >, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T> | null >>

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
    findMany<T extends NativeTypeModelFindManyArgs>(
      args?: SelectSubset<T, NativeTypeModelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<NativeTypeModel>>, PrismaPromise<Array<NativeTypeModelGetPayload<T>>>>

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
    create<T extends NativeTypeModelCreateArgs>(
      args: SelectSubset<T, NativeTypeModelCreateArgs>
    ): CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>>

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
    createMany<T extends NativeTypeModelCreateManyArgs>(
      args?: SelectSubset<T, NativeTypeModelCreateManyArgs>
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
    delete<T extends NativeTypeModelDeleteArgs>(
      args: SelectSubset<T, NativeTypeModelDeleteArgs>
    ): CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>>

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
    update<T extends NativeTypeModelUpdateArgs>(
      args: SelectSubset<T, NativeTypeModelUpdateArgs>
    ): CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>>

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
    deleteMany<T extends NativeTypeModelDeleteManyArgs>(
      args?: SelectSubset<T, NativeTypeModelDeleteManyArgs>
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
    updateMany<T extends NativeTypeModelUpdateManyArgs>(
      args: SelectSubset<T, NativeTypeModelUpdateManyArgs>
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
    upsert<T extends NativeTypeModelUpsertArgs>(
      args: SelectSubset<T, NativeTypeModelUpsertArgs>
    ): CheckSelect<T, Prisma__NativeTypeModelClient<NativeTypeModel>, Prisma__NativeTypeModelClient<NativeTypeModelGetPayload<T>>>

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
    >(args: SubsetIntersection<T, NativeTypeModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNativeTypeModelGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for NativeTypeModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NativeTypeModelClient<T> implements PrismaPromise<T> {
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
   * NativeTypeModel findUnique
   */
  export type NativeTypeModelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
    /**
     * Throw an Error if a NativeTypeModel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which NativeTypeModel to fetch.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel findFirst
   */
  export type NativeTypeModelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
    /**
     * Throw an Error if a NativeTypeModel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationInput>
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
  export type NativeTypeModelFindManyArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
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
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationInput>
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
  export type NativeTypeModelCreateArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
    /**
     * The data needed to create a NativeTypeModel.
     * 
    **/
    data: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
  }


  /**
   * NativeTypeModel createMany
   */
  export type NativeTypeModelCreateManyArgs = {
    data: Enumerable<NativeTypeModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NativeTypeModel update
   */
  export type NativeTypeModelUpdateArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
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
  export type NativeTypeModelUpdateManyArgs = {
    data: XOR<NativeTypeModelUpdateManyMutationInput, NativeTypeModelUncheckedUpdateManyInput>
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel upsert
   */
  export type NativeTypeModelUpsertArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
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
  export type NativeTypeModelDeleteArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
    /**
     * Filter which NativeTypeModel to delete.
     * 
    **/
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel deleteMany
   */
  export type NativeTypeModelDeleteManyArgs = {
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel without action
   */
  export type NativeTypeModelArgs = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     * 
    **/
    select?: NativeTypeModelSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

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


  export const CategoryScalarFieldEnum: {
    name: 'name',
    slug: 'slug',
    number: 'number'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const MovieScalarFieldEnum: {
    directorFirstName: 'directorFirstName',
    directorLastName: 'directorLastName',
    title: 'title'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const DirectorScalarFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type DirectorScalarFieldEnum = (typeof DirectorScalarFieldEnum)[keyof typeof DirectorScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    problemText: 'problemText',
    creatorId: 'creatorId'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const CreatorScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CreatorScalarFieldEnum = (typeof CreatorScalarFieldEnum)[keyof typeof CreatorScalarFieldEnum]


  export const NativeTypeModelScalarFieldEnum: {
    id: 'id',
    bigInt: 'bigInt',
    byteA: 'byteA',
    decimal: 'decimal'
  };

  export type NativeTypeModelScalarFieldEnum = (typeof NativeTypeModelScalarFieldEnum)[keyof typeof NativeTypeModelScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    posts?: postOrderByRelationAggregateInput
    role?: SortOrder
    editorPosts?: postOrderByRelationAggregateInput
    grades?: SortOrder
    aliases?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
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

  export type postOrderByWithRelationInput = {
    uuid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    author?: UserOrderByWithRelationInput
    authorId?: SortOrder
    editor?: UserOrderByWithRelationInput
    editorId?: SortOrder
    kind?: SortOrder
    metadata?: SortOrder
  }

  export type postWhereUniqueInput = {
    uuid?: string
  }

  export type postOrderByWithAggregationInput = {
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

  export type CategoryOrderByWithRelationInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    categoryCompoundUnique?: CategoryCategoryCompoundUniqueCompoundUniqueInput
  }

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

  export type PatientOrderByWithRelationInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type PatientWhereUniqueInput = {
    firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput
  }

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

  export type MovieOrderByWithRelationInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    director?: DirectorOrderByWithRelationInput
    title?: SortOrder
  }

  export type MovieWhereUniqueInput = {
    movieCompoundId?: MovieMovieCompoundIdCompoundUniqueInput
  }

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

  export type DirectorOrderByWithRelationInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    movies?: MovieOrderByRelationAggregateInput
  }

  export type DirectorWhereUniqueInput = {
    firstName_lastName?: DirectorFirstNameLastNameCompoundUniqueInput
  }

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

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    problemText?: SortOrder
    likedBy?: CreatorOrderByRelationAggregateInput
    creator?: CreatorOrderByWithRelationInput
    creatorId?: SortOrder
  }

  export type ProblemWhereUniqueInput = {
    id?: number
  }

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrder
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

  export type CreatorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    likes?: ProblemOrderByRelationAggregateInput
    problems?: ProblemOrderByRelationAggregateInput
  }

  export type CreatorWhereUniqueInput = {
    id?: number
  }

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
    decimal?: DecimalNullableFilter | Decimal | number | string | null
  }

  export type NativeTypeModelOrderByWithRelationInput = {
    id?: SortOrder
    bigInt?: SortOrder
    byteA?: SortOrder
    decimal?: SortOrder
  }

  export type NativeTypeModelWhereUniqueInput = {
    id?: number
  }

  export type NativeTypeModelOrderByWithAggregationInput = {
    id?: SortOrder
    bigInt?: SortOrder
    byteA?: SortOrder
    decimal?: SortOrder
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
    decimal?: DecimalNullableWithAggregatesFilter | Decimal | number | string | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    posts?: postCreateNestedManyWithoutAuthorInput
    editorPosts?: postCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    editorPosts?: postUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    posts?: postUpdateManyWithoutAuthorInput
    editorPosts?: postUpdateManyWithoutEditorInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    posts?: postUncheckedUpdateManyWithoutAuthorInput
    editorPosts?: postUncheckedUpdateManyWithoutEditorInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreateManygradesInput | Enumerable<number>
    aliases?: UserCreateManyaliasesInput | Enumerable<string>
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
    kind?: PostKind | null
    metadata: InputJsonValue
    author: UserCreateNestedOneWithoutPostsInput
    editor?: UserCreateNestedOneWithoutEditorPostsInput
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
    metadata: InputJsonValue
  }

  export type postUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsInput
    editor?: UserUpdateOneWithoutEditorPostsInput
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
    metadata?: InputJsonValue
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
    metadata: InputJsonValue
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
    metadata?: InputJsonValue
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
    metadata?: InputJsonValue
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
    title: string
    director: DirectorCreateNestedOneWithoutMoviesInput
  }

  export type MovieUncheckedCreateInput = {
    directorFirstName: string
    directorLastName: string
    title: string
  }

  export type MovieUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    director?: DirectorUpdateOneRequiredWithoutMoviesInput
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
    movies?: MovieUpdateManyWithoutDirectorInput
  }

  export type DirectorUncheckedUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    movies?: MovieUncheckedUpdateManyWithoutDirectorInput
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
    creatorId?: number | null
  }

  export type ProblemUpdateInput = {
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUpdateManyWithoutLikesInput
    creator?: CreatorUpdateOneWithoutProblemsInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
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
    problems?: ProblemUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type CreatorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUpdateManyWithoutLikedByInput
    problems?: ProblemUpdateManyWithoutCreatorInput
  }

  export type CreatorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    problems?: ProblemUncheckedUpdateManyWithoutCreatorInput
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
    decimal?: Decimal | number | string | null
  }

  export type NativeTypeModelUncheckedCreateInput = {
    id?: number
    bigInt?: bigint | number | null
    byteA?: Buffer | null
    decimal?: Decimal | number | string | null
  }

  export type NativeTypeModelUpdateInput = {
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type NativeTypeModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type NativeTypeModelCreateManyInput = {
    id?: number
    bigInt?: bigint | number | null
    byteA?: Buffer | null
    decimal?: Decimal | number | string | null
  }

  export type NativeTypeModelUpdateManyMutationInput = {
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
  }

  export type NativeTypeModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bigInt?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    byteA?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    decimal?: NullableDecimalFieldUpdateOperationsInput | Decimal | number | string | null
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

  export type postOrderByRelationAggregateInput = {
    _count?: SortOrder
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedFloatFilter
    _max?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedFloatFilter
  }

  export type EnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumRoleFilter
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
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type EnumPostKindNullableWithAggregatesFilter = {
    equals?: PostKind | null
    in?: Enumerable<PostKind> | null
    notIn?: Enumerable<PostKind> | null
    not?: NestedEnumPostKindNullableWithAggregatesFilter | PostKind | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumPostKindNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumPostKindNullableFilter
    _max?: NestedEnumPostKindNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumPostKindNullableFilter
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedJsonFilter
    _max?: NestedJsonFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedJsonFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: SortOrder
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
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntNullableFilter
  }

  export type BytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBytesNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalNullableFilter
  }

  export type UserCreategradesInput = {
    set: Enumerable<number>
  }

  export type UserCreatealiasesInput = {
    set: Enumerable<string>
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

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: Role
  }

  export type UserUpdategradesInput = {
    set?: Enumerable<number>
    push?: number | Enumerable<number>
  }

  export type UserUpdatealiasesInput = {
    set?: Enumerable<string>
    push?: string | Enumerable<string>
  }

  export type postUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type postUpdateManyWithoutEditorInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutEditorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutEditorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type postUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<postCreateWithoutAuthorInput>, Enumerable<postUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type postUncheckedUpdateManyWithoutEditorInput = {
    create?: XOR<Enumerable<postCreateWithoutEditorInput>, Enumerable<postUncheckedCreateWithoutEditorInput>>
    connectOrCreate?: Enumerable<postCreateOrConnectWithoutEditorInput>
    upsert?: Enumerable<postUpsertWithWhereUniqueWithoutEditorInput>
    createMany?: postCreateManyEditorInputEnvelope
    connect?: Enumerable<postWhereUniqueInput>
    set?: Enumerable<postWhereUniqueInput>
    disconnect?: Enumerable<postWhereUniqueInput>
    delete?: Enumerable<postWhereUniqueInput>
    update?: Enumerable<postUpdateWithWhereUniqueWithoutEditorInput>
    updateMany?: Enumerable<postUpdateManyWithWhereWithoutEditorInput>
    deleteMany?: Enumerable<postScalarWhereInput>
  }

  export type UserCreateManygradesInput = {
    set: Enumerable<number>
  }

  export type UserCreateManyaliasesInput = {
    set: Enumerable<string>
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

  export type NullableEnumPostKindFieldUpdateOperationsInput = {
    set?: PostKind | null
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateOneWithoutEditorPostsInput = {
    create?: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEditorPostsInput
    upsert?: UserUpsertWithoutEditorPostsInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutEditorPostsInput, UserUncheckedUpdateWithoutEditorPostsInput>
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

  export type DirectorUpdateOneRequiredWithoutMoviesInput = {
    create?: XOR<DirectorCreateWithoutMoviesInput, DirectorUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: DirectorCreateOrConnectWithoutMoviesInput
    upsert?: DirectorUpsertWithoutMoviesInput
    connect?: DirectorWhereUniqueInput
    update?: XOR<DirectorUpdateWithoutMoviesInput, DirectorUncheckedUpdateWithoutMoviesInput>
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

  export type MovieUpdateManyWithoutDirectorInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
    update?: Enumerable<MovieUpdateWithWhereUniqueWithoutDirectorInput>
    updateMany?: Enumerable<MovieUpdateManyWithWhereWithoutDirectorInput>
    deleteMany?: Enumerable<MovieScalarWhereInput>
  }

  export type MovieUncheckedUpdateManyWithoutDirectorInput = {
    create?: XOR<Enumerable<MovieCreateWithoutDirectorInput>, Enumerable<MovieUncheckedCreateWithoutDirectorInput>>
    connectOrCreate?: Enumerable<MovieCreateOrConnectWithoutDirectorInput>
    upsert?: Enumerable<MovieUpsertWithWhereUniqueWithoutDirectorInput>
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: Enumerable<MovieWhereUniqueInput>
    set?: Enumerable<MovieWhereUniqueInput>
    disconnect?: Enumerable<MovieWhereUniqueInput>
    delete?: Enumerable<MovieWhereUniqueInput>
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

  export type CreatorUpdateManyWithoutLikesInput = {
    create?: XOR<Enumerable<CreatorCreateWithoutLikesInput>, Enumerable<CreatorUncheckedCreateWithoutLikesInput>>
    connectOrCreate?: Enumerable<CreatorCreateOrConnectWithoutLikesInput>
    upsert?: Enumerable<CreatorUpsertWithWhereUniqueWithoutLikesInput>
    connect?: Enumerable<CreatorWhereUniqueInput>
    set?: Enumerable<CreatorWhereUniqueInput>
    disconnect?: Enumerable<CreatorWhereUniqueInput>
    delete?: Enumerable<CreatorWhereUniqueInput>
    update?: Enumerable<CreatorUpdateWithWhereUniqueWithoutLikesInput>
    updateMany?: Enumerable<CreatorUpdateManyWithWhereWithoutLikesInput>
    deleteMany?: Enumerable<CreatorScalarWhereInput>
  }

  export type CreatorUpdateOneWithoutProblemsInput = {
    create?: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput
    upsert?: CreatorUpsertWithoutProblemsInput
    connect?: CreatorWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<CreatorUpdateWithoutProblemsInput, CreatorUncheckedUpdateWithoutProblemsInput>
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

  export type ProblemUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: Enumerable<ProblemWhereUniqueInput>
  }

  export type ProblemUpdateManyWithoutLikedByInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutLikedByInput>, Enumerable<ProblemUncheckedCreateWithoutLikedByInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutLikedByInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutLikedByInput>
    connect?: Enumerable<ProblemWhereUniqueInput>
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutLikedByInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutLikedByInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type ProblemUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: Enumerable<ProblemWhereUniqueInput>
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
    update?: Enumerable<ProblemUpdateWithWhereUniqueWithoutCreatorInput>
    updateMany?: Enumerable<ProblemUpdateManyWithWhereWithoutCreatorInput>
    deleteMany?: Enumerable<ProblemScalarWhereInput>
  }

  export type ProblemUncheckedUpdateManyWithoutCreatorInput = {
    create?: XOR<Enumerable<ProblemCreateWithoutCreatorInput>, Enumerable<ProblemUncheckedCreateWithoutCreatorInput>>
    connectOrCreate?: Enumerable<ProblemCreateOrConnectWithoutCreatorInput>
    upsert?: Enumerable<ProblemUpsertWithWhereUniqueWithoutCreatorInput>
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: Enumerable<ProblemWhereUniqueInput>
    set?: Enumerable<ProblemWhereUniqueInput>
    disconnect?: Enumerable<ProblemWhereUniqueInput>
    delete?: Enumerable<ProblemWhereUniqueInput>
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
    set?: Decimal | number | string | null
    increment?: Decimal | number | string
    decrement?: Decimal | number | string
    multiply?: Decimal | number | string
    divide?: Decimal | number | string
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedFloatFilter
    _min?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedFloatFilter
    _max?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedFloatFilter
  }

  export type NestedEnumRoleWithAggregatesFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: NestedEnumRoleWithAggregatesFilter | Role
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedEnumRoleFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumRoleFilter
    _max?: NestedEnumRoleFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumRoleFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedEnumPostKindNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedEnumPostKindNullableFilter
    _max?: NestedEnumPostKindNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedEnumPostKindNullableFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    path?: Array<string>
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue
    array_starts_with?: InputJsonValue
    array_ends_with?: InputJsonValue
    not?: InputJsonValue
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
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableFilter | Decimal | number | string | null
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
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedBigIntNullableFilter
    _min?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBigIntNullableFilter
    _max?: NestedBigIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBigIntNullableFilter
  }

  export type NestedBytesNullableWithAggregatesFilter = {
    equals?: Buffer | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBytesNullableFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | number | string | null
    in?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    notIn?: Enumerable<Decimal> | Enumerable<number> | Enumerable<string> | null
    lt?: Decimal | number | string
    lte?: Decimal | number | string
    gt?: Decimal | number | string
    gte?: Decimal | number | string
    not?: NestedDecimalNullableWithAggregatesFilter | Decimal | number | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedDecimalNullableFilter
    _sum?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedDecimalNullableFilter
    _min?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDecimalNullableFilter
    _max?: NestedDecimalNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDecimalNullableFilter
  }

  export type postCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    kind?: PostKind | null
    metadata: InputJsonValue
    editor?: UserCreateNestedOneWithoutEditorPostsInput
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
    metadata: InputJsonValue
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
    kind?: PostKind | null
    metadata: InputJsonValue
    author: UserCreateNestedOneWithoutPostsInput
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
    metadata: InputJsonValue
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
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    editorPosts?: postCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    editorPosts?: postUncheckedCreateNestedManyWithoutEditorInput
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
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    posts?: postCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEditorPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: Role
    grades?: UserCreategradesInput | Enumerable<number>
    aliases?: UserCreatealiasesInput | Enumerable<string>
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutEditorPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    editorPosts?: postUpdateManyWithoutEditorInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    editorPosts?: postUncheckedUpdateManyWithoutEditorInput
  }

  export type UserUpsertWithoutEditorPostsInput = {
    update: XOR<UserUpdateWithoutEditorPostsInput, UserUncheckedUpdateWithoutEditorPostsInput>
    create: XOR<UserCreateWithoutEditorPostsInput, UserUncheckedCreateWithoutEditorPostsInput>
  }

  export type UserUpdateWithoutEditorPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    posts?: postUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutEditorPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    posts?: postUncheckedUpdateManyWithoutAuthorInput
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
  }

  export type CreatorUpdateWithoutProblemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    likes?: ProblemUpdateManyWithoutLikedByInput
  }

  export type CreatorUncheckedUpdateWithoutProblemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    metadata: InputJsonValue
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
    metadata: InputJsonValue
  }

  export type postUpdateWithoutAuthorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: InputJsonValue
    editor?: UserUpdateOneWithoutEditorPostsInput
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
    metadata?: InputJsonValue
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
    metadata?: InputJsonValue
  }

  export type postUpdateWithoutEditorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsInput
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
    metadata?: InputJsonValue
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
    metadata?: InputJsonValue
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
    problems?: ProblemUpdateManyWithoutCreatorInput
  }

  export type CreatorUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    problems?: ProblemUncheckedUpdateManyWithoutCreatorInput
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
    creator?: CreatorUpdateOneWithoutProblemsInput
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
    likedBy?: CreatorUpdateManyWithoutLikesInput
  }

  export type ProblemUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.DMMF.Document;
}