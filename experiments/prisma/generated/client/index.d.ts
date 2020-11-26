
/**
 * Client
**/

import * as runtime from './runtime';

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
 * Prisma Client JS version: 2.12.1
 * Query Engine version: cf0680a1bfe8d5e743dc659cc7f08009f9587d58
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


export type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

/**
 * XOR is needed to have a real mutually exclusive union type
 * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
 */
type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;





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
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
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
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never
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
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
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

  constructor(optionsArg ?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate;

  /**
   * `prisma.post`: Exposes CRUD operations for the **post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.postDelegate;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate;

  /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate;

  /**
   * `prisma.director`: Exposes CRUD operations for the **Director** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directors
    * const directors = await prisma.director.findMany()
    * ```
    */
  get director(): Prisma.DirectorDelegate;

  /**
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate;

  /**
   * `prisma.creator`: Exposes CRUD operations for the **Creator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Creators
    * const creators = await prisma.creator.findMany()
    * ```
    */
  get creator(): Prisma.CreatorDelegate;
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
   * Prisma Client JS version: 2.12.1
   * Query Engine version: cf0680a1bfe8d5e743dc659cc7f08009f9587d58
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


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;

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
    Creator: 'Creator'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
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
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: string
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
   * Model User
   */


  export type AggregateUser = {
    count: number
    avg: UserAvgAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number
    age: number
    balance: number
    amount: number
  }

  export type UserSumAggregateOutputType = {
    id: number
    age: number
    balance: number
    amount: number
  }

  export type UserMinAggregateOutputType = {
    id: number
    age: number
    balance: number
    amount: number
  }

  export type UserMaxAggregateOutputType = {
    id: number
    age: number
    balance: number
    amount: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    age?: true
    balance?: true
    amount?: true
  }

  export type AggregateUserArgs = {
    where?: UserWhereInput
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
    count?: true
    avg?: UserAvgAggregateInputType
    sum?: UserSumAggregateInputType
    min?: UserMinAggregateInputType
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends AggregateUserArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetUserAggregateScalarType<T[P]>
  }

  export type GetUserAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof UserAvgAggregateOutputType ? UserAvgAggregateOutputType[P] : never
  }
    
    

  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    age?: boolean
    balance?: boolean
    amount?: boolean
    posts?: boolean | FindManypostArgs
    role?: boolean
    editorPosts?: boolean | FindManypostArgs
  }

  export type UserInclude = {
    posts?: boolean | FindManypostArgs
    editorPosts?: boolean | FindManypostArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | FindManyUserArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < postGetPayload<S['include'][P]>>  :
        P extends 'editorPosts'
        ? Array < postGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'posts'
        ? Array < postGetPayload<S['select'][P]>>  :
        P extends 'editorPosts'
        ? Array < postGetPayload<S['select'][P]>>  : never
  } 
    : User
  : User


  export interface UserDelegate {
    /**
     * Find zero or one User that matches the filter.
     * @param {FindUniqueUserArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueUserArgs>(
      args: Subset<T, FindUniqueUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Find the first User that matches the filter.
     * @param {FindFirstUserArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstUserArgs>(
      args?: Subset<T, FindFirstUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Find zero or more Users that matches the filter.
     * @param {FindManyUserArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyUserArgs>(
      args?: Subset<T, FindManyUserArgs>
    ): CheckSelect<T, Promise<Array<User>>, Promise<Array<UserGetPayload<T>>>>
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
      args: Subset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
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
      args: Subset<T, UserDeleteArgs>
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
      args: Subset<T, UserUpdateArgs>
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
      args: Subset<T, UserDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Users.
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
      args: Subset<T, UserUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>
    /**
     * Find zero or one User that matches the filter.
     * @param {FindUniqueUserArgs} args - Arguments to find a User
     * @deprecated This will be deprecated please use prisma.user.findUnique
     * @example
     * // Get one User
     * const user = await prisma.user.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueUserArgs>(
      args: Subset<T, FindUniqueUserArgs>
    ): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyUserArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateUserArgs>(args: Subset<T, AggregateUserArgs>): Promise<GetUserAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements Promise<T> {
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

    posts<T extends FindManypostArgs = {}>(args?: Subset<T, FindManypostArgs>): CheckSelect<T, Promise<Array<post>>, Promise<Array<postGetPayload<T>>>>;

    editorPosts<T extends FindManypostArgs = {}>(args?: Subset<T, FindManypostArgs>): CheckSelect<T, Promise<Array<post>>, Promise<Array<postGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which User to fetch.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type FindFirstUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which User to fetch.
    **/
    where?: UserWhereInput
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
  }


  /**
   * User findMany
   */
  export type FindManyUserArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter, which Users to fetch.
    **/
    where?: UserWhereInput
    /**
     * Determine the order of the Users to fetch.
    **/
    orderBy?: XOR<Enumerable<UserOrderByInput>, UserOrderByInput>
    /**
     * Sets the position for listing Users.
    **/
    cursor?: UserWhereUniqueInput
    /**
     * The number of Users to fetch. If negative number, it will take Users before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Users.
    **/
    skip?: number
    distinct?: Enumerable<UserDistinctFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The data needed to create a User.
    **/
    data: UserCreateInput
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The data needed to update a User.
    **/
    data: UserUpdateInput
    /**
     * Choose, which User to update.
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: UserUpdateManyMutationInput
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * The filter to search for the User to update in case it exists.
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
    **/
    create: UserCreateInput
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
    **/
    update: UserUpdateInput
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
    /**
     * Filter which User to delete.
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
    **/
    select?: XOR<UserSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<UserInclude, null>
  }



  /**
   * Model post
   */


  export type AggregatePost = {
    count: number
    avg: PostAvgAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    authorId: number
    editorId: number | null
  }

  export type PostSumAggregateOutputType = {
    authorId: number
    editorId: number | null
  }

  export type PostMinAggregateOutputType = {
    authorId: number
    editorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    authorId: number
    editorId: number | null
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
    authorId?: true
    editorId?: true
  }

  export type PostMaxAggregateInputType = {
    authorId?: true
    editorId?: true
  }

  export type AggregatePostArgs = {
    where?: postWhereInput
    orderBy?: XOR<Enumerable<postOrderByInput>, postOrderByInput>
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
    count?: true
    avg?: PostAvgAggregateInputType
    sum?: PostSumAggregateInputType
    min?: PostMinAggregateInputType
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends AggregatePostArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetPostAggregateScalarType<T[P]>
  }

  export type GetPostAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof PostAvgAggregateOutputType ? PostAvgAggregateOutputType[P] : never
  }
    
    

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
    : S extends postArgs | FindManypostArgs
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


  export interface postDelegate {
    /**
     * Find zero or one Post that matches the filter.
     * @param {FindUniquepostArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniquepostArgs>(
      args: Subset<T, FindUniquepostArgs>
    ): CheckSelect<T, Prisma__postClient<post | null>, Prisma__postClient<postGetPayload<T> | null>>
    /**
     * Find the first Post that matches the filter.
     * @param {FindFirstpostArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstpostArgs>(
      args?: Subset<T, FindFirstpostArgs>
    ): CheckSelect<T, Prisma__postClient<post | null>, Prisma__postClient<postGetPayload<T> | null>>
    /**
     * Find zero or more Posts that matches the filter.
     * @param {FindManypostArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManypostArgs>(
      args?: Subset<T, FindManypostArgs>
    ): CheckSelect<T, Promise<Array<post>>, Promise<Array<postGetPayload<T>>>>
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
      args: Subset<T, postCreateArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>
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
      args: Subset<T, postDeleteArgs>
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
      args: Subset<T, postUpdateArgs>
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
      args: Subset<T, postDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Posts.
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
      args: Subset<T, postUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, postUpsertArgs>
    ): CheckSelect<T, Prisma__postClient<post>, Prisma__postClient<postGetPayload<T>>>
    /**
     * Find zero or one Post that matches the filter.
     * @param {FindUniquepostArgs} args - Arguments to find a Post
     * @deprecated This will be deprecated please use prisma.post.findUnique
     * @example
     * // Get one Post
     * const post = await prisma.post.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniquepostArgs>(
      args: Subset<T, FindUniquepostArgs>
    ): CheckSelect<T, Prisma__postClient<post | null>, Prisma__postClient<postGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManypostArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregatePostArgs>(args: Subset<T, AggregatePostArgs>): Promise<GetPostAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__postClient<T> implements Promise<T> {
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

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    editor<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null>, Prisma__UserClient<UserGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniquepostArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * Filter, which post to fetch.
    **/
    where: postWhereUniqueInput
  }


  /**
   * post findFirst
   */
  export type FindFirstpostArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * Filter, which post to fetch.
    **/
    where?: postWhereInput
    orderBy?: XOR<Enumerable<postOrderByInput>, postOrderByInput>
    cursor?: postWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
  }


  /**
   * post findMany
   */
  export type FindManypostArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * Filter, which posts to fetch.
    **/
    where?: postWhereInput
    /**
     * Determine the order of the posts to fetch.
    **/
    orderBy?: XOR<Enumerable<postOrderByInput>, postOrderByInput>
    /**
     * Sets the position for listing posts.
    **/
    cursor?: postWhereUniqueInput
    /**
     * The number of posts to fetch. If negative number, it will take posts before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` posts.
    **/
    skip?: number
    distinct?: Enumerable<PostDistinctFieldEnum>
  }


  /**
   * post create
   */
  export type postCreateArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * The data needed to create a post.
    **/
    data: postCreateInput
  }


  /**
   * post update
   */
  export type postUpdateArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * The data needed to update a post.
    **/
    data: postUpdateInput
    /**
     * Choose, which post to update.
    **/
    where: postWhereUniqueInput
  }


  /**
   * post updateMany
   */
  export type postUpdateManyArgs = {
    data: postUpdateManyMutationInput
    where?: postWhereInput
  }


  /**
   * post upsert
   */
  export type postUpsertArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * The filter to search for the post to update in case it exists.
    **/
    where: postWhereUniqueInput
    /**
     * In case the post found by the `where` argument doesn't exist, create a new post with this data.
    **/
    create: postCreateInput
    /**
     * In case the post was found with the provided `where` argument, update it with this data.
    **/
    update: postUpdateInput
  }


  /**
   * post delete
   */
  export type postDeleteArgs = {
    /**
     * Select specific fields to fetch from the post
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
    /**
     * Filter which post to delete.
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
    **/
    select?: XOR<postSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<postInclude, null>
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    count: number
    avg: CategoryAvgAggregateOutputType | null
    sum: CategorySumAggregateOutputType | null
    min: CategoryMinAggregateOutputType | null
    max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    number: number
  }

  export type CategorySumAggregateOutputType = {
    number: number
  }

  export type CategoryMinAggregateOutputType = {
    number: number
  }

  export type CategoryMaxAggregateOutputType = {
    number: number
  }


  export type CategoryAvgAggregateInputType = {
    number?: true
  }

  export type CategorySumAggregateInputType = {
    number?: true
  }

  export type CategoryMinAggregateInputType = {
    number?: true
  }

  export type CategoryMaxAggregateInputType = {
    number?: true
  }

  export type AggregateCategoryArgs = {
    where?: CategoryWhereInput
    orderBy?: XOR<Enumerable<CategoryOrderByInput>, CategoryOrderByInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryDistinctFieldEnum>
    count?: true
    avg?: CategoryAvgAggregateInputType
    sum?: CategorySumAggregateInputType
    min?: CategoryMinAggregateInputType
    max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends AggregateCategoryArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetCategoryAggregateScalarType<T[P]>
  }

  export type GetCategoryAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof CategoryAvgAggregateOutputType ? CategoryAvgAggregateOutputType[P] : never
  }
    
    

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
    : S extends CategoryArgs | FindManyCategoryArgs
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


  export interface CategoryDelegate {
    /**
     * Find zero or one Category that matches the filter.
     * @param {FindUniqueCategoryArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueCategoryArgs>(
      args: Subset<T, FindUniqueCategoryArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>
    /**
     * Find the first Category that matches the filter.
     * @param {FindFirstCategoryArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstCategoryArgs>(
      args?: Subset<T, FindFirstCategoryArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>
    /**
     * Find zero or more Categories that matches the filter.
     * @param {FindManyCategoryArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyCategoryArgs>(
      args?: Subset<T, FindManyCategoryArgs>
    ): CheckSelect<T, Promise<Array<Category>>, Promise<Array<CategoryGetPayload<T>>>>
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
      args: Subset<T, CategoryCreateArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
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
      args: Subset<T, CategoryDeleteArgs>
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
      args: Subset<T, CategoryUpdateArgs>
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
      args: Subset<T, CategoryDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Categories.
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
      args: Subset<T, CategoryUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, CategoryUpsertArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category>, Prisma__CategoryClient<CategoryGetPayload<T>>>
    /**
     * Find zero or one Category that matches the filter.
     * @param {FindUniqueCategoryArgs} args - Arguments to find a Category
     * @deprecated This will be deprecated please use prisma.category.findUnique
     * @example
     * // Get one Category
     * const category = await prisma.category.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueCategoryArgs>(
      args: Subset<T, FindUniqueCategoryArgs>
    ): CheckSelect<T, Prisma__CategoryClient<Category | null>, Prisma__CategoryClient<CategoryGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyCategoryArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateCategoryArgs>(args: Subset<T, AggregateCategoryArgs>): Promise<GetCategoryAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T> implements Promise<T> {
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
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueCategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * Filter, which Category to fetch.
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category findFirst
   */
  export type FindFirstCategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * Filter, which Category to fetch.
    **/
    where?: CategoryWhereInput
    orderBy?: XOR<Enumerable<CategoryOrderByInput>, CategoryOrderByInput>
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CategoryDistinctFieldEnum>
  }


  /**
   * Category findMany
   */
  export type FindManyCategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * Filter, which Categories to fetch.
    **/
    where?: CategoryWhereInput
    /**
     * Determine the order of the Categories to fetch.
    **/
    orderBy?: XOR<Enumerable<CategoryOrderByInput>, CategoryOrderByInput>
    /**
     * Sets the position for listing Categories.
    **/
    cursor?: CategoryWhereUniqueInput
    /**
     * The number of Categories to fetch. If negative number, it will take Categories before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Categories.
    **/
    skip?: number
    distinct?: Enumerable<CategoryDistinctFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * The data needed to create a Category.
    **/
    data: CategoryCreateInput
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * The data needed to update a Category.
    **/
    data: CategoryUpdateInput
    /**
     * Choose, which Category to update.
    **/
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    data: CategoryUpdateManyMutationInput
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * The filter to search for the Category to update in case it exists.
    **/
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
    **/
    create: CategoryCreateInput
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
    **/
    update: CategoryUpdateInput
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
    **/
    select?: XOR<CategorySelect, null>
    /**
     * Filter which Category to delete.
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
    **/
    select?: XOR<CategorySelect, null>
  }



  /**
   * Model Patient
   */


  export type AggregatePatient = {
    count: number
  }



  export type AggregatePatientArgs = {
    where?: PatientWhereInput
    orderBy?: XOR<Enumerable<PatientOrderByInput>, PatientOrderByInput>
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PatientDistinctFieldEnum>
    count?: true
  }

  export type GetPatientAggregateType<T extends AggregatePatientArgs> = {
    [P in keyof T]: P extends 'count' ? number : never
  }


    
    

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
    : S extends PatientArgs | FindManyPatientArgs
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


  export interface PatientDelegate {
    /**
     * Find zero or one Patient that matches the filter.
     * @param {FindUniquePatientArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniquePatientArgs>(
      args: Subset<T, FindUniquePatientArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient | null>, Prisma__PatientClient<PatientGetPayload<T> | null>>
    /**
     * Find the first Patient that matches the filter.
     * @param {FindFirstPatientArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstPatientArgs>(
      args?: Subset<T, FindFirstPatientArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient | null>, Prisma__PatientClient<PatientGetPayload<T> | null>>
    /**
     * Find zero or more Patients that matches the filter.
     * @param {FindManyPatientArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyPatientArgs>(
      args?: Subset<T, FindManyPatientArgs>
    ): CheckSelect<T, Promise<Array<Patient>>, Promise<Array<PatientGetPayload<T>>>>
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
      args: Subset<T, PatientCreateArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>
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
      args: Subset<T, PatientDeleteArgs>
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
      args: Subset<T, PatientUpdateArgs>
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
      args: Subset<T, PatientDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Patients.
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
      args: Subset<T, PatientUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, PatientUpsertArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient>, Prisma__PatientClient<PatientGetPayload<T>>>
    /**
     * Find zero or one Patient that matches the filter.
     * @param {FindUniquePatientArgs} args - Arguments to find a Patient
     * @deprecated This will be deprecated please use prisma.patient.findUnique
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniquePatientArgs>(
      args: Subset<T, FindUniquePatientArgs>
    ): CheckSelect<T, Prisma__PatientClient<Patient | null>, Prisma__PatientClient<PatientGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyPatientArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregatePatientArgs>(args: Subset<T, AggregatePatientArgs>): Promise<GetPatientAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PatientClient<T> implements Promise<T> {
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
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniquePatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * Filter, which Patient to fetch.
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient findFirst
   */
  export type FindFirstPatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * Filter, which Patient to fetch.
    **/
    where?: PatientWhereInput
    orderBy?: XOR<Enumerable<PatientOrderByInput>, PatientOrderByInput>
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PatientDistinctFieldEnum>
  }


  /**
   * Patient findMany
   */
  export type FindManyPatientArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * Filter, which Patients to fetch.
    **/
    where?: PatientWhereInput
    /**
     * Determine the order of the Patients to fetch.
    **/
    orderBy?: XOR<Enumerable<PatientOrderByInput>, PatientOrderByInput>
    /**
     * Sets the position for listing Patients.
    **/
    cursor?: PatientWhereUniqueInput
    /**
     * The number of Patients to fetch. If negative number, it will take Patients before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Patients.
    **/
    skip?: number
    distinct?: Enumerable<PatientDistinctFieldEnum>
  }


  /**
   * Patient create
   */
  export type PatientCreateArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * The data needed to create a Patient.
    **/
    data: PatientCreateInput
  }


  /**
   * Patient update
   */
  export type PatientUpdateArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * The data needed to update a Patient.
    **/
    data: PatientUpdateInput
    /**
     * Choose, which Patient to update.
    **/
    where: PatientWhereUniqueInput
  }


  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs = {
    data: PatientUpdateManyMutationInput
    where?: PatientWhereInput
  }


  /**
   * Patient upsert
   */
  export type PatientUpsertArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * The filter to search for the Patient to update in case it exists.
    **/
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
    **/
    create: PatientCreateInput
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
    **/
    update: PatientUpdateInput
  }


  /**
   * Patient delete
   */
  export type PatientDeleteArgs = {
    /**
     * Select specific fields to fetch from the Patient
    **/
    select?: XOR<PatientSelect, null>
    /**
     * Filter which Patient to delete.
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
    **/
    select?: XOR<PatientSelect, null>
  }



  /**
   * Model Movie
   */


  export type AggregateMovie = {
    count: number
  }



  export type AggregateMovieArgs = {
    where?: MovieWhereInput
    orderBy?: XOR<Enumerable<MovieOrderByInput>, MovieOrderByInput>
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MovieDistinctFieldEnum>
    count?: true
  }

  export type GetMovieAggregateType<T extends AggregateMovieArgs> = {
    [P in keyof T]: P extends 'count' ? number : never
  }


    
    

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
    : S extends MovieArgs | FindManyMovieArgs
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


  export interface MovieDelegate {
    /**
     * Find zero or one Movie that matches the filter.
     * @param {FindUniqueMovieArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueMovieArgs>(
      args: Subset<T, FindUniqueMovieArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie | null>, Prisma__MovieClient<MovieGetPayload<T> | null>>
    /**
     * Find the first Movie that matches the filter.
     * @param {FindFirstMovieArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstMovieArgs>(
      args?: Subset<T, FindFirstMovieArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie | null>, Prisma__MovieClient<MovieGetPayload<T> | null>>
    /**
     * Find zero or more Movies that matches the filter.
     * @param {FindManyMovieArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyMovieArgs>(
      args?: Subset<T, FindManyMovieArgs>
    ): CheckSelect<T, Promise<Array<Movie>>, Promise<Array<MovieGetPayload<T>>>>
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
      args: Subset<T, MovieCreateArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>
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
      args: Subset<T, MovieDeleteArgs>
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
      args: Subset<T, MovieUpdateArgs>
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
      args: Subset<T, MovieDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Movies.
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
      args: Subset<T, MovieUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, MovieUpsertArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie>, Prisma__MovieClient<MovieGetPayload<T>>>
    /**
     * Find zero or one Movie that matches the filter.
     * @param {FindUniqueMovieArgs} args - Arguments to find a Movie
     * @deprecated This will be deprecated please use prisma.movie.findUnique
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueMovieArgs>(
      args: Subset<T, FindUniqueMovieArgs>
    ): CheckSelect<T, Prisma__MovieClient<Movie | null>, Prisma__MovieClient<MovieGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyMovieArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateMovieArgs>(args: Subset<T, AggregateMovieArgs>): Promise<GetMovieAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MovieClient<T> implements Promise<T> {
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

    director<T extends DirectorArgs = {}>(args?: Subset<T, DirectorArgs>): CheckSelect<T, Prisma__DirectorClient<Director | null>, Prisma__DirectorClient<DirectorGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueMovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * Filter, which Movie to fetch.
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie findFirst
   */
  export type FindFirstMovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * Filter, which Movie to fetch.
    **/
    where?: MovieWhereInput
    orderBy?: XOR<Enumerable<MovieOrderByInput>, MovieOrderByInput>
    cursor?: MovieWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<MovieDistinctFieldEnum>
  }


  /**
   * Movie findMany
   */
  export type FindManyMovieArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * Filter, which Movies to fetch.
    **/
    where?: MovieWhereInput
    /**
     * Determine the order of the Movies to fetch.
    **/
    orderBy?: XOR<Enumerable<MovieOrderByInput>, MovieOrderByInput>
    /**
     * Sets the position for listing Movies.
    **/
    cursor?: MovieWhereUniqueInput
    /**
     * The number of Movies to fetch. If negative number, it will take Movies before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Movies.
    **/
    skip?: number
    distinct?: Enumerable<MovieDistinctFieldEnum>
  }


  /**
   * Movie create
   */
  export type MovieCreateArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * The data needed to create a Movie.
    **/
    data: MovieCreateInput
  }


  /**
   * Movie update
   */
  export type MovieUpdateArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * The data needed to update a Movie.
    **/
    data: MovieUpdateInput
    /**
     * Choose, which Movie to update.
    **/
    where: MovieWhereUniqueInput
  }


  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs = {
    data: MovieUpdateManyMutationInput
    where?: MovieWhereInput
  }


  /**
   * Movie upsert
   */
  export type MovieUpsertArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * The filter to search for the Movie to update in case it exists.
    **/
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
    **/
    create: MovieCreateInput
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
    **/
    update: MovieUpdateInput
  }


  /**
   * Movie delete
   */
  export type MovieDeleteArgs = {
    /**
     * Select specific fields to fetch from the Movie
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
    /**
     * Filter which Movie to delete.
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
    **/
    select?: XOR<MovieSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<MovieInclude, null>
  }



  /**
   * Model Director
   */


  export type AggregateDirector = {
    count: number
  }



  export type AggregateDirectorArgs = {
    where?: DirectorWhereInput
    orderBy?: XOR<Enumerable<DirectorOrderByInput>, DirectorOrderByInput>
    cursor?: DirectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectorDistinctFieldEnum>
    count?: true
  }

  export type GetDirectorAggregateType<T extends AggregateDirectorArgs> = {
    [P in keyof T]: P extends 'count' ? number : never
  }


    
    

  export type DirectorSelect = {
    firstName?: boolean
    lastName?: boolean
    movies?: boolean | FindManyMovieArgs
  }

  export type DirectorInclude = {
    movies?: boolean | FindManyMovieArgs
  }

  export type DirectorGetPayload<
    S extends boolean | null | undefined | DirectorArgs,
    U = keyof S
      > = S extends true
        ? Director
    : S extends undefined
    ? never
    : S extends DirectorArgs | FindManyDirectorArgs
    ?'include' extends U
    ? Director  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'movies'
        ? Array < MovieGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Director ?Director [P]
  : 
          P extends 'movies'
        ? Array < MovieGetPayload<S['select'][P]>>  : never
  } 
    : Director
  : Director


  export interface DirectorDelegate {
    /**
     * Find zero or one Director that matches the filter.
     * @param {FindUniqueDirectorArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueDirectorArgs>(
      args: Subset<T, FindUniqueDirectorArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director | null>, Prisma__DirectorClient<DirectorGetPayload<T> | null>>
    /**
     * Find the first Director that matches the filter.
     * @param {FindFirstDirectorArgs} args - Arguments to find a Director
     * @example
     * // Get one Director
     * const director = await prisma.director.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstDirectorArgs>(
      args?: Subset<T, FindFirstDirectorArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director | null>, Prisma__DirectorClient<DirectorGetPayload<T> | null>>
    /**
     * Find zero or more Directors that matches the filter.
     * @param {FindManyDirectorArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyDirectorArgs>(
      args?: Subset<T, FindManyDirectorArgs>
    ): CheckSelect<T, Promise<Array<Director>>, Promise<Array<DirectorGetPayload<T>>>>
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
      args: Subset<T, DirectorCreateArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>
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
      args: Subset<T, DirectorDeleteArgs>
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
      args: Subset<T, DirectorUpdateArgs>
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
      args: Subset<T, DirectorDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Directors.
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
      args: Subset<T, DirectorUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, DirectorUpsertArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director>, Prisma__DirectorClient<DirectorGetPayload<T>>>
    /**
     * Find zero or one Director that matches the filter.
     * @param {FindUniqueDirectorArgs} args - Arguments to find a Director
     * @deprecated This will be deprecated please use prisma.director.findUnique
     * @example
     * // Get one Director
     * const director = await prisma.director.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueDirectorArgs>(
      args: Subset<T, FindUniqueDirectorArgs>
    ): CheckSelect<T, Prisma__DirectorClient<Director | null>, Prisma__DirectorClient<DirectorGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyDirectorArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateDirectorArgs>(args: Subset<T, AggregateDirectorArgs>): Promise<GetDirectorAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Director.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DirectorClient<T> implements Promise<T> {
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

    movies<T extends FindManyMovieArgs = {}>(args?: Subset<T, FindManyMovieArgs>): CheckSelect<T, Promise<Array<Movie>>, Promise<Array<MovieGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueDirectorArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * Filter, which Director to fetch.
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director findFirst
   */
  export type FindFirstDirectorArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * Filter, which Director to fetch.
    **/
    where?: DirectorWhereInput
    orderBy?: XOR<Enumerable<DirectorOrderByInput>, DirectorOrderByInput>
    cursor?: DirectorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DirectorDistinctFieldEnum>
  }


  /**
   * Director findMany
   */
  export type FindManyDirectorArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * Filter, which Directors to fetch.
    **/
    where?: DirectorWhereInput
    /**
     * Determine the order of the Directors to fetch.
    **/
    orderBy?: XOR<Enumerable<DirectorOrderByInput>, DirectorOrderByInput>
    /**
     * Sets the position for listing Directors.
    **/
    cursor?: DirectorWhereUniqueInput
    /**
     * The number of Directors to fetch. If negative number, it will take Directors before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Directors.
    **/
    skip?: number
    distinct?: Enumerable<DirectorDistinctFieldEnum>
  }


  /**
   * Director create
   */
  export type DirectorCreateArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * The data needed to create a Director.
    **/
    data: DirectorCreateInput
  }


  /**
   * Director update
   */
  export type DirectorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * The data needed to update a Director.
    **/
    data: DirectorUpdateInput
    /**
     * Choose, which Director to update.
    **/
    where: DirectorWhereUniqueInput
  }


  /**
   * Director updateMany
   */
  export type DirectorUpdateManyArgs = {
    data: DirectorUpdateManyMutationInput
    where?: DirectorWhereInput
  }


  /**
   * Director upsert
   */
  export type DirectorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * The filter to search for the Director to update in case it exists.
    **/
    where: DirectorWhereUniqueInput
    /**
     * In case the Director found by the `where` argument doesn't exist, create a new Director with this data.
    **/
    create: DirectorCreateInput
    /**
     * In case the Director was found with the provided `where` argument, update it with this data.
    **/
    update: DirectorUpdateInput
  }


  /**
   * Director delete
   */
  export type DirectorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Director
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
    /**
     * Filter which Director to delete.
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
    **/
    select?: XOR<DirectorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<DirectorInclude, null>
  }



  /**
   * Model Problem
   */


  export type AggregateProblem = {
    count: number
    avg: ProblemAvgAggregateOutputType | null
    sum: ProblemSumAggregateOutputType | null
    min: ProblemMinAggregateOutputType | null
    max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemAvgAggregateOutputType = {
    id: number
    creatorId: number | null
  }

  export type ProblemSumAggregateOutputType = {
    id: number
    creatorId: number | null
  }

  export type ProblemMinAggregateOutputType = {
    id: number
    creatorId: number | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: number
    creatorId: number | null
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
    creatorId?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    creatorId?: true
  }

  export type AggregateProblemArgs = {
    where?: ProblemWhereInput
    orderBy?: XOR<Enumerable<ProblemOrderByInput>, ProblemOrderByInput>
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProblemDistinctFieldEnum>
    count?: true
    avg?: ProblemAvgAggregateInputType
    sum?: ProblemSumAggregateInputType
    min?: ProblemMinAggregateInputType
    max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends AggregateProblemArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetProblemAggregateScalarType<T[P]>
  }

  export type GetProblemAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof ProblemAvgAggregateOutputType ? ProblemAvgAggregateOutputType[P] : never
  }
    
    

  export type ProblemSelect = {
    id?: boolean
    problemText?: boolean
    likedBy?: boolean | FindManyCreatorArgs
    creator?: boolean | CreatorArgs
    creatorId?: boolean
  }

  export type ProblemInclude = {
    likedBy?: boolean | FindManyCreatorArgs
    creator?: boolean | CreatorArgs
  }

  export type ProblemGetPayload<
    S extends boolean | null | undefined | ProblemArgs,
    U = keyof S
      > = S extends true
        ? Problem
    : S extends undefined
    ? never
    : S extends ProblemArgs | FindManyProblemArgs
    ?'include' extends U
    ? Problem  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'likedBy'
        ? Array < CreatorGetPayload<S['include'][P]>>  :
        P extends 'creator'
        ? CreatorGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Problem ?Problem [P]
  : 
          P extends 'likedBy'
        ? Array < CreatorGetPayload<S['select'][P]>>  :
        P extends 'creator'
        ? CreatorGetPayload<S['select'][P]> | null : never
  } 
    : Problem
  : Problem


  export interface ProblemDelegate {
    /**
     * Find zero or one Problem that matches the filter.
     * @param {FindUniqueProblemArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueProblemArgs>(
      args: Subset<T, FindUniqueProblemArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem | null>, Prisma__ProblemClient<ProblemGetPayload<T> | null>>
    /**
     * Find the first Problem that matches the filter.
     * @param {FindFirstProblemArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstProblemArgs>(
      args?: Subset<T, FindFirstProblemArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem | null>, Prisma__ProblemClient<ProblemGetPayload<T> | null>>
    /**
     * Find zero or more Problems that matches the filter.
     * @param {FindManyProblemArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyProblemArgs>(
      args?: Subset<T, FindManyProblemArgs>
    ): CheckSelect<T, Promise<Array<Problem>>, Promise<Array<ProblemGetPayload<T>>>>
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
      args: Subset<T, ProblemCreateArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>
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
      args: Subset<T, ProblemDeleteArgs>
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
      args: Subset<T, ProblemUpdateArgs>
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
      args: Subset<T, ProblemDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Problems.
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
      args: Subset<T, ProblemUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, ProblemUpsertArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem>, Prisma__ProblemClient<ProblemGetPayload<T>>>
    /**
     * Find zero or one Problem that matches the filter.
     * @param {FindUniqueProblemArgs} args - Arguments to find a Problem
     * @deprecated This will be deprecated please use prisma.problem.findUnique
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueProblemArgs>(
      args: Subset<T, FindUniqueProblemArgs>
    ): CheckSelect<T, Prisma__ProblemClient<Problem | null>, Prisma__ProblemClient<ProblemGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyProblemArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateProblemArgs>(args: Subset<T, AggregateProblemArgs>): Promise<GetProblemAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProblemClient<T> implements Promise<T> {
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

    likedBy<T extends FindManyCreatorArgs = {}>(args?: Subset<T, FindManyCreatorArgs>): CheckSelect<T, Promise<Array<Creator>>, Promise<Array<CreatorGetPayload<T>>>>;

    creator<T extends CreatorArgs = {}>(args?: Subset<T, CreatorArgs>): CheckSelect<T, Prisma__CreatorClient<Creator | null>, Prisma__CreatorClient<CreatorGetPayload<T> | null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueProblemArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * Filter, which Problem to fetch.
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem findFirst
   */
  export type FindFirstProblemArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * Filter, which Problem to fetch.
    **/
    where?: ProblemWhereInput
    orderBy?: XOR<Enumerable<ProblemOrderByInput>, ProblemOrderByInput>
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProblemDistinctFieldEnum>
  }


  /**
   * Problem findMany
   */
  export type FindManyProblemArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * Filter, which Problems to fetch.
    **/
    where?: ProblemWhereInput
    /**
     * Determine the order of the Problems to fetch.
    **/
    orderBy?: XOR<Enumerable<ProblemOrderByInput>, ProblemOrderByInput>
    /**
     * Sets the position for listing Problems.
    **/
    cursor?: ProblemWhereUniqueInput
    /**
     * The number of Problems to fetch. If negative number, it will take Problems before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Problems.
    **/
    skip?: number
    distinct?: Enumerable<ProblemDistinctFieldEnum>
  }


  /**
   * Problem create
   */
  export type ProblemCreateArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * The data needed to create a Problem.
    **/
    data: ProblemCreateInput
  }


  /**
   * Problem update
   */
  export type ProblemUpdateArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * The data needed to update a Problem.
    **/
    data: ProblemUpdateInput
    /**
     * Choose, which Problem to update.
    **/
    where: ProblemWhereUniqueInput
  }


  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs = {
    data: ProblemUpdateManyMutationInput
    where?: ProblemWhereInput
  }


  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * The filter to search for the Problem to update in case it exists.
    **/
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
    **/
    create: ProblemCreateInput
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
    **/
    update: ProblemUpdateInput
  }


  /**
   * Problem delete
   */
  export type ProblemDeleteArgs = {
    /**
     * Select specific fields to fetch from the Problem
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
    /**
     * Filter which Problem to delete.
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
    **/
    select?: XOR<ProblemSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<ProblemInclude, null>
  }



  /**
   * Model Creator
   */


  export type AggregateCreator = {
    count: number
    avg: CreatorAvgAggregateOutputType | null
    sum: CreatorSumAggregateOutputType | null
    min: CreatorMinAggregateOutputType | null
    max: CreatorMaxAggregateOutputType | null
  }

  export type CreatorAvgAggregateOutputType = {
    id: number
  }

  export type CreatorSumAggregateOutputType = {
    id: number
  }

  export type CreatorMinAggregateOutputType = {
    id: number
  }

  export type CreatorMaxAggregateOutputType = {
    id: number
  }


  export type CreatorAvgAggregateInputType = {
    id?: true
  }

  export type CreatorSumAggregateInputType = {
    id?: true
  }

  export type CreatorMinAggregateInputType = {
    id?: true
  }

  export type CreatorMaxAggregateInputType = {
    id?: true
  }

  export type AggregateCreatorArgs = {
    where?: CreatorWhereInput
    orderBy?: XOR<Enumerable<CreatorOrderByInput>, CreatorOrderByInput>
    cursor?: CreatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CreatorDistinctFieldEnum>
    count?: true
    avg?: CreatorAvgAggregateInputType
    sum?: CreatorSumAggregateInputType
    min?: CreatorMinAggregateInputType
    max?: CreatorMaxAggregateInputType
  }

  export type GetCreatorAggregateType<T extends AggregateCreatorArgs> = {
    [P in keyof T]: P extends 'count' ? number : GetCreatorAggregateScalarType<T[P]>
  }

  export type GetCreatorAggregateScalarType<T extends any> = {
    [P in keyof T]: P extends keyof CreatorAvgAggregateOutputType ? CreatorAvgAggregateOutputType[P] : never
  }
    
    

  export type CreatorSelect = {
    id?: boolean
    name?: boolean
    likes?: boolean | FindManyProblemArgs
    problems?: boolean | FindManyProblemArgs
  }

  export type CreatorInclude = {
    likes?: boolean | FindManyProblemArgs
    problems?: boolean | FindManyProblemArgs
  }

  export type CreatorGetPayload<
    S extends boolean | null | undefined | CreatorArgs,
    U = keyof S
      > = S extends true
        ? Creator
    : S extends undefined
    ? never
    : S extends CreatorArgs | FindManyCreatorArgs
    ?'include' extends U
    ? Creator  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'likes'
        ? Array < ProblemGetPayload<S['include'][P]>>  :
        P extends 'problems'
        ? Array < ProblemGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Creator ?Creator [P]
  : 
          P extends 'likes'
        ? Array < ProblemGetPayload<S['select'][P]>>  :
        P extends 'problems'
        ? Array < ProblemGetPayload<S['select'][P]>>  : never
  } 
    : Creator
  : Creator


  export interface CreatorDelegate {
    /**
     * Find zero or one Creator that matches the filter.
     * @param {FindUniqueCreatorArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FindUniqueCreatorArgs>(
      args: Subset<T, FindUniqueCreatorArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator | null>, Prisma__CreatorClient<CreatorGetPayload<T> | null>>
    /**
     * Find the first Creator that matches the filter.
     * @param {FindFirstCreatorArgs} args - Arguments to find a Creator
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FindFirstCreatorArgs>(
      args?: Subset<T, FindFirstCreatorArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator | null>, Prisma__CreatorClient<CreatorGetPayload<T> | null>>
    /**
     * Find zero or more Creators that matches the filter.
     * @param {FindManyCreatorArgs=} args - Arguments to filter and select certain fields only.
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
    findMany<T extends FindManyCreatorArgs>(
      args?: Subset<T, FindManyCreatorArgs>
    ): CheckSelect<T, Promise<Array<Creator>>, Promise<Array<CreatorGetPayload<T>>>>
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
      args: Subset<T, CreatorCreateArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>
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
      args: Subset<T, CreatorDeleteArgs>
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
      args: Subset<T, CreatorUpdateArgs>
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
      args: Subset<T, CreatorDeleteManyArgs>
    ): Promise<BatchPayload>
    /**
     * Update zero or more Creators.
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
      args: Subset<T, CreatorUpdateManyArgs>
    ): Promise<BatchPayload>
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
      args: Subset<T, CreatorUpsertArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator>, Prisma__CreatorClient<CreatorGetPayload<T>>>
    /**
     * Find zero or one Creator that matches the filter.
     * @param {FindUniqueCreatorArgs} args - Arguments to find a Creator
     * @deprecated This will be deprecated please use prisma.creator.findUnique
     * @example
     * // Get one Creator
     * const creator = await prisma.creator.findOne({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findOne<T extends FindUniqueCreatorArgs>(
      args: Subset<T, FindUniqueCreatorArgs>
    ): CheckSelect<T, Prisma__CreatorClient<Creator | null>, Prisma__CreatorClient<CreatorGetPayload<T> | null>>
    /**
     * Count
     */
    count(args?: Omit<FindManyCreatorArgs, 'select' | 'include'>): Promise<number>

    /**
     * Aggregate
     */
    aggregate<T extends AggregateCreatorArgs>(args: Subset<T, AggregateCreatorArgs>): Promise<GetCreatorAggregateType<T>>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Creator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CreatorClient<T> implements Promise<T> {
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

    likes<T extends FindManyProblemArgs = {}>(args?: Subset<T, FindManyProblemArgs>): CheckSelect<T, Promise<Array<Problem>>, Promise<Array<ProblemGetPayload<T>>>>;

    problems<T extends FindManyProblemArgs = {}>(args?: Subset<T, FindManyProblemArgs>): CheckSelect<T, Promise<Array<Problem>>, Promise<Array<ProblemGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
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
  export type FindUniqueCreatorArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * Filter, which Creator to fetch.
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator findFirst
   */
  export type FindFirstCreatorArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * Filter, which Creator to fetch.
    **/
    where?: CreatorWhereInput
    orderBy?: XOR<Enumerable<CreatorOrderByInput>, CreatorOrderByInput>
    cursor?: CreatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CreatorDistinctFieldEnum>
  }


  /**
   * Creator findMany
   */
  export type FindManyCreatorArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * Filter, which Creators to fetch.
    **/
    where?: CreatorWhereInput
    /**
     * Determine the order of the Creators to fetch.
    **/
    orderBy?: XOR<Enumerable<CreatorOrderByInput>, CreatorOrderByInput>
    /**
     * Sets the position for listing Creators.
    **/
    cursor?: CreatorWhereUniqueInput
    /**
     * The number of Creators to fetch. If negative number, it will take Creators before the `cursor`.
    **/
    take?: number
    /**
     * Skip the first `n` Creators.
    **/
    skip?: number
    distinct?: Enumerable<CreatorDistinctFieldEnum>
  }


  /**
   * Creator create
   */
  export type CreatorCreateArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * The data needed to create a Creator.
    **/
    data: CreatorCreateInput
  }


  /**
   * Creator update
   */
  export type CreatorUpdateArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * The data needed to update a Creator.
    **/
    data: CreatorUpdateInput
    /**
     * Choose, which Creator to update.
    **/
    where: CreatorWhereUniqueInput
  }


  /**
   * Creator updateMany
   */
  export type CreatorUpdateManyArgs = {
    data: CreatorUpdateManyMutationInput
    where?: CreatorWhereInput
  }


  /**
   * Creator upsert
   */
  export type CreatorUpsertArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * The filter to search for the Creator to update in case it exists.
    **/
    where: CreatorWhereUniqueInput
    /**
     * In case the Creator found by the `where` argument doesn't exist, create a new Creator with this data.
    **/
    create: CreatorCreateInput
    /**
     * In case the Creator was found with the provided `where` argument, update it with this data.
    **/
    update: CreatorUpdateInput
  }


  /**
   * Creator delete
   */
  export type CreatorDeleteArgs = {
    /**
     * Select specific fields to fetch from the Creator
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
    /**
     * Filter which Creator to delete.
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
    **/
    select?: XOR<CreatorSelect, null>
    /**
     * Choose, which related nodes to fetch as well.
    **/
    include?: XOR<CreatorInclude, null>
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserDistinctFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    age: 'age',
    balance: 'balance',
    amount: 'amount',
    role: 'role'
  };

  export type UserDistinctFieldEnum = (typeof UserDistinctFieldEnum)[keyof typeof UserDistinctFieldEnum]


  export const PostDistinctFieldEnum: {
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

  export type PostDistinctFieldEnum = (typeof PostDistinctFieldEnum)[keyof typeof PostDistinctFieldEnum]


  export const CategoryDistinctFieldEnum: {
    name: 'name',
    slug: 'slug',
    number: 'number'
  };

  export type CategoryDistinctFieldEnum = (typeof CategoryDistinctFieldEnum)[keyof typeof CategoryDistinctFieldEnum]


  export const PatientDistinctFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email'
  };

  export type PatientDistinctFieldEnum = (typeof PatientDistinctFieldEnum)[keyof typeof PatientDistinctFieldEnum]


  export const MovieDistinctFieldEnum: {
    directorFirstName: 'directorFirstName',
    directorLastName: 'directorLastName',
    title: 'title'
  };

  export type MovieDistinctFieldEnum = (typeof MovieDistinctFieldEnum)[keyof typeof MovieDistinctFieldEnum]


  export const DirectorDistinctFieldEnum: {
    firstName: 'firstName',
    lastName: 'lastName'
  };

  export type DirectorDistinctFieldEnum = (typeof DirectorDistinctFieldEnum)[keyof typeof DirectorDistinctFieldEnum]


  export const ProblemDistinctFieldEnum: {
    id: 'id',
    problemText: 'problemText',
    creatorId: 'creatorId'
  };

  export type ProblemDistinctFieldEnum = (typeof ProblemDistinctFieldEnum)[keyof typeof ProblemDistinctFieldEnum]


  export const CreatorDistinctFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CreatorDistinctFieldEnum = (typeof CreatorDistinctFieldEnum)[keyof typeof CreatorDistinctFieldEnum]


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
    AND?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    OR?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    NOT?: XOR<UserWhereInput, Enumerable<UserWhereInput>>
    id?: XOR<IntFilter, number>
    email?: XOR<StringFilter, string>
    name?: StringNullableFilter | string | null
    age?: XOR<IntFilter, number>
    balance?: XOR<FloatFilter, number>
    amount?: XOR<FloatFilter, number>
    posts?: PostListRelationFilter
    role?: XOR<EnumRoleFilter, Role>
    editorPosts?: PostListRelationFilter
  }

  export type UserOrderByInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    age?: SortOrder
    balance?: SortOrder
    amount?: SortOrder
    role?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type postWhereInput = {
    AND?: XOR<postWhereInput, Enumerable<postWhereInput>>
    OR?: XOR<postWhereInput, Enumerable<postWhereInput>>
    NOT?: XOR<postWhereInput, Enumerable<postWhereInput>>
    uuid?: XOR<StringFilter, string>
    createdAt?: XOR<DateTimeFilter, Date | string>
    updatedAt?: XOR<DateTimeFilter, Date | string>
    published?: XOR<BoolFilter, boolean>
    title?: XOR<StringFilter, string>
    subtitle?: XOR<StringFilter, string>
    content?: StringNullableFilter | string | null
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: XOR<IntFilter, number>
    editor?: UserRelationFilter | UserWhereInput | null
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
  }

  export type postOrderByInput = {
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

  export type postWhereUniqueInput = {
    uuid?: string
  }

  export type CategoryWhereInput = {
    AND?: XOR<CategoryWhereInput, Enumerable<CategoryWhereInput>>
    OR?: XOR<CategoryWhereInput, Enumerable<CategoryWhereInput>>
    NOT?: XOR<CategoryWhereInput, Enumerable<CategoryWhereInput>>
    name?: XOR<StringFilter, string>
    slug?: XOR<StringFilter, string>
    number?: XOR<IntFilter, number>
  }

  export type CategoryOrderByInput = {
    name?: SortOrder
    slug?: SortOrder
    number?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    slug_number?: SlugNumberCompoundUniqueInput
  }

  export type PatientWhereInput = {
    AND?: XOR<PatientWhereInput, Enumerable<PatientWhereInput>>
    OR?: XOR<PatientWhereInput, Enumerable<PatientWhereInput>>
    NOT?: XOR<PatientWhereInput, Enumerable<PatientWhereInput>>
    firstName?: XOR<StringFilter, string>
    lastName?: XOR<StringFilter, string>
    email?: XOR<StringFilter, string>
  }

  export type PatientOrderByInput = {
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
  }

  export type PatientWhereUniqueInput = {
    firstName_lastName?: FirstNameLastNameCompoundUniqueInput
  }

  export type MovieWhereInput = {
    AND?: XOR<MovieWhereInput, Enumerable<MovieWhereInput>>
    OR?: XOR<MovieWhereInput, Enumerable<MovieWhereInput>>
    NOT?: XOR<MovieWhereInput, Enumerable<MovieWhereInput>>
    directorFirstName?: XOR<StringFilter, string>
    directorLastName?: XOR<StringFilter, string>
    director?: XOR<DirectorRelationFilter, DirectorWhereInput>
    title?: XOR<StringFilter, string>
  }

  export type MovieOrderByInput = {
    directorFirstName?: SortOrder
    directorLastName?: SortOrder
    title?: SortOrder
  }

  export type MovieWhereUniqueInput = {
    directorFirstName_directorLastName_title?: DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput
  }

  export type DirectorWhereInput = {
    AND?: XOR<DirectorWhereInput, Enumerable<DirectorWhereInput>>
    OR?: XOR<DirectorWhereInput, Enumerable<DirectorWhereInput>>
    NOT?: XOR<DirectorWhereInput, Enumerable<DirectorWhereInput>>
    firstName?: XOR<StringFilter, string>
    lastName?: XOR<StringFilter, string>
    movies?: MovieListRelationFilter
  }

  export type DirectorOrderByInput = {
    firstName?: SortOrder
    lastName?: SortOrder
  }

  export type DirectorWhereUniqueInput = {
    firstName_lastName?: FirstNameLastNameCompoundUniqueInput
  }

  export type ProblemWhereInput = {
    AND?: XOR<ProblemWhereInput, Enumerable<ProblemWhereInput>>
    OR?: XOR<ProblemWhereInput, Enumerable<ProblemWhereInput>>
    NOT?: XOR<ProblemWhereInput, Enumerable<ProblemWhereInput>>
    id?: XOR<IntFilter, number>
    problemText?: XOR<StringFilter, string>
    likedBy?: CreatorListRelationFilter
    creator?: CreatorRelationFilter | CreatorWhereInput | null
    creatorId?: IntNullableFilter | number | null
  }

  export type ProblemOrderByInput = {
    id?: SortOrder
    problemText?: SortOrder
    creatorId?: SortOrder
  }

  export type ProblemWhereUniqueInput = {
    id?: number
  }

  export type CreatorWhereInput = {
    AND?: XOR<CreatorWhereInput, Enumerable<CreatorWhereInput>>
    OR?: XOR<CreatorWhereInput, Enumerable<CreatorWhereInput>>
    NOT?: XOR<CreatorWhereInput, Enumerable<CreatorWhereInput>>
    id?: XOR<IntFilter, number>
    name?: XOR<StringFilter, string>
    likes?: ProblemListRelationFilter
    problems?: ProblemListRelationFilter
  }

  export type CreatorOrderByInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CreatorWhereUniqueInput = {
    id?: number
  }

  export type UserCreateInput = {
    email: string
    name?: XOR<string, null>
    age: number
    balance: number
    amount: number
    role: Role
    posts?: postCreateManyWithoutAuthorInput
    editorPosts?: postCreateManyWithoutEditorInput
  }

  export type UserUpdateInput = {
    email?: XOR<string, StringFieldUpdateOperationsInput>
    name?: string | NullableStringFieldUpdateOperationsInput | null
    age?: XOR<number, IntFieldUpdateOperationsInput>
    balance?: XOR<number, FloatFieldUpdateOperationsInput>
    amount?: XOR<number, FloatFieldUpdateOperationsInput>
    role?: XOR<Role, EnumRoleFieldUpdateOperationsInput>
    posts?: postUpdateManyWithoutAuthorInput
    editorPosts?: postUpdateManyWithoutEditorInput
  }

  export type UserUpdateManyMutationInput = {
    email?: XOR<string, StringFieldUpdateOperationsInput>
    name?: string | NullableStringFieldUpdateOperationsInput | null
    age?: XOR<number, IntFieldUpdateOperationsInput>
    balance?: XOR<number, FloatFieldUpdateOperationsInput>
    amount?: XOR<number, FloatFieldUpdateOperationsInput>
    role?: XOR<Role, EnumRoleFieldUpdateOperationsInput>
  }

  export type postCreateInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published: boolean
    title: string
    subtitle: string
    content?: XOR<string, null>
    kind?: XOR<PostKind, null>
    metadata: InputJsonValue
    author: UserCreateOneWithoutPostsInput
    editor?: UserCreateOneWithoutEditorPostsInput
  }

  export type postUpdateInput = {
    uuid?: XOR<string, StringFieldUpdateOperationsInput>
    createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    published?: XOR<boolean, BoolFieldUpdateOperationsInput>
    title?: XOR<string, StringFieldUpdateOperationsInput>
    subtitle?: XOR<string, StringFieldUpdateOperationsInput>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    kind?: PostKind | NullableEnumPostKindFieldUpdateOperationsInput | null
    metadata?: InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsInput
    editor?: UserUpdateOneWithoutEditorPostsInput
  }

  export type postUpdateManyMutationInput = {
    uuid?: XOR<string, StringFieldUpdateOperationsInput>
    createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    published?: XOR<boolean, BoolFieldUpdateOperationsInput>
    title?: XOR<string, StringFieldUpdateOperationsInput>
    subtitle?: XOR<string, StringFieldUpdateOperationsInput>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    kind?: PostKind | NullableEnumPostKindFieldUpdateOperationsInput | null
    metadata?: InputJsonValue
  }

  export type CategoryCreateInput = {
    name: string
    slug: string
    number: number
  }

  export type CategoryUpdateInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
    slug?: XOR<string, StringFieldUpdateOperationsInput>
    number?: XOR<number, IntFieldUpdateOperationsInput>
  }

  export type CategoryUpdateManyMutationInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
    slug?: XOR<string, StringFieldUpdateOperationsInput>
    number?: XOR<number, IntFieldUpdateOperationsInput>
  }

  export type PatientCreateInput = {
    firstName: string
    lastName: string
    email: string
  }

  export type PatientUpdateInput = {
    firstName?: XOR<string, StringFieldUpdateOperationsInput>
    lastName?: XOR<string, StringFieldUpdateOperationsInput>
    email?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type PatientUpdateManyMutationInput = {
    firstName?: XOR<string, StringFieldUpdateOperationsInput>
    lastName?: XOR<string, StringFieldUpdateOperationsInput>
    email?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type MovieCreateInput = {
    title: string
    director: DirectorCreateOneWithoutMoviesInput
  }

  export type MovieUpdateInput = {
    title?: XOR<string, StringFieldUpdateOperationsInput>
    director?: DirectorUpdateOneRequiredWithoutMoviesInput
  }

  export type MovieUpdateManyMutationInput = {
    title?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type DirectorCreateInput = {
    firstName: string
    lastName: string
    movies?: MovieCreateManyWithoutDirectorInput
  }

  export type DirectorUpdateInput = {
    firstName?: XOR<string, StringFieldUpdateOperationsInput>
    lastName?: XOR<string, StringFieldUpdateOperationsInput>
    movies?: MovieUpdateManyWithoutDirectorInput
  }

  export type DirectorUpdateManyMutationInput = {
    firstName?: XOR<string, StringFieldUpdateOperationsInput>
    lastName?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type ProblemCreateInput = {
    problemText: string
    likedBy?: CreatorCreateManyWithoutLikesInput
    creator?: CreatorCreateOneWithoutProblemsInput
  }

  export type ProblemUpdateInput = {
    problemText?: XOR<string, StringFieldUpdateOperationsInput>
    likedBy?: CreatorUpdateManyWithoutLikesInput
    creator?: CreatorUpdateOneWithoutProblemsInput
  }

  export type ProblemUpdateManyMutationInput = {
    problemText?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type CreatorCreateInput = {
    name: string
    likes?: ProblemCreateManyWithoutLikedByInput
    problems?: ProblemCreateManyWithoutCreatorInput
  }

  export type CreatorUpdateInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
    likes?: ProblemUpdateManyWithoutLikedByInput
    problems?: ProblemUpdateManyWithoutCreatorInput
  }

  export type CreatorUpdateManyMutationInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedIntFilter>
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
    mode?: QueryMode
    not?: XOR<string, NestedStringFilter>
  }

  export type StringNullableFilter = {
    equals?: XOR<string, null>
    in?: XOR<Enumerable<string>, null>
    notIn?: XOR<Enumerable<string>, null>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: string | NestedStringNullableFilter | null
  }

  export type FloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedFloatFilter>
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
    not?: XOR<Role, NestedEnumRoleFilter>
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: XOR<Date | string, NestedDateTimeFilter>
  }

  export type BoolFilter = {
    equals?: boolean
    not?: XOR<boolean, NestedBoolFilter>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IntNullableFilter = {
    equals?: XOR<number, null>
    in?: XOR<Enumerable<number>, null>
    notIn?: XOR<Enumerable<number>, null>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: number | NestedIntNullableFilter | null
  }

  export type EnumPostKindNullableFilter = {
    equals?: XOR<PostKind, null>
    in?: XOR<Enumerable<PostKind>, null>
    notIn?: XOR<Enumerable<PostKind>, null>
    not?: PostKind | NestedEnumPostKindNullableFilter | null
  }

  export type JsonFilter = {
    equals?: InputJsonValue
    not?: InputJsonValue
  }

  export type SlugNumberCompoundUniqueInput = {
    slug: string
    number: number
  }

  export type FirstNameLastNameCompoundUniqueInput = {
    firstName: string
    lastName: string
  }

  export type DirectorRelationFilter = {
    is?: DirectorWhereInput
    isNot?: DirectorWhereInput
  }

  export type DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput = {
    directorFirstName: string
    directorLastName: string
    title: string
  }

  export type MovieListRelationFilter = {
    every?: MovieWhereInput
    some?: MovieWhereInput
    none?: MovieWhereInput
  }

  export type CreatorListRelationFilter = {
    every?: CreatorWhereInput
    some?: CreatorWhereInput
    none?: CreatorWhereInput
  }

  export type CreatorRelationFilter = {
    is?: XOR<CreatorWhereInput, null>
    isNot?: XOR<CreatorWhereInput, null>
  }

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type postCreateManyWithoutAuthorInput = {
    create?: XOR<postCreateWithoutAuthorInput, Enumerable<postCreateWithoutAuthorInput>>
    connect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    connectOrCreate?: XOR<postCreateOrConnectWithoutauthorInput, Enumerable<postCreateOrConnectWithoutauthorInput>>
  }

  export type postCreateManyWithoutEditorInput = {
    create?: XOR<postCreateWithoutEditorInput, Enumerable<postCreateWithoutEditorInput>>
    connect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    connectOrCreate?: XOR<postCreateOrConnectWithouteditorInput, Enumerable<postCreateOrConnectWithouteditorInput>>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: XOR<string, null>
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

  export type postUpdateManyWithoutAuthorInput = {
    create?: XOR<postCreateWithoutAuthorInput, Enumerable<postCreateWithoutAuthorInput>>
    connect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    set?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    disconnect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    delete?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    update?: XOR<postUpdateWithWhereUniqueWithoutAuthorInput, Enumerable<postUpdateWithWhereUniqueWithoutAuthorInput>>
    updateMany?: XOR<postUpdateManyWithWhereWithoutAuthorInput, Enumerable<postUpdateManyWithWhereWithoutAuthorInput>>
    deleteMany?: XOR<postScalarWhereInput, Enumerable<postScalarWhereInput>>
    upsert?: XOR<postUpsertWithWhereUniqueWithoutAuthorInput, Enumerable<postUpsertWithWhereUniqueWithoutAuthorInput>>
    connectOrCreate?: XOR<postCreateOrConnectWithoutauthorInput, Enumerable<postCreateOrConnectWithoutauthorInput>>
  }

  export type postUpdateManyWithoutEditorInput = {
    create?: XOR<postCreateWithoutEditorInput, Enumerable<postCreateWithoutEditorInput>>
    connect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    set?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    disconnect?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    delete?: XOR<postWhereUniqueInput, Enumerable<postWhereUniqueInput>>
    update?: XOR<postUpdateWithWhereUniqueWithoutEditorInput, Enumerable<postUpdateWithWhereUniqueWithoutEditorInput>>
    updateMany?: XOR<postUpdateManyWithWhereWithoutEditorInput, Enumerable<postUpdateManyWithWhereWithoutEditorInput>>
    deleteMany?: XOR<postScalarWhereInput, Enumerable<postScalarWhereInput>>
    upsert?: XOR<postUpsertWithWhereUniqueWithoutEditorInput, Enumerable<postUpsertWithWhereUniqueWithoutEditorInput>>
    connectOrCreate?: XOR<postCreateOrConnectWithouteditorInput, Enumerable<postCreateOrConnectWithouteditorInput>>
  }

  export type UserCreateOneWithoutPostsInput = {
    create?: UserCreateWithoutPostsInput
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  }

  export type UserCreateOneWithoutEditorPostsInput = {
    create?: UserCreateWithoutEditorPostsInput
    connect?: UserWhereUniqueInput
    connectOrCreate?: UserCreateOrConnectWithouteditorPostsInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableEnumPostKindFieldUpdateOperationsInput = {
    set?: XOR<PostKind, null>
  }

  export type UserUpdateOneRequiredWithoutPostsInput = {
    create?: UserCreateWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: UserUpdateWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connectOrCreate?: UserCreateOrConnectWithoutpostsInput
  }

  export type UserUpdateOneWithoutEditorPostsInput = {
    create?: UserCreateWithoutEditorPostsInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: UserUpdateWithoutEditorPostsInput
    upsert?: UserUpsertWithoutEditorPostsInput
    connectOrCreate?: UserCreateOrConnectWithouteditorPostsInput
  }

  export type DirectorCreateOneWithoutMoviesInput = {
    create?: DirectorCreateWithoutMoviesInput
    connect?: DirectorWhereUniqueInput
    connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput
  }

  export type DirectorUpdateOneRequiredWithoutMoviesInput = {
    create?: DirectorCreateWithoutMoviesInput
    connect?: DirectorWhereUniqueInput
    update?: DirectorUpdateWithoutMoviesInput
    upsert?: DirectorUpsertWithoutMoviesInput
    connectOrCreate?: DirectorCreateOrConnectWithoutmoviesInput
  }

  export type MovieCreateManyWithoutDirectorInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, Enumerable<MovieCreateWithoutDirectorInput>>
    connect?: XOR<MovieWhereUniqueInput, Enumerable<MovieWhereUniqueInput>>
    connectOrCreate?: XOR<MovieCreateOrConnectWithoutdirectorInput, Enumerable<MovieCreateOrConnectWithoutdirectorInput>>
  }

  export type MovieUpdateManyWithoutDirectorInput = {
    create?: XOR<MovieCreateWithoutDirectorInput, Enumerable<MovieCreateWithoutDirectorInput>>
    connect?: XOR<MovieWhereUniqueInput, Enumerable<MovieWhereUniqueInput>>
    set?: XOR<MovieWhereUniqueInput, Enumerable<MovieWhereUniqueInput>>
    disconnect?: XOR<MovieWhereUniqueInput, Enumerable<MovieWhereUniqueInput>>
    delete?: XOR<MovieWhereUniqueInput, Enumerable<MovieWhereUniqueInput>>
    update?: XOR<MovieUpdateWithWhereUniqueWithoutDirectorInput, Enumerable<MovieUpdateWithWhereUniqueWithoutDirectorInput>>
    updateMany?: XOR<MovieUpdateManyWithWhereWithoutDirectorInput, Enumerable<MovieUpdateManyWithWhereWithoutDirectorInput>>
    deleteMany?: XOR<MovieScalarWhereInput, Enumerable<MovieScalarWhereInput>>
    upsert?: XOR<MovieUpsertWithWhereUniqueWithoutDirectorInput, Enumerable<MovieUpsertWithWhereUniqueWithoutDirectorInput>>
    connectOrCreate?: XOR<MovieCreateOrConnectWithoutdirectorInput, Enumerable<MovieCreateOrConnectWithoutdirectorInput>>
  }

  export type CreatorCreateManyWithoutLikesInput = {
    create?: XOR<CreatorCreateWithoutLikesInput, Enumerable<CreatorCreateWithoutLikesInput>>
    connect?: XOR<CreatorWhereUniqueInput, Enumerable<CreatorWhereUniqueInput>>
    connectOrCreate?: XOR<CreatorCreateOrConnectWithoutlikesInput, Enumerable<CreatorCreateOrConnectWithoutlikesInput>>
  }

  export type CreatorCreateOneWithoutProblemsInput = {
    create?: CreatorCreateWithoutProblemsInput
    connect?: CreatorWhereUniqueInput
    connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput
  }

  export type CreatorUpdateManyWithoutLikesInput = {
    create?: XOR<CreatorCreateWithoutLikesInput, Enumerable<CreatorCreateWithoutLikesInput>>
    connect?: XOR<CreatorWhereUniqueInput, Enumerable<CreatorWhereUniqueInput>>
    set?: XOR<CreatorWhereUniqueInput, Enumerable<CreatorWhereUniqueInput>>
    disconnect?: XOR<CreatorWhereUniqueInput, Enumerable<CreatorWhereUniqueInput>>
    delete?: XOR<CreatorWhereUniqueInput, Enumerable<CreatorWhereUniqueInput>>
    update?: XOR<CreatorUpdateWithWhereUniqueWithoutLikesInput, Enumerable<CreatorUpdateWithWhereUniqueWithoutLikesInput>>
    updateMany?: XOR<CreatorUpdateManyWithWhereWithoutLikesInput, Enumerable<CreatorUpdateManyWithWhereWithoutLikesInput>>
    deleteMany?: XOR<CreatorScalarWhereInput, Enumerable<CreatorScalarWhereInput>>
    upsert?: XOR<CreatorUpsertWithWhereUniqueWithoutLikesInput, Enumerable<CreatorUpsertWithWhereUniqueWithoutLikesInput>>
    connectOrCreate?: XOR<CreatorCreateOrConnectWithoutlikesInput, Enumerable<CreatorCreateOrConnectWithoutlikesInput>>
  }

  export type CreatorUpdateOneWithoutProblemsInput = {
    create?: CreatorCreateWithoutProblemsInput
    connect?: CreatorWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: CreatorUpdateWithoutProblemsInput
    upsert?: CreatorUpsertWithoutProblemsInput
    connectOrCreate?: CreatorCreateOrConnectWithoutproblemsInput
  }

  export type ProblemCreateManyWithoutLikedByInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, Enumerable<ProblemCreateWithoutLikedByInput>>
    connect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    connectOrCreate?: XOR<ProblemCreateOrConnectWithoutlikedByInput, Enumerable<ProblemCreateOrConnectWithoutlikedByInput>>
  }

  export type ProblemCreateManyWithoutCreatorInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, Enumerable<ProblemCreateWithoutCreatorInput>>
    connect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    connectOrCreate?: XOR<ProblemCreateOrConnectWithoutcreatorInput, Enumerable<ProblemCreateOrConnectWithoutcreatorInput>>
  }

  export type ProblemUpdateManyWithoutLikedByInput = {
    create?: XOR<ProblemCreateWithoutLikedByInput, Enumerable<ProblemCreateWithoutLikedByInput>>
    connect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    set?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    disconnect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    delete?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    update?: XOR<ProblemUpdateWithWhereUniqueWithoutLikedByInput, Enumerable<ProblemUpdateWithWhereUniqueWithoutLikedByInput>>
    updateMany?: XOR<ProblemUpdateManyWithWhereWithoutLikedByInput, Enumerable<ProblemUpdateManyWithWhereWithoutLikedByInput>>
    deleteMany?: XOR<ProblemScalarWhereInput, Enumerable<ProblemScalarWhereInput>>
    upsert?: XOR<ProblemUpsertWithWhereUniqueWithoutLikedByInput, Enumerable<ProblemUpsertWithWhereUniqueWithoutLikedByInput>>
    connectOrCreate?: XOR<ProblemCreateOrConnectWithoutlikedByInput, Enumerable<ProblemCreateOrConnectWithoutlikedByInput>>
  }

  export type ProblemUpdateManyWithoutCreatorInput = {
    create?: XOR<ProblemCreateWithoutCreatorInput, Enumerable<ProblemCreateWithoutCreatorInput>>
    connect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    set?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    disconnect?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    delete?: XOR<ProblemWhereUniqueInput, Enumerable<ProblemWhereUniqueInput>>
    update?: XOR<ProblemUpdateWithWhereUniqueWithoutCreatorInput, Enumerable<ProblemUpdateWithWhereUniqueWithoutCreatorInput>>
    updateMany?: XOR<ProblemUpdateManyWithWhereWithoutCreatorInput, Enumerable<ProblemUpdateManyWithWhereWithoutCreatorInput>>
    deleteMany?: XOR<ProblemScalarWhereInput, Enumerable<ProblemScalarWhereInput>>
    upsert?: XOR<ProblemUpsertWithWhereUniqueWithoutCreatorInput, Enumerable<ProblemUpsertWithWhereUniqueWithoutCreatorInput>>
    connectOrCreate?: XOR<ProblemCreateOrConnectWithoutcreatorInput, Enumerable<ProblemCreateOrConnectWithoutcreatorInput>>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedIntFilter>
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
    not?: XOR<string, NestedStringFilter>
  }

  export type NestedStringNullableFilter = {
    equals?: XOR<string, null>
    in?: XOR<Enumerable<string>, null>
    notIn?: XOR<Enumerable<string>, null>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: string | NestedStringNullableFilter | null
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: XOR<number, NestedFloatFilter>
  }

  export type NestedEnumRoleFilter = {
    equals?: Role
    in?: Enumerable<Role>
    notIn?: Enumerable<Role>
    not?: XOR<Role, NestedEnumRoleFilter>
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: XOR<Date | string, NestedDateTimeFilter>
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: XOR<boolean, NestedBoolFilter>
  }

  export type NestedIntNullableFilter = {
    equals?: XOR<number, null>
    in?: XOR<Enumerable<number>, null>
    notIn?: XOR<Enumerable<number>, null>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: number | NestedIntNullableFilter | null
  }

  export type NestedEnumPostKindNullableFilter = {
    equals?: XOR<PostKind, null>
    in?: XOR<Enumerable<PostKind>, null>
    notIn?: XOR<Enumerable<PostKind>, null>
    not?: PostKind | NestedEnumPostKindNullableFilter | null
  }

  export type postCreateWithoutAuthorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published: boolean
    title: string
    subtitle: string
    content?: XOR<string, null>
    kind?: XOR<PostKind, null>
    metadata: InputJsonValue
    editor?: UserCreateOneWithoutEditorPostsInput
  }

  export type postCreateOrConnectWithoutauthorInput = {
    where: postWhereUniqueInput
    create: postCreateWithoutAuthorInput
  }

  export type postCreateWithoutEditorInput = {
    uuid?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published: boolean
    title: string
    subtitle: string
    content?: XOR<string, null>
    kind?: XOR<PostKind, null>
    metadata: InputJsonValue
    author: UserCreateOneWithoutPostsInput
  }

  export type postCreateOrConnectWithouteditorInput = {
    where: postWhereUniqueInput
    create: postCreateWithoutEditorInput
  }

  export type postUpdateWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    data: postUpdateWithoutAuthorInput
  }

  export type postUpdateManyWithWhereWithoutAuthorInput = {
    where: postScalarWhereInput
    data: postUpdateManyMutationInput
  }

  export type postScalarWhereInput = {
    AND?: XOR<postScalarWhereInput, Enumerable<postScalarWhereInput>>
    OR?: XOR<postScalarWhereInput, Enumerable<postScalarWhereInput>>
    NOT?: XOR<postScalarWhereInput, Enumerable<postScalarWhereInput>>
    uuid?: XOR<StringFilter, string>
    createdAt?: XOR<DateTimeFilter, Date | string>
    updatedAt?: XOR<DateTimeFilter, Date | string>
    published?: XOR<BoolFilter, boolean>
    title?: XOR<StringFilter, string>
    subtitle?: XOR<StringFilter, string>
    content?: StringNullableFilter | string | null
    authorId?: XOR<IntFilter, number>
    editorId?: IntNullableFilter | number | null
    kind?: EnumPostKindNullableFilter | PostKind | null
    metadata?: JsonFilter
  }

  export type postUpsertWithWhereUniqueWithoutAuthorInput = {
    where: postWhereUniqueInput
    update: postUpdateWithoutAuthorInput
    create: postCreateWithoutAuthorInput
  }

  export type postUpdateWithWhereUniqueWithoutEditorInput = {
    where: postWhereUniqueInput
    data: postUpdateWithoutEditorInput
  }

  export type postUpdateManyWithWhereWithoutEditorInput = {
    where: postScalarWhereInput
    data: postUpdateManyMutationInput
  }

  export type postUpsertWithWhereUniqueWithoutEditorInput = {
    where: postWhereUniqueInput
    update: postUpdateWithoutEditorInput
    create: postCreateWithoutEditorInput
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: XOR<string, null>
    age: number
    balance: number
    amount: number
    role: Role
    editorPosts?: postCreateManyWithoutEditorInput
  }

  export type UserCreateOrConnectWithoutpostsInput = {
    where: UserWhereUniqueInput
    create: UserCreateWithoutPostsInput
  }

  export type UserCreateWithoutEditorPostsInput = {
    email: string
    name?: XOR<string, null>
    age: number
    balance: number
    amount: number
    role: Role
    posts?: postCreateManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithouteditorPostsInput = {
    where: UserWhereUniqueInput
    create: UserCreateWithoutEditorPostsInput
  }

  export type UserUpdateWithoutPostsInput = {
    email?: XOR<string, StringFieldUpdateOperationsInput>
    name?: string | NullableStringFieldUpdateOperationsInput | null
    age?: XOR<number, IntFieldUpdateOperationsInput>
    balance?: XOR<number, FloatFieldUpdateOperationsInput>
    amount?: XOR<number, FloatFieldUpdateOperationsInput>
    role?: XOR<Role, EnumRoleFieldUpdateOperationsInput>
    editorPosts?: postUpdateManyWithoutEditorInput
  }

  export type UserUpsertWithoutPostsInput = {
    update: UserUpdateWithoutPostsInput
    create: UserCreateWithoutPostsInput
  }

  export type UserUpdateWithoutEditorPostsInput = {
    email?: XOR<string, StringFieldUpdateOperationsInput>
    name?: string | NullableStringFieldUpdateOperationsInput | null
    age?: XOR<number, IntFieldUpdateOperationsInput>
    balance?: XOR<number, FloatFieldUpdateOperationsInput>
    amount?: XOR<number, FloatFieldUpdateOperationsInput>
    role?: XOR<Role, EnumRoleFieldUpdateOperationsInput>
    posts?: postUpdateManyWithoutAuthorInput
  }

  export type UserUpsertWithoutEditorPostsInput = {
    update: UserUpdateWithoutEditorPostsInput
    create: UserCreateWithoutEditorPostsInput
  }

  export type DirectorCreateWithoutMoviesInput = {
    firstName: string
    lastName: string
  }

  export type DirectorCreateOrConnectWithoutmoviesInput = {
    where: DirectorWhereUniqueInput
    create: DirectorCreateWithoutMoviesInput
  }

  export type DirectorUpdateWithoutMoviesInput = {
    firstName?: XOR<string, StringFieldUpdateOperationsInput>
    lastName?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type DirectorUpsertWithoutMoviesInput = {
    update: DirectorUpdateWithoutMoviesInput
    create: DirectorCreateWithoutMoviesInput
  }

  export type MovieCreateWithoutDirectorInput = {
    title: string
  }

  export type MovieCreateOrConnectWithoutdirectorInput = {
    where: MovieWhereUniqueInput
    create: MovieCreateWithoutDirectorInput
  }

  export type MovieUpdateWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    data: MovieUpdateWithoutDirectorInput
  }

  export type MovieUpdateManyWithWhereWithoutDirectorInput = {
    where: MovieScalarWhereInput
    data: MovieUpdateManyMutationInput
  }

  export type MovieScalarWhereInput = {
    AND?: XOR<MovieScalarWhereInput, Enumerable<MovieScalarWhereInput>>
    OR?: XOR<MovieScalarWhereInput, Enumerable<MovieScalarWhereInput>>
    NOT?: XOR<MovieScalarWhereInput, Enumerable<MovieScalarWhereInput>>
    directorFirstName?: XOR<StringFilter, string>
    directorLastName?: XOR<StringFilter, string>
    title?: XOR<StringFilter, string>
  }

  export type MovieUpsertWithWhereUniqueWithoutDirectorInput = {
    where: MovieWhereUniqueInput
    update: MovieUpdateWithoutDirectorInput
    create: MovieCreateWithoutDirectorInput
  }

  export type CreatorCreateWithoutLikesInput = {
    name: string
    problems?: ProblemCreateManyWithoutCreatorInput
  }

  export type CreatorCreateOrConnectWithoutlikesInput = {
    where: CreatorWhereUniqueInput
    create: CreatorCreateWithoutLikesInput
  }

  export type CreatorCreateWithoutProblemsInput = {
    name: string
    likes?: ProblemCreateManyWithoutLikedByInput
  }

  export type CreatorCreateOrConnectWithoutproblemsInput = {
    where: CreatorWhereUniqueInput
    create: CreatorCreateWithoutProblemsInput
  }

  export type CreatorUpdateWithWhereUniqueWithoutLikesInput = {
    where: CreatorWhereUniqueInput
    data: CreatorUpdateWithoutLikesInput
  }

  export type CreatorUpdateManyWithWhereWithoutLikesInput = {
    where: CreatorScalarWhereInput
    data: CreatorUpdateManyMutationInput
  }

  export type CreatorScalarWhereInput = {
    AND?: XOR<CreatorScalarWhereInput, Enumerable<CreatorScalarWhereInput>>
    OR?: XOR<CreatorScalarWhereInput, Enumerable<CreatorScalarWhereInput>>
    NOT?: XOR<CreatorScalarWhereInput, Enumerable<CreatorScalarWhereInput>>
    id?: XOR<IntFilter, number>
    name?: XOR<StringFilter, string>
  }

  export type CreatorUpsertWithWhereUniqueWithoutLikesInput = {
    where: CreatorWhereUniqueInput
    update: CreatorUpdateWithoutLikesInput
    create: CreatorCreateWithoutLikesInput
  }

  export type CreatorUpdateWithoutProblemsInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
    likes?: ProblemUpdateManyWithoutLikedByInput
  }

  export type CreatorUpsertWithoutProblemsInput = {
    update: CreatorUpdateWithoutProblemsInput
    create: CreatorCreateWithoutProblemsInput
  }

  export type ProblemCreateWithoutLikedByInput = {
    problemText: string
    creator?: CreatorCreateOneWithoutProblemsInput
  }

  export type ProblemCreateOrConnectWithoutlikedByInput = {
    where: ProblemWhereUniqueInput
    create: ProblemCreateWithoutLikedByInput
  }

  export type ProblemCreateWithoutCreatorInput = {
    problemText: string
    likedBy?: CreatorCreateManyWithoutLikesInput
  }

  export type ProblemCreateOrConnectWithoutcreatorInput = {
    where: ProblemWhereUniqueInput
    create: ProblemCreateWithoutCreatorInput
  }

  export type ProblemUpdateWithWhereUniqueWithoutLikedByInput = {
    where: ProblemWhereUniqueInput
    data: ProblemUpdateWithoutLikedByInput
  }

  export type ProblemUpdateManyWithWhereWithoutLikedByInput = {
    where: ProblemScalarWhereInput
    data: ProblemUpdateManyMutationInput
  }

  export type ProblemScalarWhereInput = {
    AND?: XOR<ProblemScalarWhereInput, Enumerable<ProblemScalarWhereInput>>
    OR?: XOR<ProblemScalarWhereInput, Enumerable<ProblemScalarWhereInput>>
    NOT?: XOR<ProblemScalarWhereInput, Enumerable<ProblemScalarWhereInput>>
    id?: XOR<IntFilter, number>
    problemText?: XOR<StringFilter, string>
    creatorId?: IntNullableFilter | number | null
  }

  export type ProblemUpsertWithWhereUniqueWithoutLikedByInput = {
    where: ProblemWhereUniqueInput
    update: ProblemUpdateWithoutLikedByInput
    create: ProblemCreateWithoutLikedByInput
  }

  export type ProblemUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ProblemWhereUniqueInput
    data: ProblemUpdateWithoutCreatorInput
  }

  export type ProblemUpdateManyWithWhereWithoutCreatorInput = {
    where: ProblemScalarWhereInput
    data: ProblemUpdateManyMutationInput
  }

  export type ProblemUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ProblemWhereUniqueInput
    update: ProblemUpdateWithoutCreatorInput
    create: ProblemCreateWithoutCreatorInput
  }

  export type postUpdateWithoutAuthorInput = {
    uuid?: XOR<string, StringFieldUpdateOperationsInput>
    createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    published?: XOR<boolean, BoolFieldUpdateOperationsInput>
    title?: XOR<string, StringFieldUpdateOperationsInput>
    subtitle?: XOR<string, StringFieldUpdateOperationsInput>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    kind?: PostKind | NullableEnumPostKindFieldUpdateOperationsInput | null
    metadata?: InputJsonValue
    editor?: UserUpdateOneWithoutEditorPostsInput
  }

  export type postUpdateWithoutEditorInput = {
    uuid?: XOR<string, StringFieldUpdateOperationsInput>
    createdAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    updatedAt?: XOR<Date | string, DateTimeFieldUpdateOperationsInput>
    published?: XOR<boolean, BoolFieldUpdateOperationsInput>
    title?: XOR<string, StringFieldUpdateOperationsInput>
    subtitle?: XOR<string, StringFieldUpdateOperationsInput>
    content?: string | NullableStringFieldUpdateOperationsInput | null
    kind?: PostKind | NullableEnumPostKindFieldUpdateOperationsInput | null
    metadata?: InputJsonValue
    author?: UserUpdateOneRequiredWithoutPostsInput
  }

  export type MovieUpdateWithoutDirectorInput = {
    title?: XOR<string, StringFieldUpdateOperationsInput>
  }

  export type CreatorUpdateWithoutLikesInput = {
    name?: XOR<string, StringFieldUpdateOperationsInput>
    problems?: ProblemUpdateManyWithoutCreatorInput
  }

  export type ProblemUpdateWithoutLikedByInput = {
    problemText?: XOR<string, StringFieldUpdateOperationsInput>
    creator?: CreatorUpdateOneWithoutProblemsInput
  }

  export type ProblemUpdateWithoutCreatorInput = {
    problemText?: XOR<string, StringFieldUpdateOperationsInput>
    likedBy?: CreatorUpdateManyWithoutLikesInput
  }



  /**
   * Batch Payload for updateMany & deleteMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}

/*
* Exports for compatiblity introduced in 2.12.0
* Please import from the Prisma namespace instead
*/

