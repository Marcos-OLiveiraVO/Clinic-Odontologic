import { Patient } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IPatientResponseDTO } from "../dtos/IPatientResponseDTO";

class PatientMap {
  static toDTO({
    name,
    email,
    phone,
    insurance_id,
  }: Patient): IPatientResponseDTO {
    const patient = instanceToInstance({
      name,
      email,
      phone,
      insurance_id: insurance_id ?? null,
    });
    return patient;
  }
}

export { PatientMap };
