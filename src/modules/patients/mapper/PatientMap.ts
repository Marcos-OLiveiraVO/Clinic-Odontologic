import { Patient } from "@prisma/client";
import { IPatientCreateDTO } from "../dtos/IPatientCreateDTO";
import { instanceToInstance } from "class-transformer";

class PatientMap {
  static toDTO({
    name,
    email,
    phone,
    insurance_id,
  }: Patient): IPatientCreateDTO {
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
