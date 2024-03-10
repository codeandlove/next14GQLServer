/*
  Warnings:

  - A unique constraint covering the columns `[productId]` on the table `Review` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Review_email_productId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Review_productId_key" ON "Review"("productId");
