-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "PostKind" AS ENUM ('BLOG', 'ADVERT');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "age" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "role" "Role" NOT NULL,
    "grades" INTEGER[],
    "aliases" TEXT[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
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

    CONSTRAINT "post_pkey" PRIMARY KEY ("uuid")
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

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("firstName","lastName")
);

-- CreateTable
CREATE TABLE "Movie" (
    "directorFirstName" TEXT NOT NULL,
    "directorLastName" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("directorFirstName","directorLastName","title")
);

-- CreateTable
CREATE TABLE "Director" (
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Director_pkey" PRIMARY KEY ("firstName","lastName")
);

-- CreateTable
CREATE TABLE "Problem" (
    "id" SERIAL NOT NULL,
    "problemText" TEXT NOT NULL,
    "creatorId" INTEGER,

    CONSTRAINT "Problem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Creator" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Creator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NativeTypeModel" (
    "id" SERIAL NOT NULL,
    "bigInt" BIGINT,
    "byteA" BYTEA,
    "decimal" DECIMAL,

    CONSTRAINT "NativeTypeModel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CreatorToProblem" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Category_slug_number_key" ON "Category"("slug", "number");

-- CreateIndex
CREATE UNIQUE INDEX "_CreatorToProblem_AB_unique" ON "_CreatorToProblem"("A", "B");

-- CreateIndex
CREATE INDEX "_CreatorToProblem_B_index" ON "_CreatorToProblem"("B");

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_editorId_fkey" FOREIGN KEY ("editorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Movie" ADD CONSTRAINT "Movie_directorFirstName_directorLastName_fkey" FOREIGN KEY ("directorFirstName", "directorLastName") REFERENCES "Director"("firstName", "lastName") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem" ADD CONSTRAINT "Problem_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatorToProblem" ADD FOREIGN KEY ("A") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CreatorToProblem" ADD FOREIGN KEY ("B") REFERENCES "Problem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
