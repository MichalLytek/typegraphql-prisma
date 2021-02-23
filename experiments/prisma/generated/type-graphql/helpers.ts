
export function transformFields(fields: Record<string, any>): Record<string, any> {
  return Object.fromEntries(
    Object.entries(fields)
      // remove __typename and others
      .filter(([key, value]) => !key.startsWith("__"))
      .map<[string, any]>(([key, value]) => {
        if (Object.keys(value).length === 0) {
          return [key, true];
        }
        return [key, transformFields(value)];
      }),
  );
}

