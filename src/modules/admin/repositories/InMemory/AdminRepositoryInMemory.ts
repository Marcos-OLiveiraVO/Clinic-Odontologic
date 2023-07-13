import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { IAdminRepository } from "../IAdminRepository";
import { Admin } from "@prisma/client";
import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";
import { v4 as uuidV4 } from "uuid";

class AdminRepositoryInMemory implements IAdminRepository {
  admins: Admin[] = [];

  async create({
    name,
    username,
    email,
    password,
    updatedAt,
    authorization_level,
  }: ICreateAdminDTO): Promise<Admin> {
    const admin = {
      id: uuidV4(),
      name,
      username,
      email,
      password,
      createdAt: new Date(),
      authorization_level,
      updatedAt: updatedAt ?? null,
    };

    this.admins.push(admin);

    return admin;
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = this.admins.find((admin) => admin.email === email);

    return admin;
  }

  async update({
    newName,
    newUsername,
    originalEmail,
    newEmail,
    newPassword,
  }: IAdminUpdateRequestDTO): Promise<Admin> {
    const admin = this.admins.find((admin) => admin.email === originalEmail);

    admin.name = newName;
    admin.username = newUsername;
    admin.email = newEmail;
    admin.password = newPassword;
    admin.updatedAt = new Date();

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
