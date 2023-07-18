import { AppError } from "@errors/appError";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

import { hash } from "bcrypt";
import { Admin } from "@prisma/client";
import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";
import { Inject, Injectable } from "@nestjs/common";

@Injectable()
class UpdateAdminUseCase {
  constructor(
    @Inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) {}

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
