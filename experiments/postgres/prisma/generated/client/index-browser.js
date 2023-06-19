
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.15.0
 * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
 */
Prisma.prismaVersion = {
  client: "4.15.0",
  engine: "8fbc245156db7124f997f4cecdd8d1219e360944"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
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

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  name: 'name',
  slug: 'slug'
};

exports.Prisma.CategoryScalarFieldEnum = {
  name: 'name',
  slug: 'slug',
  number: 'number'
};

exports.Prisma.CreatorOrderByRelevanceFieldEnum = {
  name: 'name'
};

exports.Prisma.CreatorScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.DirectorOrderByRelevanceFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName'
};

exports.Prisma.DirectorScalarFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName'
};

exports.Prisma.EquipmentOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.EquipmentScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.HiddenOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.HiddenScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.MovieOrderByRelevanceFieldEnum = {
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
};

exports.Prisma.MovieScalarFieldEnum = {
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
};

exports.Prisma.NativeTypeModelScalarFieldEnum = {
  id: 'id',
  bigInt: 'bigInt',
  byteA: 'byteA',
  decimal: 'decimal'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.PatientOrderByRelevanceFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
};

exports.Prisma.PatientScalarFieldEnum = {
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
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

exports.Prisma.ProblemOrderByRelevanceFieldEnum = {
  problemText: 'problemText'
};

exports.Prisma.ProblemScalarFieldEnum = {
  id: 'id',
  problemText: 'problemText',
  creatorId: 'creatorId'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  email: 'email',
  name: 'name',
  aliases: 'aliases'
};

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

exports.Prisma.postOrderByRelevanceFieldEnum = {
  uuid: 'uuid',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content'
};
exports.PostKind = {
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
};

exports.Role = {
  USER: 'USER',
  ADMIN: 'ADMIN'
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
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
