-- CreateTable
CREATE TABLE "Pacient" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "birthDate" TEXT NOT NULL,
    "adress" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "medicalHistory" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pacient_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_name_key" ON "Pacient"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Pacient_email_key" ON "Pacient"("email");