/**
 * @deprecated Renamed to `Prisma.UserDistinctFieldEnum`
 */
export type UserDistinctFieldEnum = Prisma.UserDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.PostDistinctFieldEnum`
 */
export type PostDistinctFieldEnum = Prisma.PostDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.CategoryDistinctFieldEnum`
 */
export type CategoryDistinctFieldEnum = Prisma.CategoryDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.PatientDistinctFieldEnum`
 */
export type PatientDistinctFieldEnum = Prisma.PatientDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.MovieDistinctFieldEnum`
 */
export type MovieDistinctFieldEnum = Prisma.MovieDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.DirectorDistinctFieldEnum`
 */
export type DirectorDistinctFieldEnum = Prisma.DirectorDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.ProblemDistinctFieldEnum`
 */
export type ProblemDistinctFieldEnum = Prisma.ProblemDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.CreatorDistinctFieldEnum`
 */
export type CreatorDistinctFieldEnum = Prisma.CreatorDistinctFieldEnum

/**
 * @deprecated Renamed to `Prisma.SortOrder`
 */
export type SortOrder = Prisma.SortOrder

/**
 * @deprecated Renamed to `Prisma.QueryMode`
 */
export type QueryMode = Prisma.QueryMode

/**
 * @deprecated Renamed to `Prisma.ModelName`
 */
export type ModelName = Prisma.ModelName

/**
 * @deprecated Renamed to `Prisma.AggregateUser`
 */
export type AggregateUser = Prisma.AggregateUser

/**
 * @deprecated Renamed to `Prisma.UserAvgAggregateOutputType`
 */
export type UserAvgAggregateOutputType = Prisma.UserAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserSumAggregateOutputType`
 */
