import { Injectable } from "@nestjs/common";
import { AppError } from "../../../../shared/errors/appError";

import { PatientRepository } from "modules/patients/infra/prisma/repositories/PatientRepository";
import { IPatientCreateDTO } from "modules/patients/dtos/IPatientCreateDTO";

@Injectable()
class CreatePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute({ name, email, phone }: IPatientCreateDTO) {
    const patientAlreadyExists = await this.patientRepository.findByName(name);

    if (patientAlreadyExists) {
      throw new AppError("Patient Already exists!");
    }

    const patient = await this.patientRepository.create({
      name,
      email,
      phone,
    });

    return patient;
  }
}

export { CreatePatientUseCase };
