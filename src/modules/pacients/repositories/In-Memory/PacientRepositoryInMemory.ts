import { Patient } from "@prisma/client";
import { IPacientRepository } from "../IPacientRepository";
import { IPacientCreateDTO } from "@modules/pacients/dtos/ICreatePacientDTO";
import { v4 as uuidV4 } from "uuid";

class PacientRepositoryInMemory implements IPacientRepository {
  patient: Patient[] = [];

  async create({
    name,
    email,
    phone,
    insurance_id,
    medical_history_id,
    medical_record_id,
    createdAt,
    updatedAt,
  }: IPacientCreateDTO): Promise<Patient> {
    const newPatient: Patient = {
      id: uuidV4(),
      name,
      email,
      phone,
      insurance_id: insurance_id ?? undefined,
      medical_history_id: medical_history_id ?? undefined,
      medical_record_id: medical_record_id ?? undefined,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? undefined,
    };

    this.patient.push(newPatient);

    return newPatient;
  }

  async listAll(): Promise<Patient[]> {
    return this.patient;
  }

  async findByName(name: string): Promise<Patient> {
    return this.patient.find((patient) => patient.name === name);
  }
}

export { PacientRepositoryInMemory };