export type UserSumAggregateOutputType = Prisma.UserSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserMinAggregateOutputType`
 */
export type UserMinAggregateOutputType = Prisma.UserMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.UserMaxAggregateOutputType`
 */
export type UserMaxAggregateOutputType = Prisma.UserMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateUserArgs`
 */
export type AggregateUserArgs = Prisma.AggregateUserArgs

/**
 * @deprecated Renamed to `Prisma.UserAvgAggregateInputType`
 */
export type UserAvgAggregateInputType = Prisma.UserAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserSumAggregateInputType`
 */
export type UserSumAggregateInputType = Prisma.UserSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserMinAggregateInputType`
 */
export type UserMinAggregateInputType = Prisma.UserMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserMaxAggregateInputType`
 */
export type UserMaxAggregateInputType = Prisma.UserMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.UserSelect`
 */
export type UserSelect = Prisma.UserSelect

/**
 * @deprecated Renamed to `Prisma.UserInclude`
 */
export type UserInclude = Prisma.UserInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueUserArgs`
 */
export type FindUniqueUserArgs = Prisma.FindUniqueUserArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstUserArgs`
 */
export type FindFirstUserArgs = Prisma.FindFirstUserArgs

/**
 * @deprecated Renamed to `Prisma.FindManyUserArgs`
 */
export type FindManyUserArgs = Prisma.FindManyUserArgs

/**
 * @deprecated Renamed to `Prisma.UserCreateArgs`
 */
export type UserCreateArgs = Prisma.UserCreateArgs

/**
 * @deprecated Renamed to `Prisma.UserUpdateArgs`
 */
export type UserUpdateArgs = Prisma.UserUpdateArgs

/**
 * @deprecated Renamed to `Prisma.UserUpdateManyArgs`
 */
export type UserUpdateManyArgs = Prisma.UserUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.UserUpsertArgs`
 */
