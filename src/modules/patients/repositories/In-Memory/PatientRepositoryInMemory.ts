import { Patient } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";
import { IPatientRepository } from "../IPatientRepository";
import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";

class PatientRepositoryInMemory implements IPatientRepository {
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
  }: IPatientCreateDTO): Promise<Patient> {
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

  async findByEmail(email: string): Promise<Patient> {
    return this.patient.find((patient) => patient.email === email);
  }
}

export { PatientRepositoryInMemory };
