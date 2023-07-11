import { Patient } from "@prisma/client";
import { IPatientCreateDTO } from "../dtos/IPatientCreateDTO";
import { IPatientRequestUpdateDTO } from "../dtos/IPatientRequestUpdateDTO";

interface IPatientRepository {
  create(data: IPatientCreateDTO): Promise<Patient>;
  findByEmail(email: string): Promise<Patient>;
  listAll(): Promise<Patient[]>;
  update(patientRequestUpdate: IPatientRequestUpdateDTO): Promise<Patient>;
  remove(email: string): Promise<void>;
}

export { IPatientRepository };
