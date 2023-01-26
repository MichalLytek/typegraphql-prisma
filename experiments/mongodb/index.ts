import "reflect-metadata";
import { buildSchema } from "type-graphql";
import path from "path";

import { resolvers } from "./prisma/generated/type-graphql";
import * as Prisma from "./prisma/generated/client";
import { createYoga } from "graphql-yoga";
import { createServer } from "http";

interface Context {
  prisma: Prisma.PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers,
    validate: false,
    emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
  });

  const prisma = new Prisma.PrismaClient();

  await prisma.$connect();

  const yoga = createYoga<{}, Context>({
    schema,
    context: () => ({ prisma }),
    graphiql: true,
  });

  const server = createServer(yoga);

  server.listen(4000, () => {
    console.info("GraphQL Server is running on http://localhost:4000/graphql");
  });
}

main().catch(console.error);
