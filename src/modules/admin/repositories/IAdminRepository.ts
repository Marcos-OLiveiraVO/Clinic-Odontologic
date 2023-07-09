import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";

interface IAdminRepository {
  create(data: ICreateAdminDTO): Promise<Admin>;
  findByEmail(email: string): Promise<Admin>;
}

export { IAdminRepository };
