import { Manager } from "@prisma/client";
import { ICreateManagerDTO } from "../dtos/ICreateManagerDTO";

interface IManagerRepository {
  create(manager: ICreateManagerDTO): Promise<Manager>;
  findByEmail(email: string): Promise<Manager>;
}

export { IManagerRepository };
