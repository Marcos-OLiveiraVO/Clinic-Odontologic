import { ICreateManagerDTO } from "modules/managers/dtos/ICreateManagerDTO";
import { IManagerRepository } from "../IManagerRepository";
import { Manager } from "@prisma/client";
import { v4 as uuidV4 } from "uuid";

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
    const manager = await this.manager.find(
      (manager) => manager.email === email
    );

    return manager;
  }
}

export { ManagerRepositoryInMemory };
