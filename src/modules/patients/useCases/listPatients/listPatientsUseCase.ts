import { Injectable } from "@nestjs/common";
import { Patient } from "@prisma/client";

import { PatientRepository } from "modules/patients/infra/prisma/repositories/PatientRepository";

@Injectable()
class ListPatientsUseCase {
  constructor(private patientRepository: PatientRepository) {}

  async execute(): Promise<Patient[]> {
    const patients = await this.patientRepository.listAll();
    return patients;
  }
}

export { ListPatientsUseCase };
