import { AppError } from "@errors/appError";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

import { hash } from "bcrypt";
import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";
import { Injectable } from "@nestjs/common";
import { Admin } from "modules/admin/infra/prisma/entities/admin";

@Injectable()
class UpdateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({
    newName,
    newUsername,
    originalEmail,
    newEmail,
    newPassword,
  }: IAdminUpdateRequestDTO): Promise<Admin> {
    let adminExists = await this.adminRepository.findByEmail(originalEmail);

    if (!adminExists) {
      throw new AppError("Email or account not exists!");
    }

    const hashedPassword = await hash(newPassword, 6);

    await this.adminRepository.update({
      newName,
      newUsername,
      originalEmail,
      newEmail,
      newPassword: hashedPassword,
    });

    return adminExists;
  }
}

export { UpdateAdminUseCase };
