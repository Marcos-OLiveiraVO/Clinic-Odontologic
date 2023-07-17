import { Patient } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IResponsePatientProfile } from "../dtos/IResponsePatientProfile";

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
