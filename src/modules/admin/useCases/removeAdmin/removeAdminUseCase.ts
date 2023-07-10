import { AppError } from "@errors/appError";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

class RemoveAdminUseCase {
  constructor(private adminRepository: IAdminRepository) {}

  async execute(email: string): Promise<void> {
    const admin = await this.adminRepository.findByEmail(email);

    if (!admin) {
      throw new AppError("Admin or account not exists!");
    }

    await this.adminRepository.remove(email);
  }
}

export { RemoveAdminUseCase };
