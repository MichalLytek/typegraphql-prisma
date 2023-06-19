
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    /**
     * @TypeGraphQL.field(name: "clientPosts")
     */
    posts: postPayload<ExtArgs>[]
    /**
     * @TypeGraphQL.omit(output: true)
     */
    editorPosts: postPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetResult<{
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
  }, ExtArgs['result']['user']>
}

/**
 * Model User
 * User model doc
 * @@TypeGraphQL.type(name: "MainUser")
 */
export type User = UserPayload['scalars']

export type postPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    author: UserPayload<ExtArgs>
    /**
     * @TypeGraphQL.omit(output: true)
     */
    editor: UserPayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetResult<{
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
  }, ExtArgs['result']['post']>
}

/**
 * Model post
 * 
 */
export type post = postPayload['scalars']

export type CategoryPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {

  }
  scalars: runtime.Types.Extensions.GetResult<{
    name: string
    slug: string
    number: number
  }, ExtArgs['result']['category']>
}

/**
 * Model Category
 * 
 */
export type Category = CategoryPayload['scalars']

export type PatientPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {

  }
  scalars: runtime.Types.Extensions.GetResult<{
    firstName: string
    lastName: string
    email: string
  }, ExtArgs['result']['patient']>
}

/**
 * Model Patient
 * 
 */
export type Patient = PatientPayload['scalars']

export type MoviePayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    director: DirectorPayload<ExtArgs>
  }
  scalars: runtime.Types.Extensions.GetResult<{
    directorFirstName: string
    directorLastName: string
    title: string
  }, ExtArgs['result']['movie']>
}

/**
 * Model Movie
 * 
 */
export type Movie = MoviePayload['scalars']

export type DirectorPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    movies: MoviePayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetResult<{
    firstName: string
    lastName: string
  }, ExtArgs['result']['director']>
}

/**
 * Model Director
 * 
 */
export type Director = DirectorPayload['scalars']

export type ProblemPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    likedBy: CreatorPayload<ExtArgs>[]
    creator: CreatorPayload<ExtArgs> | null
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: number
    problemText: string
    creatorId: number | null
  }, ExtArgs['result']['problem']>
}

/**
 * Model Problem
 * 
 */
export type Problem = ProblemPayload['scalars']

export type CreatorPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {
    likes: ProblemPayload<ExtArgs>[]
    problems: ProblemPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: number
    name: string
  }, ExtArgs['result']['creator']>
}

/**
 * Model Creator
 * 
 */
export type Creator = CreatorPayload['scalars']

export type NativeTypeModelPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {

  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: number
    bigInt: bigint | null
    byteA: Buffer | null
    decimal: Prisma.Decimal | null
  }, ExtArgs['result']['nativeTypeModel']>
}

/**
 * Model NativeTypeModel
 * 
 */
export type NativeTypeModel = NativeTypeModelPayload['scalars']

export type EquipmentPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {

  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    name: string | null
  }, ExtArgs['result']['equipment']>
}

/**
 * Model Equipment
 * @@TypeGraphQL.type(plural: "equipments")
 */
export type Equipment = EquipmentPayload['scalars']

export type HiddenPayload<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
  objects: {

  }
  scalars: runtime.Types.Extensions.GetResult<{
    id: string
    name: string | null
  }, ExtArgs['result']['hidden']>
}

/**
 * Model Hidden
 * @@TypeGraphQL.omit(output: true)
 */
export type Hidden = HiddenPayload['scalars']