export type UserUpsertArgs = Prisma.UserUpsertArgs

/**
 * @deprecated Renamed to `Prisma.UserDeleteArgs`
 */
export type UserDeleteArgs = Prisma.UserDeleteArgs

/**
 * @deprecated Renamed to `Prisma.UserDeleteManyArgs`
 */
export type UserDeleteManyArgs = Prisma.UserDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregatePost`
 */
export type AggregatePost = Prisma.AggregatePost

/**
 * @deprecated Renamed to `Prisma.PostAvgAggregateOutputType`
 */
export type PostAvgAggregateOutputType = Prisma.PostAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostSumAggregateOutputType`
 */
export type PostSumAggregateOutputType = Prisma.PostSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostMinAggregateOutputType`
 */
export type PostMinAggregateOutputType = Prisma.PostMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.PostMaxAggregateOutputType`
 */
export type PostMaxAggregateOutputType = Prisma.PostMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregatePostArgs`
 */
export type AggregatePostArgs = Prisma.AggregatePostArgs

/**
 * @deprecated Renamed to `Prisma.PostAvgAggregateInputType`
 */
export type PostAvgAggregateInputType = Prisma.PostAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostSumAggregateInputType`
 */
export type PostSumAggregateInputType = Prisma.PostSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostMinAggregateInputType`
 */
export type PostMinAggregateInputType = Prisma.PostMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.PostMaxAggregateInputType`
 */
