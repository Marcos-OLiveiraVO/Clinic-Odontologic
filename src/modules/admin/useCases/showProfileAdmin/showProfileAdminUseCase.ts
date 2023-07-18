import { AppError } from "@errors/appError";
import { Inject, Injectable } from "@nestjs/common";
import { IResponseAdminDTO } from "modules/admin/dtos/IResponseAdminDTO";
import { AdminMapper } from "modules/admin/mapper/AdminMapper";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

@Injectable()
class ShowProfileAdminUseCase {
  constructor(
    @Inject("AdminRepository")
    private adminRepository: IAdminRepository
  ) {}

  async execute(email: string): Promise<IResponseAdminDTO> {
    const adminExists = await this.adminRepository.findByEmail(email);

    if (!adminExists) {
      throw new AppError("Email or account not exists!");
    }

    return AdminMapper.ToDTO(adminExists);
  }
}

export { ShowProfileAdminUseCase };
