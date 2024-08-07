
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.18.0
 * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
 */
Prisma.prismaVersion = {
  client: "5.18.0",
  engine: "4c784e32044a8a016d99474bd02a3b6123742169"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.PostScalarFieldEnum = {
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

exports.Prisma.CategoryScalarFieldEnum = {
  name: 'name',
  slug: 'slug',
  number: 'number'
};

exports.Prisma.PatientScalarFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
};

exports.Prisma.MovieScalarFieldEnum = {
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
};

exports.Prisma.DirectorScalarFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName'
};

exports.Prisma.ProblemScalarFieldEnum = {
  id: 'id',
  problemText: 'problemText',
  creatorId: 'creatorId'
};

exports.Prisma.CreatorScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.NativeTypeModelScalarFieldEnum = {
  id: 'id',
  bigInt: 'bigInt',
  byteA: 'byteA',
  decimal: 'decimal'
};

exports.Prisma.EquipmentScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.HiddenScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  email: 'email',
  name: 'name',
  aliases: 'aliases'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.postOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  name: 'name',
  slug: 'slug'
};

exports.Prisma.PatientOrderByRelevanceFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
};

exports.Prisma.MovieOrderByRelevanceFieldEnum = {
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
};

exports.Prisma.DirectorOrderByRelevanceFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName'
};

exports.Prisma.ProblemOrderByRelevanceFieldEnum = {
  problemText: 'problemText'
};

exports.Prisma.CreatorOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.EquipmentOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.HiddenOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};
exports.Role = exports.$Enums.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

exports.PostKind = exports.$Enums.PostKind = {
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
