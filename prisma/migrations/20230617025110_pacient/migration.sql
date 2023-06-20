/*
  Warnings:

  - You are about to drop the column `address` on the `Pacient` table. All the data in the column will be lost.
  - You are about to drop the column `birthDate` on the `Pacient` table. All the data in the column will be lost.
  - You are about to drop the column `medicalHistory` on the `Pacient` table. All the data in the column will be lost.
  - Added the required column `insurance_id` to the `Pacient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_history_id` to the `Pacient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `medical_record_id` to the `Pacient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pacient" DROP COLUMN "address",
DROP COLUMN "birthDate",
DROP COLUMN "medicalHistory",
ADD COLUMN     "insurance_id" INTEGER NOT NULL,
ADD COLUMN     "medical_history_id" INTEGER NOT NULL,
ADD COLUMN     "medical_record_id" INTEGER NOT NULL;
