/*
  Warnings:

  - Added the required column `authorization_level` to the `Admin` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "authorization_level" TEXT NOT NULL;
