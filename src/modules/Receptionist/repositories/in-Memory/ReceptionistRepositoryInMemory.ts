import { Receptionist } from "@prisma/client";
import { IReceptionistRepository } from "../IReceptionistRepository";
import { v4 as uuidV4 } from "uuid";
import { IUpdateReceptionistRequest } from "modules/Receptionist/dtos/IUpdateReceptionistRequest";

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

  async update({
    originalEmail,
    newName,
    newEmail,
    newPassword,
    newPhone,
    updatedAt,
  }: IUpdateReceptionistRequest): Promise<Receptionist> {
    const receptionist = this.receptionist.find(
      (receptionist) => receptionist.email === originalEmail
    );

    receptionist.name = newName;
    receptionist.email = newEmail;
    receptionist.password = newPassword;
    receptionist.phone = newPhone;
    receptionist.updatedAt = updatedAt;

    return receptionist;
  }

  async remove(email: string): Promise<void> {
    const receptionistIndex = this.receptionist.findIndex(
      (receptionist) => receptionist.email === email
    );

    if (receptionistIndex !== -1) {
      this.receptionist.splice(receptionistIndex, 1);
    }
  }
}

export { ReceptionistRepositoryInMemory };
