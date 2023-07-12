import { Manager } from "@prisma/client";
import { ICreateManagerDTO } from "../dtos/ICreateManagerDTO";
import { IUpdateRequestManager } from "../dtos/IUpdateRequestManager";

interface IManagerRepository {
  create(manager: ICreateManagerDTO): Promise<Manager>;
  findByEmail(email: string): Promise<Manager>;
  remove(email: string): Promise<void>;
  update(data: IUpdateRequestManager): Promise<Manager>;
}

export { IManagerRepository };
