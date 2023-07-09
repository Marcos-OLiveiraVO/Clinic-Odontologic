import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { IAdminRepository } from "../IAdminRepository";
import { hash } from "bcrypt";
import { v4 as uuidV4 } from "uuid";

class AdminRepositoryInMemory implements IAdminRepository {
  admins: Admin[] = [];

  async create({
    name,
    username,
    email,
    password,
    updated_At,
  }: ICreateAdminDTO): Promise<Admin> {
    const hashedPassword = await hash(password, 6);

    const admin = {
      id: uuidV4(),
      name,
      username,
      email,
      password: hashedPassword,
      created_at: new Date(),
      updated_At: updated_At ?? null,
    };

    this.admins.push(admin);

    return admin;
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = this.admins.find((admin) => admin.email === email);

    return admin;
  }
}

export { AdminRepositoryInMemory };
