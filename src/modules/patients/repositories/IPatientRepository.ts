import { Patient } from "@prisma/client";
import { ICreatePatientDTO } from "../dtos/ICreatePatientDTO";
import { IUpdateRequestPatient } from "../dtos/IUpdateRequestPatient";

interface IPatientRepository {
  create(data: ICreatePatientDTO): Promise<Patient>;
  findByEmail(email: string): Promise<Patient>;
  update(data: IUpdateRequestPatient): Promise<Patient>;
  listAll(): Promise<Patient[]>;
  remove(email: string): Promise<void>;
}

export { IPatientRepository };
