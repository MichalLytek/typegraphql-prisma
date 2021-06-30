-- DropForeignKey
ALTER TABLE "Problem" DROP CONSTRAINT "Problem_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "post" DROP CONSTRAINT "post_editorId_fkey";

-- AddForeignKey
ALTER TABLE "post" ADD FOREIGN KEY ("editorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Problem" ADD FOREIGN KEY ("creatorId") REFERENCES "Creator"("id") ON DELETE CASCADE ON UPDATE CASCADE;
