import generateCode from "../../src/generator/generate-code";
import { Prisma } from "./prisma/generated/client";

generateCode(
  // @ts-ignore FIXME: use getDMMF
  Prisma.dmmf,
  {
    outputDirPath: __dirname + "/prisma/generated/type-graphql",
    relativePrismaOutputPath: "../client",
  },
  console.log,
);
