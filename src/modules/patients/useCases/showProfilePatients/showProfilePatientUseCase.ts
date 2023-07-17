import { AppError } from "@errors/appError";
import { IResponsePatientProfile } from "modules/patients/dtos/IResponsePatientProfile";
import { PatientMap } from "modules/patients/mapper/PatientMap";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

class ShowProfilePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(email: string): Promise<IResponsePatientProfile> {
    const patientExists = await this.patientRepository.findByEmail(email);

    if (!patientExists) {
      throw new AppError("Patient or email not exists!");
    }

    return PatientMap.toDTO(patientExists);
  }
}

export { ShowProfilePatientUseCase };
