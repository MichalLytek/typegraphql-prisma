/// <reference types="node" />
import { inspect } from 'util';

declare namespace DMMF {
    interface Document {
        datamodel: Datamodel;
        schema: Schema;
        mappings: Mappings;
    }
    interface Mappings {
        modelOperations: ModelMapping[];
        otherOperations: {
            read: string[];
            write: string[];
        };
    }
    interface OtherOperationMappings {
        read: string[];
        write: string[];
    }
    interface DatamodelEnum {
        name: string;
        values: EnumValue[];
        dbName?: string | null;
        documentation?: string;
    }
    interface SchemaEnum {
        name: string;
        values: string[];
    }
    interface EnumValue {
        name: string;
        dbName: string | null;
    }
    interface Datamodel {
        models: Model[];
        enums: DatamodelEnum[];
    }
    interface uniqueIndex {
        name: string;
        fields: string[];
    }
    interface Model {
        name: string;
        isEmbedded: boolean;
        dbName: string | null;
        fields: Field[];
        fieldMap?: Record<string, Field>;
        uniqueFields: string[][];
        uniqueIndexes: uniqueIndex[];
        documentation?: string;
        idFields: string[];
        [key: string]: any;
    }
    type FieldKind = 'scalar' | 'object' | 'enum' | 'unsupported';
    type FieldNamespace = 'model' | 'prisma';
    type FieldLocation = 'scalar' | 'inputObjectTypes' | 'outputObjectTypes' | 'enumTypes';
    interface Field {
        kind: FieldKind;
        name: string;
        isRequired: boolean;
        isList: boolean;
        isUnique: boolean;
        isId: boolean;
        type: string;
        dbNames?: string[] | null;
        isGenerated: boolean;
        hasDefaultValue: boolean;
        default?: FieldDefault | string | boolean | number;
        relationToFields?: any[];
        relationOnDelete?: string;
        relationName?: string;
        documentation?: string;
        [key: string]: any;
    }
    interface FieldDefault {
        name: string;
        args: any[];
    }
    interface Schema {
        rootQueryType?: string;
        rootMutationType?: string;
        inputObjectTypes: {
            model?: InputType[];
            prisma: InputType[];
        };
        outputObjectTypes: {
            model: OutputType[];
            prisma: OutputType[];
        };
        enumTypes: {
            model?: SchemaEnum[];
            prisma: SchemaEnum[];
        };
    }
    interface Query {
        name: string;
        args: SchemaArg[];
        output: QueryOutput;
    }
    interface QueryOutput {
        name: string;
        isRequired: boolean;
        isList: boolean;
    }
    type ArgType = string | InputType | SchemaEnum;
    interface SchemaArgInputType {
        isList: boolean;
        type: ArgType;
        location: FieldLocation;
        namespace?: FieldNamespace;
    }
    interface SchemaArg {
        name: string;
        comment?: string;
        isNullable: boolean;
        isRequired: boolean;
        inputTypes: SchemaArgInputType[];
    }
    interface OutputType {
        name: string;
        fields: SchemaField[];
        fieldMap?: Record<string, SchemaField>;
        isEmbedded?: boolean;
    }
    interface SchemaField {
        name: string;
        isNullable?: boolean;
        outputType: {
            type: string | OutputType | SchemaEnum;
            isList: boolean;
            location: FieldLocation;
            namespace?: FieldNamespace;
        };
        args: SchemaArg[];
        deprecation?: SchemaFieldDeprecation;
    }
    interface SchemaFieldDeprecation {
        sinceVersion: string;
        reason: string;
        plannedRemovalVersion: string;
    }
    interface InputType {
        name: string;
        constraints: {
            maxNumFields: number | null;
            minNumFields: number | null;
        };
        fields: SchemaArg[];
        fieldMap?: Record<string, SchemaArg>;
    }
    interface ModelMapping {
        model: string;
        plural: string;
        findUnique?: string | null;
        findFirst?: string | null;
        findMany?: string | null;
        create?: string | null;
        createMany?: string | null;
        update?: string | null;
        updateMany?: string | null;
        upsert?: string | null;
        delete?: string | null;
        deleteMany?: string | null;
        aggregate?: string | null;
        groupBy?: string | null;
        count?: string | null;
    }
    enum ModelAction {
        findUnique = "findUnique",
        findFirst = "findFirst",
        findMany = "findMany",
        create = "create",
        createMany = "createMany",
        update = "update",
        updateMany = "updateMany",
        upsert = "upsert",
        delete = "delete",
        deleteMany = "deleteMany",
        groupBy = "groupBy",
        count = "count",
        aggregate = "aggregate"
    }
}

