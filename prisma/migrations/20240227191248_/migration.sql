/*
  Warnings:

  - You are about to drop the column `text` on the `Test` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Test" DROP COLUMN "text";

-- CreateTable
CREATE TABLE "_ProductToTest" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductToTest_AB_unique" ON "_ProductToTest"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductToTest_B_index" ON "_ProductToTest"("B");

-- AddForeignKey
ALTER TABLE "_ProductToTest" ADD CONSTRAINT "_ProductToTest_A_fkey" FOREIGN KEY ("A") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductToTest" ADD CONSTRAINT "_ProductToTest_B_fkey" FOREIGN KEY ("B") REFERENCES "Test"("id") ON DELETE CASCADE ON UPDATE CASCADE;
