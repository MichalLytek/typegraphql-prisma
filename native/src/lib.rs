use napi::bindgen_prelude::*;
use napi_derive::napi;
use serde::{Deserialize, Serialize};

const CONTRACT_VERSION: u32 = 1;

#[derive(Deserialize)]
#[serde(tag = "action")]
enum GenerateRequest {
    #[serde(rename = "generate_scalars")]
    GenerateScalars {
        #[serde(rename = "contractVersion")]
        contract_version: u32,
        payload: GenerateScalarsPayload,
    },
    #[serde(rename = "generate_helpers")]
    GenerateHelpers {
        #[serde(rename = "contractVersion")]
        contract_version: u32,
        payload: GenerateHelpersPayload,
    },
    #[serde(rename = "generate_index")]
    GenerateIndex {
        #[serde(rename = "contractVersion")]
        contract_version: u32,
        payload: GenerateIndexPayload,
    },
    #[serde(rename = "generate_enum")]
    GenerateEnum {
        #[serde(rename = "contractVersion")]
        contract_version: u32,
        payload: GenerateEnumPayload,
    },
}

#[derive(Deserialize)]
struct GenerateScalarsPayload {
    #[serde(rename = "prismaImportPath")]
    prisma_import_path: String,
}

#[derive(Deserialize)]
struct GenerateHelpersPayload {
    #[serde(rename = "contextPrismaKey")]
    context_prisma_key: String,
}

#[derive(Deserialize)]
struct GenerateIndexPayload {
    #[serde(rename = "hasSomeRelations")]
    has_some_relations: bool,
    #[serde(rename = "blocksToEmit")]
    blocks_to_emit: Vec<String>,
}

#[derive(Deserialize)]
struct GenerateEnumPayload {
    #[serde(rename = "typeName")]
    type_name: String,
    docs: Option<String>,
    #[serde(rename = "valuesMap")]
    values_map: Vec<GenerateEnumValuePayload>,
}

#[derive(Deserialize)]
struct GenerateEnumValuePayload {
    name: String,
    value: String,
}

#[derive(Serialize)]
struct GenerateSuccessResponse {
    #[serde(rename = "contractVersion")]
    contract_version: u32,
    ok: bool,
    result: GenerateSuccessResult,
}

#[derive(Serialize)]
struct GenerateSuccessResult {
    text: String,
}

#[derive(Serialize)]
struct GenerateErrorResponse {
    #[serde(rename = "contractVersion")]
    contract_version: u32,
    ok: bool,
    error: String,
}

#[napi(object)]
pub struct PortStatus {
    pub ready: bool,
    pub message: String,
}

#[napi]
pub fn port_status() -> PortStatus {
    PortStatus {
        ready: true,
        message: "Rust generator ready for 'scalars,helpers,index,enums' slices behind TYPEGRAPHQL_PRISMA_RUST_SLICES."
            .to_string(),
    }
}

#[napi]
pub fn generate(generator_options_json: String) -> Result<String> {
    let request: GenerateRequest = serde_json::from_str(&generator_options_json)
        .map_err(|error| Error::from_reason(format!("Invalid native request JSON: {error}")))?;

    match request {
        GenerateRequest::GenerateScalars {
            contract_version,
            payload,
        } => generate_success_response(
            contract_version,
            render_scalars(&payload.prisma_import_path),
        ),
        GenerateRequest::GenerateHelpers {
            contract_version,
            payload,
        } => generate_success_response(
            contract_version,
            render_helpers(&payload.context_prisma_key),
        ),
        GenerateRequest::GenerateIndex {
            contract_version,
            payload,
        } => generate_success_response(
            contract_version,
            render_index(payload.has_some_relations, &payload.blocks_to_emit),
        ),
        GenerateRequest::GenerateEnum {
            contract_version,
            payload,
        } => generate_success_response(
            contract_version,
            render_enum(payload.type_name, payload.docs, payload.values_map),
        ),
    }
}

fn generate_success_response(contract_version: u32, text: String) -> Result<String> {
    if contract_version != CONTRACT_VERSION {
        let response = GenerateErrorResponse {
            contract_version: CONTRACT_VERSION,
            ok: false,
            error: format!(
                "Unsupported contract version '{contract_version}'. Expected '{CONTRACT_VERSION}'."
            ),
        };
        return Ok(serde_json::to_string(&response).map_err(|error| {
            Error::from_reason(format!("Failed to serialize error response: {error}"))
        })?);
    }

    let response = GenerateSuccessResponse {
        contract_version: CONTRACT_VERSION,
        ok: true,
        result: GenerateSuccessResult { text },
    };

    Ok(serde_json::to_string(&response).map_err(|error| {
        Error::from_reason(format!("Failed to serialize success response: {error}"))
    })?)
}

fn render_scalars(prisma_import_path: &str) -> String {
    let template = r#"import { Prisma } from "__PRISMA_IMPORT_PATH__";
import { GraphQLScalarType } from "graphql";

export const DecimalJSScalar = new GraphQLScalarType({
  name: "Decimal",
  description: "GraphQL Scalar representing the Prisma.Decimal type, based on Decimal.js library.",
  serialize: (value: unknown) => {
    if (!(Prisma.Decimal.isDecimal(value))) {
      throw new Error(`[DecimalError] Invalid argument: ${Object.prototype.toString.call(value)}. Expected Prisma.Decimal.`);
    }
    return (value as Prisma.Decimal).toString();
  },
  parseValue: (value: unknown) => {
    if (!(typeof value === "string")) {
      throw new Error(`[DecimalError] Invalid argument: ${typeof value}. Expected string.`);
    }
    return new Prisma.Decimal(value);
  },
});

"#;

    template.replace("__PRISMA_IMPORT_PATH__", prisma_import_path)
}