declare type Dictionary$1<T> = {
    [key: string]: T;
};
interface GeneratorConfig {
    name: string;
    output: string | null;
    isCustomOutput?: boolean;
    provider: string;
    config: Dictionary$1<string>;
    binaryTargets: string[];
    previewFeatures: string[];
}
interface EnvValue {
    fromEnvVar: null | string;
    value: string;
}
declare type ConnectorType = 'mysql' | 'mongo' | 'sqlite' | 'postgresql' | 'sqlserver';
interface DataSource {
    name: string;
    activeProvider: ConnectorType;
    provider: ConnectorType[];
    url: EnvValue;
    config: {
        [key: string]: string;
    };
}

interface Dictionary<T> {
    [key: string]: T;
}

declare class DMMFClass implements DMMF.Document {
    datamodel: DMMF.Datamodel;
    schema: DMMF.Schema;
    mappings: DMMF.Mappings;
    queryType: DMMF.OutputType;
    mutationType: DMMF.OutputType;
    outputTypes: {
        model: DMMF.OutputType[];
        prisma: DMMF.OutputType[];
    };
    outputTypeMap: Dictionary<DMMF.OutputType>;
    inputObjectTypes: {
        model?: DMMF.InputType[];
        prisma: DMMF.InputType[];
    };
    inputTypeMap: Dictionary<DMMF.InputType>;
    enumMap: Dictionary<DMMF.SchemaEnum>;
    datamodelEnumMap: Dictionary<DMMF.DatamodelEnum>;
    modelMap: Dictionary<DMMF.Model>;
    mappingsMap: Dictionary<DMMF.ModelMapping>;
    rootFieldMap: Dictionary<DMMF.SchemaField>;
    constructor({ datamodel, schema, mappings }: DMMF.Document);
    get [Symbol.toStringTag](): string;
    protected outputTypeToMergedOutputType: (outputType: DMMF.OutputType) => DMMF.OutputType;
    protected resolveOutputTypes(): void;
    protected resolveInputTypes(): void;
    protected resolveFieldArgumentTypes(): void;
    protected getQueryType(): DMMF.OutputType;
    protected getMutationType(): DMMF.OutputType;
    protected getOutputTypes(): {
        model: DMMF.OutputType[];
        prisma: DMMF.OutputType[];
    };
    protected getDatamodelEnumMap(): Dictionary<DMMF.DatamodelEnum>;
    protected getEnumMap(): Dictionary<DMMF.SchemaEnum>;
    protected getModelMap(): Dictionary<DMMF.Model>;
    protected getMergedOutputTypeMap(): Dictionary<DMMF.OutputType>;
    protected getInputTypeMap(): Dictionary<DMMF.InputType>;
    protected getMappingsMap(): Dictionary<DMMF.ModelMapping>;
    protected getRootFieldMap(): Dictionary<DMMF.SchemaField>;
}

interface ArgError {
    path: string[];
    id?: string;
    error: InvalidArgError;
}
interface FieldError {
    path: string[];
    error: InvalidFieldError;
}
declare type InvalidFieldError = InvalidFieldNameError | InvalidFieldTypeError | EmptySelectError | NoTrueSelectError | IncludeAndSelectError | EmptyIncludeError;
interface InvalidFieldTypeError {
    type: 'invalidFieldType';
    modelName: string;
    fieldName: string;
    providedValue: any;
}
interface InvalidFieldNameError {
    type: 'invalidFieldName';
    modelName: string;
    didYouMean?: string | null;
    providedName: string;
    isInclude?: boolean;
    isIncludeScalar?: boolean;
    outputType: DMMF.OutputType;
}
interface EmptySelectError {
    type: 'emptySelect';
    field: DMMF.SchemaField;
}
interface EmptyIncludeError {
    type: 'emptyInclude';
    field: DMMF.SchemaField;
}
interface NoTrueSelectError {
    type: 'noTrueSelect';
    field: DMMF.SchemaField;
}
interface IncludeAndSelectError {
    type: 'includeAndSelect';
    field: DMMF.SchemaField;
}
declare type InvalidArgError = InvalidArgNameError | MissingArgError | InvalidArgTypeError | AtLeastOneError | AtMostOneError | InvalidNullArgError;
/**
 * This error occurs if the user provides an arg name that doens't exist
 */
