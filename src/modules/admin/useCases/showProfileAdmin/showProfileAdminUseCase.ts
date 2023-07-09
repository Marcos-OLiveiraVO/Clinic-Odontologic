import { AppError } from "@errors/appError";
import { AdminMapper } from "modules/admin/mapper/AdminMapper";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

class ShowProfileAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(email: string): Promise<Admin> {
    const adminExists = await this.adminRepository.findByEmail(email);

    if (!adminExists) {
      throw new AppError("email or account not exists!");
    }

    return AdminMapper.ToDTO(adminExists);
  }
}

export { ShowProfileAdminUseCase };
