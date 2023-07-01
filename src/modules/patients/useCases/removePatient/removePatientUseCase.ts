import { AppError } from "@errors/appError";
import { PatientRepository } from "modules/patients/infra/prisma/repositories/PatientRepository";

class RemovePatientUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute(email: string) {
    const emailExists = await this.patientRepository.findByEmail(email);

    if (!emailExists) {
      throw new AppError("Email or patient not exists!");
    }

    await this.patientRepository.remove(email);
  }
}

export { RemovePatientUseCase };
