
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
} = require('./runtime/edge')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
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
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
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
  "inlineSchema": "ZGF0YXNvdXJjZSBwb3N0Z3JlcyB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgICAgICAgID0gInByaXNtYS1jbGllbnQtanMiCiAgLy8gYmluYXJ5VGFyZ2V0cyAgID0gWyJ3aW5kb3dzIiwgImRlYmlhbi1vcGVuc3NsLTEuMS54Il0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vcHJpc21hL2dlbmVyYXRlZC9jbGllbnQiCiAgcHJldmlld0ZlYXR1cmVzID0gWyJmdWxsVGV4dFNlYXJjaCJdCn0KCmdlbmVyYXRvciB0eXBlZ3JhcGhxbCB7CiAgcHJvdmlkZXIgICAgICAgICAgICAgICAgID0gIm5vZGUgLi4vLi4vc3JjL2NsaS9kZXYudHMiCiAgb3V0cHV0ICAgICAgICAgICAgICAgICAgID0gIi4uL3ByaXNtYS9nZW5lcmF0ZWQvdHlwZS1ncmFwaHFsIgogIGVtaXRETU1GICAgICAgICAgICAgICAgICA9IHRydWUKICAvLyBlbWl0VHJhbnNwaWxlZENvZGUgICAgICAgPSB0cnVlCiAgc2ltcGxlUmVzb2x2ZXJzICAgICAgICAgID0gZmFsc2UKICAvLyB1c2VPcmlnaW5hbE1hcHBpbmcgICAgICAgPSB0cnVlCiAgdXNlVW5jaGVja2VkU2NhbGFySW5wdXRzID0gZmFsc2UKICBlbWl0SWRBc0lEVHlwZSAgICAgICAgICAgPSB0cnVlCiAgLy8gZW1pdE9ubHkgICAgICAgICAgICAgICAgID0gWyJlbnVtcyIsICJtb2RlbHMiXQogIGN1c3RvbVByaXNtYUltcG9ydFBhdGggICA9ICIuLi9jbGllbnQiCiAgY29udGV4dFByaXNtYUtleSAgICAgICAgID0gInByaXNtYUNsaWVudCIKICB1c2VTaW1wbGVJbnB1dHMgICAgICAgICAgPSB0cnVlCiAgZW1pdFJlZHVuZGFudFR5cGVzSW5mbyAgID0gdHJ1ZQogIGZvcm1hdEdlbmVyYXRlZENvZGUgICAgICA9ICJ0c2MiCn0KCi8vIFJvbGUgZW51bSBjb21tZW50Ci8vLyBSb2xlIGVudW0gZG9jCmVudW0gUm9sZSB7CiAgVVNFUgogIEFETUlOCn0KCi8vIFVzZXIgbW9kZWwgY29tbWVudAovLy8gVXNlciBtb2RlbCBkb2MKLy8vIEBAVHlwZUdyYXBoUUwudHlwZShuYW1lOiAiTWFpblVzZXIiKQptb2RlbCBVc2VyIHsKICAvLyBVc2VyIG1vZGVsIGZpZWxkIGNvbW1lbnQKICAvLy8gVXNlciBtb2RlbCBmaWVsZCBkb2MKICBpZCAgICAgICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQogIGVtYWlsICAgICAgIFN0cmluZyAgIEB1bmlxdWUKICAvLy8gcmVuYW1lZCBmaWVsZCBkb2MKICAvLy8gQFR5cGVHcmFwaFFMLmZpZWxkKG5hbWU6ICJmaXJzdE5hbWUiKQogIG5hbWUgICAgICAgIFN0cmluZz8KICBhZ2UgICAgICAgICBJbnQKICAvLy8gQFR5cGVHcmFwaFFMLmZpZWxkKG5hbWU6ICJhY2NvdW50QmFsYW5jZSIpCiAgYmFsYW5jZSAgICAgRmxvYXQKICBhbW91bnQgICAgICBGbG9hdAogIC8vLyBAVHlwZUdyYXBoUUwuZmllbGQobmFtZTogImNsaWVudFBvc3RzIikKICBwb3N0cyAgICAgICBwb3N0W10gICBAcmVsYXRpb24oInBvc3RzIikKICByb2xlICAgICAgICBSb2xlCiAgLy8vIEBUeXBlR3JhcGhRTC5vbWl0KG91dHB1dDogdHJ1ZSkKICBlZGl0b3JQb3N0cyBwb3N0W10gICBAcmVsYXRpb24oImVkaXRvclBvc3RzIikKICBncmFkZXMgICAgICBJbnRbXQogIGFsaWFzZXMgICAgIFN0cmluZ1tdCn0KCmVudW0gUG9zdEtpbmQgewogIEJMT0cKICBBRFZFUlQKfQoKbW9kZWwgcG9zdCB7CiAgLy8vIGZpcnN0IGxpbmUgb2YgY29tbWVudAogIC8vLyBzZWNvbmQgbGluZSBvZiBjb21tZW50CiAgLy8vIHRoaXJkIGxpbmUgb2YgY29tbWVudAogIHV1aWQgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIC8vLyBAVHlwZUdyYXBoUUwub21pdChpbnB1dDogWyJjcmVhdGUiLCAidXBkYXRlIl0pCiAgdXBkYXRlZEF0IERhdGVUaW1lICBAdXBkYXRlZEF0CiAgLy8vIEBUeXBlR3JhcGhRTC5vbWl0KGlucHV0OiB0cnVlKQogIC8vLyBAVHlwZUdyYXBoUUwuZmllbGQobmFtZTogImlzUHVibGlzaGVkIikKICBwdWJsaXNoZWQgQm9vbGVhbiAgIEBkZWZhdWx0KGZhbHNlKQogIHRpdGxlICAgICBTdHJpbmcKICAvLy8gQFR5cGVHcmFwaFFMLm9taXQob3V0cHV0OiB0cnVlKQogIHN1YnRpdGxlICBTdHJpbmcKICBjb250ZW50ICAgU3RyaW5nPwogIGF1dGhvciAgICBVc2VyICAgICAgQHJlbGF0aW9uKGZpZWxkczogW2F1dGhvcklkXSwgcmVmZXJlbmNlczogW2lkXSwgbmFtZTogInBvc3RzIiwgb25EZWxldGU6IENhc2NhZGUpCiAgYXV0aG9ySWQgIEludAogIC8vLyBAVHlwZUdyYXBoUUwub21pdChvdXRwdXQ6IHRydWUpCiAgZWRpdG9yICAgIFVzZXI/ICAgICBAcmVsYXRpb24oZmllbGRzOiBbZWRpdG9ySWRdLCByZWZlcmVuY2VzOiBbaWRdLCBuYW1lOiAiZWRpdG9yUG9zdHMiLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICAvLy8gQFR5cGVHcmFwaFFMLm9taXQob3V0cHV0OiB0cnVlKQogIGVkaXRvcklkICBJbnQ/CiAga2luZCAgICAgIFBvc3RLaW5kPwogIG1ldGFkYXRhICBKc29uCn0KCm1vZGVsIENhdGVnb3J5IHsKICBuYW1lICAgU3RyaW5nCiAgc2x1ZyAgIFN0cmluZwogIG51bWJlciBJbnQKCiAgQEB1bmlxdWUoW3NsdWcsIG51bWJlcl0sIG5hbWU6ICJjYXRlZ29yeUNvbXBvdW5kVW5pcXVlIikKfQoKbW9kZWwgUGF0aWVudCB7CiAgZmlyc3ROYW1lIFN0cmluZwogIGxhc3ROYW1lICBTdHJpbmcKICBlbWFpbCAgICAgU3RyaW5nCgogIEBAaWQoW2ZpcnN0TmFtZSwgbGFzdE5hbWVdKQp9Cgptb2RlbCBNb3ZpZSB7CiAgZGlyZWN0b3JGaXJzdE5hbWUgU3RyaW5nCiAgZGlyZWN0b3JMYXN0TmFtZSAgU3RyaW5nCiAgZGlyZWN0b3IgICAgICAgICAgRGlyZWN0b3IgQHJlbGF0aW9uKGZpZWxkczogW2RpcmVjdG9yRmlyc3ROYW1lLCBkaXJlY3Rvckxhc3ROYW1lXSwgcmVmZXJlbmNlczogW2ZpcnN0TmFtZSwgbGFzdE5hbWVdLCBvbkRlbGV0ZTogQ2FzY2FkZSkKICB0aXRsZSAgICAgICAgICAgICBTdHJpbmcKCiAgQEBpZChbZGlyZWN0b3JGaXJzdE5hbWUsIGRpcmVjdG9yTGFzdE5hbWUsIHRpdGxlXSwgbmFtZTogIm1vdmllQ29tcG91bmRJZCIpCn0KCm1vZGVsIERpcmVjdG9yIHsKICBmaXJzdE5hbWUgU3RyaW5nCiAgbGFzdE5hbWUgIFN0cmluZwogIG1vdmllcyAgICBNb3ZpZVtdCgogIEBAaWQoW2ZpcnN0TmFtZSwgbGFzdE5hbWVdKQp9Cgptb2RlbCBQcm9ibGVtIHsKICBpZCAgICAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBwcm9ibGVtVGV4dCBTdHJpbmcKICBsaWtlZEJ5ICAgICBDcmVhdG9yW10KICBjcmVhdG9yICAgICBDcmVhdG9yPyAgQHJlbGF0aW9uKG5hbWU6ICJjcmVhdG9yIiwgZmllbGRzOiBbY3JlYXRvcklkXSwgcmVmZXJlbmNlczogW2lkXSwgb25EZWxldGU6IENhc2NhZGUpCiAgY3JlYXRvcklkICAgSW50Pwp9Cgptb2RlbCBDcmVhdG9yIHsKICBpZCAgICAgICBJbnQgICAgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkKICBuYW1lICAgICBTdHJpbmcKICBsaWtlcyAgICBQcm9ibGVtW10KICBwcm9ibGVtcyBQcm9ibGVtW10gQHJlbGF0aW9uKCJjcmVhdG9yIikKfQoKbW9kZWwgTmF0aXZlVHlwZU1vZGVsIHsKICBpZCAgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpIEBwb3N0Z3Jlcy5JbnRlZ2VyCiAgYmlnSW50ICBCaWdJbnQ/ICBAcG9zdGdyZXMuQmlnSW50CiAgYnl0ZUEgICBCeXRlcz8gICBAcG9zdGdyZXMuQnl0ZUEKICBkZWNpbWFsIERlY2ltYWw/IEBwb3N0Z3Jlcy5EZWNpbWFsCn0KCi8vLyBAQFR5cGVHcmFwaFFMLnR5cGUocGx1cmFsOiAiZXF1aXBtZW50cyIpCm1vZGVsIEVxdWlwbWVudCB7CiAgaWQgICBTdHJpbmcgIEBpZCBAZGVmYXVsdChjdWlkKCkpCiAgbmFtZSBTdHJpbmc/Cn0KCi8vLyBAQFR5cGVHcmFwaFFMLm9taXQob3V0cHV0OiB0cnVlKQptb2RlbCBIaWRkZW4gewogIGlkICAgU3RyaW5nICBAaWQgQGRlZmF1bHQoY3VpZCgpKQogIG5hbWUgU3RyaW5nPwp9Cg==",
  "inlineSchemaHash": "4a58739cfc99389b8e007daef18ab6b9cbb45f71a3644eba235943a45bde9d1a",
  "noEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"User model field doc\"},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"renamed field doc\\\\n@TypeGraphQL.field(name: \\\"firstName\\\")\"},{\"name\":\"age\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"balance\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"accountBalance\\\")\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Float\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"posts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.field(name: \\\"clientPosts\\\")\"},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Role\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editorPosts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"post\",\"relationName\":\"editorPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"grades\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"aliases\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"User model doc\\\\n@@TypeGraphQL.type(name: \\\"MainUser\\\")\"},\"post\":{\"dbName\":null,\"fields\":[{\"name\":\"uuid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"first line of comment\\\\nsecond line of comment\\\\nthird line of comment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true,\"documentation\":\"@TypeGraphQL.omit(input: [\\\"create\\\", \\\"update\\\"])\"},{\"name\":\"published\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(input: true)\\\\n@TypeGraphQL.field(name: \\\"isPublished\\\")\"},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"subtitle\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"content\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"posts\",\"relationFromFields\":[\"authorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"editor\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"editorPosts\",\"relationFromFields\":[\"editorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"editorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false,\"documentation\":\"@TypeGraphQL.omit(output: true)\"},{\"name\":\"kind\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PostKind\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"metadata\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Json\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Category\":{\"dbName\":null,\"fields\":[{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"slug\",\"number\"]],\"uniqueIndexes\":[{\"name\":\"categoryCompoundUnique\",\"fields\":[\"slug\",\"number\"]}],\"isGenerated\":false},\"Patient\":{\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Movie\":{\"dbName\":null,\"fields\":[{\"name\":\"directorFirstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"directorLastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"director\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Director\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[\"directorFirstName\",\"directorLastName\"],\"relationToFields\":[\"firstName\",\"lastName\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":\"movieCompoundId\",\"fields\":[\"directorFirstName\",\"directorLastName\",\"title\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Director\":{\"dbName\":null,\"fields\":[{\"name\":\"firstName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"lastName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"movies\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Movie\",\"relationName\":\"DirectorToMovie\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"firstName\",\"lastName\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Problem\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problemText\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedBy\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creator\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Creator\",\"relationName\":\"creator\",\"relationFromFields\":[\"creatorId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"creatorId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Creator\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"CreatorToProblem\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"problems\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Problem\",\"relationName\":\"creator\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"NativeTypeModel\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bigInt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"byteA\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bytes\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"decimal\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Decimal\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Equipment\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@TypeGraphQL.type(plural: \\\"equipments\\\")\"},\"Hidden\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"cuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"@@TypeGraphQL.omit(output: true)\"}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"USER\",\"dbName\":null},{\"name\":\"ADMIN\",\"dbName\":null}],\"dbName\":null,\"documentation\":\"Role enum doc\"},\"PostKind\":{\"values\":[{\"name\":\"BLOG\",\"dbName\":null},{\"name\":\"ADVERT\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)


config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

