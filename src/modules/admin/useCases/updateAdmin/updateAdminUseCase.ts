import { AppError } from "@errors/appError";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { IUpdateAdminRequestDTO } from "modules/admin/dtos/IUpdateAdminRequestDTO";
import { hash } from "bcrypt";

class UpdateAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute({
    newName,
    newUsername,
    originalEmail,
    newEmail,
    newPassword,
  }: IUpdateAdminRequestDTO): Promise<Admin> {
    let admin = await this.adminRepository.findByEmail(originalEmail);

    if (!admin) {
      throw new AppError("Email or account not exists!");
    }

    admin = {
      ...admin,
      name: newName,
      username: newUsername,
      email: newEmail,
      password: hash(newPassword, 6),
      updateAt: new Date(),
    };

    await this.adminRepository.update(
      newName,
      newUsername,
      originalEmail,
      newEmail,
      newPassword
    );

    return admin;
  }
}

export { UpdateAdminUseCase };
