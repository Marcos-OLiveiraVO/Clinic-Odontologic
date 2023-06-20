import { IPacientCreateDTO } from "@modules/pacients/dtos/ICreatePacientDTO";
import { IPacientRepository } from "@modules/pacients/repositories/IPacientRepository";
import { Patient, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PacientRepository implements IPacientRepository {
  async create({
    id,
    name,
    email,
    phone,
    insurance_id,
    medical_history_id,
    medical_record_id,
  }: IPacientCreateDTO): Promise<void> {
    await prisma.patient.create({
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

  async findByName(name: string): Promise<Patient> {
    const patient = await prisma.patient.findFirst({
      where: {
        name,
      },
    });

    return patient;
  }

  async listAll(): Promise<Patient[]> {
    return await prisma.patient.findMany();
  }
}

export { PacientRepository };