interface InvalidArgNameError {
    type: 'invalidName';
    providedName: string;
    providedValue: any;
    didYouMeanArg?: string;
    didYouMeanField?: string;
    originalType: DMMF.ArgType;
    possibilities?: DMMF.SchemaArgInputType[];
    outputType?: DMMF.OutputType;
}
/**
 * Opposite of InvalidArgNameError - if the user *doesn't* provide an arg that should be provided
 * This error both happens with an implicit and explicit `undefined`
 */
interface MissingArgError {
    type: 'missingArg';
    missingName: string;
    missingArg: DMMF.SchemaArg;
    atLeastOne: boolean;
    atMostOne: boolean;
}
/**
 * If a user incorrectly provided null where she shouldn't have
 */
interface InvalidNullArgError {
    type: 'invalidNullArg';
    name: string;
    invalidType: DMMF.SchemaArgInputType[];
    atLeastOne: boolean;
    atMostOne: boolean;
}
interface AtMostOneError {
    type: 'atMostOne';
    key: string;
    inputType: DMMF.InputType;
    providedKeys: string[];
}
interface AtLeastOneError {
    type: 'atLeastOne';
    key: string;
    inputType: DMMF.InputType;
}
/**
 * If the scalar type of an arg is not matching what is required
 */
interface InvalidArgTypeError {
    type: 'invalidType';
    argName: string;
    requiredType: {
        bestFittingType: DMMF.SchemaArgInputType;
        inputType: DMMF.SchemaArgInputType[];
    };
    providedValue: any;
}

interface MissingItem {
    path: string;
    isRequired: boolean;
    type: string | object;
}

declare class Document {
    readonly type: 'query' | 'mutation';
    readonly children: Field[];
    constructor(type: 'query' | 'mutation', children: Field[]);
    get [Symbol.toStringTag](): string;
    toString(): string;
    validate(select?: any, isTopLevelQuery?: boolean, originalMethod?: string, errorFormat?: 'pretty' | 'minimal' | 'colorless', validationCallsite?: any): void;
    protected printFieldError: ({ error }: FieldError, missingItems: MissingItem[], minimal: boolean) => string | undefined;
    protected printArgError: ({ error, path, id }: ArgError, hasMissingItems: boolean, minimal: boolean) => string | undefined;
    /**
     * As we're allowing both single objects and array of objects for list inputs, we need to remove incorrect
     * zero indexes from the path
     * @param inputPath e.g. ['where', 'AND', 0, 'id']
     * @param select select object
     */
    private normalizePath;
}
declare class PrismaClientValidationError extends Error {
    get [Symbol.toStringTag](): string;
}
interface FieldArgs {
    name: string;
    schemaField?: DMMF.SchemaField;
    args?: Args;
    children?: Field[];
    error?: InvalidFieldError;
}
declare class Field {
    readonly name: string;
    readonly args?: Args;
    readonly children?: Field[];
    readonly error?: InvalidFieldError;
    readonly hasInvalidChild: boolean;
    readonly hasInvalidArg: boolean;
    readonly schemaField?: DMMF.SchemaField;
    constructor({ name, args, children, error, schemaField }: FieldArgs);
    get [Symbol.toStringTag](): string;
    toString(): string;
    collectErrors(prefix?: string): {
        fieldErrors: FieldError[];
        argErrors: ArgError[];
    };
}
declare class Args {
    args: Arg[];
    readonly hasInvalidArg: boolean;
    constructor(args?: Arg[]);
    get [Symbol.toStringTag](): string;
    toString(): string;
    collectErrors(): ArgError[];
}
interface ArgOptions {
    key: string;
    value: ArgValue;
    isEnum?: boolean;
    error?: InvalidArgError;
    schemaArg?: DMMF.SchemaArg;
    inputType?: DMMF.SchemaArgInputType;
}
declare class Arg {
    key: string;
    value: ArgValue;
    error?: InvalidArgError;
    hasError: boolean;
    isEnum: boolean;
    schemaArg?: DMMF.SchemaArg;
    isNullable: boolean;
    inputType?: DMMF.SchemaArgInputType;
    constructor({ key, value, isEnum, error, schemaArg, inputType, }: ArgOptions);
    get [Symbol.toStringTag](): string;
    _toString(value: ArgValue, key: string): string | undefined;
    toString(): string | undefined;
    collectErrors(): ArgError[];
}
declare type ArgValue = string | boolean | number | undefined | Args | string[] | boolean[] | number[] | Args[] | null;
interface DocumentInput {
    dmmf: DMMFClass;
    rootTypeName: 'query' | 'mutation';
    rootField: string;
    select?: any;
}
declare function makeDocument({ dmmf, rootTypeName, rootField, select, }: DocumentInput): Document;
declare function transformDocument(document: Document): Document;
interface UnpackOptions {
    document: Document;
    path: string[];
    data: any;
}
/**
 * Unpacks the result of a data object and maps DateTime fields to instances of `Date` inplace
 * @param options: UnpackOptions
 */
