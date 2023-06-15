/*
  Warnings:

  - You are about to drop the column `adress` on the `Pacient` table. All the data in the column will be lost.
  - Added the required column `address` to the `Pacient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pacient" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;
