import { Receptionist } from "@prisma/client";
import { IReceptionistRepository } from "../IReceptionistRepository";
import { v4 as uuidV4 } from "uuid";

class ReceptionistRepositoryInMemory implements IReceptionistRepository {
  receptionist: Receptionist[] = [];

  async create({
    name,
    email,
    password,
    phone,
    authorization_level,
    createdAt,
    updatedAt,
  }: ICreateReceptionistDTO): Promise<Receptionist> {
    const receptionist = {
      id: uuidV4(),
      name,
      email,
      password,
      phone,
      authorization_level,
      createdAt,
      updatedAt: updatedAt ?? undefined,
    };

    this.receptionist.push(receptionist);

    return receptionist;
  }

  async findByEmail(email: string): Promise<Receptionist> {
    const receptionist = this.receptionist.find(
      (receptionist) => receptionist.email === email
    );

    return receptionist;
  }
}

export { ReceptionistRepositoryInMemory };