export type PostMaxAggregateInputType = Prisma.PostMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.postSelect`
 */
export type postSelect = Prisma.postSelect

/**
 * @deprecated Renamed to `Prisma.postInclude`
 */
export type postInclude = Prisma.postInclude

/**
 * @deprecated Renamed to `Prisma.FindUniquepostArgs`
 */
export type FindUniquepostArgs = Prisma.FindUniquepostArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstpostArgs`
 */
export type FindFirstpostArgs = Prisma.FindFirstpostArgs

/**
 * @deprecated Renamed to `Prisma.FindManypostArgs`
 */
export type FindManypostArgs = Prisma.FindManypostArgs

/**
 * @deprecated Renamed to `Prisma.postCreateArgs`
 */
export type postCreateArgs = Prisma.postCreateArgs

/**
 * @deprecated Renamed to `Prisma.postUpdateArgs`
 */
export type postUpdateArgs = Prisma.postUpdateArgs

/**
 * @deprecated Renamed to `Prisma.postUpdateManyArgs`
 */
export type postUpdateManyArgs = Prisma.postUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.postUpsertArgs`
 */
export type postUpsertArgs = Prisma.postUpsertArgs

/**
 * @deprecated Renamed to `Prisma.postDeleteArgs`
 */
export type postDeleteArgs = Prisma.postDeleteArgs

/**
 * @deprecated Renamed to `Prisma.postDeleteManyArgs`
 */
export type postDeleteManyArgs = Prisma.postDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateCategory`
 */
