import { Patient } from "@prisma/client";
import { IPatientCreateDTO } from "../dtos/IPatientCreateDTO";

interface IPatientRepository {
  create(data: IPatientCreateDTO): Promise<Patient>;
  findByEmail(email: string): Promise<Patient>;
  listAll(): Promise<Patient[]>;
  update(name: string, email: string): Promise<Patient>;
}

export { IPatientRepository };