fn render_helpers(context_prisma_key: &str) -> String {
    let template = r#"import type { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";

export function transformInfoIntoPrismaArgs(info: GraphQLResolveInfo): Record<string, any> {
  const fields: Record<string, any> = graphqlFields(
    // suppress GraphQLResolveInfo types issue
    info as any,
    {},
    {
      excludedFields: ['__typename'],
      processArguments: true,
    }
  );
  return transformFields(fields);
}

function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        if ("__arguments" in value) {
          return [key, Object.fromEntries(
            value.__arguments.map((argument: object) => {
              const [[key, { value }]] = Object.entries(argument);
              return [key, value];
            })
          )];
        }
        return [key, transformFields(value)];
      }),
  );
}

export function getPrismaFromContext(context: any) {
  const prismaClient = context["__CONTEXT_PRISMA_KEY__"];
  if (!prismaClient) {
    throw new Error("Unable to find Prisma Client in GraphQL context. Please provide it under the `context[\"__CONTEXT_PRISMA_KEY__\"]` key.");
  }
  return prismaClient;
}

export function transformCountFieldIntoSelectRelationsCount(_count: object) {
  return {
    include: {
      _count: {
        select: {
          ...Object.fromEntries(
            Object.entries(_count).filter(([_, v]) => v != null)
          ),
        }
      },
    },
  }
}




"#;

    template.replace("__CONTEXT_PRISMA_KEY__", context_prisma_key)
}

fn has_block(blocks_to_emit: &[String], key: &str) -> bool {
    blocks_to_emit.iter().any(|it| it == key)
}

fn convert_new_lines(input: &str) -> String {
    input.replace("\\n", "\n")
}

fn escape_for_double_quoted_ts(input: &str) -> String {
    input.replace("\\", "\\\\").replace("\"", "\\\"")
}

fn render_enum(
    type_name: String,
    docs: Option<String>,
    values_map: Vec<GenerateEnumValuePayload>,
) -> String {
    let docs_comment = docs
        .as_ref()
        .map(|it| format!("/** {} */\n", convert_new_lines(it)))
        .unwrap_or_default();

    let enum_members = values_map
        .iter()
        .map(|it| format!("  {} = \"{}\"", it.name, it.value))
        .collect::<Vec<String>>()
        .join(",\n");

    let description_literal = docs
        .as_ref()
        .map(|it| format!("\"{}\"", escape_for_double_quoted_ts(it)))
        .unwrap_or_else(|| "undefined".to_string());

    format!(
        "import * as TypeGraphQL from \"type-graphql\";\n\n{}export enum {} {{\n{}\n}}\nTypeGraphQL.registerEnumType({}, {{\n  name: \"{}\",\n  description: {},\n}});\n",
        docs_comment,
        type_name,
        enum_members,
        type_name,
        type_name,
        description_literal,
    )
}

fn render_index(has_some_relations: bool, blocks_to_emit: &[String]) -> String {
    let has_crud = has_block(blocks_to_emit, "crudResolvers");
    let has_relations_block = has_some_relations && has_block(blocks_to_emit, "relationResolvers");

    let mut imports: Vec<String> = vec![];
    if has_crud {
        imports.push(
            "import * as crudResolversImport from \"./resolvers/crud/resolvers-crud.index\";"
                .to_string(),
        );
    }
    if has_relations_block {
        imports.push(
            "import * as relationResolversImport from \"./resolvers/relations/resolvers.index\";"
                .to_string(),
        );
    }
    imports.push("import { NonEmptyArray } from \"type-graphql\";".to_string());

    let mut exports: Vec<String> = vec![];
    if has_block(blocks_to_emit, "enums") {
        exports.push("export * from \"./enums\";".to_string());
    }
    if has_block(blocks_to_emit, "models") {
        exports.push("export * from \"./models\";".to_string());
    }
    if has_crud {
        exports.push("export * from \"./resolvers/crud\";".to_string());
        exports.push("".to_string());
        exports.push(
            "export const crudResolvers = Object.values(crudResolversImport) as unknown as NonEmptyArray<Function>;"
                .to_string(),
        );
        exports.push("".to_string());
    }
    if has_relations_block {
        exports.push("export * from \"./resolvers/relations\";".to_string());
        exports.push("".to_string());
        exports.push(
            "export const relationResolvers = Object.values(relationResolversImport) as unknown as NonEmptyArray<Function>;".to_string(),
        );
        exports.push("".to_string());
    }
    if has_block(blocks_to_emit, "inputs") {
        exports.push("export * from \"./resolvers/inputs\";".to_string());
    }
    if has_block(blocks_to_emit, "outputs") {
        exports.push("export * from \"./resolvers/outputs\";".to_string());
    }
    exports.push("export * from \"./enhance\";".to_string());
    exports.push("export * from \"./scalars\";".to_string());

    let mut sections: Vec<String> = vec![imports.join("\n"), exports.join("\n")];

    if has_crud || has_relations_block {
        let mut resolver_lines = vec!["export const resolvers = [".to_string()];
        if has_crud {
            resolver_lines.push("  ...crudResolvers,".to_string());
        }
        if has_relations_block {
            resolver_lines.push("  ...relationResolvers,".to_string());
        }
        resolver_lines.push("] as unknown as NonEmptyArray<Function>;".to_string());
        sections.push(resolver_lines.join("\n"));
    }

    format!("{}\n", sections.join("\n\n"))
}
