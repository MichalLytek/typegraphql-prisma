-- CreateEnum
CREATE TYPE "public"."Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."PostKind" AS ENUM ('BLOG', 'ADVERT');

-- CreateTable
CREATE TABLE "User" (
  "id" SERIAL,
  "email" TEXT NOT NULL,
  "name" TEXT,
  "age" INTEGER NOT NULL,
  "balance" DECIMAL(65, 30) NOT NULL,
  "amount" DECIMAL(65, 30) NOT NULL,
  "role" "Role" NOT NULL,
  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "post" (
  "uuid" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "published" BOOLEAN NOT NULL,
  "title" TEXT NOT NULL,
  "subtitle" TEXT NOT NULL,
  "content" TEXT,
  "authorId" INTEGER NOT NULL,
  "editorId" INTEGER,
  "kind" "PostKind",
  "metadata" JSONB NOT NULL,
  PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Category" (
  "name" TEXT NOT NULL,
  "slug" TEXT NOT NULL,
  "number" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Patient" (
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  PRIMARY KEY ("firstName", "lastName")
);

-- CreateTable
CREATE TABLE "Movie" (
  "directorFirstName" TEXT NOT NULL,
  "directorLastName" TEXT NOT NULL,
  "title" TEXT NOT NULL,
  PRIMARY KEY ("directorFirstName", "directorLastName", "title")
);

-- CreateTable
CREATE TABLE "Director" (
  "firstName" TEXT NOT NULL,
  "lastName" TEXT NOT NULL,
  PRIMARY KEY ("firstName", "lastName")
);

-- CreateTable
CREATE TABLE "Problem" (
  "id" SERIAL,
  "problemText" TEXT NOT NULL,
  "creatorId" INTEGER,
  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creator" (
  "id" SERIAL,
  "name" TEXT NOT NULL,
  PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CreatorToProblem" (
  "A" INTEGER NOT NULL,
  "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category.slug_number_unique" ON "Category"("slug", "number");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatorToProblem_AB_unique" ON "_CreatorToProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatorToProblem_B_index" ON "_CreatorToProblem"("B");

-- AddForeignKey
ALTER TABLE
  "post"
ADD
  FOREIGN KEY("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "post"
ADD
  FOREIGN KEY("editorId") REFERENCES "User"("id") ON DELETE
SET
  NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "Movie"
ADD
  FOREIGN KEY("directorFirstName", "directorLastName") REFERENCES "Director"("firstName", "lastName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "Problem"
ADD
  FOREIGN KEY("creatorId") REFERENCES "Creator"("id") ON DELETE
SET
  NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "_CreatorToProblem"
ADD
  FOREIGN KEY("A") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE
  "_CreatorToProblem"
ADD
  FOREIGN KEY("B") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
