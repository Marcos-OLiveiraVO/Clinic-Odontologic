import { AppError } from "@errors/appError";
import { ICreateManagerDTO } from "modules/managers/dtos/ICreateManagerDTO";
import { IManagerRepository } from "modules/managers/repositories/IManagerRepository";
import { hash } from "bcrypt";

class CreateManagerUseCase {
  constructor(private manageRepository: IManagerRepository) {}

  async execute({
    name,
    email,
    password,
    phone,
    updatedAt,
  }: ICreateManagerDTO) {
    const adminAlreadyExists = await this.manageRepository.findByEmail(email);

    if (adminAlreadyExists) {
      throw new AppError("account admin or email not exists!");
    }

    const hashedPassword = await hash(password, 6);

    const admin = await this.manageRepository.create({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
      phone,
      authorization_level: "admin",
      updatedAt,
    });

    return admin;
  }
}

export { CreateManagerUseCase };