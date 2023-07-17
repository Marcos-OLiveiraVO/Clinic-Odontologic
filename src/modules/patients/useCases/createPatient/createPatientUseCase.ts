import { Injectable } from "@nestjs/common";
import { AppError } from "../../../../shared/errors/appError";

import { Patient } from "@prisma/client";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";
import { ICreatePatientDTO } from "modules/patients/dtos/ICreatePatientDTO";

@Injectable()
class CreatePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({
    name,
    email,
    phone,
    insurance_id,
  }: ICreatePatientDTO): Promise<Patient> {
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
      authorization_level: "patient",
    });

    return patient;
  }
}

export { CreatePatientUseCase };
