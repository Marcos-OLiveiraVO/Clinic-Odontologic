import { AppError } from "@errors/appError";
import { IResponseManagerProfile } from "modules/managers/dtos/IResponseManagerProfile";
import { ManagerMapper } from "modules/managers/mappers/ManagerMapper";
import { IManagerRepository } from "modules/managers/repositories/IManagerRepository";

class ShowProfileManagerUseCase {
  constructor(private managerRepository: IManagerRepository) {}

  async execute(email: string): Promise<IResponseManagerProfile> {
    const managerExists = await this.managerRepository.findByEmail(email);

    if (!managerExists) {
      throw new AppError("Manager account or email not exists!");
    }

    return ManagerMapper.ToDTO(managerExists);
  }
}

export { ShowProfileManagerUseCase };