declare function unpack({ document, path, data }: UnpackOptions): any;

// Type definitions for debug 4.1
// Project: https://github.com/visionmedia/debug
// Definitions by: Seon-Wook Park <https://github.com/swook>
//                 Gal Talmor <https://github.com/galtalmor>
//                 John McLaughlin <https://github.com/zamb3zi>
//                 Brasten Sager <https://github.com/brasten>
//                 Nicolas Penin <https://github.com/npenin>
//                 Kristian Brünn <https://github.com/kristianmitk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare var debug: debug.Debug & { debug: debug.Debug; default: debug.Debug };

declare namespace debug {
    interface Debug {
        (namespace: string): Debugger;
        coerce: (val: any) => any;
        disable: () => string;
        enable: (namespaces: string) => void;
        enabled: (namespaces: string) => boolean;
        log: (...args: any[]) => any;

        names: RegExp[];
        skips: RegExp[];

        formatters: Formatters;
    }

    type IDebug = Debug;

    interface Formatters {
        [formatter: string]: (v: any) => string;
    }

    type IDebugger = Debugger;

    interface Debugger {
        (formatter: any, ...args: any[]): void;

        color: string;
        enabled: boolean;
        log: (...args: any[]) => any;
        namespace: string;
        destroy: () => boolean;
        extend: (namespace: string, delimiter?: string) => Debugger;
    }
}

declare function Debug(namespace: string): debug.Debugger;
declare namespace Debug {
    var enable: (namespace: string) => void;
    var enabled: (namespace: string) => boolean;
}

declare class PrismaClientKnownRequestError extends Error {
    code: string;
    meta?: object;
    clientVersion: string;
    constructor(message: string, code: string, clientVersion: string, meta?: any);
    get [Symbol.toStringTag](): string;
}
declare class PrismaClientUnknownRequestError extends Error {
    clientVersion: string;
    constructor(message: string, clientVersion: string);
    get [Symbol.toStringTag](): string;
}
declare class PrismaClientRustPanicError extends Error {
    clientVersion: string;
    constructor(message: string, clientVersion: string);
    get [Symbol.toStringTag](): string;
}
declare class PrismaClientInitializationError extends Error {
    clientVersion: string;
    errorCode?: string;
    constructor(message: string, clientVersion: string, errorCode?: string);
    get [Symbol.toStringTag](): string;
}

