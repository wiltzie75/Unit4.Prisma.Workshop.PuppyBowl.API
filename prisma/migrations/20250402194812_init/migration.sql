-- CreateEnum
CREATE TYPE "Status" AS ENUM ('BENCH', 'FIELD');

-- CreateTable
CREATE TABLE "Players" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "breed" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'BENCH',
    "imageUrl" TEXT NOT NULL,
    "teamId" INTEGER NOT NULL,

    CONSTRAINT "Players_pkey" PRIMARY KEY ("id")
);
