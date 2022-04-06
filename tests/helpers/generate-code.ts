import generateCode from "../../src/generator/generate-code";
import {
  ExternalGeneratorOptions,
  InternalGeneratorOptions,
} from "../../src/generator/options";
import getPrismaClientDmmfFromPrismaSchema from "./dmmf";

type SupportedPreviewFeatures = "filterJson" | "fullTextSearch";

interface GenerateCodeFromSchemaOptions
  extends Omit<
    ExternalGeneratorOptions & InternalGeneratorOptions,
    "relativePrismaOutputPath"
  > {
  previewFeatures?: SupportedPreviewFeatures[];
}

export async function generateCodeFromSchema(
  schema: string,
  options: GenerateCodeFromSchemaOptions,
  provider?: string,
): Promise<void> {
  await generateCode(
    await getPrismaClientDmmfFromPrismaSchema(
      schema,
      options.previewFeatures,
      provider,
    ),
    {
      ...options,
      relativePrismaOutputPath: "../../helpers/prisma-client-mock",
    },
  );
}
