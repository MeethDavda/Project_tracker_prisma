import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function addTask() {
  const task = await prisma.task.create({
    data: {
      topic: "Spring boot",
      status: "Completed",
      comments: "done with side project",
      ownerId: 1,
    },
  });
}

addTask()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
