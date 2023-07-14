import { AppError } from "@errors/appError";
import { IResponseReceptionistProfile } from "modules/Receptionist/dtos/IResponseReceptionist";
import { ReceptionistMapper } from "modules/Receptionist/mappers/ReceptionistMapper";

import { IReceptionistRepository } from "modules/Receptionist/repositories/IReceptionistRepository";

class ShowProfileReceptionistUseCase {
  constructor(private receptionistRepository: IReceptionistRepository) {}

  async execute(email: string): Promise<IResponseReceptionistProfile> {
    const receptionist = await this.receptionistRepository.findByEmail(email);

    if (!receptionist) {
      throw new AppError("Receptionist account or email not exists!");
    }

    return ReceptionistMapper.ToDTO(receptionist);
  }
}

export { ShowProfileReceptionistUseCase };
