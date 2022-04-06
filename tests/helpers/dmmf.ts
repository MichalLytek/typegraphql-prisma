import { DMMF as PrismaDMMF } from "@prisma/client/runtime";
import { GetDMMFOptions } from "@prisma/sdk";
const PrismaClientGeneratorBuild = require("@prisma/client/generator-build");

function getDMMF(options: GetDMMFOptions): Promise<PrismaDMMF.Document> {
  return PrismaClientGeneratorBuild.getDMMF(options);
}

export default async function getPrismaClientDmmfFromPrismaSchema(
  prismaSchema: string,
  previewFeatures: string[] = [],
  provider = "postgresql",
): Promise<PrismaDMMF.Document> {
  const previewFeaturesToEmit = [...previewFeatures];
  const datamodelWithGeneratorBlock = /* prisma */ `
    datasource db {
      provider = "${provider}"
      url      = env("DATABASE_URL")
    }
    generator client {
      provider = "prisma-client-js"
      ${
        previewFeaturesToEmit.length > 0
          ? `previewFeatures = [${previewFeaturesToEmit
              .map(it => `"${it}"`)
              .join(", ")}]`
          : ""
      }
    }
    ${prismaSchema}
  `;
  return await getDMMF({
    datamodel: datamodelWithGeneratorBlock,
    previewFeatures,
  });
}
