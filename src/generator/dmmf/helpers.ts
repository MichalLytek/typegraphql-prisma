export const modelAttributeRegex = /(@@TypeGraphQL\.)+([A-z])+(\()+(.+)+(\))+/g;
export const fieldAttributeRegex = /(@TypeGraphQL\.)+([A-z])+(\()+(.+)+(\))+/g;
export const attributeNameRegex = /(?:\.)+([A-Za-z])+(?:\()+/;
export const attributeArgsRegex = /(?:\()+([A-Za-z])+\:+(.+)+(?:\))+/;

export function parseDocumentationAttributes<TData extends object = object>(
  documentation: string | undefined,
  expectedAttributeName: string,
  expectedAttributeKind: "model" | "field",
): Partial<TData> {
  const attributeRegex =
    expectedAttributeKind === "model"
      ? modelAttributeRegex
      : fieldAttributeRegex;
  const matchResults = documentation?.matchAll(attributeRegex) ?? [];

  for (const [attribute] of matchResults) {
    const attributeName = attribute
      ?.match(attributeNameRegex)?.[0]
      ?.slice(1, -1);
    if (attributeName !== expectedAttributeName) {
      continue;
    }
    const rawAttributeArgs = attribute
      ?.match(attributeArgsRegex)?.[0]
      ?.slice(1, -1);
    const parsedAttributeArgs: Record<string, unknown> = {};
    if (rawAttributeArgs) {
      const rawAttributeArgsParts = rawAttributeArgs
        .split(":")
        .map(it => it.trim())
        .map(part => (part.startsWith("[") ? part : part.split(",")))
        .flat()
        .map(it => it.trim());

      for (let i = 0; i < rawAttributeArgsParts.length; i += 2) {
        const key = rawAttributeArgsParts[i];
        const value = rawAttributeArgsParts[i + 1];
        parsedAttributeArgs[key] = JSON.parse(value);
      }
    }
    return parsedAttributeArgs as Partial<TData>;
  }

  return {};
}
