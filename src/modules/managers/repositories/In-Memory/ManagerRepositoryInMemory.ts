import { ICreateManagerDTO } from "modules/managers/dtos/ICreateManagerDTO";
import { IManagerRepository } from "../IManagerRepository";
import { Manager } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";
import { IUpdateRequestManager } from "modules/managers/dtos/IUpdateRequestManager";

class ManagerRepositoryInMemory implements IManagerRepository {
  manager: Manager[] = [];

  async create({
    name,
    email,
    password,
    phone,
    authorization_level,
    updatedAt,
    createdAt,
  }: ICreateManagerDTO): Promise<Manager> {
    const newManager: Manager = {
      id: uuidV4(),
      name,
      email,
      password,
      phone,
      authorization_level,
      createdAt: createdAt ?? new Date(),
      updatedAt: updatedAt ?? undefined,
    };

    this.manager.push(newManager);

    return newManager;
  }

  async findByEmail(email: string): Promise<Manager> {
    const manager = this.manager.find((manager) => manager.email === email);

    return manager;
  }

  async remove(email: string): Promise<void> {
    const index = this.manager.findIndex((manager) => manager.email === email);

    if (index !== -1) {
      this.manager.splice(index, 1);
    }
  }

  async update({
    originalEmail,
    newEmail,
    newName,
    newPassword,
    newPhone,
  }: IUpdateRequestManager): Promise<Manager> {
    const manager = this.manager.find(
      (manager) => manager.email === originalEmail
    );

    manager.name = newName;
    manager.email = newEmail;
    manager.password = newPassword;
    manager.phone = newPhone;

    return manager;
  }
}

export { ManagerRepositoryInMemory };
