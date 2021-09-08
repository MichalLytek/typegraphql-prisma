import generateCode from "../../src/generator/generate-code";
import getPrismaClientDmmfFromPrismaSchema from "./dmmf";
import { GenerateCodeOptions } from "../../src/generator/options";

type SupportedPreviewFeatures = "filterJson" | "fullTextSearch";

interface GenerateCodeFromSchemaOptions
  extends Omit<GenerateCodeOptions, "relativePrismaOutputPath"> {
  previewFeatures?: SupportedPreviewFeatures[];
}

export async function generateCodeFromSchema(
  schema: string,
  options: GenerateCodeFromSchemaOptions,
): Promise<void> {
  await generateCode(
    await getPrismaClientDmmfFromPrismaSchema(schema, options.previewFeatures),
    {
      ...options,
      relativePrismaOutputPath: "../../helpers/prisma-client-mock",
    },
  );
}
