import { AppError } from "@errors/appError";
import { IManagerRepository } from "modules/managers/repositories/IManagerRepository";

class RemoveManagerUseCase {
  constructor(private managerRepository: IManagerRepository) {}

  async execute(email: string): Promise<void> {
    const manager = await this.managerRepository.findByEmail(email);

    if (!manager) {
      throw new AppError("Manager account or email not exists!");
    }

    await this.managerRepository.remove(email);
  }
}

export { RemoveManagerUseCase };
