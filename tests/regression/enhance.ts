import { promises as fs } from "fs";
import generateArtifactsDirPath from "../helpers/artifacts-dir";
import { generateCodeFromSchema } from "../helpers/generate-code";
import createReadGeneratedFile, {
  ReadGeneratedFile,
} from "../helpers/read-file";

describe("resolvers enhance", () => {
  let outputDirPath: string;
  let readGeneratedFile: ReadGeneratedFile;

  beforeEach(async () => {
    outputDirPath = generateArtifactsDirPath("enhance-regression");
    await fs.mkdir(outputDirPath, { recursive: true });
    readGeneratedFile = createReadGeneratedFile(outputDirPath);
  });

  it("should emit models and resolvers config map with types", async () => {
    const schema = /* prisma */ `
      datasource db {
        provider = "postgresql"
        url      = env("DATABASE_URL")
      }

      /// @@TypeGraphQL.type(name: "Client")
      model User {
        id          Int     @id @default(autoincrement())
        email       String  @unique
        posts       Post[]  @relation("posts")
      }

      model Post {
        uuid      String    @id @default(uuid())
        createdAt DateTime  @default(now())
        updatedAt DateTime  @updatedAt
        published Boolean
        title     String
        content   String?
        author    User      @relation(fields: [authorId], references: [id], name: "posts")
        authorId  Int
        metadata  Json
      }
    `;

    await generateCodeFromSchema(schema, { outputDirPath });
    const enhanceTSFile = await readGeneratedFile("/enhance.ts");
    const mainIndexTSFile = await readGeneratedFile("/index.ts");

    expect(enhanceTSFile).toMatchSnapshot("enhance");
    expect(mainIndexTSFile).toMatchSnapshot("mainIndex");
  });
});
