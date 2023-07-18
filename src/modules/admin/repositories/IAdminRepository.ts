import { Admin } from "@prisma/client";
import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";
import { IAdminUpdateRequestDTO } from "../dtos/IAdminUpdateRequestDTO";

export abstract class IAdminRepository {
  abstract create(data: ICreateAdminDTO): Promise<Admin>;
  abstract findByEmail(email: string): Promise<Admin>;
  abstract update(
    IAdminUpdateRequestDTO: IAdminUpdateRequestDTO
  ): Promise<Admin>;
  abstract remove(email: string): Promise<void>;
}
