import type { DMMF as PrismaDMMF } from "@prisma/client/runtime/library";
import { getDMMF } from "@prisma/internals";

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
