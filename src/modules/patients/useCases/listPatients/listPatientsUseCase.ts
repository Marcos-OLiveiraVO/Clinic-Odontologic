import { Patient } from "@prisma/client";
import { Injectable } from "@nestjs/common";

import { IPatientRepository } from "modules/patients/repositories/IPatientRepository";

@Injectable()
class ListPatientsUseCase {
  constructor(private patientRepository: IPatientRepository) {}

  async execute(): Promise<Patient[]> {
    const patients = await this.patientRepository.listAll();
    return patients;
  }
}

export { ListPatientsUseCase };
