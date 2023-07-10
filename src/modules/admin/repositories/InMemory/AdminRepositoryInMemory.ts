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

  async update(
    newName: string,
    newUsername: string,
    originalEmail: string,
    newEmail: string,
    newPassword: string
  ): Promise<Admin> {
    const admin = this.admins.find((admin) => admin.email === originalEmail);

    admin.name = newName;
    admin.username = newUsername;
    admin.email = newEmail;
    admin.password = newPassword;
    admin.updateAt = new Date();

    return admin;
  }

  async remove(email: string): Promise<void> {
    const index = this.admins.findIndex((admin) => admin.email === email);
    if (index !== -1) {
      this.admins.splice(index, 1);
    }
  }
}

export { AdminRepositoryInMemory };