export type AggregateCategory = Prisma.AggregateCategory

/**
 * @deprecated Renamed to `Prisma.CategoryAvgAggregateOutputType`
 */
export type CategoryAvgAggregateOutputType = Prisma.CategoryAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CategorySumAggregateOutputType`
 */
export type CategorySumAggregateOutputType = Prisma.CategorySumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CategoryMinAggregateOutputType`
 */
export type CategoryMinAggregateOutputType = Prisma.CategoryMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CategoryMaxAggregateOutputType`
 */
export type CategoryMaxAggregateOutputType = Prisma.CategoryMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateCategoryArgs`
 */
export type AggregateCategoryArgs = Prisma.AggregateCategoryArgs

/**
 * @deprecated Renamed to `Prisma.CategoryAvgAggregateInputType`
 */
export type CategoryAvgAggregateInputType = Prisma.CategoryAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CategorySumAggregateInputType`
 */
export type CategorySumAggregateInputType = Prisma.CategorySumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CategoryMinAggregateInputType`
 */
export type CategoryMinAggregateInputType = Prisma.CategoryMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CategoryMaxAggregateInputType`
 */
export type CategoryMaxAggregateInputType = Prisma.CategoryMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CategorySelect`
 */
export type CategorySelect = Prisma.CategorySelect

/**
 * @deprecated Renamed to `Prisma.FindUniqueCategoryArgs`
 */
export type FindUniqueCategoryArgs = Prisma.FindUniqueCategoryArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstCategoryArgs`
 */
export type FindFirstCategoryArgs = Prisma.FindFirstCategoryArgs

/**
 * @deprecated Renamed to `Prisma.FindManyCategoryArgs`
 */
export type FindManyCategoryArgs = Prisma.FindManyCategoryArgs

/**
 * @deprecated Renamed to `Prisma.CategoryCreateArgs`
 */
export type CategoryCreateArgs = Prisma.CategoryCreateArgs

/**
 * @deprecated Renamed to `Prisma.CategoryUpdateArgs`
 */
export type CategoryUpdateArgs = Prisma.CategoryUpdateArgs

/**
 * @deprecated Renamed to `Prisma.CategoryUpdateManyArgs`
 */
export type CategoryUpdateManyArgs = Prisma.CategoryUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.CategoryUpsertArgs`
 */
export type CategoryUpsertArgs = Prisma.CategoryUpsertArgs

/**
 * @deprecated Renamed to `Prisma.CategoryDeleteArgs`
 */
export type CategoryDeleteArgs = Prisma.CategoryDeleteArgs

/**
 * @deprecated Renamed to `Prisma.CategoryDeleteManyArgs`
 */
export type CategoryDeleteManyArgs = Prisma.CategoryDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregatePatient`
 */
export type AggregatePatient = Prisma.AggregatePatient

/**
 * @deprecated Renamed to `Prisma.AggregatePatientArgs`
 */
export type AggregatePatientArgs = Prisma.AggregatePatientArgs

/**
 * @deprecated Renamed to `Prisma.PatientSelect`
 */
export type PatientSelect = Prisma.PatientSelect

/**
 * @deprecated Renamed to `Prisma.FindUniquePatientArgs`
 */
export type FindUniquePatientArgs = Prisma.FindUniquePatientArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstPatientArgs`
 */
export type FindFirstPatientArgs = Prisma.FindFirstPatientArgs

/**
 * @deprecated Renamed to `Prisma.FindManyPatientArgs`
 */
export type FindManyPatientArgs = Prisma.FindManyPatientArgs

/**
 * @deprecated Renamed to `Prisma.PatientCreateArgs`
 */
export type PatientCreateArgs = Prisma.PatientCreateArgs

/**
 * @deprecated Renamed to `Prisma.PatientUpdateArgs`
 */
export type PatientUpdateArgs = Prisma.PatientUpdateArgs

/**
 * @deprecated Renamed to `Prisma.PatientUpdateManyArgs`
 */
export type PatientUpdateManyArgs = Prisma.PatientUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.PatientUpsertArgs`
 */
export type PatientUpsertArgs = Prisma.PatientUpsertArgs

/**
 * @deprecated Renamed to `Prisma.PatientDeleteArgs`
 */
export type PatientDeleteArgs = Prisma.PatientDeleteArgs

/**
 * @deprecated Renamed to `Prisma.PatientDeleteManyArgs`
 */
export type PatientDeleteManyArgs = Prisma.PatientDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateMovie`
 */
export type AggregateMovie = Prisma.AggregateMovie

/**
 * @deprecated Renamed to `Prisma.AggregateMovieArgs`
 */
export type AggregateMovieArgs = Prisma.AggregateMovieArgs

/**
 * @deprecated Renamed to `Prisma.MovieSelect`
 */
export type MovieSelect = Prisma.MovieSelect

/**
 * @deprecated Renamed to `Prisma.MovieInclude`
 */
export type MovieInclude = Prisma.MovieInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueMovieArgs`
 */
export type FindUniqueMovieArgs = Prisma.FindUniqueMovieArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstMovieArgs`
 */
export type FindFirstMovieArgs = Prisma.FindFirstMovieArgs

/**
 * @deprecated Renamed to `Prisma.FindManyMovieArgs`
 */
export type FindManyMovieArgs = Prisma.FindManyMovieArgs

/**
 * @deprecated Renamed to `Prisma.MovieCreateArgs`
 */
export type MovieCreateArgs = Prisma.MovieCreateArgs

/**
 * @deprecated Renamed to `Prisma.MovieUpdateArgs`
 */
export type MovieUpdateArgs = Prisma.MovieUpdateArgs

/**
 * @deprecated Renamed to `Prisma.MovieUpdateManyArgs`
 */
export type MovieUpdateManyArgs = Prisma.MovieUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.MovieUpsertArgs`
 */
export type MovieUpsertArgs = Prisma.MovieUpsertArgs

/**
 * @deprecated Renamed to `Prisma.MovieDeleteArgs`
 */
export type MovieDeleteArgs = Prisma.MovieDeleteArgs

/**
 * @deprecated Renamed to `Prisma.MovieDeleteManyArgs`
 */
export type MovieDeleteManyArgs = Prisma.MovieDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateDirector`
 */
export type AggregateDirector = Prisma.AggregateDirector

/**
 * @deprecated Renamed to `Prisma.AggregateDirectorArgs`
 */
export type AggregateDirectorArgs = Prisma.AggregateDirectorArgs

