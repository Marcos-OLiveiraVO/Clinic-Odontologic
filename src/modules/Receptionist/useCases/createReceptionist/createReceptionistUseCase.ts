import { AppError } from "@errors/appError";
import { Receptionist } from "@prisma/client";
import { hash } from "bcrypt";
import { IReceptionistRepository } from "modules/Receptionist/repositories/IReceptionistRepository";

class CreateReceptionistUseCase {
  constructor(private receptionistRepository: IReceptionistRepository) {}

  async execute({
    name,
    email,
    password,
    phone,
    updatedAt,
  }: ICreateReceptionistDTO): Promise<Receptionist> {
    const receptionistAlreadyExists =
      await this.receptionistRepository.findByEmail(email);

    if (receptionistAlreadyExists) {
      throw new AppError("Receptionist account or email already exists");
    }

    const passwordHashed = await hash(password, 6);

    const admin = await this.receptionistRepository.create({
      name,
      email,
      password: passwordHashed,
      phone,
      authorization_level: "receptionist",
      createdAt: new Date(),
      updatedAt,
    });

    return admin;
  }
}

export { CreateReceptionistUseCase };