interface Engine {
    on(event: EngineEventType, listener: (args?: any) => any): void;
    start(): Promise<void>;
    stop(): Promise<void>;
    kill(signal: string): void;
    getConfig(): Promise<GetConfigResult>;
    version(forceRun?: boolean): Promise<string>;
    request<T>(query: string, headers: Record<string, string>, numTry: number): Promise<{
        data: T;
        elapsed: number;
    }>;
    requestBatch<T>(queries: string[], transaction?: boolean, numTry?: number): Promise<{
        data: T;
        elapsed: number;
    }>;
}
declare type EngineEventType = 'query' | 'info' | 'warn' | 'error' | 'beforeExit';
interface DatasourceOverwrite {
    name: string;
    url: string;
}
interface EngineConfig {
    cwd?: string;
    dirname?: string;
    datamodelPath: string;
    enableDebugLogs?: boolean;
    enableEngineDebugMode?: boolean;
    prismaPath?: string;
    fetcher?: (query: string) => Promise<{
        data?: any;
        error?: any;
    }>;
    generator?: GeneratorConfig;
    datasources?: DatasourceOverwrite[];
    showColors?: boolean;
    logQueries?: boolean;
    logLevel?: 'info' | 'warn';
    env?: Record<string, string>;
    flags?: string[];
    useUds?: boolean;
    clientVersion?: string;
    enableExperimental?: string[];
    engineEndpoint?: string;
    activeProvider?: string;
}
declare type GetConfigResult = {
    datasources: DataSource[];
    generators: GeneratorConfig[];
};

declare class NodeEngine implements Engine {
    private logEmitter;
    private showColors;
    private logQueries;
    private logLevel?;
    private env?;
    private flags;
    private port?;
    private enableDebugLogs;
    private enableEngineDebugMode;
    private child?;
    private clientVersion?;
    private lastPanic?;
    private globalKillSignalReceived?;
    private startCount;
    private enableExperimental;
    private engineEndpoint?;
    private lastErrorLog?;
    private lastRustError?;
    private useUds;
    private socketPath?;
    private getConfigPromise?;
    private stopPromise?;
    private beforeExitListener?;
    private dirname?;
    private cwd;
    private datamodelPath;
    private prismaPath?;
    private stderrLogs;
    private currentRequestPromise?;
    private platformPromise?;
    private platform?;
    private generator?;
    private incorrectlyPinnedBinaryTarget?;
    private datasources?;
    private startPromise?;
    private versionPromise?;
    private engineStartDeferred?;
    private engineStopDeferred?;
    private undici?;
    private lastQuery?;
    private lastVersion?;
    private lastActiveProvider?;
    private activeProvider?;
    /**
     * exiting is used to tell the .on('exit') hook, if the exit came from our script.
     * As soon as the Prisma binary returns a correct return code (like 1 or 0), we don't need this anymore
     */
    constructor({ cwd, datamodelPath, prismaPath, generator, datasources, showColors, logLevel, logQueries, env, flags, clientVersion, enableExperimental, engineEndpoint, enableDebugLogs, enableEngineDebugMode, dirname, useUds, activeProvider, }: EngineConfig);
    private setError;
    private checkForTooManyEngines;
    private resolveCwd;
    on(event: EngineEventType, listener: (args?: any) => any): void;
    emitExit(): Promise<void>;
    private getPlatform;
    private getQueryEnginePath;
    private handlePanic;
    private resolvePrismaPath;
    private getPrismaPath;
    private getFixedGenerator;
    private printDatasources;
    /**
     * Starts the engine, returns the url that it runs on
     */
    start(): Promise<void>;
    private getEngineEnvVars;
    private internalStart;
    stop(): Promise<void>;
    /**
     * If Prisma runs, stop it
     */
    _stop(): Promise<void>;
    kill(signal: string): void;
    /**
     * Use the port 0 trick to get a new port
     */
    private getFreePort;
    getConfig(): Promise<GetConfigResult>;
    private _getConfig;
    version(forceRun?: boolean): Promise<string>;
    internalVersion(): Promise<string>;
    request<T>(query: string, headers: Record<string, string>, numTry?: number): Promise<T>;
    requestBatch<T>(queries: string[], transaction?: boolean, numTry?: number): Promise<T>;
    private get hasMaxRestarts();
    /**
     * If we have request errors like "ECONNRESET", we need to get the error from a
     * different place, not the request itself. This different place can either be
     * this.lastRustError or this.lastErrorLog
     */
    private throwAsyncErrorIfExists;
    private getErrorMessageWithLink;
    private handleRequestError;
    private graphQLToJSError;
}

