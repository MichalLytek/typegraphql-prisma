import { PrismaClient } from "./generated/client";

const prisma = new PrismaClient({});

async function main() {
  await prisma.$connect();

  await prisma.user.deleteMany({});
  await prisma.user.create({
    data: {
      email: "johny@bravo.com",
      age: 55,
      address: {
        street: "5th Avenue",
        city: "Los Angeles",
      },
      posts: {
        create: {
          slug: "test",
          title: "Test post",
          body: "This is a test post",
          comments: {
            createMany: {
              data: [{ comment: "Test 1" }, { comment: "Test 2" }],
            },
          },
        },
      },
    },
  });

  console.log("All data inserted!");

  console.log(
    await prisma.user.findMany({
      include: {
        posts: {
          include: {
            comments: true,
          },
        },
      },
    }),
  );
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
