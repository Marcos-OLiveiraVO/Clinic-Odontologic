import { Admin } from "@prisma/client";
import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";
import { IAdminUpdateRequestDTO } from "../dtos/IAdminUpdateRequestDTO";

interface IAdminRepository {
  create(data: ICreateAdminDTO): Promise<Admin>;
  findByEmail(email: string): Promise<Admin>;
  update(IAdminUpdateRequestDTO: IAdminUpdateRequestDTO): Promise<Admin>;
  remove(email: string): Promise<void>;
}

export { IAdminRepository };
