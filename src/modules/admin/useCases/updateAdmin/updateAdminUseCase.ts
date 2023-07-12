import { AppError } from "@errors/appError";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

import { hash } from "bcrypt";
import { Admin } from "@prisma/client";
import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";

class UpdateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({
    newName,
    newUsername,
    originalEmail,
    newEmail,
    newPassword,
  }: IAdminUpdateRequestDTO): Promise<Admin> {
    let admin = await this.adminRepository.findByEmail(originalEmail);

    if (!admin) {
      throw new AppError("Email or account not exists!");
    }

    const hashedPassword = await hash(newPassword, 6);

    admin = {
      ...admin,
      name: newName,
      username: newUsername,
      email: newEmail,
      password: hashedPassword,
      updatedAt: new Date(),
    };

    await this.adminRepository.update({
      newName,
      newUsername,
      originalEmail,
      newEmail,
      newPassword,
    });

    return admin;
  }
}

export { UpdateAdminUseCase };
