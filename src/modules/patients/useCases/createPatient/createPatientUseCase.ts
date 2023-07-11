import { Injectable } from "@nestjs/common";
import { AppError } from "../../../../shared/errors/appError";

import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";
import { Patient } from "@prisma/client";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

@Injectable()
class CreatePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({
    name,
    email,
    phone,
    insurance_id,
  }: IPatientCreateDTO): Promise<Patient> {
    const patientAlreadyExists = await this.patientRepository.findByEmail(
      email
    );

    if (patientAlreadyExists) {
      throw new AppError("Patient Already exists!");
    }

    const patient = await this.patientRepository.create({
      name,
      email,
      phone,
      insurance_id,
    });

    return patient;
  }
}

export { CreatePatientUseCase };
