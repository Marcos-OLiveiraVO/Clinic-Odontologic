import { ICreatePatientDTO } from "modules/patients/dtos/ICreatePatientDTO";
import { IUpdateRequestPatient } from "modules/patients/dtos/IUpdateRequestPatient";

import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";
import { PrismaService } from "shared/infra/prisma/prisma.service";
import { Patient } from "../entities/Patient";

class PatientRepository implements IPatientRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    id,
    name,
    email,
    phone,
    insurance_id,
    medical_history_id,
    medical_record_id,
    authorization_level,
  }: ICreatePatientDTO): Promise<Patient> {
    return await this.prismaService.prisma.patient.create({
      data: {
        id,
        name,
        email,
        phone,
        insurance_id,
        medical_history_id,
        medical_record_id,
        authorization_level,
      },
    });
  }

  async findByEmail(email: string): Promise<Patient> {
    const patient = await this.prismaService.prisma.patient.findFirst({
      where: {
        email,
      },
    });

    return patient;
  }

  async listAll(): Promise<Patient[]> {
    return await this.prismaService.prisma.patient.findMany();
  }

  async update({
    newEmail,
    newName,
    new_insurance_id,
    originalEmail,
    new_medical_history_id,
    new_medical_record_id,
  }: IUpdateRequestPatient): Promise<Patient> {
    const patient = await this.prismaService.prisma.patient.update({
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
    await this.prismaService.prisma.patient.delete({ where: { email } });
  }
}

export { PatientRepository };
