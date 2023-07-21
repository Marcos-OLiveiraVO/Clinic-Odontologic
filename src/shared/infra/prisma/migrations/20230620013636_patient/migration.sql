-- AlterTable
ALTER TABLE "Patient" ALTER COLUMN "insurance_id" DROP NOT NULL,
ALTER COLUMN "medical_history_id" DROP NOT NULL,
ALTER COLUMN "medical_record_id" DROP NOT NULL;
