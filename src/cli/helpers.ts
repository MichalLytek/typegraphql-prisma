export function parseStringBoolean(stringBoolean: string | undefined) {
  return stringBoolean === "true"
    ? true
    : stringBoolean === "false"
    ? false
    : undefined;
}

export function parseStringArray<TAllowedValue extends string>(
  stringArray: string | undefined,
  optionPropertyName: string,
  allowedValues?: readonly TAllowedValue[],
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

export function parseStringEnum<TAllowedValue extends string>(
  stringEnum: string | undefined,
  optionPropertyName: string,
  allowedValues: readonly TAllowedValue[],
): TAllowedValue | undefined {
  if (!stringEnum) {
    return undefined;
  }
  if (!allowedValues.includes(stringEnum as any)) {
    throw new Error(
      `Invalid "${optionPropertyName}" option value "${stringEnum}" provided for TypeGraphQL generator.`,
    );
  }
  return stringEnum as TAllowedValue;
}
