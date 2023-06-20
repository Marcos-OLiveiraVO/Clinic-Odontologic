import { IPacientCreateDTO } from "@modules/pacients/dtos/ICreatePacientDTO";
import { PacientRepository } from "@modules/pacients/infra/prisma/repositories/PacientRepository";
import { Injectable } from "@nestjs/common";
import { AppError } from "../../../../shared/errors/appError";

@Injectable()
class CreatePatientUseCase {
  constructor(private pacientRepository: PacientRepository) {}

  async execute({ name, email, phone }: IPacientCreateDTO) {
    const patientAlreadyExists = await this.pacientRepository.findByName(name);

    if (patientAlreadyExists) {
      throw new AppError("Patient Already exists!");
    }

    const patient = await this.pacientRepository.create({
      name,
      email,
      phone,
    });

    return patient;
  }
}

export { CreatePatientUseCase };