/**
 * @deprecated Renamed to `Prisma.DirectorSelect`
 */
export type DirectorSelect = Prisma.DirectorSelect

/**
 * @deprecated Renamed to `Prisma.DirectorInclude`
 */
export type DirectorInclude = Prisma.DirectorInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueDirectorArgs`
 */
export type FindUniqueDirectorArgs = Prisma.FindUniqueDirectorArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstDirectorArgs`
 */
export type FindFirstDirectorArgs = Prisma.FindFirstDirectorArgs

/**
 * @deprecated Renamed to `Prisma.FindManyDirectorArgs`
 */
export type FindManyDirectorArgs = Prisma.FindManyDirectorArgs

/**
 * @deprecated Renamed to `Prisma.DirectorCreateArgs`
 */
export type DirectorCreateArgs = Prisma.DirectorCreateArgs

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateArgs`
 */
export type DirectorUpdateArgs = Prisma.DirectorUpdateArgs

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateManyArgs`
 */
export type DirectorUpdateManyArgs = Prisma.DirectorUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.DirectorUpsertArgs`
 */
export type DirectorUpsertArgs = Prisma.DirectorUpsertArgs

/**
 * @deprecated Renamed to `Prisma.DirectorDeleteArgs`
 */
export type DirectorDeleteArgs = Prisma.DirectorDeleteArgs

/**
 * @deprecated Renamed to `Prisma.DirectorDeleteManyArgs`
 */
export type DirectorDeleteManyArgs = Prisma.DirectorDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateProblem`
 */
export type AggregateProblem = Prisma.AggregateProblem

/**
 * @deprecated Renamed to `Prisma.ProblemAvgAggregateOutputType`
 */
export type ProblemAvgAggregateOutputType = Prisma.ProblemAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.ProblemSumAggregateOutputType`
 */
export type ProblemSumAggregateOutputType = Prisma.ProblemSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.ProblemMinAggregateOutputType`
 */
export type ProblemMinAggregateOutputType = Prisma.ProblemMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.ProblemMaxAggregateOutputType`
 */
export type ProblemMaxAggregateOutputType = Prisma.ProblemMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateProblemArgs`
 */
export type AggregateProblemArgs = Prisma.AggregateProblemArgs

/**
 * @deprecated Renamed to `Prisma.ProblemAvgAggregateInputType`
 */
export type ProblemAvgAggregateInputType = Prisma.ProblemAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.ProblemSumAggregateInputType`
 */
export type ProblemSumAggregateInputType = Prisma.ProblemSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.ProblemMinAggregateInputType`
 */
export type ProblemMinAggregateInputType = Prisma.ProblemMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.ProblemMaxAggregateInputType`
 */
export type ProblemMaxAggregateInputType = Prisma.ProblemMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.ProblemSelect`
 */
export type ProblemSelect = Prisma.ProblemSelect

/**
 * @deprecated Renamed to `Prisma.ProblemInclude`
 */
export type ProblemInclude = Prisma.ProblemInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueProblemArgs`
 */
export type FindUniqueProblemArgs = Prisma.FindUniqueProblemArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstProblemArgs`
 */
export type FindFirstProblemArgs = Prisma.FindFirstProblemArgs

/**
 * @deprecated Renamed to `Prisma.FindManyProblemArgs`
 */
export type FindManyProblemArgs = Prisma.FindManyProblemArgs

/**
 * @deprecated Renamed to `Prisma.ProblemCreateArgs`
 */
export type ProblemCreateArgs = Prisma.ProblemCreateArgs

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateArgs`
 */
export type ProblemUpdateArgs = Prisma.ProblemUpdateArgs

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyArgs`
 */
export type ProblemUpdateManyArgs = Prisma.ProblemUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.ProblemUpsertArgs`
 */
export type ProblemUpsertArgs = Prisma.ProblemUpsertArgs

/**
 * @deprecated Renamed to `Prisma.ProblemDeleteArgs`
 */
export type ProblemDeleteArgs = Prisma.ProblemDeleteArgs

/**
 * @deprecated Renamed to `Prisma.ProblemDeleteManyArgs`
 */
export type ProblemDeleteManyArgs = Prisma.ProblemDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.AggregateCreator`
 */
export type AggregateCreator = Prisma.AggregateCreator

/**
 * @deprecated Renamed to `Prisma.CreatorAvgAggregateOutputType`
 */
export type CreatorAvgAggregateOutputType = Prisma.CreatorAvgAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CreatorSumAggregateOutputType`
 */
export type CreatorSumAggregateOutputType = Prisma.CreatorSumAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CreatorMinAggregateOutputType`
 */
export type CreatorMinAggregateOutputType = Prisma.CreatorMinAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.CreatorMaxAggregateOutputType`
 */
export type CreatorMaxAggregateOutputType = Prisma.CreatorMaxAggregateOutputType

/**
 * @deprecated Renamed to `Prisma.AggregateCreatorArgs`
 */
export type AggregateCreatorArgs = Prisma.AggregateCreatorArgs

/**
 * @deprecated Renamed to `Prisma.CreatorAvgAggregateInputType`
 */
export type CreatorAvgAggregateInputType = Prisma.CreatorAvgAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CreatorSumAggregateInputType`
 */
export type CreatorSumAggregateInputType = Prisma.CreatorSumAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CreatorMinAggregateInputType`
 */
export type CreatorMinAggregateInputType = Prisma.CreatorMinAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CreatorMaxAggregateInputType`
 */
export type CreatorMaxAggregateInputType = Prisma.CreatorMaxAggregateInputType

/**
 * @deprecated Renamed to `Prisma.CreatorSelect`
 */
export type CreatorSelect = Prisma.CreatorSelect

/**
 * @deprecated Renamed to `Prisma.CreatorInclude`
 */
export type CreatorInclude = Prisma.CreatorInclude

/**
 * @deprecated Renamed to `Prisma.FindUniqueCreatorArgs`
 */
export type FindUniqueCreatorArgs = Prisma.FindUniqueCreatorArgs

/**
 * @deprecated Renamed to `Prisma.FindFirstCreatorArgs`
 */
export type FindFirstCreatorArgs = Prisma.FindFirstCreatorArgs

/**
 * @deprecated Renamed to `Prisma.FindManyCreatorArgs`
 */
export type FindManyCreatorArgs = Prisma.FindManyCreatorArgs

/**
 * @deprecated Renamed to `Prisma.CreatorCreateArgs`
 */
export type CreatorCreateArgs = Prisma.CreatorCreateArgs

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateArgs`
 */
export type CreatorUpdateArgs = Prisma.CreatorUpdateArgs

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateManyArgs`
 */
export type CreatorUpdateManyArgs = Prisma.CreatorUpdateManyArgs

/**
 * @deprecated Renamed to `Prisma.CreatorUpsertArgs`
 */
export type CreatorUpsertArgs = Prisma.CreatorUpsertArgs

/**
 * @deprecated Renamed to `Prisma.CreatorDeleteArgs`
 */
export type CreatorDeleteArgs = Prisma.CreatorDeleteArgs

/**
 * @deprecated Renamed to `Prisma.CreatorDeleteManyArgs`
 */
export type CreatorDeleteManyArgs = Prisma.CreatorDeleteManyArgs

/**
 * @deprecated Renamed to `Prisma.UserWhereInput`
 */
export type UserWhereInput = Prisma.UserWhereInput

/**
 * @deprecated Renamed to `Prisma.UserOrderByInput`
 */
export type UserOrderByInput = Prisma.UserOrderByInput

/**
 * @deprecated Renamed to `Prisma.UserWhereUniqueInput`
 */
export type UserWhereUniqueInput = Prisma.UserWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.postWhereInput`
 */
export type postWhereInput = Prisma.postWhereInput

/**
 * @deprecated Renamed to `Prisma.postOrderByInput`
 */
export type postOrderByInput = Prisma.postOrderByInput

/**
 * @deprecated Renamed to `Prisma.postWhereUniqueInput`
 */
export type postWhereUniqueInput = Prisma.postWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.CategoryWhereInput`
 */
export type CategoryWhereInput = Prisma.CategoryWhereInput

/**
 * @deprecated Renamed to `Prisma.CategoryOrderByInput`
 */
export type CategoryOrderByInput = Prisma.CategoryOrderByInput

/**
 * @deprecated Renamed to `Prisma.CategoryWhereUniqueInput`
 */
export type CategoryWhereUniqueInput = Prisma.CategoryWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.PatientWhereInput`
 */
export type PatientWhereInput = Prisma.PatientWhereInput

/**
 * @deprecated Renamed to `Prisma.PatientOrderByInput`
 */
export type PatientOrderByInput = Prisma.PatientOrderByInput

/**
 * @deprecated Renamed to `Prisma.PatientWhereUniqueInput`
 */
export type PatientWhereUniqueInput = Prisma.PatientWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.MovieWhereInput`
 */
export type MovieWhereInput = Prisma.MovieWhereInput

/**
 * @deprecated Renamed to `Prisma.MovieOrderByInput`
 */
export type MovieOrderByInput = Prisma.MovieOrderByInput

/**
 * @deprecated Renamed to `Prisma.MovieWhereUniqueInput`
 */
export type MovieWhereUniqueInput = Prisma.MovieWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.DirectorWhereInput`
 */
export type DirectorWhereInput = Prisma.DirectorWhereInput

/**
 * @deprecated Renamed to `Prisma.DirectorOrderByInput`
 */
export type DirectorOrderByInput = Prisma.DirectorOrderByInput

/**
 * @deprecated Renamed to `Prisma.DirectorWhereUniqueInput`
 */
export type DirectorWhereUniqueInput = Prisma.DirectorWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.ProblemWhereInput`
 */
export type ProblemWhereInput = Prisma.ProblemWhereInput

/**
 * @deprecated Renamed to `Prisma.ProblemOrderByInput`
 */
export type ProblemOrderByInput = Prisma.ProblemOrderByInput

/**
 * @deprecated Renamed to `Prisma.ProblemWhereUniqueInput`
 */
export type ProblemWhereUniqueInput = Prisma.ProblemWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.CreatorWhereInput`
 */
export type CreatorWhereInput = Prisma.CreatorWhereInput

/**
 * @deprecated Renamed to `Prisma.CreatorOrderByInput`
 */
export type CreatorOrderByInput = Prisma.CreatorOrderByInput

/**
 * @deprecated Renamed to `Prisma.CreatorWhereUniqueInput`
 */
export type CreatorWhereUniqueInput = Prisma.CreatorWhereUniqueInput

/**
 * @deprecated Renamed to `Prisma.UserCreateInput`
 */
export type UserCreateInput = Prisma.UserCreateInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateInput`
 */
export type UserUpdateInput = Prisma.UserUpdateInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateManyMutationInput`
 */
export type UserUpdateManyMutationInput = Prisma.UserUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.postCreateInput`
 */
export type postCreateInput = Prisma.postCreateInput

/**
 * @deprecated Renamed to `Prisma.postUpdateInput`
 */
export type postUpdateInput = Prisma.postUpdateInput

/**
 * @deprecated Renamed to `Prisma.postUpdateManyMutationInput`
 */
export type postUpdateManyMutationInput = Prisma.postUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.CategoryCreateInput`
 */
export type CategoryCreateInput = Prisma.CategoryCreateInput

/**
 * @deprecated Renamed to `Prisma.CategoryUpdateInput`
 */
export type CategoryUpdateInput = Prisma.CategoryUpdateInput

/**
 * @deprecated Renamed to `Prisma.CategoryUpdateManyMutationInput`
 */
export type CategoryUpdateManyMutationInput = Prisma.CategoryUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.PatientCreateInput`
 */
export type PatientCreateInput = Prisma.PatientCreateInput

/**
 * @deprecated Renamed to `Prisma.PatientUpdateInput`
 */
export type PatientUpdateInput = Prisma.PatientUpdateInput

/**
 * @deprecated Renamed to `Prisma.PatientUpdateManyMutationInput`
 */
export type PatientUpdateManyMutationInput = Prisma.PatientUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.MovieCreateInput`
 */
export type MovieCreateInput = Prisma.MovieCreateInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateInput`
 */
export type MovieUpdateInput = Prisma.MovieUpdateInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateManyMutationInput`
 */
export type MovieUpdateManyMutationInput = Prisma.MovieUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.DirectorCreateInput`
 */
export type DirectorCreateInput = Prisma.DirectorCreateInput

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateInput`
 */
export type DirectorUpdateInput = Prisma.DirectorUpdateInput

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateManyMutationInput`
 */
export type DirectorUpdateManyMutationInput = Prisma.DirectorUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateInput`
 */
export type ProblemCreateInput = Prisma.ProblemCreateInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateInput`
 */
export type ProblemUpdateInput = Prisma.ProblemUpdateInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyMutationInput`
 */
export type ProblemUpdateManyMutationInput = Prisma.ProblemUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateInput`
 */
export type CreatorCreateInput = Prisma.CreatorCreateInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateInput`
 */
export type CreatorUpdateInput = Prisma.CreatorUpdateInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateManyMutationInput`
 */
export type CreatorUpdateManyMutationInput = Prisma.CreatorUpdateManyMutationInput

/**
 * @deprecated Renamed to `Prisma.IntFilter`
 */
export type IntFilter = Prisma.IntFilter

/**
 * @deprecated Renamed to `Prisma.StringFilter`
 */
export type StringFilter = Prisma.StringFilter

/**
 * @deprecated Renamed to `Prisma.StringNullableFilter`
 */
export type StringNullableFilter = Prisma.StringNullableFilter

/**
 * @deprecated Renamed to `Prisma.FloatFilter`
 */
export type FloatFilter = Prisma.FloatFilter

/**
 * @deprecated Renamed to `Prisma.PostListRelationFilter`
 */
export type PostListRelationFilter = Prisma.PostListRelationFilter

/**
 * @deprecated Renamed to `Prisma.EnumRoleFilter`
 */
export type EnumRoleFilter = Prisma.EnumRoleFilter

/**
 * @deprecated Renamed to `Prisma.DateTimeFilter`
 */
export type DateTimeFilter = Prisma.DateTimeFilter

/**
 * @deprecated Renamed to `Prisma.BoolFilter`
 */
export type BoolFilter = Prisma.BoolFilter

/**
 * @deprecated Renamed to `Prisma.UserRelationFilter`
 */
export type UserRelationFilter = Prisma.UserRelationFilter

/**
 * @deprecated Renamed to `Prisma.IntNullableFilter`
 */
export type IntNullableFilter = Prisma.IntNullableFilter

/**
 * @deprecated Renamed to `Prisma.EnumPostKindNullableFilter`
 */
export type EnumPostKindNullableFilter = Prisma.EnumPostKindNullableFilter

/**
 * @deprecated Renamed to `Prisma.JsonFilter`
 */
export type JsonFilter = Prisma.JsonFilter

/**
 * @deprecated Renamed to `Prisma.SlugNumberCompoundUniqueInput`
 */
export type SlugNumberCompoundUniqueInput = Prisma.SlugNumberCompoundUniqueInput

/**
 * @deprecated Renamed to `Prisma.FirstNameLastNameCompoundUniqueInput`
 */
export type FirstNameLastNameCompoundUniqueInput = Prisma.FirstNameLastNameCompoundUniqueInput

/**
 * @deprecated Renamed to `Prisma.DirectorRelationFilter`
 */
export type DirectorRelationFilter = Prisma.DirectorRelationFilter

/**
 * @deprecated Renamed to `Prisma.DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput`
 */
export type DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput = Prisma.DirectorFirstNameDirectorLastNameTitleCompoundUniqueInput

/**
 * @deprecated Renamed to `Prisma.MovieListRelationFilter`
 */
export type MovieListRelationFilter = Prisma.MovieListRelationFilter

/**
 * @deprecated Renamed to `Prisma.CreatorListRelationFilter`
 */
export type CreatorListRelationFilter = Prisma.CreatorListRelationFilter

