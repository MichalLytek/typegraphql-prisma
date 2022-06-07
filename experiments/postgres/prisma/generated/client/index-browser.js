
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.0
 * Query Engine version: b9297dc3a59307060c1c39d7e4f5765066f38372
 */
Prisma.prismaVersion = {
  client: "3.15.0",
  engine: "b9297dc3a59307060c1c39d7e4f5765066f38372"
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
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  email: 'email',
  name: 'name',
  age: 'age',
  balance: 'balance',
  amount: 'amount',
  role: 'role',
  grades: 'grades',
  aliases: 'aliases'
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
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
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  name: 'name',
  slug: 'slug',
  number: 'number'
});

exports.Prisma.PatientScalarFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
});

exports.Prisma.DirectorScalarFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName'
});

exports.Prisma.ProblemScalarFieldEnum = makeEnum({
  id: 'id',
  problemText: 'problemText',
  creatorId: 'creatorId'
});

exports.Prisma.CreatorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.NativeTypeModelScalarFieldEnum = makeEnum({
  id: 'id',
  bigInt: 'bigInt',
  byteA: 'byteA',
  decimal: 'decimal'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: 'JsonNull'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  email: 'email',
  name: 'name',
  aliases: 'aliases'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: 'DbNull',
  JsonNull: 'JsonNull',
  AnyNull: 'AnyNull'
});

exports.Prisma.postOrderByRelevanceFieldEnum = makeEnum({
  uuid: 'uuid',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content'
});

exports.Prisma.CategoryOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  slug: 'slug'
});

exports.Prisma.PatientOrderByRelevanceFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
});

exports.Prisma.MovieOrderByRelevanceFieldEnum = makeEnum({
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
});

exports.Prisma.DirectorOrderByRelevanceFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName'
});

exports.Prisma.ProblemOrderByRelevanceFieldEnum = makeEnum({
  problemText: 'problemText'
});

exports.Prisma.CreatorOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});
exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
});

exports.PostKind = makeEnum({
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
});

exports.Prisma.ModelName = makeEnum({
  User: 'User',
  post: 'post',
  Category: 'Category',
  Patient: 'Patient',
  Movie: 'Movie',
  Director: 'Director',
  Problem: 'Problem',
  Creator: 'Creator',
  NativeTypeModel: 'NativeTypeModel'
});

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
