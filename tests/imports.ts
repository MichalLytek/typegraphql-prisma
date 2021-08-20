import { generateIndexFile } from "../src/generator/imports";
import { createNewTsMorphProject } from "../src/generator/createNewTsMorphProject";

describe("generateIndexFile", () => {
  const project = createNewTsMorphProject(false);
  it("should generate with resolvers", async () => {
    const path = "./test/artifacts/index.ts";
    generateIndexFile(
      project.createSourceFile(path, undefined, {
        overwrite: true,
      }),
      true,
    );
    const file = project.getSourceFile(path);

    expect(file?.getText()).toMatchSnapshot();
  });

  it("should generate without resolvers", async () => {
    const path = "./test/artifacts/index2.ts";
    generateIndexFile(
      project.createSourceFile(path, undefined, {
        overwrite: true,
      }),
      true,
      true,
    );
    const file = project.getSourceFile(path);

    expect(file?.getText()).toMatchInlineSnapshot(`
"export * from \\"./enums\\";
export * from \\"./models\\";
export * from \\"./scalars\\";
"
`);
  });
});
