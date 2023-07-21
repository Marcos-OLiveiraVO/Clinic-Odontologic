/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Patient";

-- CreateTable
CREATE TABLE "patient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "insurance_id" INTEGER NOT NULL,
    "medical_history_id" INTEGER NOT NULL,
    "medical_record_id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "patient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "patient_name_key" ON "patient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "patient_email_key" ON "patient"("email");
