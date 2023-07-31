import { instanceToInstance } from "class-transformer";
import { IResponsePatientProfile } from "../dtos/IResponsePatientProfile";
import { Patient } from "../infra/prisma/entities/Patient";

class PatientMap {
  static toDTO({
    name,
    email,
    phone,
    insurance_id,
  }: Patient): IResponsePatientProfile {
    const patient = instanceToInstance({
      name,
      email,
      phone,
      insurance_id,
    });
    return patient;
  }
}

export { PatientMap };
