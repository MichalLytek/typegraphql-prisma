
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * User model doc
 * @@TypeGraphQL.type(name: "MainUser")
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model post
 * 
 */
export type post = $Result.DefaultSelection<Prisma.$postPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model Director
 * 
 */
export type Director = $Result.DefaultSelection<Prisma.$DirectorPayload>
/**
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Creator
 * 
 */
export type Creator = $Result.DefaultSelection<Prisma.$CreatorPayload>
/**
 * Model NativeTypeModel
 * 
 */
export type NativeTypeModel = $Result.DefaultSelection<Prisma.$NativeTypeModelPayload>
/**
 * Model Equipment
 * @@TypeGraphQL.type(plural: "equipments")
 */
export type Equipment = $Result.DefaultSelection<Prisma.$EquipmentPayload>
/**
 * Model Hidden
 * @@TypeGraphQL.omit(output: true)
 */
export type Hidden = $Result.DefaultSelection<Prisma.$HiddenPayload>

/**
 * Enums
 */
export namespace $Enums {
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

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type PostKind = $Enums.PostKind

export const PostKind: typeof $Enums.PostKind

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
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs>;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.DirectorDelegate<ExtArgs>;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs>;

  /**
   * `prisma.creator`: Exposes CRUD operations for the **Creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): Prisma.CreatorDelegate<ExtArgs>;

  /**
   * `prisma.nativeTypeModel`: Exposes CRUD operations for the **NativeTypeModel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NativeTypeModels
    * const nativeTypeModels = await prisma.nativeTypeModel.findMany()
    * ```
    */
  get nativeTypeModel(): Prisma.NativeTypeModelDelegate<ExtArgs>;

  /**
   * `prisma.equipment`: Exposes CRUD operations for the **Equipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipment
    * const equipment = await prisma.equipment.findMany()
    * ```
    */
  get equipment(): Prisma.EquipmentDelegate<ExtArgs>;