/**
 * Enums
 */

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

  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: { extArgs: ExtArgs } & (<
    R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
    R_post_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.postSelectScalar, ExtArgs['result']['post']>>,
    R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
    R_Patient_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.PatientSelectScalar, ExtArgs['result']['patient']>>,
    R_Movie_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.MovieSelectScalar, ExtArgs['result']['movie']>>,
    R_Director_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.DirectorSelectScalar, ExtArgs['result']['director']>>,
    R_Problem_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProblemSelectScalar, ExtArgs['result']['problem']>>,
    R_Creator_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CreatorSelectScalar, ExtArgs['result']['creator']>>,
    R_NativeTypeModel_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>>,
    R_Equipment_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.EquipmentSelectScalar, ExtArgs['result']['equipment']>>,
    R_Hidden_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.HiddenSelectScalar, ExtArgs['result']['hidden']>>,
    R extends runtime.Types.Extensions.UserArgs['result'] = {},
    M extends runtime.Types.Extensions.UserArgs['model'] = {},
    Q extends runtime.Types.Extensions.UserArgs['query'] = {},
    C extends runtime.Types.Extensions.UserArgs['client'] = {},
    Args extends runtime.Types.Extensions.Args = runtime.Types.Extensions.InternalArgs<R, M, Q, C>, 
  >(extension: ((client: this) => { $extends: { extArgs: Args } }) | Prisma.ExtensionArgs<
    ExtArgs,
    R_User_Needs,
    R_post_Needs,
    R_Category_Needs,
    R_Patient_Needs,
    R_Movie_Needs,
    R_Director_Needs,
    R_Problem_Needs,
    R_Creator_Needs,
    R_NativeTypeModel_Needs,
    R_Equipment_Needs,
    R_Hidden_Needs,
    R,
    M,
    Q,
    C
  >) => runtime.Types.Extensions.GetClient<PrismaClient<T, U, GlobalReject, {
    result: ExtArgs['result'] & Record<string, Args['result']['$allModels'] & {}> & Args['result']
    model: ExtArgs['model'] & Record<string, Args['model']['$allModels'] & {}> & Args['model']
    client: ExtArgs['client'] & Args['client'],
    query: {}
  }>, ExtArgs['client'] & Args['client']>);

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

  /**
   * `prisma.hidden`: Exposes CRUD operations for the **Hidden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hiddens
    * const hiddens = await prisma.hidden.findMany()
    * ```
    */
  get hidden(): runtime.Types.Extensions.GetModel<Prisma.HiddenDelegate<GlobalReject, ExtArgs>, ExtArgs['model']['hidden']>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
  export type Extension = runtime.Types.Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Args<T, F>
  export type Payload<T, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Payload<T, F>
  export type Result<T, A, F extends runtime.Types.Public.Operation> = runtime.Types.Public.Result<T, A, F>
  export type Exact<T, W> = runtime.Types.Public.Exact<T, W>


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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
    Equipment: 'Equipment',
    Hidden: 'Hidden'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    postgres?: Datasource
  }

  export function defineExtension<
      R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
      R_post_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.postSelectScalar, ExtArgs['result']['post']>>,
      R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
      R_Patient_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.PatientSelectScalar, ExtArgs['result']['patient']>>,
      R_Movie_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.MovieSelectScalar, ExtArgs['result']['movie']>>,
      R_Director_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.DirectorSelectScalar, ExtArgs['result']['director']>>,
      R_Problem_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProblemSelectScalar, ExtArgs['result']['problem']>>,
      R_Creator_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CreatorSelectScalar, ExtArgs['result']['creator']>>,
      R_NativeTypeModel_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>>,
      R_Equipment_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.EquipmentSelectScalar, ExtArgs['result']['equipment']>>,
      R_Hidden_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.HiddenSelectScalar, ExtArgs['result']['hidden']>>,
      R extends runtime.Types.Extensions.UserArgs['result'] = {},
      M extends runtime.Types.Extensions.UserArgs['model'] = {},
      Q extends runtime.Types.Extensions.UserArgs['query'] = {},
      C extends runtime.Types.Extensions.UserArgs['client'] = {},
      Args extends runtime.Types.Extensions.Args = runtime.Types.Extensions.InternalArgs<R, M, Q, C>, 
      ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs,
    >(extension: ((client: Prisma.DefaultPrismaClient) => { $extends: { extArgs: Args } }) | Prisma.ExtensionArgs<
      ExtArgs,
      R_User_Needs,
      R_post_Needs,
      R_Category_Needs,
      R_Patient_Needs,
      R_Movie_Needs,
      R_Director_Needs,
      R_Problem_Needs,
      R_Creator_Needs,
      R_NativeTypeModel_Needs,
      R_Equipment_Needs,
      R_Hidden_Needs,
      R,
      M,
      Q,
      C
    >) : (client: any) => PrismaClient<any, any, any, Args>;
  export type TypeMap<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
      meta: {
        modelProps: 'user' | 'post' | 'category' | 'patient' | 'movie' | 'director' | 'problem' | 'creator' | 'nativeTypeModel' | 'equipment' | 'hidden'
      },
      model: {
      User: {
        findUnique: {
          args: Prisma.UserFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.UserFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.UserFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        create: {
          args: Prisma.UserCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.UserCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        delete: {
          args: Prisma.UserDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        update: {
          args: Prisma.UserUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.UserDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.UserUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.UserUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.UserAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.UserGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
        count: {
          args: Prisma.UserCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<User>
          payload: UserPayload<ExtArgs>
        }
      }
      post: {
        findUnique: {
          args: Prisma.postFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.postFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.postFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.postFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        create: {
          args: Prisma.postCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.postCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        delete: {
          args: Prisma.postDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        update: {
          args: Prisma.postUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.postDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.postUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.postUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.PostAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.postGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
        count: {
          args: Prisma.postCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<post>
          payload: postPayload<ExtArgs>
        }
      }
      Category: {
        findUnique: {
          args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.CategoryFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.CategoryFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        create: {
          args: Prisma.CategoryCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.CategoryCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        delete: {
          args: Prisma.CategoryDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        update: {
          args: Prisma.CategoryUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.CategoryUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.CategoryAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.CategoryGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
        count: {
          args: Prisma.CategoryCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Category>
          payload: CategoryPayload<ExtArgs>
        }
      }
      Patient: {
        findUnique: {
          args: Prisma.PatientFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.PatientFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.PatientFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        create: {
          args: Prisma.PatientCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.PatientCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        delete: {
          args: Prisma.PatientDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        update: {
          args: Prisma.PatientUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.PatientDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.PatientUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.PatientUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.PatientAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.PatientGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
        count: {
          args: Prisma.PatientCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Patient>
          payload: PatientPayload<ExtArgs>
        }
      }
      Movie: {
        findUnique: {
          args: Prisma.MovieFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.MovieFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        findMany: {
          args: Prisma.MovieFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        create: {
          args: Prisma.MovieCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        createMany: {
          args: Prisma.MovieCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        delete: {
          args: Prisma.MovieDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        update: {
          args: Prisma.MovieUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.MovieDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.MovieUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        upsert: {
          args: Prisma.MovieUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.MovieAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.MovieGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
        count: {
          args: Prisma.MovieCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Movie>
          payload: MoviePayload<ExtArgs>
        }
      }
      Director: {
        findUnique: {
          args: Prisma.DirectorFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.DirectorFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.DirectorFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.DirectorFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.DirectorFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        create: {
          args: Prisma.DirectorCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.DirectorCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        delete: {
          args: Prisma.DirectorDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        update: {
          args: Prisma.DirectorUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.DirectorDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.DirectorUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.DirectorUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.DirectorAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.DirectorGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
        count: {
          args: Prisma.DirectorCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Director>
          payload: DirectorPayload<ExtArgs>
        }
      }
      Problem: {
        findUnique: {
          args: Prisma.ProblemFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.ProblemFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.ProblemFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        create: {
          args: Prisma.ProblemCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.ProblemCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        delete: {
          args: Prisma.ProblemDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        update: {
          args: Prisma.ProblemUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.ProblemDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.ProblemUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.ProblemUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.ProblemAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.ProblemGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
        count: {
          args: Prisma.ProblemCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Problem>
          payload: ProblemPayload<ExtArgs>
        }
      }
      Creator: {
        findUnique: {
          args: Prisma.CreatorFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.CreatorFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.CreatorFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.CreatorFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.CreatorFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        create: {
          args: Prisma.CreatorCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.CreatorCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        delete: {
          args: Prisma.CreatorDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        update: {
          args: Prisma.CreatorUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.CreatorDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.CreatorUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.CreatorUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.CreatorAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.CreatorGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
        count: {
          args: Prisma.CreatorCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Creator>
          payload: CreatorPayload<ExtArgs>
        }
      }
      NativeTypeModel: {
        findUnique: {
          args: Prisma.NativeTypeModelFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.NativeTypeModelFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.NativeTypeModelFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.NativeTypeModelFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.NativeTypeModelFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        create: {
          args: Prisma.NativeTypeModelCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.NativeTypeModelCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        delete: {
          args: Prisma.NativeTypeModelDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        update: {
          args: Prisma.NativeTypeModelUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.NativeTypeModelDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.NativeTypeModelUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.NativeTypeModelUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.NativeTypeModelAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.NativeTypeModelGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
        count: {
          args: Prisma.NativeTypeModelCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<NativeTypeModel>
          payload: NativeTypeModelPayload<ExtArgs>
        }
      }
      Equipment: {
        findUnique: {
          args: Prisma.EquipmentFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.EquipmentFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.EquipmentFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        create: {
          args: Prisma.EquipmentCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.EquipmentCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        delete: {
          args: Prisma.EquipmentDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        update: {
          args: Prisma.EquipmentUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.EquipmentDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.EquipmentUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.EquipmentUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.EquipmentAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.EquipmentGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
        count: {
          args: Prisma.EquipmentCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Equipment>
          payload: EquipmentPayload<ExtArgs>
        }
      }
      Hidden: {
        findUnique: {
          args: Prisma.HiddenFindUniqueArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        findUniqueOrThrow: {
          args: Prisma.HiddenFindUniqueOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        findFirst: {
          args: Prisma.HiddenFindFirstArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        findFirstOrThrow: {
          args: Prisma.HiddenFindFirstOrThrowArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        findMany: {
          args: Prisma.HiddenFindManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        create: {
          args: Prisma.HiddenCreateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        createMany: {
          args: Prisma.HiddenCreateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        delete: {
          args: Prisma.HiddenDeleteArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        update: {
          args: Prisma.HiddenUpdateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        deleteMany: {
          args: Prisma.HiddenDeleteManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        updateMany: {
          args: Prisma.HiddenUpdateManyArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        upsert: {
          args: Prisma.HiddenUpsertArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        aggregate: {
          args: Prisma.HiddenAggregateArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        groupBy: {
          args: Prisma.HiddenGroupByArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
        count: {
          args: Prisma.HiddenCountArgs<ExtArgs>,
          result: runtime.Types.Utils.OptionalFlat<Hidden>
          payload: HiddenPayload<ExtArgs>
        }
      }
    }
  } & {
    other: {
      $executeRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $executeRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
      $queryRawUnsafe: {
        args: [query: string, ...values: any[]],
        result: any
        payload: any
      }
      $queryRaw: {
        args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
        result: any
        payload: any
      }
    }
  }
  export type ExtensionArgs<
      ExtArgs extends runtime.Types.Extensions.Args,
      R_User_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.UserSelectScalar, ExtArgs['result']['user']>>,
      R_post_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.postSelectScalar, ExtArgs['result']['post']>>,
      R_Category_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CategorySelectScalar, ExtArgs['result']['category']>>,
      R_Patient_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.PatientSelectScalar, ExtArgs['result']['patient']>>,
      R_Movie_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.MovieSelectScalar, ExtArgs['result']['movie']>>,
      R_Director_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.DirectorSelectScalar, ExtArgs['result']['director']>>,
      R_Problem_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.ProblemSelectScalar, ExtArgs['result']['problem']>>,
      R_Creator_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.CreatorSelectScalar, ExtArgs['result']['creator']>>,
      R_NativeTypeModel_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.NativeTypeModelSelectScalar, ExtArgs['result']['nativeTypeModel']>>,
      R_Equipment_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.EquipmentSelectScalar, ExtArgs['result']['equipment']>>,
      R_Hidden_Needs extends Record<string, runtime.Types.Extensions.GetSelect<Prisma.HiddenSelectScalar, ExtArgs['result']['hidden']>>,
      R extends runtime.Types.Extensions.UserArgs['result'] = {},
      M extends runtime.Types.Extensions.UserArgs['model'] = {},
      Q extends runtime.Types.Extensions.UserArgs['query'] = {},
      C extends runtime.Types.Extensions.UserArgs['client'] = {}
  > = {
    name?: string,
    result?: R & {
        $allModels?: Record<string, {
          compute: (data: unknown) => unknown
        }>
        user?: {
          [K in keyof R_User_Needs]: {
            needs: R_User_Needs[K]
            compute: (data: runtime.Types.GetResult<UserPayload<ExtArgs>, { select: R_User_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        post?: {
          [K in keyof R_post_Needs]: {
            needs: R_post_Needs[K]
            compute: (data: runtime.Types.GetResult<postPayload<ExtArgs>, { select: R_post_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        category?: {
          [K in keyof R_Category_Needs]: {
            needs: R_Category_Needs[K]
            compute: (data: runtime.Types.GetResult<CategoryPayload<ExtArgs>, { select: R_Category_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        patient?: {
          [K in keyof R_Patient_Needs]: {
            needs: R_Patient_Needs[K]
            compute: (data: runtime.Types.GetResult<PatientPayload<ExtArgs>, { select: R_Patient_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        movie?: {
          [K in keyof R_Movie_Needs]: {
            needs: R_Movie_Needs[K]
            compute: (data: runtime.Types.GetResult<MoviePayload<ExtArgs>, { select: R_Movie_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        director?: {
          [K in keyof R_Director_Needs]: {
            needs: R_Director_Needs[K]
            compute: (data: runtime.Types.GetResult<DirectorPayload<ExtArgs>, { select: R_Director_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        problem?: {
          [K in keyof R_Problem_Needs]: {
            needs: R_Problem_Needs[K]
            compute: (data: runtime.Types.GetResult<ProblemPayload<ExtArgs>, { select: R_Problem_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        creator?: {
          [K in keyof R_Creator_Needs]: {
            needs: R_Creator_Needs[K]
            compute: (data: runtime.Types.GetResult<CreatorPayload<ExtArgs>, { select: R_Creator_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        nativeTypeModel?: {
          [K in keyof R_NativeTypeModel_Needs]: {
            needs: R_NativeTypeModel_Needs[K]
            compute: (data: runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, { select: R_NativeTypeModel_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        equipment?: {
          [K in keyof R_Equipment_Needs]: {
            needs: R_Equipment_Needs[K]
            compute: (data: runtime.Types.GetResult<EquipmentPayload<ExtArgs>, { select: R_Equipment_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
        hidden?: {
          [K in keyof R_Hidden_Needs]: {
            needs: R_Hidden_Needs[K]
            compute: (data: runtime.Types.GetResult<HiddenPayload<ExtArgs>, { select: R_Hidden_Needs[K] }, 'findUniqueOrThrow'>) => unknown
          }
        }
      }
    model?: M & {
        $allModels?: {}
        user?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.UserDelegate<false, ExtArgs>, ExtArgs['model']['user']> } }
        post?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.postDelegate<false, ExtArgs>, ExtArgs['model']['post']> } }
        category?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.CategoryDelegate<false, ExtArgs>, ExtArgs['model']['category']> } }
        patient?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.PatientDelegate<false, ExtArgs>, ExtArgs['model']['patient']> } }
        movie?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.MovieDelegate<false, ExtArgs>, ExtArgs['model']['movie']> } }
        director?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.DirectorDelegate<false, ExtArgs>, ExtArgs['model']['director']> } }
        problem?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.ProblemDelegate<false, ExtArgs>, ExtArgs['model']['problem']> } }
        creator?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.CreatorDelegate<false, ExtArgs>, ExtArgs['model']['creator']> } }
        nativeTypeModel?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.NativeTypeModelDelegate<false, ExtArgs>, ExtArgs['model']['nativeTypeModel']> } }
        equipment?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.EquipmentDelegate<false, ExtArgs>, ExtArgs['model']['equipment']> } }
        hidden?: { [K: symbol]: { ctx: runtime.Types.Extensions.GetModel<Prisma.HiddenDelegate<false, ExtArgs>, ExtArgs['model']['hidden']> } }
      }
    query?: {
        $allModels?: {
          [K in keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden']]?: (args: { model: 'User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden', operation: keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden'][keyof Prisma.TypeMap['model']['User' | 'post' | 'Category' | 'Patient' | 'Movie' | 'Director' | 'Problem' | 'Creator' | 'NativeTypeModel' | 'Equipment' | 'Hidden']]['result']>
        }
      } & {
        user?: {
          [K in keyof Prisma.TypeMap['model']['User']]?: (args: { model: 'User', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'User', operation: keyof Prisma.TypeMap['model']['User'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['User'][keyof Prisma.TypeMap['model']['User']]['result']>
        }
        post?: {
          [K in keyof Prisma.TypeMap['model']['post']]?: (args: { model: 'post', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['post'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['post'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['post'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['post'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'post', operation: keyof Prisma.TypeMap['model']['post'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['post'][keyof Prisma.TypeMap['model']['post']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['post'][keyof Prisma.TypeMap['model']['post']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['post'][keyof Prisma.TypeMap['model']['post']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['post'][keyof Prisma.TypeMap['model']['post']]['result']>
        }
        category?: {
          [K in keyof Prisma.TypeMap['model']['Category']]?: (args: { model: 'Category', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Category'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Category', operation: keyof Prisma.TypeMap['model']['Category'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Category'][keyof Prisma.TypeMap['model']['Category']]['result']>
        }
        patient?: {
          [K in keyof Prisma.TypeMap['model']['Patient']]?: (args: { model: 'Patient', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Patient'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Patient'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Patient'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Patient'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Patient', operation: keyof Prisma.TypeMap['model']['Patient'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Patient'][keyof Prisma.TypeMap['model']['Patient']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Patient'][keyof Prisma.TypeMap['model']['Patient']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Patient'][keyof Prisma.TypeMap['model']['Patient']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Patient'][keyof Prisma.TypeMap['model']['Patient']]['result']>
        }
        movie?: {
          [K in keyof Prisma.TypeMap['model']['Movie']]?: (args: { model: 'Movie', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Movie'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Movie'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Movie'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Movie'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Movie', operation: keyof Prisma.TypeMap['model']['Movie'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Movie'][keyof Prisma.TypeMap['model']['Movie']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Movie'][keyof Prisma.TypeMap['model']['Movie']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Movie'][keyof Prisma.TypeMap['model']['Movie']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Movie'][keyof Prisma.TypeMap['model']['Movie']]['result']>
        }
        director?: {
          [K in keyof Prisma.TypeMap['model']['Director']]?: (args: { model: 'Director', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Director'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Director'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Director'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Director'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Director', operation: keyof Prisma.TypeMap['model']['Director'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Director'][keyof Prisma.TypeMap['model']['Director']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Director'][keyof Prisma.TypeMap['model']['Director']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Director'][keyof Prisma.TypeMap['model']['Director']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Director'][keyof Prisma.TypeMap['model']['Director']]['result']>
        }
        problem?: {
          [K in keyof Prisma.TypeMap['model']['Problem']]?: (args: { model: 'Problem', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Problem'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Problem'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Problem'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Problem'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Problem', operation: keyof Prisma.TypeMap['model']['Problem'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Problem'][keyof Prisma.TypeMap['model']['Problem']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Problem'][keyof Prisma.TypeMap['model']['Problem']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Problem'][keyof Prisma.TypeMap['model']['Problem']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Problem'][keyof Prisma.TypeMap['model']['Problem']]['result']>
        }
        creator?: {
          [K in keyof Prisma.TypeMap['model']['Creator']]?: (args: { model: 'Creator', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Creator'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Creator'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Creator'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Creator'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Creator', operation: keyof Prisma.TypeMap['model']['Creator'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Creator'][keyof Prisma.TypeMap['model']['Creator']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Creator'][keyof Prisma.TypeMap['model']['Creator']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Creator'][keyof Prisma.TypeMap['model']['Creator']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Creator'][keyof Prisma.TypeMap['model']['Creator']]['result']>
        }
        nativeTypeModel?: {
          [K in keyof Prisma.TypeMap['model']['NativeTypeModel']]?: (args: { model: 'NativeTypeModel', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'NativeTypeModel', operation: keyof Prisma.TypeMap['model']['NativeTypeModel'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][keyof Prisma.TypeMap['model']['NativeTypeModel']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][keyof Prisma.TypeMap['model']['NativeTypeModel']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][keyof Prisma.TypeMap['model']['NativeTypeModel']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'][keyof Prisma.TypeMap['model']['NativeTypeModel']]['result']>
        }
        equipment?: {
          [K in keyof Prisma.TypeMap['model']['Equipment']]?: (args: { model: 'Equipment', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Equipment'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Equipment'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Equipment'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Equipment'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Equipment', operation: keyof Prisma.TypeMap['model']['Equipment'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Equipment'][keyof Prisma.TypeMap['model']['Equipment']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Equipment'][keyof Prisma.TypeMap['model']['Equipment']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Equipment'][keyof Prisma.TypeMap['model']['Equipment']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Equipment'][keyof Prisma.TypeMap['model']['Equipment']]['result']>
        }
        hidden?: {
          [K in keyof Prisma.TypeMap['model']['Hidden']]?: (args: { model: 'Hidden', operation: K, args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Hidden'][K]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Hidden'][K]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Hidden'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Hidden'][K]['result']>
        } & {
          $allOperations?: (args: { model: 'Hidden', operation: keyof Prisma.TypeMap['model']['Hidden'], args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Hidden'][keyof Prisma.TypeMap['model']['Hidden']]['args']>, query: (args: runtime.Types.Extensions.ReadonlySelector<Prisma.TypeMap<ExtArgs>['model']['Hidden'][keyof Prisma.TypeMap['model']['Hidden']]['args']>) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['model']['Hidden'][keyof Prisma.TypeMap['model']['Hidden']]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['model']['Hidden'][keyof Prisma.TypeMap['model']['Hidden']]['result']>
        }
      } & {
        [K in keyof Prisma.TypeMap['other']]?: (args: { operation: K, args: Prisma.TypeMap<ExtArgs>['other'][K]['args'], query: (args: Prisma.TypeMap<ExtArgs>['other'][K]['args']) => Prisma.PrismaPromise<Prisma.TypeMap<ExtArgs>['other'][K]['result']> }) => Promise<Prisma.TypeMap<ExtArgs>['other'][K]['result']>
      }
    client?: C & { [K: symbol]: { ctx: runtime.Types.Extensions.GetClient<PrismaClient<never, never, false, ExtArgs>, ExtArgs['client']> } }
  }
  export type DefaultPrismaClient = PrismaClient
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
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

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





  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
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





  // Custom InputTypes

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     */
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





  // Custom InputTypes

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
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





  // Custom InputTypes

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     */
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
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
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
    by: UserScalarFieldEnum[]
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

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
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


  export type UserSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    balance?: boolean
    amount?: boolean
    role?: boolean
    grades?: boolean
    aliases?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    editorPosts?: boolean | User$editorPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    balance?: boolean
    amount?: boolean
    role?: boolean
    grades?: boolean
    aliases?: boolean
  }

  export type UserInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    editorPosts?: boolean | User$editorPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }

  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = runtime.Types.GetFindResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findMany'>| Null>;

    editorPosts<T extends User$editorPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$editorPostsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findMany'>| Null>;

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
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
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
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
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
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User.editorPosts
   */
  export type User$editorPostsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
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
    by: PostScalarFieldEnum[]
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

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
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


  export type postSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    uuid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    authorId?: boolean
    editorId?: boolean
    kind?: boolean
    metadata?: boolean
    author?: boolean | UserArgs<ExtArgs>
    editor?: boolean | post$editorArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

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
    kind?: boolean
    metadata?: boolean
  }

  export type postInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | UserArgs<ExtArgs>
    editor?: boolean | post$editorArgs<ExtArgs>
  }

  type postGetPayload<S extends boolean | null | undefined | postArgs> = runtime.Types.GetFindResult<postPayload, S>

  type postCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post'], meta: { name: 'post' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'post'> extends True ? Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'post'> extends True ? Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__postClient<runtime.Types.GetResult<postPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    author<T extends UserArgs<ExtArgs> = {}>(args?: Subset<T, UserArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

    editor<T extends post$editorArgs<ExtArgs> = {}>(args?: Subset<T, post$editorArgs<ExtArgs>>): Prisma__UserClient<runtime.Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

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
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }

  /**
   * post findUnique
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
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where: postWhereUniqueInput
  }


  /**
   * post base type for findFirst actions
   */
  export type postFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }

  /**
   * post findFirst
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
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which post to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: Enumerable<postOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to create a post.
     */
    data: XOR<postCreateInput, postUncheckedCreateInput>
  }


  /**
   * post createMany
   */
  export type postCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: Enumerable<postCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The data needed to update a post.
     */
    data: XOR<postUpdateInput, postUncheckedUpdateInput>
    /**
     * Choose, which post to update.
     */
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * The filter to search for the post to update in case it exists.
     */
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
     */
    create: XOR<postCreateInput, postUncheckedCreateInput>
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postUpdateInput, postUncheckedUpdateInput>
  }


  /**
   * post delete
   */
  export type postDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    /**
     * Filter which post to delete.
     */
    where: postWhereUniqueInput
  }


  /**
   * post deleteMany
   */
  export type postDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
  }


  /**
   * post.editor
   */
  export type post$editorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * post without action
   */
  export type postArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
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
    by: CategoryScalarFieldEnum[]
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

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
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


  export type CategorySelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    name?: boolean
    slug?: boolean
    number?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    name?: boolean
    slug?: boolean
    number?: boolean
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> = runtime.Types.GetFindResult<CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__CategoryClient<runtime.Types.GetResult<CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
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
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
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
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
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
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
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
    by: PatientScalarFieldEnum[]
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

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
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


  export type PatientSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientArgs> = runtime.Types.GetFindResult<PatientPayload, S>

  type PatientCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Patient'> extends True ? Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Patient'> extends True ? Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__PatientClient<runtime.Types.GetResult<PatientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUnique
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
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient base type for findFirst actions
   */
  export type PatientFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: Enumerable<PatientScalarFieldEnum>
  }

  /**
   * Patient findFirst
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
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: Enumerable<PatientOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: Enumerable<PatientScalarFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }


  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: Enumerable<PatientCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }


  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
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
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
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
    by: MovieScalarFieldEnum[]
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

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
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


  export type MovieSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    directorFirstName?: boolean
    directorLastName?: boolean
    title?: boolean
    director?: boolean | DirectorArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    directorFirstName?: boolean
    directorLastName?: boolean
    title?: boolean
  }

  export type MovieInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    director?: boolean | DirectorArgs<ExtArgs>
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieArgs> = runtime.Types.GetFindResult<MoviePayload, S>

  type MovieCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Movie'> extends True ? Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Movie'> extends True ? Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__MovieClient<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    director<T extends DirectorArgs<ExtArgs> = {}>(args?: Subset<T, DirectorArgs<ExtArgs>>): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

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
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUnique
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
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie base type for findFirst actions
   */
  export type MovieFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: Enumerable<MovieScalarFieldEnum>
  }

  /**
   * Movie findFirst
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
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }


  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: Enumerable<MovieCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }


  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
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
    by: DirectorScalarFieldEnum[]
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

  type GetDirectorGroupByPayload<T extends DirectorGroupByArgs> = Prisma.PrismaPromise<
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


  export type DirectorSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    movies?: boolean | Director$moviesArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["director"]>

  export type DirectorSelectScalar = {
    firstName?: boolean
    lastName?: boolean
  }

  export type DirectorInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    movies?: boolean | Director$moviesArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeArgs<ExtArgs>
  }

  type DirectorGetPayload<S extends boolean | null | undefined | DirectorArgs> = runtime.Types.GetFindResult<DirectorPayload, S>

  type DirectorCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<DirectorFindManyArgs, 'select' | 'include'> & {
      select?: DirectorCountAggregateInputType | true
    }

  export interface DirectorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Director'], meta: { name: 'Director' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Director'> extends True ? Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Director'> extends True ? Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__DirectorClient<runtime.Types.GetResult<DirectorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends DirectorAggregateArgs>(args: Subset<T, DirectorAggregateArgs>): Prisma.PrismaPromise<GetDirectorAggregateType<T>>

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
    >(args: SubsetIntersection<T, DirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    movies<T extends Director$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Director$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<MoviePayload<ExtArgs>, T, 'findMany'>| Null>;

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
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where: DirectorWhereUniqueInput
  }

  /**
   * Director findUnique
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
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where: DirectorWhereUniqueInput
  }


  /**
   * Director base type for findFirst actions
   */
  export type DirectorFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     */
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }

  /**
   * Director findFirst
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
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Director to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directors.
     */
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }


  /**
   * Director findMany
   */
  export type DirectorFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter, which Directors to fetch.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: Enumerable<DirectorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directors.
     */
    cursor?: DirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directors.
     */
    skip?: number
    distinct?: Enumerable<DirectorScalarFieldEnum>
  }


  /**
   * Director create
   */
  export type DirectorCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to create a Director.
     */
    data: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
  }


  /**
   * Director createMany
   */
  export type DirectorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directors.
     */
    data: Enumerable<DirectorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The data needed to update a Director.
     */
    data: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
    /**
     * Choose, which Director to update.
     */
    where: DirectorWhereUniqueInput
  }


  /**
   * Director updateMany
   */
  export type DirectorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Directors.
     */
    data: XOR<DirectorUpdateManyMutationInput, DirectorUncheckedUpdateManyInput>
    /**
     * Filter which Directors to update
     */
    where?: DirectorWhereInput
  }


  /**
   * Director upsert
   */
  export type DirectorUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * The filter to search for the Director to update in case it exists.
     */
    where: DirectorWhereUniqueInput
    /**
     * In case the Director found by the `where` argument doesn't exist, create a new Director with this data.
     */
    create: XOR<DirectorCreateInput, DirectorUncheckedCreateInput>
    /**
     * In case the Director was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectorUpdateInput, DirectorUncheckedUpdateInput>
  }


  /**
   * Director delete
   */
  export type DirectorDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DirectorInclude<ExtArgs> | null
    /**
     * Filter which Director to delete.
     */
    where: DirectorWhereUniqueInput
  }


  /**
   * Director deleteMany
   */
  export type DirectorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Directors to delete
     */
    where?: DirectorWhereInput
  }


  /**
   * Director.movies
   */
  export type Director$moviesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: Enumerable<MovieOrderByWithRelationAndSearchRelevanceInput>
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MovieScalarFieldEnum>
  }


  /**
   * Director without action
   */
  export type DirectorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Director
     */
    select?: DirectorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
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
    by: ProblemScalarFieldEnum[]
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

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
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


  export type ProblemSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    problemText?: boolean
    creatorId?: boolean
    likedBy?: boolean | Problem$likedByArgs<ExtArgs>
    creator?: boolean | Problem$creatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    problemText?: boolean
    creatorId?: boolean
  }

  export type ProblemInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likedBy?: boolean | Problem$likedByArgs<ExtArgs>
    creator?: boolean | Problem$creatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeArgs<ExtArgs>
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemArgs> = runtime.Types.GetFindResult<ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<ProblemFindManyArgs, 'select' | 'include'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Problem'> extends True ? Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Problem'> extends True ? Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__ProblemClient<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProblemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    likedBy<T extends Problem$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findMany'>| Null>;

    creator<T extends Problem$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Problem$creatorArgs<ExtArgs>>): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findUnique'> | Null, never, ExtArgs>;

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
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUnique
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
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem base type for findFirst actions
   */
  export type ProblemFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }

  /**
   * Problem findFirst
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
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }


  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: Enumerable<ProblemCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
  }


  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }


  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
  }


  /**
   * Problem.likedBy
   */
  export type Problem$likedByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    where?: CreatorWhereInput
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    cursor?: CreatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }


  /**
   * Problem.creator
   */
  export type Problem$creatorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    where?: CreatorWhereInput
  }


  /**
   * Problem without action
   */
  export type ProblemArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
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
    by: CreatorScalarFieldEnum[]
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

  type GetCreatorGroupByPayload<T extends CreatorGroupByArgs> = Prisma.PrismaPromise<
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


  export type CreatorSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    likes?: boolean | Creator$likesArgs<ExtArgs>
    problems?: boolean | Creator$problemsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type CreatorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CreatorInclude<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    likes?: boolean | Creator$likesArgs<ExtArgs>
    problems?: boolean | Creator$problemsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeArgs<ExtArgs>
  }

  type CreatorGetPayload<S extends boolean | null | undefined | CreatorArgs> = runtime.Types.GetFindResult<CreatorPayload, S>

  type CreatorCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<CreatorFindManyArgs, 'select' | 'include'> & {
      select?: CreatorCountAggregateInputType | true
    }

  export interface CreatorDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Creator'], meta: { name: 'Creator' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Creator'> extends True ? Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Creator'> extends True ? Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__CreatorClient<runtime.Types.GetResult<CreatorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends CreatorAggregateArgs>(args: Subset<T, CreatorAggregateArgs>): Prisma.PrismaPromise<GetCreatorAggregateType<T>>

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
    >(args: SubsetIntersection<T, CreatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CreatorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    likes<T extends Creator$likesArgs<ExtArgs> = {}>(args?: Subset<T, Creator$likesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findMany'>| Null>;

    problems<T extends Creator$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.GetResult<ProblemPayload<ExtArgs>, T, 'findMany'>| Null>;

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
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where: CreatorWhereUniqueInput
  }

  /**
   * Creator findUnique
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
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator base type for findFirst actions
   */
  export type CreatorFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     */
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }

  /**
   * Creator findFirst
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
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creator to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Creators.
     */
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }


  /**
   * Creator findMany
   */
  export type CreatorFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter, which Creators to fetch.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: Enumerable<CreatorOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Creators.
     */
    cursor?: CreatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Creators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Creators.
     */
    skip?: number
    distinct?: Enumerable<CreatorScalarFieldEnum>
  }


  /**
   * Creator create
   */
  export type CreatorCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to create a Creator.
     */
    data: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
  }


  /**
   * Creator createMany
   */
  export type CreatorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creators.
     */
    data: Enumerable<CreatorCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Creator update
   */
  export type CreatorUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The data needed to update a Creator.
     */
    data: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
    /**
     * Choose, which Creator to update.
     */
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator updateMany
   */
  export type CreatorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Creators.
     */
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyInput>
    /**
     * Filter which Creators to update
     */
    where?: CreatorWhereInput
  }


  /**
   * Creator upsert
   */
  export type CreatorUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * The filter to search for the Creator to update in case it exists.
     */
    where: CreatorWhereUniqueInput
    /**
     * In case the Creator found by the `where` argument doesn't exist, create a new Creator with this data.
     */
    create: XOR<CreatorCreateInput, CreatorUncheckedCreateInput>
    /**
     * In case the Creator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreatorUpdateInput, CreatorUncheckedUpdateInput>
  }


  /**
   * Creator delete
   */
  export type CreatorDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    /**
     * Filter which Creator to delete.
     */
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator deleteMany
   */
  export type CreatorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Creators to delete
     */
    where?: CreatorWhereInput
  }


  /**
   * Creator.likes
   */
  export type Creator$likesArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Creator.problems
   */
  export type Creator$problemsArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: Enumerable<ProblemOrderByWithRelationAndSearchRelevanceInput>
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProblemScalarFieldEnum>
  }


  /**
   * Creator without action
   */
  export type CreatorArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
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
     */
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     */
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     */
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
    by: NativeTypeModelScalarFieldEnum[]
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

  type GetNativeTypeModelGroupByPayload<T extends NativeTypeModelGroupByArgs> = Prisma.PrismaPromise<
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


  export type NativeTypeModelSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    bigInt?: boolean
    byteA?: boolean
    decimal?: boolean
  }, ExtArgs["result"]["nativeTypeModel"]>

  export type NativeTypeModelSelectScalar = {
    id?: boolean
    bigInt?: boolean
    byteA?: boolean
    decimal?: boolean
  }

  type NativeTypeModelGetPayload<S extends boolean | null | undefined | NativeTypeModelArgs> = runtime.Types.GetFindResult<NativeTypeModelPayload, S>

  type NativeTypeModelCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<NativeTypeModelFindManyArgs, 'select' | 'include'> & {
      select?: NativeTypeModelCountAggregateInputType | true
    }

  export interface NativeTypeModelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NativeTypeModel'], meta: { name: 'NativeTypeModel' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'NativeTypeModel'> extends True ? Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'NativeTypeModel'> extends True ? Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__NativeTypeModelClient<runtime.Types.GetResult<NativeTypeModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends NativeTypeModelAggregateArgs>(args: Subset<T, NativeTypeModelAggregateArgs>): Prisma.PrismaPromise<GetNativeTypeModelAggregateType<T>>

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
    >(args: SubsetIntersection<T, NativeTypeModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNativeTypeModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for NativeTypeModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NativeTypeModelClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     */
    where: NativeTypeModelWhereUniqueInput
  }

  /**
   * NativeTypeModel findUnique
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
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     */
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel base type for findFirst actions
   */
  export type NativeTypeModelFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     */
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     */
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NativeTypeModels.
     */
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NativeTypeModels.
     */
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }

  /**
   * NativeTypeModel findFirst
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
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModel to fetch.
     */
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     */
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NativeTypeModels.
     */
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NativeTypeModels.
     */
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }


  /**
   * NativeTypeModel findMany
   */
  export type NativeTypeModelFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter, which NativeTypeModels to fetch.
     */
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     */
    orderBy?: Enumerable<NativeTypeModelOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NativeTypeModels.
     */
    cursor?: NativeTypeModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NativeTypeModels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NativeTypeModels.
     */
    skip?: number
    distinct?: Enumerable<NativeTypeModelScalarFieldEnum>
  }


  /**
   * NativeTypeModel create
   */
  export type NativeTypeModelCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The data needed to create a NativeTypeModel.
     */
    data: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
  }


  /**
   * NativeTypeModel createMany
   */
  export type NativeTypeModelCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many NativeTypeModels.
     */
    data: Enumerable<NativeTypeModelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * NativeTypeModel update
   */
  export type NativeTypeModelUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The data needed to update a NativeTypeModel.
     */
    data: XOR<NativeTypeModelUpdateInput, NativeTypeModelUncheckedUpdateInput>
    /**
     * Choose, which NativeTypeModel to update.
     */
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel updateMany
   */
  export type NativeTypeModelUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update NativeTypeModels.
     */
    data: XOR<NativeTypeModelUpdateManyMutationInput, NativeTypeModelUncheckedUpdateManyInput>
    /**
     * Filter which NativeTypeModels to update
     */
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel upsert
   */
  export type NativeTypeModelUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The filter to search for the NativeTypeModel to update in case it exists.
     */
    where: NativeTypeModelWhereUniqueInput
    /**
     * In case the NativeTypeModel found by the `where` argument doesn't exist, create a new NativeTypeModel with this data.
     */
    create: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
    /**
     * In case the NativeTypeModel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NativeTypeModelUpdateInput, NativeTypeModelUncheckedUpdateInput>
  }


  /**
   * NativeTypeModel delete
   */
  export type NativeTypeModelDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * Filter which NativeTypeModel to delete.
     */
    where: NativeTypeModelWhereUniqueInput
  }


  /**
   * NativeTypeModel deleteMany
   */
  export type NativeTypeModelDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which NativeTypeModels to delete
     */
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel without action
   */
  export type NativeTypeModelArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
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
    name: string | null
  }

  export type EquipmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type EquipmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type EquipmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type EquipmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type EquipmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
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
    by: EquipmentScalarFieldEnum[]
    having?: EquipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipmentCountAggregateInputType | true
    _min?: EquipmentMinAggregateInputType
    _max?: EquipmentMaxAggregateInputType
  }


  export type EquipmentGroupByOutputType = {
    id: string
    name: string | null
    _count: EquipmentCountAggregateOutputType | null
    _min: EquipmentMinAggregateOutputType | null
    _max: EquipmentMaxAggregateOutputType | null
  }

  type GetEquipmentGroupByPayload<T extends EquipmentGroupByArgs> = Prisma.PrismaPromise<
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


  export type EquipmentSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentArgs> = runtime.Types.GetFindResult<EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<EquipmentFindManyArgs, 'select' | 'include'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipment'], meta: { name: 'Equipment' } }
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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Equipment'> extends True ? Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Equipment'> extends True ? Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma.PrismaPromise<BatchPayload>

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
    ): Prisma__EquipmentClient<runtime.Types.GetResult<EquipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<
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
    aggregate<T extends EquipmentAggregateArgs>(args: Subset<T, EquipmentAggregateArgs>): Prisma.PrismaPromise<GetEquipmentAggregateType<T>>

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
    >(args: SubsetIntersection<T, EquipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EquipmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }

  /**
   * Equipment findUnique
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
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment base type for findFirst actions
   */
  export type EquipmentFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }

  /**
   * Equipment findFirst
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
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipment.
     */
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }


  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter, which Equipment to fetch.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: Enumerable<EquipmentOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipment.
     */
    cursor?: EquipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipment from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipment.
     */
    skip?: number
    distinct?: Enumerable<EquipmentScalarFieldEnum>
  }


  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }


  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: Enumerable<EquipmentCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to update a Equipment.
     */
    data: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
    /**
     * Choose, which Equipment to update.
     */
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment updateMany
   */
  export type EquipmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipment.
     */
    data: XOR<EquipmentUpdateManyMutationInput, EquipmentUncheckedUpdateManyInput>
    /**
     * Filter which Equipment to update
     */
    where?: EquipmentWhereInput
  }


  /**
   * Equipment upsert
   */
  export type EquipmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The filter to search for the Equipment to update in case it exists.
     */
    where: EquipmentWhereUniqueInput
    /**
     * In case the Equipment found by the `where` argument doesn't exist, create a new Equipment with this data.
     */
    create: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
    /**
     * In case the Equipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipmentUpdateInput, EquipmentUncheckedUpdateInput>
  }


  /**
   * Equipment delete
   */
  export type EquipmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * Filter which Equipment to delete.
     */
    where: EquipmentWhereUniqueInput
  }


  /**
   * Equipment deleteMany
   */
  export type EquipmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
  }


  /**
   * Equipment without action
   */
  export type EquipmentArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
  }



  /**
   * Model Hidden
   */


  export type AggregateHidden = {
    _count: HiddenCountAggregateOutputType | null
    _min: HiddenMinAggregateOutputType | null
    _max: HiddenMaxAggregateOutputType | null
  }

  export type HiddenMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HiddenMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type HiddenCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type HiddenMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type HiddenMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type HiddenCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type HiddenAggregateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Hidden to aggregate.
     */
    where?: HiddenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hiddens to fetch.
     */
    orderBy?: Enumerable<HiddenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HiddenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hiddens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hiddens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hiddens
    **/
    _count?: true | HiddenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HiddenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HiddenMaxAggregateInputType
  }

  export type GetHiddenAggregateType<T extends HiddenAggregateArgs> = {
        [P in keyof T & keyof AggregateHidden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHidden[P]>
      : GetScalarType<T[P], AggregateHidden[P]>
  }




  export type HiddenGroupByArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    where?: HiddenWhereInput
    orderBy?: Enumerable<HiddenOrderByWithAggregationInput>
    by: HiddenScalarFieldEnum[]
    having?: HiddenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HiddenCountAggregateInputType | true
    _min?: HiddenMinAggregateInputType
    _max?: HiddenMaxAggregateInputType
  }


  export type HiddenGroupByOutputType = {
    id: string
    name: string | null
    _count: HiddenCountAggregateOutputType | null
    _min: HiddenMinAggregateOutputType | null
    _max: HiddenMaxAggregateOutputType | null
  }

  type GetHiddenGroupByPayload<T extends HiddenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<HiddenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HiddenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HiddenGroupByOutputType[P]>
            : GetScalarType<T[P], HiddenGroupByOutputType[P]>
        }
      >
    >


  export type HiddenSelect<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["hidden"]>

  export type HiddenSelectScalar = {
    id?: boolean
    name?: boolean
  }

  type HiddenGetPayload<S extends boolean | null | undefined | HiddenArgs> = runtime.Types.GetFindResult<HiddenPayload, S>

  type HiddenCountArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = 
    Omit<HiddenFindManyArgs, 'select' | 'include'> & {
      select?: HiddenCountAggregateInputType | true
    }

  export interface HiddenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hidden'], meta: { name: 'Hidden' } }
    /**
     * Find zero or one Hidden that matches the filter.
     * @param {HiddenFindUniqueArgs} args - Arguments to find a Hidden
     * @example
     * // Get one Hidden
     * const hidden = await prisma.hidden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HiddenFindUniqueArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, HiddenFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Hidden'> extends True ? Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findUnique'>, never, ExtArgs> : Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Hidden that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HiddenFindUniqueOrThrowArgs} args - Arguments to find a Hidden
     * @example
     * // Get one Hidden
     * const hidden = await prisma.hidden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HiddenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Hidden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFindFirstArgs} args - Arguments to find a Hidden
     * @example
     * // Get one Hidden
     * const hidden = await prisma.hidden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HiddenFindFirstArgs<ExtArgs>,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, HiddenFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Hidden'> extends True ? Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findFirst'>, never, ExtArgs> : Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hidden that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFindFirstOrThrowArgs} args - Arguments to find a Hidden
     * @example
     * // Get one Hidden
     * const hidden = await prisma.hidden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HiddenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Hiddens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hiddens
     * const hiddens = await prisma.hidden.findMany()
     * 
     * // Get first 10 Hiddens
     * const hiddens = await prisma.hidden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hiddenWithIdOnly = await prisma.hidden.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HiddenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Hidden.
     * @param {HiddenCreateArgs} args - Arguments to create a Hidden.
     * @example
     * // Create one Hidden
     * const Hidden = await prisma.hidden.create({
     *   data: {
     *     // ... data to create a Hidden
     *   }
     * })
     * 
    **/
    create<T extends HiddenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenCreateArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Hiddens.
     *     @param {HiddenCreateManyArgs} args - Arguments to create many Hiddens.
     *     @example
     *     // Create many Hiddens
     *     const hidden = await prisma.hidden.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HiddenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hidden.
     * @param {HiddenDeleteArgs} args - Arguments to delete one Hidden.
     * @example
     * // Delete one Hidden
     * const Hidden = await prisma.hidden.delete({
     *   where: {
     *     // ... filter to delete one Hidden
     *   }
     * })
     * 
    **/
    delete<T extends HiddenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenDeleteArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Hidden.
     * @param {HiddenUpdateArgs} args - Arguments to update one Hidden.
     * @example
     * // Update one Hidden
     * const hidden = await prisma.hidden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HiddenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenUpdateArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Hiddens.
     * @param {HiddenDeleteManyArgs} args - Arguments to filter Hiddens to delete.
     * @example
     * // Delete a few Hiddens
     * const { count } = await prisma.hidden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HiddenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hiddens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hiddens
     * const hidden = await prisma.hidden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HiddenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hidden.
     * @param {HiddenUpsertArgs} args - Arguments to update or create a Hidden.
     * @example
     * // Update or create a Hidden
     * const hidden = await prisma.hidden.upsert({
     *   create: {
     *     // ... data to create a Hidden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hidden we want to update
     *   }
     * })
    **/
    upsert<T extends HiddenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenUpsertArgs<ExtArgs>>
    ): Prisma__HiddenClient<runtime.Types.GetResult<HiddenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Hiddens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenCountArgs} args - Arguments to filter Hiddens to count.
     * @example
     * // Count the number of Hiddens
     * const count = await prisma.hidden.count({
     *   where: {
     *     // ... the filter for the Hiddens we want to count
     *   }
     * })
    **/
    count<T extends HiddenCountArgs>(
      args?: Subset<T, HiddenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HiddenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hidden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HiddenAggregateArgs>(args: Subset<T, HiddenAggregateArgs>): Prisma.PrismaPromise<GetHiddenAggregateType<T>>

    /**
     * Group by Hidden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenGroupByArgs} args - Group by arguments.
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
      T extends HiddenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HiddenGroupByArgs['orderBy'] }
        : { orderBy?: HiddenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HiddenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHiddenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Hidden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__HiddenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


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
   * Hidden base type for findUnique actions
   */
  export type HiddenFindUniqueArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter, which Hidden to fetch.
     */
    where: HiddenWhereUniqueInput
  }

  /**
   * Hidden findUnique
   */
  export interface HiddenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends HiddenFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hidden findUniqueOrThrow
   */
  export type HiddenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter, which Hidden to fetch.
     */
    where: HiddenWhereUniqueInput
  }


  /**
   * Hidden base type for findFirst actions
   */
  export type HiddenFindFirstArgsBase<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter, which Hidden to fetch.
     */
    where?: HiddenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hiddens to fetch.
     */
    orderBy?: Enumerable<HiddenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hiddens.
     */
    cursor?: HiddenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hiddens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hiddens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hiddens.
     */
    distinct?: Enumerable<HiddenScalarFieldEnum>
  }

  /**
   * Hidden findFirst
   */
  export interface HiddenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> extends HiddenFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Hidden findFirstOrThrow
   */
  export type HiddenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter, which Hidden to fetch.
     */
    where?: HiddenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hiddens to fetch.
     */
    orderBy?: Enumerable<HiddenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hiddens.
     */
    cursor?: HiddenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hiddens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hiddens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hiddens.
     */
    distinct?: Enumerable<HiddenScalarFieldEnum>
  }


  /**
   * Hidden findMany
   */
  export type HiddenFindManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter, which Hiddens to fetch.
     */
    where?: HiddenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hiddens to fetch.
     */
    orderBy?: Enumerable<HiddenOrderByWithRelationAndSearchRelevanceInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hiddens.
     */
    cursor?: HiddenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hiddens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hiddens.
     */
    skip?: number
    distinct?: Enumerable<HiddenScalarFieldEnum>
  }


  /**
   * Hidden create
   */
  export type HiddenCreateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * The data needed to create a Hidden.
     */
    data: XOR<HiddenCreateInput, HiddenUncheckedCreateInput>
  }


  /**
   * Hidden createMany
   */
  export type HiddenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hiddens.
     */
    data: Enumerable<HiddenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Hidden update
   */
  export type HiddenUpdateArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * The data needed to update a Hidden.
     */
    data: XOR<HiddenUpdateInput, HiddenUncheckedUpdateInput>
    /**
     * Choose, which Hidden to update.
     */
    where: HiddenWhereUniqueInput
  }


  /**
   * Hidden updateMany
   */
  export type HiddenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Hiddens.
     */
    data: XOR<HiddenUpdateManyMutationInput, HiddenUncheckedUpdateManyInput>
    /**
     * Filter which Hiddens to update
     */
    where?: HiddenWhereInput
  }


  /**
   * Hidden upsert
   */
  export type HiddenUpsertArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * The filter to search for the Hidden to update in case it exists.
     */
    where: HiddenWhereUniqueInput
    /**
     * In case the Hidden found by the `where` argument doesn't exist, create a new Hidden with this data.
     */
    create: XOR<HiddenCreateInput, HiddenUncheckedCreateInput>
    /**
     * In case the Hidden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HiddenUpdateInput, HiddenUncheckedUpdateInput>
  }


  /**
   * Hidden delete
   */
  export type HiddenDeleteArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * Filter which Hidden to delete.
     */
    where: HiddenWhereUniqueInput
  }


  /**
   * Hidden deleteMany
   */
  export type HiddenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Hiddens to delete
     */
    where?: HiddenWhereInput
  }


  /**
   * Hidden without action
   */
  export type HiddenArgs<ExtArgs extends runtime.Types.Extensions.Args = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

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
    id: 'id',
    name: 'name'
  };

  export type EquipmentOrderByRelevanceFieldEnum = (typeof EquipmentOrderByRelevanceFieldEnum)[keyof typeof EquipmentOrderByRelevanceFieldEnum]


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const HiddenOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HiddenOrderByRelevanceFieldEnum = (typeof HiddenOrderByRelevanceFieldEnum)[keyof typeof HiddenOrderByRelevanceFieldEnum]


  export const HiddenScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HiddenScalarFieldEnum = (typeof HiddenScalarFieldEnum)[keyof typeof HiddenScalarFieldEnum]


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
    role?: EnumRoleFilter | Role
    grades?: IntNullableListFilter
    aliases?: StringNullableListFilter
    posts?: PostListRelationFilter
    editorPosts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
    grades?: SortOrder
    aliases?: SortOrder
    posts?: postOrderByRelationAggregateInput
    editorPosts?: postOrderByRelationAggregateInput
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
    role?: EnumRoleFilter | Role
    grades?: IntNullableListFilter
    aliases?: StringNullableListFilter
    posts?: PostListRelationFilter
    editorPosts?: PostListRelationFilter
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
    authorId?: IntFilter | number
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    editor?: XOR<UserRelationFilter, UserWhereInput> | null
  }

  export type postOrderByWithRelationAndSearchRelevanceInput = {
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
    author?: UserOrderByWithRelationAndSearchRelevanceInput
    editor?: UserOrderByWithRelationAndSearchRelevanceInput
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
    authorId?: IntFilter | number
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
    author?: XOR<UserRelationFilter, UserWhereInput>
    editor?: XOR<UserRelationFilter, UserWhereInput> | null
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
    title?: StringFilter | string
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
  }

  export type MovieOrderByWithRelationAndSearchRelevanceInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
    director?: DirectorOrderByWithRelationAndSearchRelevanceInput
    _relevance?: MovieOrderByRelevanceInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    movieCompoundId?: MovieMovieCompoundIdCompoundUniqueInput
    AND?: Enumerable<MovieWhereInput>
    OR?: Enumerable<MovieWhereInput>
    NOT?: Enumerable<MovieWhereInput>
    directorFirstName?: StringFilter | string
    directorLastName?: StringFilter | string
    title?: StringFilter | string
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
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
    creatorId?: IntNullableFilter | number | null
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorRelationFilter, CreatorWhereInput> | null
  }

  export type ProblemOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrderInput | SortOrder
    likedBy?: CreatorOrderByRelationAggregateInput
    creator?: CreatorOrderByWithRelationAndSearchRelevanceInput
    _relevance?: ProblemOrderByRelevanceInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Enumerable<ProblemWhereInput>
    OR?: Enumerable<ProblemWhereInput>
    NOT?: Enumerable<ProblemWhereInput>
    problemText?: StringFilter | string
    creatorId?: IntNullableFilter | number | null
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorRelationFilter, CreatorWhereInput> | null
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
    name?: StringNullableFilter | string | null
  }

  export type EquipmentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: EquipmentOrderByRelevanceInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<EquipmentWhereInput>
    OR?: Enumerable<EquipmentWhereInput>
    NOT?: Enumerable<EquipmentWhereInput>
    name?: StringNullableFilter | string | null
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    OR?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EquipmentScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
  }

  export type HiddenWhereInput = {
    AND?: Enumerable<HiddenWhereInput>
    OR?: Enumerable<HiddenWhereInput>
    NOT?: Enumerable<HiddenWhereInput>
    id?: StringFilter | string
    name?: StringNullableFilter | string | null
  }

  export type HiddenOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: HiddenOrderByRelevanceInput
  }

  export type HiddenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Enumerable<HiddenWhereInput>
    OR?: Enumerable<HiddenWhereInput>
    NOT?: Enumerable<HiddenWhereInput>
    name?: StringNullableFilter | string | null
  }, "id">

  export type HiddenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: HiddenCountOrderByAggregateInput
    _max?: HiddenMaxOrderByAggregateInput
    _min?: HiddenMinOrderByAggregateInput
  }

  export type HiddenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<HiddenScalarWhereWithAggregatesInput>
    OR?: Enumerable<HiddenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<HiddenScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
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
    posts?: postUpdateManyWithoutAuthorNestedInput
    editorPosts?: postUpdateManyWithoutEditorNestedInput
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
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
    editorPosts?: postUncheckedUpdateManyWithoutEditorNestedInput
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
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
    editor?: UserUpdateOneWithoutEditorPostsNestedInput
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
    director?: DirectorUpdateOneRequiredWithoutMoviesNestedInput
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
    creatorId?: number | null
    likedBy?: CreatorUncheckedCreateNestedManyWithoutLikesInput
  }

  export type ProblemUpdateInput = {
    problemText?: StringFieldUpdateOperationsInput | string
    likedBy?: CreatorUpdateManyWithoutLikesNestedInput
    creator?: CreatorUpdateOneWithoutProblemsNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
    creatorId?: NullableIntFieldUpdateOperationsInput | number | null
    likedBy?: CreatorUncheckedUpdateManyWithoutLikesNestedInput
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
    name?: string | null
  }

  export type EquipmentUncheckedCreateInput = {
    id?: string
    name?: string | null
  }

  export type EquipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentCreateManyInput = {
    id?: string
    name?: string | null
  }

  export type EquipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EquipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HiddenCreateInput = {
    id?: string
    name?: string | null
  }

  export type HiddenUncheckedCreateInput = {
    id?: string
    name?: string | null
  }

  export type HiddenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HiddenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HiddenCreateManyInput = {
    id?: string
    name?: string | null
  }

  export type HiddenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HiddenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
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

  export type PostListRelationFilter = {
    every?: postWhereInput
    some?: postWhereInput
    none?: postWhereInput
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
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

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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
    path?: string[]
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
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
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
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
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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
    path?: string[]
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
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type BytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | Buffer | null
    notIn?: Enumerable<Buffer> | Buffer | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type DecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
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
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
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
    in?: Enumerable<Buffer> | Buffer | null
    notIn?: Enumerable<Buffer> | Buffer | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type DecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
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
    name?: SortOrder
  }

  export type EquipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type EquipmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HiddenOrderByRelevanceInput = {
    fields: Enumerable<HiddenOrderByRelevanceFieldEnum>
    sort: SortOrder
    search: string
  }

  export type HiddenCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HiddenMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type HiddenMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type NullableEnumPostKindFieldUpdateOperationsInput = {
    set?: PostKind | null
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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
    in?: Enumerable<string> | string | null
    notIn?: Enumerable<string> | string | null
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
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedFloatWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
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
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
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
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
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
    path?: string[]
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
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntNullableFilter | bigint | number | null
  }

  export type NestedBytesNullableFilter = {
    equals?: Buffer | null
    in?: Enumerable<Buffer> | Buffer | null
    notIn?: Enumerable<Buffer> | Buffer | null
    not?: NestedBytesNullableFilter | Buffer | null
  }

  export type NestedDecimalNullableFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    lt?: Decimal | DecimalJsLike | number | string
    lte?: Decimal | DecimalJsLike | number | string
    gt?: Decimal | DecimalJsLike | number | string
    gte?: Decimal | DecimalJsLike | number | string
    not?: NestedDecimalNullableFilter | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter = {
    equals?: bigint | number | null
    in?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
    notIn?: Enumerable<bigint> | Enumerable<number> | bigint | number | null
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
    in?: Enumerable<Buffer> | Buffer | null
    notIn?: Enumerable<Buffer> | Buffer | null
    not?: NestedBytesNullableWithAggregatesFilter | Buffer | null
    _count?: NestedIntNullableFilter
    _min?: NestedBytesNullableFilter
    _max?: NestedBytesNullableFilter
  }

  export type NestedDecimalNullableWithAggregatesFilter = {
    equals?: Decimal | DecimalJsLike | number | string | null
    in?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
    notIn?: Enumerable<Decimal> | Enumerable<DecimalJsLike> | Enumerable<number> | Enumerable<string> | Decimal | DecimalJsLike | number | string | null
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
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
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
    kind?: PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
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
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    editorPosts?: postUpdateManyWithoutEditorNestedInput
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
    editorPosts?: postUncheckedUpdateManyWithoutEditorNestedInput
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
    role?: EnumRoleFieldUpdateOperationsInput | Role
    grades?: UserUpdategradesInput | Enumerable<number>
    aliases?: UserUpdatealiasesInput | Enumerable<string>
    posts?: postUpdateManyWithoutAuthorNestedInput
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
    posts?: postUncheckedUpdateManyWithoutAuthorNestedInput
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
    editor?: UserUpdateOneWithoutEditorPostsNestedInput
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
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