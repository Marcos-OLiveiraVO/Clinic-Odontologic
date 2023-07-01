import { Injectable } from "@nestjs/common";
import { AppError } from "../../../../shared/errors/appError";

import { PatientRepository } from "modules/patients/infra/prisma/repositories/PatientRepository";
import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";

@Injectable()
class CreatePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute({ name, email, phone, insurance_id }: IPatientCreateDTO) {
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
