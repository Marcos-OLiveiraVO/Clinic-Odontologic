/*
  Warnings:

  - You are about to drop the column `authorizationLevel` on the `Manager` table. All the data in the column will be lost.
  - Added the required column `authorization_level` to the `Manager` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Manager" DROP COLUMN "authorizationLevel",
ADD COLUMN     "authorization_level" TEXT NOT NULL;
