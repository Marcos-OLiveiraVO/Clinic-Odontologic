import { Patient, PrismaClient } from "@prisma/client";

import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";
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

  async update(email: string, name: string): Promise<Patient> {
    const patient = await prisma.patient.update({
      where: {
        email,
      },
      data: { name, email },
    });

    return patient;
  }
}

export { PatientRepository };
