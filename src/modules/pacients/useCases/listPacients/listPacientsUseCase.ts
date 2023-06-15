import { PacientRepository } from "@modules/pacients/infra/prisma/repositories/PacientRepository";
import { Injectable } from "@nestjs/common";
import { Pacient } from "@prisma/client";

@Injectable()
class ListPacientsUseCase {
  constructor(private pacientsRepository: PacientRepository) {}

  async execute(): Promise<Pacient[]> {
    return this.pacientsRepository.listAll();
  }
}

export { ListPacientsUseCase };
