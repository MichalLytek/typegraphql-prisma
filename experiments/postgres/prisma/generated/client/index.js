
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/library.js')


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
Prisma.validator = Public.validator

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
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-3.0.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "fullTextSearch"
    ],
    "sourceFilePath": "/home/majkel/development/typegraphql-prisma/experiments/postgres/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.18.0",
  "engineVersion": "4c784e32044a8a016d99474bd02a3b6123742169",
  "datasourceNames": [
    "postgres"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "postgres": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "datasource postgres {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  // binaryTargets   = [\"windows\", \"debian-openssl-1.1.x\"]\n  output          = \"../prisma/generated/client\"\n  previewFeatures = [\"fullTextSearch\"]\n}\n\ngenerator typegraphql {\n  provider                 = \"node ../../src/cli/dev.ts\"\n  output                   = \"../prisma/generated/type-graphql\"\n  emitDMMF                 = true\n  // emitTranspiledCode       = true\n  simpleResolvers          = false\n  // useOriginalMapping       = true\n  useUncheckedScalarInputs = false\n  emitIdAsIDType           = true\n  // emitOnly                 = [\"enums\", \"models\"]\n  customPrismaImportPath   = \"../client\"\n  contextPrismaKey         = \"prismaClient\"\n  useSimpleInputs          = true\n  emitRedundantTypesInfo   = true\n  formatGeneratedCode      = \"tsc\"\n}\n\n// Role enum comment\n/// Role enum doc\nenum Role {\n  USER\n  ADMIN\n}\n\n// User model comment\n/// User model doc\n/// @@TypeGraphQL.type(name: \"MainUser\")\nmodel User {\n  // User model field comment\n  /// User model field doc\n  id          Int      @id @default(autoincrement())\n  email       String   @unique\n  /// renamed field doc\n  /// @TypeGraphQL.field(name: \"firstName\")\n  name        String?\n  age         Int\n  /// @TypeGraphQL.field(name: \"accountBalance\")\n  balance     Float\n  amount      Float\n  /// @TypeGraphQL.field(name: \"clientPosts\")\n  posts       post[]   @relation(\"posts\")\n  role        Role\n  /// @TypeGraphQL.omit(output: true)\n  editorPosts post[]   @relation(\"editorPosts\")\n  grades      Int[]\n  aliases     String[]\n}\n\nenum PostKind {\n  BLOG\n  ADVERT\n}\n\nmodel post {\n  /// first line of comment\n  /// second line of comment\n  /// third line of comment\n  uuid      String    @id @default(uuid())\n  createdAt DateTime  @default(now())\n  /// @TypeGraphQL.omit(input: [\"create\", \"update\"])\n  updatedAt DateTime  @updatedAt\n  /// @TypeGraphQL.omit(input: true)\n  /// @TypeGraphQL.field(name: \"isPublished\")\n  published Boolean   @default(false)\n  title     String\n  /// @TypeGraphQL.omit(output: true)\n  subtitle  String\n  content   String?\n  author    User      @relation(fields: [authorId], references: [id], name: \"posts\", onDelete: Cascade)\n  authorId  Int\n  /// @TypeGraphQL.omit(output: true)\n  editor    User?     @relation(fields: [editorId], references: [id], name: \"editorPosts\", onDelete: Cascade)\n  /// @TypeGraphQL.omit(output: true)\n  editorId  Int?\n  kind      PostKind?\n  metadata  Json\n}\n\nmodel Category {\n  name   String\n  slug   String\n  number Int\n\n  @@unique([slug, number], name: \"categoryCompoundUnique\")\n}\n\nmodel Patient {\n  firstName String\n  lastName  String\n  email     String\n\n  @@id([firstName, lastName])\n}\n\nmodel Movie {\n  directorFirstName String\n  directorLastName  String\n  director          Director @relation(fields: [directorFirstName, directorLastName], references: [firstName, lastName], onDelete: Cascade)\n  title             String\n\n  @@id([directorFirstName, directorLastName, title], name: \"movieCompoundId\")\n}\n\nmodel Director {\n  firstName String\n  lastName  String\n  movies    Movie[]\n\n  @@id([firstName, lastName])\n}\n\nmodel Problem {\n  id          Int       @id @default(autoincrement())\n  problemText String\n  likedBy     Creator[]\n  creator     Creator?  @relation(name: \"creator\", fields: [creatorId], references: [id], onDelete: Cascade)\n  creatorId   Int?\n}\n\nmodel Creator {\n  id       Int       @id @default(autoincrement())\n  name     String\n  likes    Problem[]\n  problems Problem[] @relation(\"creator\")\n}\n\nmodel NativeTypeModel {\n  id      Int      @id @default(autoincrement()) @postgres.Integer\n  bigInt  BigInt?  @postgres.BigInt\n  byteA   Bytes?   @postgres.ByteA\n  decimal Decimal? @postgres.Decimal\n}\n\n/// @@TypeGraphQL.type(plural: \"equipments\")\nmodel Equipment {\n  id   String  @id @default(cuid())\n  name String?\n}\n\n/// @@TypeGraphQL.omit(output: true)\nmodel Hidden {\n  id   String  @id @default(cuid())\n  name String?\n}\n",
  "inlineSchemaHash": "4a58739cfc99389b8e007daef18ab6b9cbb45f71a3644eba235943a45bde9d1a",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/generated/client",
    "generated/client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"User model field doc\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"renamed field doc\\\\n@TypeGraphQL.field(name: \\\"firstName\\\")\"},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"accountBalance\\\")\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"clientPosts\\\")\"},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"editorPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"grades\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aliases\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"User model doc\\\\n@@TypeGraphQL.type(name: \\\"MainUser\\\")\"},\"post\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid(4)\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"first line of comment\\\\nsecond line of comment\\\\nthird line of comment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@TypeGraphQL.omit(input: [\\\"create\\\", \\\"update\\\"])\"},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(input: true)\\\\n@TypeGraphQL.field(name: \\\"isPublished\\\")\"},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"posts\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"editorPosts\",\"relationFromFields\":[\"editorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"editorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"kind\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PostKind\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Category\":{\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"slug\",\"number\"]],\"uniqueIndexes\":[{\"name\":\"categoryCompoundUnique\",\"fields\":[\"slug\",\"number\"]}],\"isGenerated\":false},\"Patient\":{\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Movie\":{\"dbName\":null,\"fields\":[{\"name\":\"directorFirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directorLastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"director\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Director\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[\"directorFirstName\",\"directorLastName\"],\"relationToFields\":[\"firstName\",\"lastName\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"movieCompoundId\",\"fields\":[\"directorFirstName\",\"directorLastName\",\"title\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Director\":{\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Problem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problemText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"creator\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Creator\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"creator\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NativeTypeModel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigInt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"byteA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Equipment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@TypeGraphQL.type(plural: \\\"equipments\\\")\"},\"Hidden\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@TypeGraphQL.omit(output: true)\"}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null,\"documentation\":\"Role enum doc\"},\"PostKind\":{\"values\":[{\"name\":\"BLOG\",\"dbName\":null},{\"name\":\"ADVERT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(process.cwd(), "prisma/generated/client/libquery_engine-debian-openssl-3.0.x.so.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/generated/client/schema.prisma")
