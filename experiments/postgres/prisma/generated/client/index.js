
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions
} = require('./runtime/index')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.7.0
 * Query Engine version: 39190b250ebc338586e25e6da45e5e783bc8a635
 */
Prisma.prismaVersion = {
  client: "4.7.0",
  engine: "39190b250ebc338586e25e6da45e5e783bc8a635"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = () => (val) => val

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension


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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "prisma/generated/client",
    "generated/client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CategoryOrderByRelevanceFieldEnum = makeEnum({
  name: 'name',
  slug: 'slug'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  name: 'name',
  slug: 'slug',
  number: 'number'
});

exports.Prisma.CreatorOrderByRelevanceFieldEnum = makeEnum({
  name: 'name'
});

exports.Prisma.CreatorScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.DirectorOrderByRelevanceFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName'
});

exports.Prisma.DirectorScalarFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName'
});

exports.Prisma.EquipmentOrderByRelevanceFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.EquipmentScalarFieldEnum = makeEnum({
  id: 'id'
});

exports.Prisma.JsonNullValueFilter = makeEnum({
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
});

exports.Prisma.JsonNullValueInput = makeEnum({
  JsonNull: Prisma.JsonNull
});

exports.Prisma.MovieOrderByRelevanceFieldEnum = makeEnum({
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  directorFirstName: 'directorFirstName',
  directorLastName: 'directorLastName',
  title: 'title'
});

exports.Prisma.NativeTypeModelScalarFieldEnum = makeEnum({
  id: 'id',
  bigInt: 'bigInt',
  byteA: 'byteA',
  decimal: 'decimal'
});

exports.Prisma.NullsOrder = makeEnum({
  first: 'first',
  last: 'last'
});

exports.Prisma.PatientOrderByRelevanceFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
});

