import * as TypeGraphQLPrisma from "./prisma/generated/type-graphql";
import { Prisma } from "./prisma/generated/client";
import * as PrismaModels from "./prisma/generated/client";

process.exit(1);

// @ts-ignore Unreachable code detected.ts(7027)

declare const findManyMainUserArgs: TypeGraphQLPrisma.FindManyMainUserArgs;
const prismaFindManyUserArgs: Prisma.UserFindManyArgs = findManyMainUserArgs;

declare const mainUserModel: TypeGraphQLPrisma.MainUser;
const prismaUserOutput: PrismaModels.User = mainUserModel;

declare const prismaUserModel: PrismaModels.User;
// @ts-expect-error fix renamed fields - getters
const mainUserOutput: TypeGraphQLPrisma.MainUser = prismaUserModel;

declare const prismaPostInput: PrismaModels.post;
const postOutput: TypeGraphQLPrisma.Post = prismaPostInput;

declare const postCreateInput: TypeGraphQLPrisma.PostCreateInput;
const prismaPostCreateInput: Prisma.postCreateInput = postCreateInput;

declare const createMainUserArgs: TypeGraphQLPrisma.CreateMainUserArgs;
const prismaUserCreateArgs: Prisma.UserCreateArgs = createMainUserArgs;

declare const clientCreateInput: TypeGraphQLPrisma.MainUserCreateInput;
const prismaUserCreateInput: Prisma.UserCreateInput = clientCreateInput;

declare const aggregateMainUser: TypeGraphQLPrisma.AggregateMainUser;
const prismaAggregateUser: Prisma.AggregateUser = aggregateMainUser;

declare const aggregateMainUserArgs: TypeGraphQLPrisma.AggregateMainUserArgs;
const prismaAggregateUserArgs: Prisma.UserAggregateArgs = aggregateMainUserArgs;
