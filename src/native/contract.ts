export const NATIVE_CONTRACT_VERSION = 1;

export type NativeSlice = "scalars" | "helpers" | "index" | "enums";

export type NativeGenerateRequest =
  | {
      contractVersion: typeof NATIVE_CONTRACT_VERSION;
      action: "generate_scalars";
      payload: {
        prismaImportPath: string;
      };
    }
  | {
      contractVersion: typeof NATIVE_CONTRACT_VERSION;
      action: "generate_helpers";
      payload: {
        contextPrismaKey: string;
      };
    }
  | {
      contractVersion: typeof NATIVE_CONTRACT_VERSION;
      action: "generate_index";
      payload: {
        hasSomeRelations: boolean;
        blocksToEmit: (
          | "enums"
          | "models"
          | "crudResolvers"
          | "relationResolvers"
          | "inputs"
          | "outputs"
        )[];
      };
    }
  | {
      contractVersion: typeof NATIVE_CONTRACT_VERSION;
      action: "generate_enum";
      payload: {
        typeName: string;
        docs?: string;
        valuesMap: Array<{
          name: string;
          value: string;
        }>;
      };
    };

export type NativeGenerateSuccess = {
  contractVersion: typeof NATIVE_CONTRACT_VERSION;
  ok: true;
  result: {
    text: string;
  };
};

export type NativeGenerateFailure = {
  contractVersion: typeof NATIVE_CONTRACT_VERSION;
  ok: false;
  error: string;
};

export type NativeGenerateResponse =
  | NativeGenerateSuccess
  | NativeGenerateFailure;
