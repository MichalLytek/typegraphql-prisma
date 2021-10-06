export function parseStringBoolean(stringBoolean: string | undefined) {
  return stringBoolean ? stringBoolean === "true" : undefined;
}

export function parseStringArray<TAllowedValue extends string>(
  stringArray: string | undefined,
  optionPropertyName: string,
  allowedValues?: TAllowedValue[],
): TAllowedValue[] | undefined {
  if (!stringArray) {
    return undefined;
  }
  const parsedArray = stringArray.split(",").map(it => it.trim());
  if (allowedValues) {
    for (const option of parsedArray) {
      if (!allowedValues.includes(option as any)) {
        throw new Error(
          `Invalid "${optionPropertyName}" option value "${option}" provided for TypeGraphQL generator.`,
        );
      }
    }
  }
  return parsedArray as TAllowedValue[];
}