exports.Prisma.PatientScalarFieldEnum = makeEnum({
  firstName: 'firstName',
  lastName: 'lastName',
  email: 'email'
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

exports.Prisma.ProblemOrderByRelevanceFieldEnum = makeEnum({
  problemText: 'problemText'
});

exports.Prisma.ProblemScalarFieldEnum = makeEnum({
  id: 'id',
  problemText: 'problemText',
  creatorId: 'creatorId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserOrderByRelevanceFieldEnum = makeEnum({
  email: 'email',
  name: 'name',
  aliases: 'aliases'
});

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

exports.Prisma.postOrderByRelevanceFieldEnum = makeEnum({
  uuid: 'uuid',
  title: 'title',
  subtitle: 'subtitle',
  content: 'content'
});
exports.PostKind = makeEnum({
  BLOG: 'BLOG',
  ADVERT: 'ADVERT'
});

exports.Role = makeEnum({
  USER: 'USER',
  ADMIN: 'ADMIN'
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
  NativeTypeModel: 'NativeTypeModel',
  Equipment: 'Equipment'
});

const dmmfString = "{\"datamodel\":{\"enums\":[{\"name\":\"Role\",\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null,\"documentation\":\"Role enum doc\"},{\"name\":\"PostKind\",\"values\":[{\"name\":\"BLOG\",\"dbName\":null},{\"name\":\"ADVERT\",\"dbName\":null}],\"dbName\":null}],\"models\":[{\"name\":\"User\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"User model field doc\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"renamed field doc\\\\n@TypeGraphQL.field(name: \\\"firstName\\\")\"},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"accountBalance\\\")\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"clientPosts\\\")\"},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"editorPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"grades\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aliases\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"User model doc\\\\n@@TypeGraphQL.type(name: \\\"MainUser\\\")\"},{\"name\":\"post\",\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"first line of comment\\\\nsecond line of comment\\\\nthird line of comment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@TypeGraphQL.omit(input: [\\\"create\\\", \\\"update\\\"])\"},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(input: true)\"},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"posts\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"editorPosts\",\"relationFromFields\":[\"editorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"editorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"kind\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PostKind\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Category\",\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"slug\",\"number\"]],\"uniqueIndexes\":[{\"name\":\"categoryCompoundUnique\",\"fields\":[\"slug\",\"number\"]}],\"isGenerated\":false},{\"name\":\"Patient\",\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Movie\",\"dbName\":null,\"fields\":[{\"name\":\"directorFirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directorLastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"director\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Director\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[\"directorFirstName\",\"directorLastName\"],\"relationToFields\":[\"firstName\",\"lastName\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"movieCompoundId\",\"fields\":[\"directorFirstName\",\"directorLastName\",\"title\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Director\",\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Problem\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problemText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"creator\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Creator\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"creator\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"NativeTypeModel\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigInt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"byteA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Equipment\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@TypeGraphQL.type(plural: \\\"equipments\\\")\"}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findUniqueUser\",\"findUniqueOrThrow\":\"findUniqueUserOrThrow\",\"findFirst\":\"findFirstUser\",\"findFirstOrThrow\":\"findFirstUserOrThrow\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"createMany\":\"createManyUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\",\"groupBy\":\"groupByUser\"},{\"model\":\"post\",\"plural\":\"posts\",\"findUnique\":\"findUniquepost\",\"findUniqueOrThrow\":\"findUniquepostOrThrow\",\"findFirst\":\"findFirstpost\",\"findFirstOrThrow\":\"findFirstpostOrThrow\",\"findMany\":\"findManypost\",\"create\":\"createOnepost\",\"createMany\":\"createManypost\",\"delete\":\"deleteOnepost\",\"update\":\"updateOnepost\",\"deleteMany\":\"deleteManypost\",\"updateMany\":\"updateManypost\",\"upsert\":\"upsertOnepost\",\"aggregate\":\"aggregatepost\",\"groupBy\":\"groupBypost\"},{\"model\":\"Category\",\"plural\":\"categories\",\"findUnique\":\"findUniqueCategory\",\"findUniqueOrThrow\":\"findUniqueCategoryOrThrow\",\"findFirst\":\"findFirstCategory\",\"findFirstOrThrow\":\"findFirstCategoryOrThrow\",\"findMany\":\"findManyCategory\",\"create\":\"createOneCategory\",\"createMany\":\"createManyCategory\",\"delete\":\"deleteOneCategory\",\"update\":\"updateOneCategory\",\"deleteMany\":\"deleteManyCategory\",\"updateMany\":\"updateManyCategory\",\"upsert\":\"upsertOneCategory\",\"aggregate\":\"aggregateCategory\",\"groupBy\":\"groupByCategory\"},{\"model\":\"Patient\",\"plural\":\"patients\",\"findUnique\":\"findUniquePatient\",\"findUniqueOrThrow\":\"findUniquePatientOrThrow\",\"findFirst\":\"findFirstPatient\",\"findFirstOrThrow\":\"findFirstPatientOrThrow\",\"findMany\":\"findManyPatient\",\"create\":\"createOnePatient\",\"createMany\":\"createManyPatient\",\"delete\":\"deleteOnePatient\",\"update\":\"updateOnePatient\",\"deleteMany\":\"deleteManyPatient\",\"updateMany\":\"updateManyPatient\",\"upsert\":\"upsertOnePatient\",\"aggregate\":\"aggregatePatient\",\"groupBy\":\"groupByPatient\"},{\"model\":\"Movie\",\"plural\":\"movies\",\"findUnique\":\"findUniqueMovie\",\"findUniqueOrThrow\":\"findUniqueMovieOrThrow\",\"findFirst\":\"findFirstMovie\",\"findFirstOrThrow\":\"findFirstMovieOrThrow\",\"findMany\":\"findManyMovie\",\"create\":\"createOneMovie\",\"createMany\":\"createManyMovie\",\"delete\":\"deleteOneMovie\",\"update\":\"updateOneMovie\",\"deleteMany\":\"deleteManyMovie\",\"updateMany\":\"updateManyMovie\",\"upsert\":\"upsertOneMovie\",\"aggregate\":\"aggregateMovie\",\"groupBy\":\"groupByMovie\"},{\"model\":\"Director\",\"plural\":\"directors\",\"findUnique\":\"findUniqueDirector\",\"findUniqueOrThrow\":\"findUniqueDirectorOrThrow\",\"findFirst\":\"findFirstDirector\",\"findFirstOrThrow\":\"findFirstDirectorOrThrow\",\"findMany\":\"findManyDirector\",\"create\":\"createOneDirector\",\"createMany\":\"createManyDirector\",\"delete\":\"deleteOneDirector\",\"update\":\"updateOneDirector\",\"deleteMany\":\"deleteManyDirector\",\"updateMany\":\"updateManyDirector\",\"upsert\":\"upsertOneDirector\",\"aggregate\":\"aggregateDirector\",\"groupBy\":\"groupByDirector\"},{\"model\":\"Problem\",\"plural\":\"problems\",\"findUnique\":\"findUniqueProblem\",\"findUniqueOrThrow\":\"findUniqueProblemOrThrow\",\"findFirst\":\"findFirstProblem\",\"findFirstOrThrow\":\"findFirstProblemOrThrow\",\"findMany\":\"findManyProblem\",\"create\":\"createOneProblem\",\"createMany\":\"createManyProblem\",\"delete\":\"deleteOneProblem\",\"update\":\"updateOneProblem\",\"deleteMany\":\"deleteManyProblem\",\"updateMany\":\"updateManyProblem\",\"upsert\":\"upsertOneProblem\",\"aggregate\":\"aggregateProblem\",\"groupBy\":\"groupByProblem\"},{\"model\":\"Creator\",\"plural\":\"creators\",\"findUnique\":\"findUniqueCreator\",\"findUniqueOrThrow\":\"findUniqueCreatorOrThrow\",\"findFirst\":\"findFirstCreator\",\"findFirstOrThrow\":\"findFirstCreatorOrThrow\",\"findMany\":\"findManyCreator\",\"create\":\"createOneCreator\",\"createMany\":\"createManyCreator\",\"delete\":\"deleteOneCreator\",\"update\":\"updateOneCreator\",\"deleteMany\":\"deleteManyCreator\",\"updateMany\":\"updateManyCreator\",\"upsert\":\"upsertOneCreator\",\"aggregate\":\"aggregateCreator\",\"groupBy\":\"groupByCreator\"},{\"model\":\"NativeTypeModel\",\"plural\":\"nativeTypeModels\",\"findUnique\":\"findUniqueNativeTypeModel\",\"findUniqueOrThrow\":\"findUniqueNativeTypeModelOrThrow\",\"findFirst\":\"findFirstNativeTypeModel\",\"findFirstOrThrow\":\"findFirstNativeTypeModelOrThrow\",\"findMany\":\"findManyNativeTypeModel\",\"create\":\"createOneNativeTypeModel\",\"createMany\":\"createManyNativeTypeModel\",\"delete\":\"deleteOneNativeTypeModel\",\"update\":\"updateOneNativeTypeModel\",\"deleteMany\":\"deleteManyNativeTypeModel\",\"updateMany\":\"updateManyNativeTypeModel\",\"upsert\":\"upsertOneNativeTypeModel\",\"aggregate\":\"aggregateNativeTypeModel\",\"groupBy\":\"groupByNativeTypeModel\"},{\"model\":\"Equipment\",\"plural\":\"equipment\",\"findUnique\":\"findUniqueEquipment\",\"findUniqueOrThrow\":\"findUniqueEquipmentOrThrow\",\"findFirst\":\"findFirstEquipment\",\"findFirstOrThrow\":\"findFirstEquipmentOrThrow\",\"findMany\":\"findManyEquipment\",\"create\":\"createOneEquipment\",\"createMany\":\"createManyEquipment\",\"delete\":\"deleteOneEquipment\",\"update\":\"updateOneEquipment\",\"deleteMany\":\"deleteManyEquipment\",\"updateMany\":\"updateManyEquipment\",\"upsert\":\"upsertOneEquipment\",\"aggregate\":\"aggregateEquipment\",\"groupBy\":\"groupByEquipment\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/majkel/development/typegraphql-prisma/experiments/postgres/prisma/generated/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [
      "fullTextSearch",
      "orderByNulls",
      "filteredRelationCount",
      "clientExtensions",
      "extendedWhereUnique"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "4.7.0",
  "engineVersion": "39190b250ebc338586e25e6da45e5e783bc8a635",
  "datasourceNames": [
    "postgres"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-debian-openssl-3.0.x.so.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
