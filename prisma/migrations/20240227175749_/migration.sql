/*
  Warnings:

  - You are about to drop the column `total` on the `Cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "total";

-- CreateTable
CREATE TABLE "CartItem" (
    "id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "CartItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartItemToProduct" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartItemToProduct_AB_unique" ON "_CartItemToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_CartItemToProduct_B_index" ON "_CartItemToProduct"("B");

-- AddForeignKey
ALTER TABLE "_CartItemToProduct" ADD CONSTRAINT "_CartItemToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "CartItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartItemToProduct" ADD CONSTRAINT "_CartItemToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
