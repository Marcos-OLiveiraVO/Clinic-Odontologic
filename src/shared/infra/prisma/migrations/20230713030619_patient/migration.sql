/*
  Warnings:

  - Added the required column `authorization_level` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Patient" ADD COLUMN     "authorization_level" TEXT NOT NULL;
