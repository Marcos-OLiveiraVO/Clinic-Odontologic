import { AppError } from "@errors/appError";
import { Patient } from "@prisma/client";
import { IPatientRequestDTO } from "modules/patients/dtos/IPatientRequestDTO";
import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

class UpdatePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute({
    newName,
    originalEmail,
    newEmail,
    new_insurance_id,
    new_medical_history_id,
    new_medical_record_id,
  }: IPatientRequestDTO): Promise<Patient> {
    const patient = await this.patientRepository.findByEmail(originalEmail);

    if (!patient) {
      throw new AppError("Patient not found");
    }

    await this.patientRepository.update({
      newName,
      originalEmail,
      newEmail,
      new_insurance_id,
      new_medical_history_id,
      new_medical_record_id,
    });

    return patient;
  }
}

export { UpdatePatientUseCase };
