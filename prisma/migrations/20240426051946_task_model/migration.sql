-- CreateTable
CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Not completed',
    "topic" TEXT NOT NULL,
    "date" TIMESTAMP(3),
    "comments" TEXT NOT NULL,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
