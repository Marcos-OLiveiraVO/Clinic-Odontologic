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
    let receptionist = await this.receptionistRepository.findByEmail(
      originalEmail
    );

    if (!receptionist) {
      throw new AppError("Receptionist account or email not exists!");
    }

    const passwordHashed = await hash(newPassword, 6);

    receptionist = {
      ...receptionist,
      email: newEmail,
      name: newName,
      password: passwordHashed,
      phone: newPhone,
      updatedAt,
    };

    await this.receptionistRepository.update({
      originalEmail,
      newEmail,
      newName,
      newPassword,
      newPhone,
      updatedAt: new Date(),
    });

    return receptionist;
  }
}

export { UpdateReceptionistUseCase };
