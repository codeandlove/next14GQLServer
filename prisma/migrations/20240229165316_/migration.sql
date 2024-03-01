/*
  Warnings:

  - You are about to drop the `Test` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToTest` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,slug]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,slug]` on the table `Collection` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name,slug]` on the table `Product` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_ProductToTest" DROP CONSTRAINT "_ProductToTest_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToTest" DROP CONSTRAINT "_ProductToTest_B_fkey";

-- DropIndex
DROP INDEX "Category_slug_key";

-- DropIndex
DROP INDEX "Collection_slug_key";

-- DropIndex
DROP INDEX "Product_slug_key";

-- DropTable
DROP TABLE "Test";

-- DropTable
DROP TABLE "_ProductToTest";

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_slug_key" ON "Category"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Collection_name_slug_key" ON "Collection"("name", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_slug_key" ON "Product"("name", "slug");
