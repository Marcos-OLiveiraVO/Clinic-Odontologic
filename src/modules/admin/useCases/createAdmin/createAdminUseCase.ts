import { AppError } from "@errors/appError";
import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { hash } from "bcrypt";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { Admin } from "@prisma/client";
import { Injectable } from "@nestjs/common";
import { v4 as uuidV4 } from "uuid";

@Injectable()
class CreateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({
    name,
    username,
    email,
    password,
    id,
  }: ICreateAdminDTO): Promise<Admin> {
    const adminAlreadyExists = await this.adminRepository.findByEmail(email);

    if (adminAlreadyExists) {
      throw new AppError("Admin already exists");
    }

    const createHashedPassword = await hash(password, 6);

    const admin = await this.adminRepository.create({
      id,
      name,
      username,
      email,
      password: createHashedPassword,
      authorization_level: "admin",
    });

    return admin;
  }
}

export { CreateAdminUseCase };
