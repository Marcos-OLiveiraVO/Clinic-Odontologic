import { Injectable } from "@nestjs/common";
import { Patient } from "modules/patients/infra/prisma/entities/Patient";

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