/**
 * @deprecated Renamed to `Prisma.CreatorRelationFilter`
 */
export type CreatorRelationFilter = Prisma.CreatorRelationFilter

/**
 * @deprecated Renamed to `Prisma.ProblemListRelationFilter`
 */
export type ProblemListRelationFilter = Prisma.ProblemListRelationFilter

/**
 * @deprecated Renamed to `Prisma.postCreateManyWithoutAuthorInput`
 */
export type postCreateManyWithoutAuthorInput = Prisma.postCreateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postCreateManyWithoutEditorInput`
 */
export type postCreateManyWithoutEditorInput = Prisma.postCreateManyWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.StringFieldUpdateOperationsInput`
 */
export type StringFieldUpdateOperationsInput = Prisma.StringFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.NullableStringFieldUpdateOperationsInput`
 */
export type NullableStringFieldUpdateOperationsInput = Prisma.NullableStringFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.IntFieldUpdateOperationsInput`
 */
export type IntFieldUpdateOperationsInput = Prisma.IntFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.FloatFieldUpdateOperationsInput`
 */
export type FloatFieldUpdateOperationsInput = Prisma.FloatFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.EnumRoleFieldUpdateOperationsInput`
 */
export type EnumRoleFieldUpdateOperationsInput = Prisma.EnumRoleFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.postUpdateManyWithoutAuthorInput`
 */
export type postUpdateManyWithoutAuthorInput = Prisma.postUpdateManyWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateManyWithoutEditorInput`
 */
export type postUpdateManyWithoutEditorInput = Prisma.postUpdateManyWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOneWithoutPostsInput`
 */
export type UserCreateOneWithoutPostsInput = Prisma.UserCreateOneWithoutPostsInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOneWithoutEditorPostsInput`
 */
export type UserCreateOneWithoutEditorPostsInput = Prisma.UserCreateOneWithoutEditorPostsInput

/**
 * @deprecated Renamed to `Prisma.DateTimeFieldUpdateOperationsInput`
 */
export type DateTimeFieldUpdateOperationsInput = Prisma.DateTimeFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.BoolFieldUpdateOperationsInput`
 */
export type BoolFieldUpdateOperationsInput = Prisma.BoolFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.NullableEnumPostKindFieldUpdateOperationsInput`
 */
export type NullableEnumPostKindFieldUpdateOperationsInput = Prisma.NullableEnumPostKindFieldUpdateOperationsInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateOneRequiredWithoutPostsInput`
 */
export type UserUpdateOneRequiredWithoutPostsInput = Prisma.UserUpdateOneRequiredWithoutPostsInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateOneWithoutEditorPostsInput`
 */
export type UserUpdateOneWithoutEditorPostsInput = Prisma.UserUpdateOneWithoutEditorPostsInput

/**
 * @deprecated Renamed to `Prisma.DirectorCreateOneWithoutMoviesInput`
 */
export type DirectorCreateOneWithoutMoviesInput = Prisma.DirectorCreateOneWithoutMoviesInput

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateOneRequiredWithoutMoviesInput`
 */
export type DirectorUpdateOneRequiredWithoutMoviesInput = Prisma.DirectorUpdateOneRequiredWithoutMoviesInput

/**
 * @deprecated Renamed to `Prisma.MovieCreateManyWithoutDirectorInput`
 */
export type MovieCreateManyWithoutDirectorInput = Prisma.MovieCreateManyWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateManyWithoutDirectorInput`
 */
export type MovieUpdateManyWithoutDirectorInput = Prisma.MovieUpdateManyWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateManyWithoutLikesInput`
 */
export type CreatorCreateManyWithoutLikesInput = Prisma.CreatorCreateManyWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateOneWithoutProblemsInput`
 */
export type CreatorCreateOneWithoutProblemsInput = Prisma.CreatorCreateOneWithoutProblemsInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateManyWithoutLikesInput`
 */
export type CreatorUpdateManyWithoutLikesInput = Prisma.CreatorUpdateManyWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateOneWithoutProblemsInput`
 */
export type CreatorUpdateOneWithoutProblemsInput = Prisma.CreatorUpdateOneWithoutProblemsInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateManyWithoutLikedByInput`
 */
export type ProblemCreateManyWithoutLikedByInput = Prisma.ProblemCreateManyWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateManyWithoutCreatorInput`
 */
export type ProblemCreateManyWithoutCreatorInput = Prisma.ProblemCreateManyWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyWithoutLikedByInput`
 */
export type ProblemUpdateManyWithoutLikedByInput = Prisma.ProblemUpdateManyWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyWithoutCreatorInput`
 */
export type ProblemUpdateManyWithoutCreatorInput = Prisma.ProblemUpdateManyWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.NestedIntFilter`
 */
export type NestedIntFilter = Prisma.NestedIntFilter

/**
 * @deprecated Renamed to `Prisma.NestedStringFilter`
 */
export type NestedStringFilter = Prisma.NestedStringFilter

/**
 * @deprecated Renamed to `Prisma.NestedStringNullableFilter`
 */
export type NestedStringNullableFilter = Prisma.NestedStringNullableFilter

/**
 * @deprecated Renamed to `Prisma.NestedFloatFilter`
 */
export type NestedFloatFilter = Prisma.NestedFloatFilter

/**
 * @deprecated Renamed to `Prisma.NestedEnumRoleFilter`
 */
export type NestedEnumRoleFilter = Prisma.NestedEnumRoleFilter

/**
 * @deprecated Renamed to `Prisma.NestedDateTimeFilter`
 */
export type NestedDateTimeFilter = Prisma.NestedDateTimeFilter

/**
 * @deprecated Renamed to `Prisma.NestedBoolFilter`
 */
export type NestedBoolFilter = Prisma.NestedBoolFilter

/**
 * @deprecated Renamed to `Prisma.NestedIntNullableFilter`
 */
export type NestedIntNullableFilter = Prisma.NestedIntNullableFilter

/**
 * @deprecated Renamed to `Prisma.NestedEnumPostKindNullableFilter`
 */
export type NestedEnumPostKindNullableFilter = Prisma.NestedEnumPostKindNullableFilter

/**
 * @deprecated Renamed to `Prisma.postCreateWithoutAuthorInput`
 */
export type postCreateWithoutAuthorInput = Prisma.postCreateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postCreateOrConnectWithoutauthorInput`
 */
export type postCreateOrConnectWithoutauthorInput = Prisma.postCreateOrConnectWithoutauthorInput

/**
 * @deprecated Renamed to `Prisma.postCreateWithoutEditorInput`
 */
export type postCreateWithoutEditorInput = Prisma.postCreateWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.postCreateOrConnectWithouteditorInput`
 */
export type postCreateOrConnectWithouteditorInput = Prisma.postCreateOrConnectWithouteditorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateWithWhereUniqueWithoutAuthorInput`
 */
export type postUpdateWithWhereUniqueWithoutAuthorInput = Prisma.postUpdateWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateManyWithWhereWithoutAuthorInput`
 */
export type postUpdateManyWithWhereWithoutAuthorInput = Prisma.postUpdateManyWithWhereWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postScalarWhereInput`
 */
export type postScalarWhereInput = Prisma.postScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.postUpsertWithWhereUniqueWithoutAuthorInput`
 */
export type postUpsertWithWhereUniqueWithoutAuthorInput = Prisma.postUpsertWithWhereUniqueWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateWithWhereUniqueWithoutEditorInput`
 */
export type postUpdateWithWhereUniqueWithoutEditorInput = Prisma.postUpdateWithWhereUniqueWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateManyWithWhereWithoutEditorInput`
 */
export type postUpdateManyWithWhereWithoutEditorInput = Prisma.postUpdateManyWithWhereWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.postUpsertWithWhereUniqueWithoutEditorInput`
 */
export type postUpsertWithWhereUniqueWithoutEditorInput = Prisma.postUpsertWithWhereUniqueWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.UserCreateWithoutPostsInput`
 */
export type UserCreateWithoutPostsInput = Prisma.UserCreateWithoutPostsInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOrConnectWithoutpostsInput`
 */
export type UserCreateOrConnectWithoutpostsInput = Prisma.UserCreateOrConnectWithoutpostsInput

/**
 * @deprecated Renamed to `Prisma.UserCreateWithoutEditorPostsInput`
 */
export type UserCreateWithoutEditorPostsInput = Prisma.UserCreateWithoutEditorPostsInput

/**
 * @deprecated Renamed to `Prisma.UserCreateOrConnectWithouteditorPostsInput`
 */
export type UserCreateOrConnectWithouteditorPostsInput = Prisma.UserCreateOrConnectWithouteditorPostsInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateWithoutPostsInput`
 */
export type UserUpdateWithoutPostsInput = Prisma.UserUpdateWithoutPostsInput

/**
 * @deprecated Renamed to `Prisma.UserUpsertWithoutPostsInput`
 */
export type UserUpsertWithoutPostsInput = Prisma.UserUpsertWithoutPostsInput

/**
 * @deprecated Renamed to `Prisma.UserUpdateWithoutEditorPostsInput`
 */
export type UserUpdateWithoutEditorPostsInput = Prisma.UserUpdateWithoutEditorPostsInput

/**
 * @deprecated Renamed to `Prisma.UserUpsertWithoutEditorPostsInput`
 */
export type UserUpsertWithoutEditorPostsInput = Prisma.UserUpsertWithoutEditorPostsInput

/**
 * @deprecated Renamed to `Prisma.DirectorCreateWithoutMoviesInput`
 */
export type DirectorCreateWithoutMoviesInput = Prisma.DirectorCreateWithoutMoviesInput

/**
 * @deprecated Renamed to `Prisma.DirectorCreateOrConnectWithoutmoviesInput`
 */
export type DirectorCreateOrConnectWithoutmoviesInput = Prisma.DirectorCreateOrConnectWithoutmoviesInput

/**
 * @deprecated Renamed to `Prisma.DirectorUpdateWithoutMoviesInput`
 */
export type DirectorUpdateWithoutMoviesInput = Prisma.DirectorUpdateWithoutMoviesInput

/**
 * @deprecated Renamed to `Prisma.DirectorUpsertWithoutMoviesInput`
 */
export type DirectorUpsertWithoutMoviesInput = Prisma.DirectorUpsertWithoutMoviesInput

/**
 * @deprecated Renamed to `Prisma.MovieCreateWithoutDirectorInput`
 */
export type MovieCreateWithoutDirectorInput = Prisma.MovieCreateWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.MovieCreateOrConnectWithoutdirectorInput`
 */
export type MovieCreateOrConnectWithoutdirectorInput = Prisma.MovieCreateOrConnectWithoutdirectorInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateWithWhereUniqueWithoutDirectorInput`
 */
export type MovieUpdateWithWhereUniqueWithoutDirectorInput = Prisma.MovieUpdateWithWhereUniqueWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateManyWithWhereWithoutDirectorInput`
 */
export type MovieUpdateManyWithWhereWithoutDirectorInput = Prisma.MovieUpdateManyWithWhereWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.MovieScalarWhereInput`
 */
export type MovieScalarWhereInput = Prisma.MovieScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.MovieUpsertWithWhereUniqueWithoutDirectorInput`
 */
export type MovieUpsertWithWhereUniqueWithoutDirectorInput = Prisma.MovieUpsertWithWhereUniqueWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateWithoutLikesInput`
 */
export type CreatorCreateWithoutLikesInput = Prisma.CreatorCreateWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateOrConnectWithoutlikesInput`
 */
export type CreatorCreateOrConnectWithoutlikesInput = Prisma.CreatorCreateOrConnectWithoutlikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateWithoutProblemsInput`
 */
export type CreatorCreateWithoutProblemsInput = Prisma.CreatorCreateWithoutProblemsInput

/**
 * @deprecated Renamed to `Prisma.CreatorCreateOrConnectWithoutproblemsInput`
 */
export type CreatorCreateOrConnectWithoutproblemsInput = Prisma.CreatorCreateOrConnectWithoutproblemsInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateWithWhereUniqueWithoutLikesInput`
 */
export type CreatorUpdateWithWhereUniqueWithoutLikesInput = Prisma.CreatorUpdateWithWhereUniqueWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateManyWithWhereWithoutLikesInput`
 */
export type CreatorUpdateManyWithWhereWithoutLikesInput = Prisma.CreatorUpdateManyWithWhereWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorScalarWhereInput`
 */
export type CreatorScalarWhereInput = Prisma.CreatorScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpsertWithWhereUniqueWithoutLikesInput`
 */
export type CreatorUpsertWithWhereUniqueWithoutLikesInput = Prisma.CreatorUpsertWithWhereUniqueWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateWithoutProblemsInput`
 */
export type CreatorUpdateWithoutProblemsInput = Prisma.CreatorUpdateWithoutProblemsInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpsertWithoutProblemsInput`
 */
export type CreatorUpsertWithoutProblemsInput = Prisma.CreatorUpsertWithoutProblemsInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateWithoutLikedByInput`
 */
export type ProblemCreateWithoutLikedByInput = Prisma.ProblemCreateWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateOrConnectWithoutlikedByInput`
 */
export type ProblemCreateOrConnectWithoutlikedByInput = Prisma.ProblemCreateOrConnectWithoutlikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateWithoutCreatorInput`
 */
export type ProblemCreateWithoutCreatorInput = Prisma.ProblemCreateWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.ProblemCreateOrConnectWithoutcreatorInput`
 */
export type ProblemCreateOrConnectWithoutcreatorInput = Prisma.ProblemCreateOrConnectWithoutcreatorInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateWithWhereUniqueWithoutLikedByInput`
 */
export type ProblemUpdateWithWhereUniqueWithoutLikedByInput = Prisma.ProblemUpdateWithWhereUniqueWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyWithWhereWithoutLikedByInput`
 */
export type ProblemUpdateManyWithWhereWithoutLikedByInput = Prisma.ProblemUpdateManyWithWhereWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemScalarWhereInput`
 */
export type ProblemScalarWhereInput = Prisma.ProblemScalarWhereInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpsertWithWhereUniqueWithoutLikedByInput`
 */
export type ProblemUpsertWithWhereUniqueWithoutLikedByInput = Prisma.ProblemUpsertWithWhereUniqueWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateWithWhereUniqueWithoutCreatorInput`
 */
export type ProblemUpdateWithWhereUniqueWithoutCreatorInput = Prisma.ProblemUpdateWithWhereUniqueWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateManyWithWhereWithoutCreatorInput`
 */
export type ProblemUpdateManyWithWhereWithoutCreatorInput = Prisma.ProblemUpdateManyWithWhereWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpsertWithWhereUniqueWithoutCreatorInput`
 */
export type ProblemUpsertWithWhereUniqueWithoutCreatorInput = Prisma.ProblemUpsertWithWhereUniqueWithoutCreatorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateWithoutAuthorInput`
 */
export type postUpdateWithoutAuthorInput = Prisma.postUpdateWithoutAuthorInput

/**
 * @deprecated Renamed to `Prisma.postUpdateWithoutEditorInput`
 */
export type postUpdateWithoutEditorInput = Prisma.postUpdateWithoutEditorInput

/**
 * @deprecated Renamed to `Prisma.MovieUpdateWithoutDirectorInput`
 */
export type MovieUpdateWithoutDirectorInput = Prisma.MovieUpdateWithoutDirectorInput

/**
 * @deprecated Renamed to `Prisma.CreatorUpdateWithoutLikesInput`
 */
export type CreatorUpdateWithoutLikesInput = Prisma.CreatorUpdateWithoutLikesInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateWithoutLikedByInput`
 */
export type ProblemUpdateWithoutLikedByInput = Prisma.ProblemUpdateWithoutLikedByInput

/**
 * @deprecated Renamed to `Prisma.ProblemUpdateWithoutCreatorInput`
 */
export type ProblemUpdateWithoutCreatorInput = Prisma.ProblemUpdateWithoutCreatorInput