  /**
   * `prisma.hidden`: Exposes CRUD operations for the **Hidden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hiddens
    * const hiddens = await prisma.hidden.findMany()
    * ```
    */
  get hidden(): Prisma.HiddenDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

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


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'post' | 'category' | 'patient' | 'movie' | 'director' | 'problem' | 'creator' | 'nativeTypeModel' | 'equipment' | 'hidden'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      post: {
        payload: Prisma.$postPayload<ExtArgs>
        fields: Prisma.postFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findFirst: {
            args: Prisma.postFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          findMany: {
            args: Prisma.postFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>[]
          }
          create: {
            args: Prisma.postCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          createMany: {
            args: Prisma.postCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          update: {
            args: Prisma.postUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          deleteMany: {
            args: Prisma.postDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.postGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.postCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>,
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
      Director: {
        payload: Prisma.$DirectorPayload<ExtArgs>
        fields: Prisma.DirectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          findFirst: {
            args: Prisma.DirectorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          findMany: {
            args: Prisma.DirectorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>[]
          }
          create: {
            args: Prisma.DirectorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          createMany: {
            args: Prisma.DirectorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DirectorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          update: {
            args: Prisma.DirectorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          deleteMany: {
            args: Prisma.DirectorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DirectorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DirectorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DirectorPayload>
          }
          aggregate: {
            args: Prisma.DirectorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDirector>
          }
          groupBy: {
            args: Prisma.DirectorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectorCountArgs<ExtArgs>,
            result: $Utils.Optional<DirectorCountAggregateOutputType> | number
          }
        }
      }
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>,
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Creator: {
        payload: Prisma.$CreatorPayload<ExtArgs>
        fields: Prisma.CreatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreatorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreatorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          findFirst: {
            args: Prisma.CreatorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreatorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          findMany: {
            args: Prisma.CreatorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>[]
          }
          create: {
            args: Prisma.CreatorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          createMany: {
            args: Prisma.CreatorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CreatorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          update: {
            args: Prisma.CreatorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          deleteMany: {
            args: Prisma.CreatorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CreatorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CreatorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CreatorPayload>
          }
          aggregate: {
            args: Prisma.CreatorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCreator>
          }
          groupBy: {
            args: Prisma.CreatorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CreatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreatorCountArgs<ExtArgs>,
            result: $Utils.Optional<CreatorCountAggregateOutputType> | number
          }
        }
      }
      NativeTypeModel: {
        payload: Prisma.$NativeTypeModelPayload<ExtArgs>
        fields: Prisma.NativeTypeModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NativeTypeModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NativeTypeModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          findFirst: {
            args: Prisma.NativeTypeModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NativeTypeModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          findMany: {
            args: Prisma.NativeTypeModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>[]
          }
          create: {
            args: Prisma.NativeTypeModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          createMany: {
            args: Prisma.NativeTypeModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.NativeTypeModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          update: {
            args: Prisma.NativeTypeModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          deleteMany: {
            args: Prisma.NativeTypeModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.NativeTypeModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.NativeTypeModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$NativeTypeModelPayload>
          }
          aggregate: {
            args: Prisma.NativeTypeModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateNativeTypeModel>
          }
          groupBy: {
            args: Prisma.NativeTypeModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<NativeTypeModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NativeTypeModelCountArgs<ExtArgs>,
            result: $Utils.Optional<NativeTypeModelCountAggregateOutputType> | number
          }
        }
      }
      Equipment: {
        payload: Prisma.$EquipmentPayload<ExtArgs>
        fields: Prisma.EquipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findFirst: {
            args: Prisma.EquipmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          findMany: {
            args: Prisma.EquipmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>[]
          }
          create: {
            args: Prisma.EquipmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          createMany: {
            args: Prisma.EquipmentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EquipmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          update: {
            args: Prisma.EquipmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          deleteMany: {
            args: Prisma.EquipmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EquipmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EquipmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EquipmentPayload>
          }
          aggregate: {
            args: Prisma.EquipmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEquipment>
          }
          groupBy: {
            args: Prisma.EquipmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipmentCountArgs<ExtArgs>,
            result: $Utils.Optional<EquipmentCountAggregateOutputType> | number
          }
        }
      }
      Hidden: {
        payload: Prisma.$HiddenPayload<ExtArgs>
        fields: Prisma.HiddenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HiddenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HiddenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          findFirst: {
            args: Prisma.HiddenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HiddenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          findMany: {
            args: Prisma.HiddenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>[]
          }
          create: {
            args: Prisma.HiddenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          createMany: {
            args: Prisma.HiddenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HiddenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          update: {
            args: Prisma.HiddenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          deleteMany: {
            args: Prisma.HiddenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HiddenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HiddenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HiddenPayload>
          }
          aggregate: {
            args: Prisma.HiddenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHidden>
          }
          groupBy: {
            args: Prisma.HiddenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HiddenGroupByOutputType>[]
          }
          count: {
            args: Prisma.HiddenCountArgs<ExtArgs>,
            result: $Utils.Optional<HiddenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

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

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    editorPosts?: boolean | UserCountOutputTypeCountEditorPostsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEditorPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
  }



  /**
   * Count Type DirectorCountOutputType
   */

  export type DirectorCountOutputType = {
    movies: number
  }

  export type DirectorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | DirectorCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes

  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DirectorCountOutputType
     */
    select?: DirectorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * DirectorCountOutputType without action
   */
  export type DirectorCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
  }



  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    likedBy: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedBy?: boolean | ProblemCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
  }



  /**
   * Count Type CreatorCountOutputType
   */

  export type CreatorCountOutputType = {
    likes: number
    problems: number
  }

  export type CreatorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | CreatorCountOutputTypeCountLikesArgs
    problems?: boolean | CreatorCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes

  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreatorCountOutputType
     */
    select?: CreatorCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }


  /**
   * CreatorCountOutputType without action
   */
  export type CreatorCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    grades: number[]
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    age: number | null
    balance: number | null
    amount: number | null
    role: $Enums.Role | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    age: number | null
    balance: number | null
    amount: number | null
    role: $Enums.Role | null
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

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
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
    role: $Enums.Role
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
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
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

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    editorPosts?: boolean | User$editorPostsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      /**
       * @TypeGraphQL.field(name: "clientPosts")
       */
      posts: Prisma.$postPayload<ExtArgs>[]
      /**
       * @TypeGraphQL.omit(output: true)
       */
      editorPosts: Prisma.$postPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
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
      role: $Enums.Role
      grades: number[]
      aliases: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'> | Null>;

    editorPosts<T extends User$editorPostsArgs<ExtArgs> = {}>(args?: Subset<T, User$editorPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly age: FieldRef<"User", 'Int'>
    readonly balance: FieldRef<"User", 'Float'>
    readonly amount: FieldRef<"User", 'Float'>
    readonly role: FieldRef<"User", 'Role'>
    readonly grades: FieldRef<"User", 'Int[]'>
    readonly aliases: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationAndSearchRelevanceInput | UserOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User.editorPosts
   */
  export type User$editorPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post
     */
    select?: postSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postInclude<ExtArgs> | null
    where?: postWhereInput
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    kind: $Enums.PostKind | null
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
    kind: $Enums.PostKind | null
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

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post to aggregate.
     */
    where?: postWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
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




  export type postGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postWhereInput
    orderBy?: postOrderByWithAggregationInput | postOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
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
    kind: $Enums.PostKind | null
    metadata: JsonValue
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends postGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type postSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    author?: boolean | UserDefaultArgs<ExtArgs>
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

  export type postInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    editor?: boolean | post$editorArgs<ExtArgs>
  }


  export type $postPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      /**
       * @TypeGraphQL.omit(output: true)
       */
      editor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
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
      kind: $Enums.PostKind | null
      metadata: Prisma.JsonValue
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type postGetPayload<S extends boolean | null | undefined | postDefaultArgs> = $Result.GetResult<Prisma.$postPayload, S>

  type postCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface postDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends postFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postFindUniqueArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends postFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postFindFirstArgs<ExtArgs>>
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__postClient<$Result.GetResult<Prisma.$postPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
     * @param {postGroupByArgs} args - Group by arguments.
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
      T extends postGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postGroupByArgs['orderBy'] }
        : { orderBy?: postGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, postGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post model
   */
  readonly fields: postFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    editor<T extends post$editorArgs<ExtArgs> = {}>(args?: Subset<T, post$editorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the post model
   */ 
  interface postFieldRefs {
    readonly uuid: FieldRef<"post", 'String'>
    readonly createdAt: FieldRef<"post", 'DateTime'>
    readonly updatedAt: FieldRef<"post", 'DateTime'>
    readonly published: FieldRef<"post", 'Boolean'>
    readonly title: FieldRef<"post", 'String'>
    readonly subtitle: FieldRef<"post", 'String'>
    readonly content: FieldRef<"post", 'String'>
    readonly authorId: FieldRef<"post", 'Int'>
    readonly editorId: FieldRef<"post", 'Int'>
    readonly kind: FieldRef<"post", 'PostKind'>
    readonly metadata: FieldRef<"post", 'Json'>
  }
    

  // Custom InputTypes

  /**
   * post findUnique
   */
  export type postFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * post findUniqueOrThrow
   */
  export type postFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * post findFirst
   */
  export type postFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post findFirstOrThrow
   */
  export type postFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post findMany
   */
  export type postFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: postOrderByWithRelationAndSearchRelevanceInput | postOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * post create
   */
  export type postCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postCreateManyInput | postCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * post update
   */
  export type postUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postWhereInput
  }


  /**
   * post.editor
   */
  export type post$editorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type postDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
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




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
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
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    name?: boolean
    slug?: boolean
    number?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    name?: boolean
    slug?: boolean
    number?: boolean
  }


  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      name: string
      slug: string
      number: number
    }, ExtArgs["result"]["category"]>
    composites: {}
  }


  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends CategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends CategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly number: FieldRef<"Category", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CategoryOrderByWithRelationAndSearchRelevanceInput | CategoryOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput | PatientOrderByWithRelationAndSearchRelevanceInput[]
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




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
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
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    firstName?: boolean
    lastName?: boolean
    email?: boolean
  }


  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      firstName: string
      lastName: string
      email: string
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }


  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PatientFindManyArgs, 'select' | 'include'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends PatientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends PatientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly firstName: FieldRef<"Patient", 'String'>
    readonly lastName: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput | PatientOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput | PatientOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: PatientOrderByWithRelationAndSearchRelevanceInput | PatientOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }


  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput | MovieOrderByWithRelationAndSearchRelevanceInput[]
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




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
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
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    directorFirstName?: boolean
    directorLastName?: boolean
    title?: boolean
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    directorFirstName?: boolean
    directorLastName?: boolean
    title?: boolean
  }

  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    director?: boolean | DirectorDefaultArgs<ExtArgs>
  }


  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      director: Prisma.$DirectorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      directorFirstName: string
      directorLastName: string
      title: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }


  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieFindManyArgs, 'select' | 'include'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends MovieFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends MovieFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    director<T extends DirectorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DirectorDefaultArgs<ExtArgs>>): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movie model
   */ 
  interface MovieFieldRefs {
    readonly directorFirstName: FieldRef<"Movie", 'String'>
    readonly directorLastName: FieldRef<"Movie", 'String'>
    readonly title: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput | MovieOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput | MovieOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput | MovieOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
  }


  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type DirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Director to aggregate.
     */
    where?: DirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directors to fetch.
     */
    orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput | DirectorOrderByWithRelationAndSearchRelevanceInput[]
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




  export type DirectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectorWhereInput
    orderBy?: DirectorOrderByWithAggregationInput | DirectorOrderByWithAggregationInput[]
    by: DirectorScalarFieldEnum[] | DirectorScalarFieldEnum
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
      PickEnumerable<DirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectorGroupByOutputType[P]>
            : GetScalarType<T[P], DirectorGroupByOutputType[P]>
        }
      >
    >


  export type DirectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    firstName?: boolean
    lastName?: boolean
    movies?: boolean | Director$moviesArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["director"]>

  export type DirectorSelectScalar = {
    firstName?: boolean
    lastName?: boolean
  }

  export type DirectorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Director$moviesArgs<ExtArgs>
    _count?: boolean | DirectorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $DirectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Director"
    objects: {
      movies: Prisma.$MoviePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      firstName: string
      lastName: string
    }, ExtArgs["result"]["director"]>
    composites: {}
  }


  type DirectorGetPayload<S extends boolean | null | undefined | DirectorDefaultArgs> = $Result.GetResult<Prisma.$DirectorPayload, S>

  type DirectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DirectorFindManyArgs, 'select' | 'include'> & {
      select?: DirectorCountAggregateInputType | true
    }

  export interface DirectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends DirectorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DirectorFindUniqueArgs<ExtArgs>>
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends DirectorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DirectorFindFirstArgs<ExtArgs>>
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Director that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__DirectorClient<$Result.GetResult<Prisma.$DirectorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Director model
   */
  readonly fields: DirectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Director$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Director$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Director model
   */ 
  interface DirectorFieldRefs {
    readonly firstName: FieldRef<"Director", 'String'>
    readonly lastName: FieldRef<"Director", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Director findUnique
   */
  export type DirectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Director findUniqueOrThrow
   */
  export type DirectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Director findFirst
   */
  export type DirectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput | DirectorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }


  /**
   * Director findFirstOrThrow
   */
  export type DirectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput | DirectorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }


  /**
   * Director findMany
   */
  export type DirectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: DirectorOrderByWithRelationAndSearchRelevanceInput | DirectorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: DirectorScalarFieldEnum | DirectorScalarFieldEnum[]
  }


  /**
   * Director create
   */
  export type DirectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type DirectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directors.
     */
    data: DirectorCreateManyInput | DirectorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type DirectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type DirectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type DirectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type DirectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directors to delete
     */
    where?: DirectorWhereInput
  }


  /**
   * Director.movies
   */
  export type Director$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieInclude<ExtArgs> | null
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithRelationAndSearchRelevanceInput | MovieOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }


  /**
   * Director without action
   */
  export type DirectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
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




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
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
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    problemText?: boolean
    creatorId?: boolean
    likedBy?: boolean | Problem$likedByArgs<ExtArgs>
    creator?: boolean | Problem$creatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    problemText?: boolean
    creatorId?: boolean
  }

  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedBy?: boolean | Problem$likedByArgs<ExtArgs>
    creator?: boolean | Problem$creatorArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      likedBy: Prisma.$CreatorPayload<ExtArgs>[]
      creator: Prisma.$CreatorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      problemText: string
      creatorId: number | null
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }


  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProblemFindManyArgs, 'select' | 'include'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProblemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends ProblemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    likedBy<T extends Problem$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Problem$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findMany'> | Null>;

    creator<T extends Problem$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Problem$creatorArgs<ExtArgs>>): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Problem model
   */ 
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'Int'>
    readonly problemText: FieldRef<"Problem", 'String'>
    readonly creatorId: FieldRef<"Problem", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }


  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }


  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }


  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
  }


  /**
   * Problem.likedBy
   */
  export type Problem$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Creator
     */
    select?: CreatorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CreatorInclude<ExtArgs> | null
    where?: CreatorWhereInput
    orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput | CreatorOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: CreatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }


  /**
   * Problem.creator
   */
  export type Problem$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type CreatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creator to aggregate.
     */
    where?: CreatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Creators to fetch.
     */
    orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput | CreatorOrderByWithRelationAndSearchRelevanceInput[]
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




  export type CreatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreatorWhereInput
    orderBy?: CreatorOrderByWithAggregationInput | CreatorOrderByWithAggregationInput[]
    by: CreatorScalarFieldEnum[] | CreatorScalarFieldEnum
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
      PickEnumerable<CreatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreatorGroupByOutputType[P]>
            : GetScalarType<T[P], CreatorGroupByOutputType[P]>
        }
      >
    >


  export type CreatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    likes?: boolean | Creator$likesArgs<ExtArgs>
    problems?: boolean | Creator$problemsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["creator"]>

  export type CreatorSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CreatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | Creator$likesArgs<ExtArgs>
    problems?: boolean | Creator$problemsArgs<ExtArgs>
    _count?: boolean | CreatorCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CreatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Creator"
    objects: {
      likes: Prisma.$ProblemPayload<ExtArgs>[]
      problems: Prisma.$ProblemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["creator"]>
    composites: {}
  }


  type CreatorGetPayload<S extends boolean | null | undefined | CreatorDefaultArgs> = $Result.GetResult<Prisma.$CreatorPayload, S>

  type CreatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreatorFindManyArgs, 'select' | 'include'> & {
      select?: CreatorCountAggregateInputType | true
    }

  export interface CreatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends CreatorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CreatorFindUniqueArgs<ExtArgs>>
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends CreatorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CreatorFindFirstArgs<ExtArgs>>
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Creator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__CreatorClient<$Result.GetResult<Prisma.$CreatorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Creator model
   */
  readonly fields: CreatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    likes<T extends Creator$likesArgs<ExtArgs> = {}>(args?: Subset<T, Creator$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findMany'> | Null>;

    problems<T extends Creator$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Creator$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Creator model
   */ 
  interface CreatorFieldRefs {
    readonly id: FieldRef<"Creator", 'Int'>
    readonly name: FieldRef<"Creator", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Creator findUnique
   */
  export type CreatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Creator findUniqueOrThrow
   */
  export type CreatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Creator findFirst
   */
  export type CreatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput | CreatorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }


  /**
   * Creator findFirstOrThrow
   */
  export type CreatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput | CreatorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }


  /**
   * Creator findMany
   */
  export type CreatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: CreatorOrderByWithRelationAndSearchRelevanceInput | CreatorOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: CreatorScalarFieldEnum | CreatorScalarFieldEnum[]
  }


  /**
   * Creator create
   */
  export type CreatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CreatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Creators.
     */
    data: CreatorCreateManyInput | CreatorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Creator update
   */
  export type CreatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CreatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CreatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CreatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type CreatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Creators to delete
     */
    where?: CreatorWhereInput
  }


  /**
   * Creator.likes
   */
  export type Creator$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }


  /**
   * Creator.problems
   */
  export type Creator$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationAndSearchRelevanceInput | ProblemOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }


  /**
   * Creator without action
   */
  export type CreatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type NativeTypeModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NativeTypeModel to aggregate.
     */
    where?: NativeTypeModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NativeTypeModels to fetch.
     */
    orderBy?: NativeTypeModelOrderByWithRelationAndSearchRelevanceInput | NativeTypeModelOrderByWithRelationAndSearchRelevanceInput[]
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




  export type NativeTypeModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NativeTypeModelWhereInput
    orderBy?: NativeTypeModelOrderByWithAggregationInput | NativeTypeModelOrderByWithAggregationInput[]
    by: NativeTypeModelScalarFieldEnum[] | NativeTypeModelScalarFieldEnum
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
      PickEnumerable<NativeTypeModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NativeTypeModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NativeTypeModelGroupByOutputType[P]>
            : GetScalarType<T[P], NativeTypeModelGroupByOutputType[P]>
        }
      >
    >


  export type NativeTypeModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  export type $NativeTypeModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NativeTypeModel"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bigInt: bigint | null
      byteA: Buffer | null
      decimal: Prisma.Decimal | null
    }, ExtArgs["result"]["nativeTypeModel"]>
    composites: {}
  }


  type NativeTypeModelGetPayload<S extends boolean | null | undefined | NativeTypeModelDefaultArgs> = $Result.GetResult<Prisma.$NativeTypeModelPayload, S>

  type NativeTypeModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NativeTypeModelFindManyArgs, 'select' | 'include'> & {
      select?: NativeTypeModelCountAggregateInputType | true
    }

  export interface NativeTypeModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends NativeTypeModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, NativeTypeModelFindUniqueArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends NativeTypeModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, NativeTypeModelFindFirstArgs<ExtArgs>>
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first NativeTypeModel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__NativeTypeModelClient<$Result.GetResult<Prisma.$NativeTypeModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the NativeTypeModel model
   */
  readonly fields: NativeTypeModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NativeTypeModel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NativeTypeModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the NativeTypeModel model
   */ 
  interface NativeTypeModelFieldRefs {
    readonly id: FieldRef<"NativeTypeModel", 'Int'>
    readonly bigInt: FieldRef<"NativeTypeModel", 'BigInt'>
    readonly byteA: FieldRef<"NativeTypeModel", 'Bytes'>
    readonly decimal: FieldRef<"NativeTypeModel", 'Decimal'>
  }
    

  // Custom InputTypes

  /**
   * NativeTypeModel findUnique
   */
  export type NativeTypeModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NativeTypeModel findUniqueOrThrow
   */
  export type NativeTypeModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * NativeTypeModel findFirst
   */
  export type NativeTypeModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: NativeTypeModelOrderByWithRelationAndSearchRelevanceInput | NativeTypeModelOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: NativeTypeModelScalarFieldEnum | NativeTypeModelScalarFieldEnum[]
  }


  /**
   * NativeTypeModel findFirstOrThrow
   */
  export type NativeTypeModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: NativeTypeModelOrderByWithRelationAndSearchRelevanceInput | NativeTypeModelOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: NativeTypeModelScalarFieldEnum | NativeTypeModelScalarFieldEnum[]
  }


  /**
   * NativeTypeModel findMany
   */
  export type NativeTypeModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: NativeTypeModelOrderByWithRelationAndSearchRelevanceInput | NativeTypeModelOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: NativeTypeModelScalarFieldEnum | NativeTypeModelScalarFieldEnum[]
  }


  /**
   * NativeTypeModel create
   */
  export type NativeTypeModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NativeTypeModel
     */
    select?: NativeTypeModelSelect<ExtArgs> | null
    /**
     * The data needed to create a NativeTypeModel.
     */
    data?: XOR<NativeTypeModelCreateInput, NativeTypeModelUncheckedCreateInput>
  }


  /**
   * NativeTypeModel createMany
   */
  export type NativeTypeModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NativeTypeModels.
     */
    data: NativeTypeModelCreateManyInput | NativeTypeModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * NativeTypeModel update
   */
  export type NativeTypeModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type NativeTypeModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type NativeTypeModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type NativeTypeModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type NativeTypeModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NativeTypeModels to delete
     */
    where?: NativeTypeModelWhereInput
  }


  /**
   * NativeTypeModel without action
   */
  export type NativeTypeModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type EquipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to aggregate.
     */
    where?: EquipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipment to fetch.
     */
    orderBy?: EquipmentOrderByWithRelationAndSearchRelevanceInput | EquipmentOrderByWithRelationAndSearchRelevanceInput[]
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




  export type EquipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipmentWhereInput
    orderBy?: EquipmentOrderByWithAggregationInput | EquipmentOrderByWithAggregationInput[]
    by: EquipmentScalarFieldEnum[] | EquipmentScalarFieldEnum
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
      PickEnumerable<EquipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
            : GetScalarType<T[P], EquipmentGroupByOutputType[P]>
        }
      >
    >


  export type EquipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["equipment"]>

  export type EquipmentSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $EquipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["equipment"]>
    composites: {}
  }


  type EquipmentGetPayload<S extends boolean | null | undefined | EquipmentDefaultArgs> = $Result.GetResult<Prisma.$EquipmentPayload, S>

  type EquipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EquipmentFindManyArgs, 'select' | 'include'> & {
      select?: EquipmentCountAggregateInputType | true
    }

  export interface EquipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends EquipmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EquipmentFindUniqueArgs<ExtArgs>>
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends EquipmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EquipmentFindFirstArgs<ExtArgs>>
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Equipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__EquipmentClient<$Result.GetResult<Prisma.$EquipmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Equipment model
   */
  readonly fields: EquipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Equipment model
   */ 
  interface EquipmentFieldRefs {
    readonly id: FieldRef<"Equipment", 'String'>
    readonly name: FieldRef<"Equipment", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Equipment findUnique
   */
  export type EquipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Equipment findUniqueOrThrow
   */
  export type EquipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Equipment findFirst
   */
  export type EquipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: EquipmentOrderByWithRelationAndSearchRelevanceInput | EquipmentOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * Equipment findFirstOrThrow
   */
  export type EquipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: EquipmentOrderByWithRelationAndSearchRelevanceInput | EquipmentOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * Equipment findMany
   */
  export type EquipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: EquipmentOrderByWithRelationAndSearchRelevanceInput | EquipmentOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: EquipmentScalarFieldEnum | EquipmentScalarFieldEnum[]
  }


  /**
   * Equipment create
   */
  export type EquipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipment
     */
    select?: EquipmentSelect<ExtArgs> | null
    /**
     * The data needed to create a Equipment.
     */
    data?: XOR<EquipmentCreateInput, EquipmentUncheckedCreateInput>
  }


  /**
   * Equipment createMany
   */
  export type EquipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipment.
     */
    data: EquipmentCreateManyInput | EquipmentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Equipment update
   */
  export type EquipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type EquipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type EquipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type EquipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type EquipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipment to delete
     */
    where?: EquipmentWhereInput
  }


  /**
   * Equipment without action
   */
  export type EquipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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

  export type HiddenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hidden to aggregate.
     */
    where?: HiddenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hiddens to fetch.
     */
    orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput | HiddenOrderByWithRelationAndSearchRelevanceInput[]
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




  export type HiddenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HiddenWhereInput
    orderBy?: HiddenOrderByWithAggregationInput | HiddenOrderByWithAggregationInput[]
    by: HiddenScalarFieldEnum[] | HiddenScalarFieldEnum
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
      PickEnumerable<HiddenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HiddenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HiddenGroupByOutputType[P]>
            : GetScalarType<T[P], HiddenGroupByOutputType[P]>
        }
      >
    >


  export type HiddenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["hidden"]>

  export type HiddenSelectScalar = {
    id?: boolean
    name?: boolean
  }


  export type $HiddenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hidden"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
    }, ExtArgs["result"]["hidden"]>
    composites: {}
  }


  type HiddenGetPayload<S extends boolean | null | undefined | HiddenDefaultArgs> = $Result.GetResult<Prisma.$HiddenPayload, S>

  type HiddenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HiddenFindManyArgs, 'select' | 'include'> & {
      select?: HiddenCountAggregateInputType | true
    }

  export interface HiddenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends HiddenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HiddenFindUniqueArgs<ExtArgs>>
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    findFirst<T extends HiddenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HiddenFindFirstArgs<ExtArgs>>
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Hidden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'findMany'>>

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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    ): Prisma__HiddenClient<$Result.GetResult<Prisma.$HiddenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the Hidden model
   */
  readonly fields: HiddenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hidden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HiddenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Hidden model
   */ 
  interface HiddenFieldRefs {
    readonly id: FieldRef<"Hidden", 'String'>
    readonly name: FieldRef<"Hidden", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Hidden findUnique
   */
  export type HiddenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hidden findUniqueOrThrow
   */
  export type HiddenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Hidden findFirst
   */
  export type HiddenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput | HiddenOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: HiddenScalarFieldEnum | HiddenScalarFieldEnum[]
  }


  /**
   * Hidden findFirstOrThrow
   */
  export type HiddenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput | HiddenOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: HiddenScalarFieldEnum | HiddenScalarFieldEnum[]
  }


  /**
   * Hidden findMany
   */
  export type HiddenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: HiddenOrderByWithRelationAndSearchRelevanceInput | HiddenOrderByWithRelationAndSearchRelevanceInput[]
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
    distinct?: HiddenScalarFieldEnum | HiddenScalarFieldEnum[]
  }


  /**
   * Hidden create
   */
  export type HiddenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
    /**
     * The data needed to create a Hidden.
     */
    data?: XOR<HiddenCreateInput, HiddenUncheckedCreateInput>
  }


  /**
   * Hidden createMany
   */
  export type HiddenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hiddens.
     */
    data: HiddenCreateManyInput | HiddenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Hidden update
   */
  export type HiddenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type HiddenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type HiddenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type HiddenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  export type HiddenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hiddens to delete
     */
    where?: HiddenWhereInput
  }


  /**
   * Hidden without action
   */
  export type HiddenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hidden
     */
    select?: HiddenSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


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


  export const EquipmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EquipmentScalarFieldEnum = (typeof EquipmentScalarFieldEnum)[keyof typeof EquipmentScalarFieldEnum]


  export const HiddenScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HiddenScalarFieldEnum = (typeof HiddenScalarFieldEnum)[keyof typeof HiddenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    email: 'email',
    name: 'name',
    aliases: 'aliases'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const postOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    title: 'title',
    subtitle: 'subtitle',
    content: 'content'
  };

  export type postOrderByRelevanceFieldEnum = (typeof postOrderByRelevanceFieldEnum)[keyof typeof postOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    slug: 'slug'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const PatientOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const MovieOrderByRelevanceFieldEnum: {
    directorFirstName: 'directorFirstName',
    directorLastName: 'directorLastName',
    title: 'title'
  };

  export type MovieOrderByRelevanceFieldEnum = (typeof MovieOrderByRelevanceFieldEnum)[keyof typeof MovieOrderByRelevanceFieldEnum]


  export const DirectorOrderByRelevanceFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type DirectorOrderByRelevanceFieldEnum = (typeof DirectorOrderByRelevanceFieldEnum)[keyof typeof DirectorOrderByRelevanceFieldEnum]


  export const ProblemOrderByRelevanceFieldEnum: {
    problemText: 'problemText'
  };

  export type ProblemOrderByRelevanceFieldEnum = (typeof ProblemOrderByRelevanceFieldEnum)[keyof typeof ProblemOrderByRelevanceFieldEnum]


  export const CreatorOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type CreatorOrderByRelevanceFieldEnum = (typeof CreatorOrderByRelevanceFieldEnum)[keyof typeof CreatorOrderByRelevanceFieldEnum]


  export const EquipmentOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type EquipmentOrderByRelevanceFieldEnum = (typeof EquipmentOrderByRelevanceFieldEnum)[keyof typeof EquipmentOrderByRelevanceFieldEnum]


  export const HiddenOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type HiddenOrderByRelevanceFieldEnum = (typeof HiddenOrderByRelevanceFieldEnum)[keyof typeof HiddenOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PostKind'
   */
  export type EnumPostKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostKind'>
    


  /**
   * Reference to a field of type 'PostKind[]'
   */
  export type ListEnumPostKindFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PostKind[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    age?: IntFilter<"User"> | number
    balance?: FloatFilter<"User"> | number
    amount?: FloatFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    grades?: IntNullableListFilter<"User">
    aliases?: StringNullableListFilter<"User">
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
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    age?: IntFilter<"User"> | number
    balance?: FloatFilter<"User"> | number
    amount?: FloatFilter<"User"> | number
    role?: EnumRoleFilter<"User"> | $Enums.Role
    grades?: IntNullableListFilter<"User">
    aliases?: StringNullableListFilter<"User">
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
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    age?: IntWithAggregatesFilter<"User"> | number
    balance?: FloatWithAggregatesFilter<"User"> | number
    amount?: FloatWithAggregatesFilter<"User"> | number
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    grades?: IntNullableListFilter<"User">
    aliases?: StringNullableListFilter<"User">
  }

  export type postWhereInput = {
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    uuid?: StringFilter<"post"> | string
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    published?: BoolFilter<"post"> | boolean
    title?: StringFilter<"post"> | string
    subtitle?: StringFilter<"post"> | string
    content?: StringNullableFilter<"post"> | string | null
    authorId?: IntFilter<"post"> | number
    editorId?: IntNullableFilter<"post"> | number | null
    kind?: EnumPostKindNullableFilter<"post"> | $Enums.PostKind | null
    metadata?: JsonFilter<"post">
    author?: XOR<UserRelationFilter, UserWhereInput>
    editor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
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
    AND?: postWhereInput | postWhereInput[]
    OR?: postWhereInput[]
    NOT?: postWhereInput | postWhereInput[]
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    published?: BoolFilter<"post"> | boolean
    title?: StringFilter<"post"> | string
    subtitle?: StringFilter<"post"> | string
    content?: StringNullableFilter<"post"> | string | null
    authorId?: IntFilter<"post"> | number
    editorId?: IntNullableFilter<"post"> | number | null
    kind?: EnumPostKindNullableFilter<"post"> | $Enums.PostKind | null
    metadata?: JsonFilter<"post">
    author?: XOR<UserRelationFilter, UserWhereInput>
    editor?: XOR<UserNullableRelationFilter, UserWhereInput> | null
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
    AND?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    OR?: postScalarWhereWithAggregatesInput[]
    NOT?: postScalarWhereWithAggregatesInput | postScalarWhereWithAggregatesInput[]
    uuid?: StringWithAggregatesFilter<"post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"post"> | Date | string
    published?: BoolWithAggregatesFilter<"post"> | boolean
    title?: StringWithAggregatesFilter<"post"> | string
    subtitle?: StringWithAggregatesFilter<"post"> | string
    content?: StringNullableWithAggregatesFilter<"post"> | string | null
    authorId?: IntWithAggregatesFilter<"post"> | number
    editorId?: IntNullableWithAggregatesFilter<"post"> | number | null
    kind?: EnumPostKindNullableWithAggregatesFilter<"post"> | $Enums.PostKind | null
    metadata?: JsonWithAggregatesFilter<"post">
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    number?: IntFilter<"Category"> | number
  }

  export type CategoryOrderByWithRelationAndSearchRelevanceInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    categoryCompoundUnique?: CategoryCategoryCompoundUniqueCompoundUniqueInput
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    number?: IntFilter<"Category"> | number
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
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    number?: IntWithAggregatesFilter<"Category"> | number
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
  }

  export type PatientOrderByWithRelationAndSearchRelevanceInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    firstName_lastName?: PatientFirstNameLastNameCompoundUniqueInput
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    firstName?: StringFilter<"Patient"> | string
    lastName?: StringFilter<"Patient"> | string
    email?: StringFilter<"Patient"> | string
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
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    firstName?: StringWithAggregatesFilter<"Patient"> | string
    lastName?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringWithAggregatesFilter<"Patient"> | string
  }

  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    directorFirstName?: StringFilter<"Movie"> | string
    directorLastName?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
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
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    directorFirstName?: StringFilter<"Movie"> | string
    directorLastName?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
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
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    directorFirstName?: StringWithAggregatesFilter<"Movie"> | string
    directorLastName?: StringWithAggregatesFilter<"Movie"> | string
    title?: StringWithAggregatesFilter<"Movie"> | string
  }

  export type DirectorWhereInput = {
    AND?: DirectorWhereInput | DirectorWhereInput[]
    OR?: DirectorWhereInput[]
    NOT?: DirectorWhereInput | DirectorWhereInput[]
    firstName?: StringFilter<"Director"> | string
    lastName?: StringFilter<"Director"> | string
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
    AND?: DirectorWhereInput | DirectorWhereInput[]
    OR?: DirectorWhereInput[]
    NOT?: DirectorWhereInput | DirectorWhereInput[]
    firstName?: StringFilter<"Director"> | string
    lastName?: StringFilter<"Director"> | string
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
    AND?: DirectorScalarWhereWithAggregatesInput | DirectorScalarWhereWithAggregatesInput[]
    OR?: DirectorScalarWhereWithAggregatesInput[]
    NOT?: DirectorScalarWhereWithAggregatesInput | DirectorScalarWhereWithAggregatesInput[]
    firstName?: StringWithAggregatesFilter<"Director"> | string
    lastName?: StringWithAggregatesFilter<"Director"> | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: IntFilter<"Problem"> | number
    problemText?: StringFilter<"Problem"> | string
    creatorId?: IntNullableFilter<"Problem"> | number | null
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorNullableRelationFilter, CreatorWhereInput> | null
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
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    problemText?: StringFilter<"Problem"> | string
    creatorId?: IntNullableFilter<"Problem"> | number | null
    likedBy?: CreatorListRelationFilter
    creator?: XOR<CreatorNullableRelationFilter, CreatorWhereInput> | null
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
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Problem"> | number
    problemText?: StringWithAggregatesFilter<"Problem"> | string
    creatorId?: IntNullableWithAggregatesFilter<"Problem"> | number | null
  }

  export type CreatorWhereInput = {
    AND?: CreatorWhereInput | CreatorWhereInput[]
    OR?: CreatorWhereInput[]
    NOT?: CreatorWhereInput | CreatorWhereInput[]
    id?: IntFilter<"Creator"> | number
    name?: StringFilter<"Creator"> | string
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
    AND?: CreatorWhereInput | CreatorWhereInput[]
    OR?: CreatorWhereInput[]
    NOT?: CreatorWhereInput | CreatorWhereInput[]
    name?: StringFilter<"Creator"> | string
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
    AND?: CreatorScalarWhereWithAggregatesInput | CreatorScalarWhereWithAggregatesInput[]
    OR?: CreatorScalarWhereWithAggregatesInput[]
    NOT?: CreatorScalarWhereWithAggregatesInput | CreatorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Creator"> | number
    name?: StringWithAggregatesFilter<"Creator"> | string
  }

  export type NativeTypeModelWhereInput = {
    AND?: NativeTypeModelWhereInput | NativeTypeModelWhereInput[]
    OR?: NativeTypeModelWhereInput[]
    NOT?: NativeTypeModelWhereInput | NativeTypeModelWhereInput[]
    id?: IntFilter<"NativeTypeModel"> | number
    bigInt?: BigIntNullableFilter<"NativeTypeModel"> | bigint | number | null
    byteA?: BytesNullableFilter<"NativeTypeModel"> | Buffer | null
    decimal?: DecimalNullableFilter<"NativeTypeModel"> | Decimal | DecimalJsLike | number | string | null
  }

  export type NativeTypeModelOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    bigInt?: SortOrderInput | SortOrder
    byteA?: SortOrderInput | SortOrder
    decimal?: SortOrderInput | SortOrder
  }

  export type NativeTypeModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NativeTypeModelWhereInput | NativeTypeModelWhereInput[]
    OR?: NativeTypeModelWhereInput[]
    NOT?: NativeTypeModelWhereInput | NativeTypeModelWhereInput[]
    bigInt?: BigIntNullableFilter<"NativeTypeModel"> | bigint | number | null
    byteA?: BytesNullableFilter<"NativeTypeModel"> | Buffer | null
    decimal?: DecimalNullableFilter<"NativeTypeModel"> | Decimal | DecimalJsLike | number | string | null
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
    AND?: NativeTypeModelScalarWhereWithAggregatesInput | NativeTypeModelScalarWhereWithAggregatesInput[]
    OR?: NativeTypeModelScalarWhereWithAggregatesInput[]
    NOT?: NativeTypeModelScalarWhereWithAggregatesInput | NativeTypeModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NativeTypeModel"> | number
    bigInt?: BigIntNullableWithAggregatesFilter<"NativeTypeModel"> | bigint | number | null
    byteA?: BytesNullableWithAggregatesFilter<"NativeTypeModel"> | Buffer | null
    decimal?: DecimalNullableWithAggregatesFilter<"NativeTypeModel"> | Decimal | DecimalJsLike | number | string | null
  }

  export type EquipmentWhereInput = {
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    id?: StringFilter<"Equipment"> | string
    name?: StringNullableFilter<"Equipment"> | string | null
  }

  export type EquipmentOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: EquipmentOrderByRelevanceInput
  }

  export type EquipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EquipmentWhereInput | EquipmentWhereInput[]
    OR?: EquipmentWhereInput[]
    NOT?: EquipmentWhereInput | EquipmentWhereInput[]
    name?: StringNullableFilter<"Equipment"> | string | null
  }, "id">

  export type EquipmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: EquipmentCountOrderByAggregateInput
    _max?: EquipmentMaxOrderByAggregateInput
    _min?: EquipmentMinOrderByAggregateInput
  }

  export type EquipmentScalarWhereWithAggregatesInput = {
    AND?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    OR?: EquipmentScalarWhereWithAggregatesInput[]
    NOT?: EquipmentScalarWhereWithAggregatesInput | EquipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Equipment"> | string
    name?: StringNullableWithAggregatesFilter<"Equipment"> | string | null
  }

  export type HiddenWhereInput = {
    AND?: HiddenWhereInput | HiddenWhereInput[]
    OR?: HiddenWhereInput[]
    NOT?: HiddenWhereInput | HiddenWhereInput[]
    id?: StringFilter<"Hidden"> | string
    name?: StringNullableFilter<"Hidden"> | string | null
  }

  export type HiddenOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _relevance?: HiddenOrderByRelevanceInput
  }

  export type HiddenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HiddenWhereInput | HiddenWhereInput[]
    OR?: HiddenWhereInput[]
    NOT?: HiddenWhereInput | HiddenWhereInput[]
    name?: StringNullableFilter<"Hidden"> | string | null
  }, "id">

  export type HiddenOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: HiddenCountOrderByAggregateInput
    _max?: HiddenMaxOrderByAggregateInput
    _min?: HiddenMinOrderByAggregateInput
  }

  export type HiddenScalarWhereWithAggregatesInput = {
    AND?: HiddenScalarWhereWithAggregatesInput | HiddenScalarWhereWithAggregatesInput[]
    OR?: HiddenScalarWhereWithAggregatesInput[]
    NOT?: HiddenScalarWhereWithAggregatesInput | HiddenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hidden"> | string
    name?: StringNullableWithAggregatesFilter<"Hidden"> | string | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
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
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
    posts?: postUncheckedCreateNestedManyWithoutAuthorInput
    editorPosts?: postUncheckedCreateNestedManyWithoutEditorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
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
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
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
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
  }

  export type postCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    kind?: $Enums.PostKind | null
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
    kind?: $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
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

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPostKindNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PostKind | EnumPostKindFieldRefInput<$PrismaModel> | null
    in?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPostKindNullableFilter<$PrismaModel> | $Enums.PostKind | null
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type postOrderByRelevanceInput = {
    fields: postOrderByRelevanceFieldEnum | postOrderByRelevanceFieldEnum[]
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPostKindNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostKind | EnumPostKindFieldRefInput<$PrismaModel> | null
    in?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPostKindNullableWithAggregatesFilter<$PrismaModel> | $Enums.PostKind | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPostKindNullableFilter<$PrismaModel>
    _max?: NestedEnumPostKindNullableFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
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
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
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
    fields: MovieOrderByRelevanceFieldEnum | MovieOrderByRelevanceFieldEnum[]
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
    fields: DirectorOrderByRelevanceFieldEnum | DirectorOrderByRelevanceFieldEnum[]
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

  export type CreatorNullableRelationFilter = {
    is?: CreatorWhereInput | null
    isNot?: CreatorWhereInput | null
  }

  export type CreatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemOrderByRelevanceInput = {
    fields: ProblemOrderByRelevanceFieldEnum | ProblemOrderByRelevanceFieldEnum[]
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
    fields: CreatorOrderByRelevanceFieldEnum | CreatorOrderByRelevanceFieldEnum[]
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EquipmentOrderByRelevanceInput = {
    fields: EquipmentOrderByRelevanceFieldEnum | EquipmentOrderByRelevanceFieldEnum[]
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
    fields: HiddenOrderByRelevanceFieldEnum | HiddenOrderByRelevanceFieldEnum[]
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
    set: number[]
  }

  export type UserCreatealiasesInput = {
    set: string[]
  }

  export type postCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput> | postCreateWithoutAuthorInput[] | postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postCreateOrConnectWithoutAuthorInput | postCreateOrConnectWithoutAuthorInput[]
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type postCreateNestedManyWithoutEditorInput = {
    create?: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput> | postCreateWithoutEditorInput[] | postUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: postCreateOrConnectWithoutEditorInput | postCreateOrConnectWithoutEditorInput[]
    createMany?: postCreateManyEditorInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput> | postCreateWithoutAuthorInput[] | postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postCreateOrConnectWithoutAuthorInput | postCreateOrConnectWithoutAuthorInput[]
    createMany?: postCreateManyAuthorInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
  }

  export type postUncheckedCreateNestedManyWithoutEditorInput = {
    create?: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput> | postCreateWithoutEditorInput[] | postUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: postCreateOrConnectWithoutEditorInput | postCreateOrConnectWithoutEditorInput[]
    createMany?: postCreateManyEditorInputEnvelope
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
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
    set?: $Enums.Role
  }

  export type UserUpdategradesInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdatealiasesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type postUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput> | postCreateWithoutAuthorInput[] | postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postCreateOrConnectWithoutAuthorInput | postCreateOrConnectWithoutAuthorInput[]
    upsert?: postUpsertWithWhereUniqueWithoutAuthorInput | postUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postCreateManyAuthorInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutAuthorInput | postUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postUpdateManyWithWhereWithoutAuthorInput | postUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type postUpdateManyWithoutEditorNestedInput = {
    create?: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput> | postCreateWithoutEditorInput[] | postUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: postCreateOrConnectWithoutEditorInput | postCreateOrConnectWithoutEditorInput[]
    upsert?: postUpsertWithWhereUniqueWithoutEditorInput | postUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: postCreateManyEditorInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutEditorInput | postUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: postUpdateManyWithWhereWithoutEditorInput | postUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput> | postCreateWithoutAuthorInput[] | postUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postCreateOrConnectWithoutAuthorInput | postCreateOrConnectWithoutAuthorInput[]
    upsert?: postUpsertWithWhereUniqueWithoutAuthorInput | postUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postCreateManyAuthorInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutAuthorInput | postUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postUpdateManyWithWhereWithoutAuthorInput | postUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
  }

  export type postUncheckedUpdateManyWithoutEditorNestedInput = {
    create?: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput> | postCreateWithoutEditorInput[] | postUncheckedCreateWithoutEditorInput[]
    connectOrCreate?: postCreateOrConnectWithoutEditorInput | postCreateOrConnectWithoutEditorInput[]
    upsert?: postUpsertWithWhereUniqueWithoutEditorInput | postUpsertWithWhereUniqueWithoutEditorInput[]
    createMany?: postCreateManyEditorInputEnvelope
    set?: postWhereUniqueInput | postWhereUniqueInput[]
    disconnect?: postWhereUniqueInput | postWhereUniqueInput[]
    delete?: postWhereUniqueInput | postWhereUniqueInput[]
    connect?: postWhereUniqueInput | postWhereUniqueInput[]
    update?: postUpdateWithWhereUniqueWithoutEditorInput | postUpdateWithWhereUniqueWithoutEditorInput[]
    updateMany?: postUpdateManyWithWhereWithoutEditorInput | postUpdateManyWithWhereWithoutEditorInput[]
    deleteMany?: postScalarWhereInput | postScalarWhereInput[]
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
    set?: $Enums.PostKind | null
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
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUncheckedCreateNestedManyWithoutDirectorInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
  }

  export type MovieUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput | MovieUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutDirectorInput | MovieUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutDirectorInput | MovieUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type MovieUncheckedUpdateManyWithoutDirectorNestedInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, MovieUncheckedCreateWithoutDirectorInput> | MovieCreateWithoutDirectorInput[] | MovieUncheckedCreateWithoutDirectorInput[]
    connectOrCreate?: MovieCreateOrConnectWithoutDirectorInput | MovieCreateOrConnectWithoutDirectorInput[]
    upsert?: MovieUpsertWithWhereUniqueWithoutDirectorInput | MovieUpsertWithWhereUniqueWithoutDirectorInput[]
    createMany?: MovieCreateManyDirectorInputEnvelope
    set?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    disconnect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    delete?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    connect?: MovieWhereUniqueInput | MovieWhereUniqueInput[]
    update?: MovieUpdateWithWhereUniqueWithoutDirectorInput | MovieUpdateWithWhereUniqueWithoutDirectorInput[]
    updateMany?: MovieUpdateManyWithWhereWithoutDirectorInput | MovieUpdateManyWithWhereWithoutDirectorInput[]
    deleteMany?: MovieScalarWhereInput | MovieScalarWhereInput[]
  }

  export type CreatorCreateNestedManyWithoutLikesInput = {
    create?: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput> | CreatorCreateWithoutLikesInput[] | CreatorUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput | CreatorCreateOrConnectWithoutLikesInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
  }

  export type CreatorCreateNestedOneWithoutProblemsInput = {
    create?: XOR<CreatorCreateWithoutProblemsInput, CreatorUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: CreatorCreateOrConnectWithoutProblemsInput
    connect?: CreatorWhereUniqueInput
  }

  export type CreatorUncheckedCreateNestedManyWithoutLikesInput = {
    create?: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput> | CreatorCreateWithoutLikesInput[] | CreatorUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput | CreatorCreateOrConnectWithoutLikesInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
  }

  export type CreatorUpdateManyWithoutLikesNestedInput = {
    create?: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput> | CreatorCreateWithoutLikesInput[] | CreatorUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput | CreatorCreateOrConnectWithoutLikesInput[]
    upsert?: CreatorUpsertWithWhereUniqueWithoutLikesInput | CreatorUpsertWithWhereUniqueWithoutLikesInput[]
    set?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    disconnect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    delete?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    update?: CreatorUpdateWithWhereUniqueWithoutLikesInput | CreatorUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: CreatorUpdateManyWithWhereWithoutLikesInput | CreatorUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
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
    create?: XOR<CreatorCreateWithoutLikesInput, CreatorUncheckedCreateWithoutLikesInput> | CreatorCreateWithoutLikesInput[] | CreatorUncheckedCreateWithoutLikesInput[]
    connectOrCreate?: CreatorCreateOrConnectWithoutLikesInput | CreatorCreateOrConnectWithoutLikesInput[]
    upsert?: CreatorUpsertWithWhereUniqueWithoutLikesInput | CreatorUpsertWithWhereUniqueWithoutLikesInput[]
    set?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    disconnect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    delete?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    connect?: CreatorWhereUniqueInput | CreatorWhereUniqueInput[]
    update?: CreatorUpdateWithWhereUniqueWithoutLikesInput | CreatorUpdateWithWhereUniqueWithoutLikesInput[]
    updateMany?: CreatorUpdateManyWithWhereWithoutLikesInput | CreatorUpdateManyWithWhereWithoutLikesInput[]
    deleteMany?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
  }

  export type ProblemCreateNestedManyWithoutLikedByInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput> | ProblemCreateWithoutLikedByInput[] | ProblemUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput | ProblemCreateOrConnectWithoutLikedByInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput> | ProblemCreateWithoutCreatorInput[] | ProblemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput | ProblemCreateOrConnectWithoutCreatorInput[]
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutLikedByInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput> | ProblemCreateWithoutLikedByInput[] | ProblemUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput | ProblemCreateOrConnectWithoutLikedByInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput> | ProblemCreateWithoutCreatorInput[] | ProblemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput | ProblemCreateOrConnectWithoutCreatorInput[]
    createMany?: ProblemCreateManyCreatorInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type ProblemUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput> | ProblemCreateWithoutLikedByInput[] | ProblemUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput | ProblemCreateOrConnectWithoutLikedByInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutLikedByInput | ProblemUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutLikedByInput | ProblemUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutLikedByInput | ProblemUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput> | ProblemCreateWithoutCreatorInput[] | ProblemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput | ProblemCreateOrConnectWithoutCreatorInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput | ProblemUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProblemCreateManyCreatorInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutCreatorInput | ProblemUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutCreatorInput | ProblemUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutLikedByNestedInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, ProblemUncheckedCreateWithoutLikedByInput> | ProblemCreateWithoutLikedByInput[] | ProblemUncheckedCreateWithoutLikedByInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutLikedByInput | ProblemCreateOrConnectWithoutLikedByInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutLikedByInput | ProblemUpsertWithWhereUniqueWithoutLikedByInput[]
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutLikedByInput | ProblemUpdateWithWhereUniqueWithoutLikedByInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutLikedByInput | ProblemUpdateManyWithWhereWithoutLikedByInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, ProblemUncheckedCreateWithoutCreatorInput> | ProblemCreateWithoutCreatorInput[] | ProblemUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutCreatorInput | ProblemCreateOrConnectWithoutCreatorInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutCreatorInput | ProblemUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ProblemCreateManyCreatorInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutCreatorInput | ProblemUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutCreatorInput | ProblemUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPostKindNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PostKind | EnumPostKindFieldRefInput<$PrismaModel> | null
    in?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPostKindNullableFilter<$PrismaModel> | $Enums.PostKind | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPostKindNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PostKind | EnumPostKindFieldRefInput<$PrismaModel> | null
    in?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PostKind[] | ListEnumPostKindFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPostKindNullableWithAggregatesFilter<$PrismaModel> | $Enums.PostKind | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPostKindNullableFilter<$PrismaModel>
    _max?: NestedEnumPostKindNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type postCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    subtitle: string
    content?: string | null
    kind?: $Enums.PostKind | null
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
    kind?: $Enums.PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postCreateOrConnectWithoutAuthorInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutAuthorInput, postUncheckedCreateWithoutAuthorInput>
  }

  export type postCreateManyAuthorInputEnvelope = {
    data: postCreateManyAuthorInput | postCreateManyAuthorInput[]
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
    kind?: $Enums.PostKind | null
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
    kind?: $Enums.PostKind | null
    metadata: JsonNullValueInput | InputJsonValue
  }

  export type postCreateOrConnectWithoutEditorInput = {
    where: postWhereUniqueInput
    create: XOR<postCreateWithoutEditorInput, postUncheckedCreateWithoutEditorInput>
  }

  export type postCreateManyEditorInputEnvelope = {
    data: postCreateManyEditorInput | postCreateManyEditorInput[]
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
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutAuthorInput>
  }

  export type postScalarWhereInput = {
    AND?: postScalarWhereInput | postScalarWhereInput[]
    OR?: postScalarWhereInput[]
    NOT?: postScalarWhereInput | postScalarWhereInput[]
    uuid?: StringFilter<"post"> | string
    createdAt?: DateTimeFilter<"post"> | Date | string
    updatedAt?: DateTimeFilter<"post"> | Date | string
    published?: BoolFilter<"post"> | boolean
    title?: StringFilter<"post"> | string
    subtitle?: StringFilter<"post"> | string
    content?: StringNullableFilter<"post"> | string | null
    authorId?: IntFilter<"post"> | number
    editorId?: IntNullableFilter<"post"> | number | null
    kind?: EnumPostKindNullableFilter<"post"> | $Enums.PostKind | null
    metadata?: JsonFilter<"post">
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
    data: XOR<postUpdateManyMutationInput, postUncheckedUpdateManyWithoutEditorInput>
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
    editorPosts?: postCreateNestedManyWithoutEditorInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
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
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
    posts?: postCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutEditorPostsInput = {
    id?: number
    email: string
    name?: string | null
    age: number
    balance: number
    amount: number
    role: $Enums.Role
    grades?: UserCreategradesInput | number[]
    aliases?: UserCreatealiasesInput | string[]
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
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
    editorPosts?: postUpdateManyWithoutEditorNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
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
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
    posts?: postUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutEditorPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    age?: IntFieldUpdateOperationsInput | number
    balance?: FloatFieldUpdateOperationsInput | number
    amount?: FloatFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    grades?: UserUpdategradesInput | number[]
    aliases?: UserUpdatealiasesInput | string[]
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
    data: MovieCreateManyDirectorInput | MovieCreateManyDirectorInput[]
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
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyWithoutDirectorInput>
  }

  export type MovieScalarWhereInput = {
    AND?: MovieScalarWhereInput | MovieScalarWhereInput[]
    OR?: MovieScalarWhereInput[]
    NOT?: MovieScalarWhereInput | MovieScalarWhereInput[]
    directorFirstName?: StringFilter<"Movie"> | string
    directorLastName?: StringFilter<"Movie"> | string
    title?: StringFilter<"Movie"> | string
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
    data: XOR<CreatorUpdateManyMutationInput, CreatorUncheckedUpdateManyWithoutLikesInput>
  }

  export type CreatorScalarWhereInput = {
    AND?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
    OR?: CreatorScalarWhereInput[]
    NOT?: CreatorScalarWhereInput | CreatorScalarWhereInput[]
    id?: IntFilter<"Creator"> | number
    name?: StringFilter<"Creator"> | string
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
    data: ProblemCreateManyCreatorInput | ProblemCreateManyCreatorInput[]
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
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutLikedByInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: IntFilter<"Problem"> | number
    problemText?: StringFilter<"Problem"> | string
    creatorId?: IntNullableFilter<"Problem"> | number | null
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
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutCreatorInput>
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
    kind?: $Enums.PostKind | null
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
    kind?: $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateManyWithoutAuthorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    editorId?: NullableIntFieldUpdateOperationsInput | number | null
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
    metadata?: JsonNullValueInput | InputJsonValue
  }

  export type postUncheckedUpdateManyWithoutEditorInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: IntFieldUpdateOperationsInput | number
    kind?: NullableEnumPostKindFieldUpdateOperationsInput | $Enums.PostKind | null
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

  export type MovieUncheckedUpdateManyWithoutDirectorInput = {
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

  export type CreatorUncheckedUpdateManyWithoutLikesInput = {
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

  export type ProblemUncheckedUpdateManyWithoutLikedByInput = {
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

  export type ProblemUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    problemText?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectorCountOutputTypeDefaultArgs instead
     */
    export type DirectorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProblemCountOutputTypeDefaultArgs instead
     */
    export type ProblemCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProblemCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreatorCountOutputTypeDefaultArgs instead
     */
    export type CreatorCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreatorCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postDefaultArgs instead
     */
    export type postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PatientDefaultArgs instead
     */
    export type PatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PatientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDefaultArgs instead
     */
    export type MovieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DirectorDefaultArgs instead
     */
    export type DirectorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DirectorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProblemDefaultArgs instead
     */
    export type ProblemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProblemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreatorDefaultArgs instead
     */
    export type CreatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreatorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NativeTypeModelDefaultArgs instead
     */
    export type NativeTypeModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NativeTypeModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EquipmentDefaultArgs instead
     */
    export type EquipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EquipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HiddenDefaultArgs instead
     */
    export type HiddenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HiddenDefaultArgs<ExtArgs>

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