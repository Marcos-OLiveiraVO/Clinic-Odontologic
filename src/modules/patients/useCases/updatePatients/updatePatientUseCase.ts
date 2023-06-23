import { AppError } from "@errors/appError";
import { PatientRepository } from "modules/patients/infra/prisma/repositories/PatientRepository";

interface IRequest {
  name: string;
  email: string;
}

class UpdatePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute({ name, email }: IRequest) {
    let patient = await this.patientRepository.findByEmail(email);

    if (!patient) {
      throw new AppError("Patient not found.");
    }

    patient = {
      ...patient,
      name: name,
      updatedAt: new Date(),
    };

    await this.patientRepository.update(name, email);

    return patient;
  }
}

export { UpdatePatientUseCase };
