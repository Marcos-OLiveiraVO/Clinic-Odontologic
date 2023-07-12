import { AppError } from "@errors/appError";
import { IResponseManagerDTO } from "modules/managers/dtos/IResponseManagerDTO";
import { ManagerMapper } from "modules/managers/mappers/ManagerMapper";
import { IManagerRepository } from "modules/managers/repositories/IManagerRepository";

class ShowProfileManagerUseCase {
  constructor(private managerRepository: IManagerRepository) {}

  async execute(email: string): Promise<IResponseManagerDTO> {
    const manager = await this.managerRepository.findByEmail(email);

    if (!manager) {
      throw new AppError("Manager account or email not exists!");
    }

    return ManagerMapper.ToDTO(manager);
  }
}

export { ShowProfileManagerUseCase };