declare type RejectOnNotFound = boolean | ((error: Error) => Error) | undefined;
declare type InstanceRejectOnNotFound = RejectOnNotFound | Record<string, RejectOnNotFound> | Record<string, Record<string, RejectOnNotFound>>;

declare type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
declare type Datasource = {
    url?: string;
};
declare type Datasources = Record<string, Datasource>;
interface PrismaClientOptions {
    /**
     * Will throw an Error if findUnique returns null
     */
    rejectOnNotFound?: InstanceRejectOnNotFound;
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * \`\`\`
     * // Defaults to stdout
     * log: ['query', 'info', 'warn']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     * ]
     * \`\`\`
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
    /**
     * @internal
     * You probably don't want to use this. \`__internal\` is used by internal tooling.
     */
    __internal?: {
        debug?: boolean;
        hooks?: Hooks;
        useUds?: boolean;
        engine?: {
            cwd?: string;
            binaryPath?: string;
            endpoint?: string;
            enableEngineDebugMode?: boolean;
        };
    };
}
declare type HookParams = {
    query: string;
    path: string[];
    rootField?: string;
    typeName?: string;
    document: any;
    clientMethod: string;
    args: any;
};
declare type Hooks = {
    beforeRequest?: (options: HookParams) => any;
};
declare type LogLevel = 'info' | 'query' | 'warn' | 'error';
declare type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
interface GetPrismaClientOptions {
    document: DMMF.Document;
    generator?: GeneratorConfig;
    sqliteDatasourceOverrides?: DatasourceOverwrite[];
    relativeEnvPaths: {
        rootEnvPath?: string | null;
        schemaEnvPath?: string | null;
    };
    relativePath: string;
    dirname: string;
    clientVersion?: string;
    engineVersion?: string;
    datasourceNames: string[];
    activeProvider: string;
}
declare function getPrismaClient(config: GetPrismaClientOptions): any;

declare type Value = string | number | boolean | object | null | undefined;
declare type RawValue = Value | Sql;
/**
 * A SQL instance can be nested within each other to build SQL strings.
 */
declare class Sql {
    values: Value[];
    strings: string[];
    constructor(rawStrings: ReadonlyArray<string>, rawValues: ReadonlyArray<RawValue>);
    get text(): string;
    get sql(): string;
    [inspect.custom](): {
        text: string;
        sql: string;
        values: Value[];
    };
}
/**
 * Create a SQL query for a list of values.
 */
declare function join(values: RawValue[], separator?: string): Sql;
/**
 * Create raw SQL statement.
 */
declare function raw(value: string): Sql;
/**
 * Placeholder value for "no text".
 */
declare const empty: Sql;
/**
 * Create a SQL object from a template string.
 */
declare function sqltag(strings: ReadonlyArray<string>, ...values: RawValue[]): Sql;

declare function warnEnvConflicts(envPaths: any): void;

// Type definitions for decimal.js >=7.0.0


declare namespace Decimal {
  export type Constructor = typeof Decimal;
  export type Instance = Decimal;
  export type Rounding = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  export type Modulo = Rounding | 9;
  export type Value = string | number | Decimal;

  // http://mikemcl.github.io/decimal.js/#constructor-properties
  export interface Config {
    precision?: number;
    rounding?: Rounding;
    toExpNeg?: number;
    toExpPos?: number;
    minE?: number;
    maxE?: number;
    crypto?: boolean;
    modulo?: Modulo;
    defaults?: boolean;
  }
}

declare class Decimal {
  readonly d: number[];
  readonly e: number;
  readonly s: number;
  private readonly name: string;

  constructor(n: Decimal.Value);

  absoluteValue(): Decimal;
  abs(): Decimal;

  ceil(): Decimal;

  comparedTo(n: Decimal.Value): number;
  cmp(n: Decimal.Value): number;

  cosine(): Decimal;
  cos(): Decimal;

  cubeRoot(): Decimal;
  cbrt(): Decimal;

  decimalPlaces(): number;
  dp(): number;

  dividedBy(n: Decimal.Value): Decimal;
  div(n: Decimal.Value): Decimal;

  dividedToIntegerBy(n: Decimal.Value): Decimal;
  divToInt(n: Decimal.Value): Decimal;

  equals(n: Decimal.Value): boolean;
  eq(n: Decimal.Value): boolean;

  floor(): Decimal;

  greaterThan(n: Decimal.Value): boolean;
  gt(n: Decimal.Value): boolean;

  greaterThanOrEqualTo(n: Decimal.Value): boolean;
  gte(n: Decimal.Value): boolean;

  hyperbolicCosine(): Decimal;
  cosh(): Decimal;

  hyperbolicSine(): Decimal;
  sinh(): Decimal;

  hyperbolicTangent(): Decimal;
  tanh(): Decimal;

  inverseCosine(): Decimal;
  acos(): Decimal;

  inverseHyperbolicCosine(): Decimal;
  acosh(): Decimal;

  inverseHyperbolicSine(): Decimal;
  asinh(): Decimal;

  inverseHyperbolicTangent(): Decimal;
  atanh(): Decimal;

  inverseSine(): Decimal;
  asin(): Decimal;

  inverseTangent(): Decimal;
  atan(): Decimal;

  isFinite(): boolean;

  isInteger(): boolean;
  isInt(): boolean;

  isNaN(): boolean;

  isNegative(): boolean;
  isNeg(): boolean;

  isPositive(): boolean;
  isPos(): boolean;

  isZero(): boolean;

  lessThan(n: Decimal.Value): boolean;
  lt(n: Decimal.Value): boolean;

  lessThanOrEqualTo(n: Decimal.Value): boolean;
  lte(n: Decimal.Value): boolean;

  logarithm(n?: Decimal.Value): Decimal;
  log(n?: Decimal.Value): Decimal;

  minus(n: Decimal.Value): Decimal;
  sub(n: Decimal.Value): Decimal;

  modulo(n: Decimal.Value): Decimal;
  mod(n: Decimal.Value): Decimal;

  naturalExponential(): Decimal;
  exp(): Decimal;

  naturalLogarithm(): Decimal;
  ln(): Decimal;

  negated(): Decimal;
  neg(): Decimal;

  plus(n: Decimal.Value): Decimal;
  add(n: Decimal.Value): Decimal;

  precision(includeZeros?: boolean): number;
  sd(includeZeros?: boolean): number;

  round(): Decimal;

  sine() : Decimal;
  sin() : Decimal;

  squareRoot(): Decimal;
  sqrt(): Decimal;

  tangent() : Decimal;
  tan() : Decimal;

  times(n: Decimal.Value): Decimal;
  mul(n: Decimal.Value) : Decimal;

  toBinary(significantDigits?: number): string;
  toBinary(significantDigits: number, rounding: Decimal.Rounding): string;

  toDecimalPlaces(decimalPlaces?: number): Decimal;
  toDecimalPlaces(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;
  toDP(decimalPlaces?: number): Decimal;
  toDP(decimalPlaces: number, rounding: Decimal.Rounding): Decimal;

  toExponential(decimalPlaces?: number): string;
  toExponential(decimalPlaces: number, rounding: Decimal.Rounding): string;

  toFixed(decimalPlaces?: number): string;
  toFixed(decimalPlaces: number, rounding: Decimal.Rounding): string;

  toFraction(max_denominator?: Decimal.Value): Decimal[];

  toHexadecimal(significantDigits?: number): string;
  toHexadecimal(significantDigits: number, rounding: Decimal.Rounding): string;
  toHex(significantDigits?: number): string;
  toHex(significantDigits: number, rounding?: Decimal.Rounding): string;

  toJSON(): string;

  toNearest(n: Decimal.Value, rounding?: Decimal.Rounding): Decimal;

  toNumber(): number;

  toOctal(significantDigits?: number): string;
  toOctal(significantDigits: number, rounding: Decimal.Rounding): string;

  toPower(n: Decimal.Value): Decimal;
  pow(n: Decimal.Value): Decimal;

  toPrecision(significantDigits?: number): string;
  toPrecision(significantDigits: number, rounding: Decimal.Rounding): string;

  toSignificantDigits(significantDigits?: number): Decimal;
  toSignificantDigits(significantDigits: number, rounding: Decimal.Rounding): Decimal;
  toSD(significantDigits?: number): Decimal;
  toSD(significantDigits: number, rounding: Decimal.Rounding): Decimal;

  toString(): string;

  truncated(): Decimal;
  trunc(): Decimal;

  valueOf(): string;

  static abs(n: Decimal.Value): Decimal;
  static acos(n: Decimal.Value): Decimal;
  static acosh(n: Decimal.Value): Decimal;
  static add(x: Decimal.Value, y: Decimal.Value): Decimal;
  static asin(n: Decimal.Value): Decimal;
  static asinh(n: Decimal.Value): Decimal;
  static atan(n: Decimal.Value): Decimal;
  static atanh(n: Decimal.Value): Decimal;
  static atan2(y: Decimal.Value, x: Decimal.Value): Decimal;
  static cbrt(n: Decimal.Value): Decimal;
  static ceil(n: Decimal.Value): Decimal;
  static clone(object?: Decimal.Config): Decimal.Constructor;
  static config(object: Decimal.Config): Decimal.Constructor;
  static cos(n: Decimal.Value): Decimal;
  static cosh(n: Decimal.Value): Decimal;
  static div(x: Decimal.Value, y: Decimal.Value): Decimal;
  static exp(n: Decimal.Value): Decimal;
  static floor(n: Decimal.Value): Decimal;
  static hypot(...n: Decimal.Value[]): Decimal;
  static isDecimal(object: any): boolean
  static ln(n: Decimal.Value): Decimal;
  static log(n: Decimal.Value, base?: Decimal.Value): Decimal;
  static log2(n: Decimal.Value): Decimal;
  static log10(n: Decimal.Value): Decimal;
  static max(...n: Decimal.Value[]): Decimal;
  static min(...n: Decimal.Value[]): Decimal;
  static mod(x: Decimal.Value, y: Decimal.Value): Decimal;
  static mul(x: Decimal.Value, y: Decimal.Value): Decimal;
  static noConflict(): Decimal.Constructor;   // Browser only
  static pow(base: Decimal.Value, exponent: Decimal.Value): Decimal;
  static random(significantDigits?: number): Decimal;
  static round(n: Decimal.Value): Decimal;
  static set(object: Decimal.Config): Decimal.Constructor;
  static sign(n: Decimal.Value): Decimal;
  static sin(n: Decimal.Value): Decimal;
  static sinh(n: Decimal.Value): Decimal;
  static sqrt(n: Decimal.Value): Decimal;
  static sub(x: Decimal.Value, y: Decimal.Value): Decimal;
  static tan(n: Decimal.Value): Decimal;
  static tanh(n: Decimal.Value): Decimal;
  static trunc(n: Decimal.Value): Decimal;

  static readonly default?: Decimal.Constructor;
  static readonly Decimal?: Decimal.Constructor;

  static readonly precision: number;
  static readonly rounding: Decimal.Rounding;
  static readonly toExpNeg: number;
  static readonly toExpPos: number;
  static readonly minE: number;
  static readonly maxE: number;
  static readonly crypto: boolean;
  static readonly modulo: Decimal.Modulo;

  static readonly ROUND_UP: 0;
  static readonly ROUND_DOWN: 1;
  static readonly ROUND_CEIL: 2;
  static readonly ROUND_FLOOR: 3;
  static readonly ROUND_HALF_UP: 4;
  static readonly ROUND_HALF_DOWN: 5;
  static readonly ROUND_HALF_EVEN: 6;
  static readonly ROUND_HALF_CEIL: 7;
  static readonly ROUND_HALF_FLOOR: 8;
  static readonly EUCLID: 9;
}

export { DMMF, DMMFClass, Decimal, NodeEngine as Engine, PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientOptions, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, RawValue, Sql, Value, Debug as debugLib, empty, getPrismaClient, join, makeDocument, raw, sqltag, transformDocument, unpack, warnEnvConflicts };
