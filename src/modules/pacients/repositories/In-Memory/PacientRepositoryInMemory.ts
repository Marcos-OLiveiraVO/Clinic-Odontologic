import { Patient } from "@prisma/client";
import { IPacientRepository } from "../IPacientRepository";
import { IPacientCreateDTO } from "@modules/pacients/dtos/ICreatePacientDTO";

class PacientRepositoryInMemory implements IPacientRepository {
  patient: Patient[] = [];

  async create({
    id,
    name,
    email,
    phone,
    insurance_id,
    medical_history_id,
    medical_record_id,
    createdAt,
    updatedAt,
  }: IPacientCreateDTO): Promise<void> {
    const newPatient: Patient = {
      id,
      name,
      email,
      phone,
      insurance_id,
      medical_history_id,
      medical_record_id,
      createdAt,
      updatedAt,
    };

    this.patient.push(newPatient);
  }

  async listAll(): Promise<Patient[]> {
    return this.patient;
  }

  async findByName(name: string): Promise<Patient> {
    return this.patient.find((patient) => patient.name === name);
  }
}

export { PacientRepositoryInMemory };
