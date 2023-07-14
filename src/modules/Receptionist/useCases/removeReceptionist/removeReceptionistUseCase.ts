import { AppError } from "@errors/appError";
import { IReceptionistRepository } from "modules/Receptionist/repositories/IReceptionistRepository";

class RemoveReceptionistUseCase {
  constructor(private receptionistRepository: IReceptionistRepository) {}

  async execute(email: string): Promise<void> {
    const receptionist = await this.receptionistRepository.findByEmail(email);

    if (!receptionist) {
      throw new AppError("Receptionist account or email not exists!");
    }

    await this.receptionistRepository.remove(email);
  }
}

export { RemoveReceptionistUseCase };
