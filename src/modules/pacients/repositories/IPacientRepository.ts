import { Patient } from "@prisma/client";
import { IPacientCreateDTO } from "../dtos/ICreatePacientDTO";

interface IPacientRepository {
  create(data: IPacientCreateDTO): Promise<Patient>;
  findByName(name: string): Promise<Patient>;
  listAll(): Promise<Patient[]>;
}

export { IPacientRepository };
