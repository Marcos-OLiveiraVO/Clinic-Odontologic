import { AppError } from "@errors/appError";
import { Receptionist } from "@prisma/client";
import { hash } from "bcrypt";
import { IUpdateReceptionistRequest } from "modules/Receptionist/dtos/IUpdateReceptionistRequest";
import { IReceptionistRepository } from "modules/Receptionist/repositories/IReceptionistRepository";

class UpdateReceptionistUseCase {
  constructor(private receptionistRepository: IReceptionistRepository) {}

  async execute({
    originalEmail,
    newEmail,
    newName,
    newPassword,
    newPhone,
    updatedAt,
  }: IUpdateReceptionistRequest): Promise<Receptionist> {
    const receptionist = await this.receptionistRepository.findByEmail(
      originalEmail
    );

    if (!receptionist) {
      throw new AppError("Receptionist account or email not exists!");
    }

    const passwordHashed = await hash(newPassword, 6);

    await this.receptionistRepository.update({
      originalEmail,
      newEmail,
      newName,
      newPassword: passwordHashed,
      newPhone,
      updatedAt: updatedAt ?? new Date(),
    });

    return receptionist;
  }
}

export { UpdateReceptionistUseCase };
