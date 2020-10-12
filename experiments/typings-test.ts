import * as TypeGraphQLPrisma from "./prisma/generated/type-graphql";
import * as Prisma from "./prisma/generated/client";

process.exit(1);

// @ts-ignore Unreachable code detected.ts(7027)

declare const findManyClientArgs: TypeGraphQLPrisma.FindManyClientArgs;
const prismaFindManyUserArgs: Prisma.FindManyUserArgs = findManyClientArgs;

declare const clientInput: TypeGraphQLPrisma.Client;
const prismaUserOutput: Prisma.User = clientInput;

// TODO: fix renamed fields - getters
// declare const prismaUserInput: Prisma.User;
// const clientOutput: TypeGraphQLPrisma.Client = prismaUserInput;

declare const prismaPostInput: Prisma.post;
const postOutput: TypeGraphQLPrisma.Post = prismaPostInput;

declare const postCreateInput: TypeGraphQLPrisma.PostCreateInput;
const prismaPostCreateInput: Prisma.postCreateInput = postCreateInput;

declare const createClientArgs: TypeGraphQLPrisma.CreateClientArgs;
const prismaUserCreateArgs: Prisma.UserCreateArgs = createClientArgs;

declare const clientCreateInput: TypeGraphQLPrisma.ClientCreateInput;
const prismaUserCreateInput: Prisma.UserCreateInput = clientCreateInput;

declare const aggregateClient: TypeGraphQLPrisma.AggregateClient;
const prismaAggregateUser: Prisma.AggregateUser = aggregateClient;

declare const aggregateClientArgs: TypeGraphQLPrisma.AggregateClientArgs;
const prismaAggregateUserArgs: Prisma.AggregateUserArgs = aggregateClientArgs;
