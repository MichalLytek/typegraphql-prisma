-- AlterTable
ALTER TABLE "Equipment" ADD COLUMN     "name" TEXT;

-- CreateTable
CREATE TABLE "Hidden" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Hidden_pkey" PRIMARY KEY ("id")
);
