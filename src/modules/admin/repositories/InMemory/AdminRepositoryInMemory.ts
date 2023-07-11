import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { IAdminRepository } from "../IAdminRepository";
import { v4 as uuidV4 } from "uuid";
import { IUpdateAdminRequestDTO } from "modules/admin/dtos/IUpdateAdminRequestDTO";
import { Admin } from "@prisma/client";

class AdminRepositoryInMemory implements IAdminRepository {
  admins: Admin[] = [];

  async create({
    name,
    username,
    email,
    password,
    updatedAt,
  }: ICreateAdminDTO): Promise<Admin> {
    const admin = {
      id: uuidV4(),
      name,
      username,
      email,
      password,
      createdAt: new Date(),
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
  }: IUpdateAdminRequestDTO): Promise<Admin> {
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
