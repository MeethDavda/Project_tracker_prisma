import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  const user = await prisma.user.create({
    data: {
      email: "mjdavda@gmail.com",
      name: "Meeth Davda",
    },
  });
  console.log(user, "user");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
