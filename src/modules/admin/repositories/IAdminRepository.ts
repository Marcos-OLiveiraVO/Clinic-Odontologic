import { ICreateAdminDTO } from "../dtos/ICreateAdminDTO";

interface IAdminRepository {
  create(data: ICreateAdminDTO): Promise<Admin>;
  findByEmail(email: string): Promise<Admin>;
  update(
    newName: string,
    newUsername: string,
    originalEmail: string,
    newEmail: string,
    newPassword: string
  ): Promise<Admin>;
}

export { IAdminRepository };
