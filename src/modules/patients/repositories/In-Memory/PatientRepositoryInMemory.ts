import { v4 as uuidV4 } from "uuid";

import { IPatientRepository } from "../IPatientRepository";
import { ICreatePatientDTO } from "modules/patients/dtos/ICreatePatientDTO";
import { IUpdateRequestPatient } from "modules/patients/dtos/IUpdateRequestPatient";
import { Patient } from "modules/patients/infra/prisma/entities/Patient";

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
    authorization_level,
  }: ICreatePatientDTO): Promise<Patient> {
    const newPatient: Patient = {
      id: uuidV4(),
      name,
      email,
      phone,
      insurance_id: insurance_id ?? undefined,
      medical_history_id: medical_history_id ?? undefined,
      medical_record_id: medical_record_id ?? undefined,
      authorization_level,
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

  async update({
    newName,
    originalEmail,
    newEmail,
    new_insurance_id,
    new_medical_history_id,
    new_medical_record_id,
  }: IUpdateRequestPatient): Promise<Patient> {
    const patient = this.patient.find(
      (patient) => patient.email === originalEmail
    );

    patient.name = newName;
    patient.email = newEmail;
    patient.insurance_id = new_insurance_id;
    patient.medical_history_id = new_medical_history_id ?? undefined;
    patient.medical_record_id = new_medical_record_id ?? undefined;
    patient.updatedAt = new Date();

    return patient;
  }

  async remove(email: string): Promise<void> {
    const index = this.patient.findIndex((patient) => patient.email === email);
    if (index !== -1) {
      this.patient.splice(index, 1);
    }
  }
}

export { PatientRepositoryInMemory };
