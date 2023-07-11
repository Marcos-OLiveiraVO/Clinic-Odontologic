import { Patient, PrismaClient } from "@prisma/client";

import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";
import { IPatientRequestUpdateDTO } from "modules/patients/dtos/IPatientRequestUpdateDTO";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

const prisma = new PrismaClient();

class PatientRepository implements IPatientRepository {
  async create({
    id,
    name,
    email,
    phone,
    insurance_id,
    medical_history_id,
    medical_record_id,
  }: IPatientCreateDTO): Promise<Patient> {
    return await prisma.patient.create({
      data: {
        id,
        name,
        email,
        phone,
        insurance_id,
        medical_history_id,
        medical_record_id,
      },
    });
  }

  async findByEmail(email: string): Promise<Patient> {
    const patient = await prisma.patient.findFirst({
      where: {
        email,
      },
    });

    return patient;
  }

  async listAll(): Promise<Patient[]> {
    return await prisma.patient.findMany();
  }

  async update({
    newEmail,
    newName,
    new_insurance_id,
    originalEmail,
    new_medical_history_id,
    new_medical_record_id,
  }: IPatientRequestUpdateDTO): Promise<Patient> {
    const patient = await prisma.patient.update({
      where: {
        email: originalEmail,
      },
      data: {
        email: newEmail,
        name: newName,
        insurance_id: new_insurance_id,
        medical_history_id: new_medical_history_id,
        medical_record_id: new_medical_record_id,
      },
    });

    return patient;
  }

  async remove(email: string): Promise<void> {
    await prisma.patient.delete({ where: { email } });
  }
}

export { PatientRepository };
