import { PrismaClient } from "./prisma/generated/client";

const prisma = new PrismaClient({});

async function main() {
  await prisma.$connect();

  console.log(
    await prisma.post.findMany({
      orderBy: [
        {
          author: {
            role: "asc",
          },
        },
        {
          title: "desc",
        },
      ],
    }),
  );
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
