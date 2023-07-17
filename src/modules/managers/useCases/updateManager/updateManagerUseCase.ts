import { AppError } from "@errors/appError";
import { Manager } from "@prisma/client";
import { IUpdateRequestManager } from "modules/managers/dtos/IUpdateRequestManager";
import { IManagerRepository } from "modules/managers/repositories/IManagerRepository";

class UpdateManagerUseCase {
  constructor(private managerRepository: IManagerRepository) {}

  async execute({
    originalEmail,
    newEmail,
    newName,
    newPassword,
    newPhone,
  }: IUpdateRequestManager): Promise<Manager> {
    const manager = await this.managerRepository.findByEmail(originalEmail);

    if (!manager) {
      throw new AppError("Manager Account or email not exists!");
    }

    await this.managerRepository.update({
      originalEmail,
      newEmail,
      newName,
      newPassword,
      newPhone,
    });

    return manager;
  }
}

export { UpdateManagerUseCase };
