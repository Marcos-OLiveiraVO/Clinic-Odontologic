import { AppError } from "@errors/appError";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

class RemovePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(email: string): Promise<void> {
    const emailExists = await this.patientRepository.findByEmail(email);

    if (!emailExists) {
      throw new AppError("Email or patient not exists!");
    }

    await this.patientRepository.remove(email);
  }
}

export { RemovePatientUseCase };
