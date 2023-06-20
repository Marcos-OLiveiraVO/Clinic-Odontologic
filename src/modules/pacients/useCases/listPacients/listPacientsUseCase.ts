import { PacientRepository } from "@modules/pacients/infra/prisma/repositories/PacientRepository";
import { Injectable } from "@nestjs/common";
import { Patient } from "@prisma/client";

@Injectable()
class ListPacientsUseCase {
  constructor(private pacientsRepository: PacientRepository) {}

  async execute(): Promise<Patient[]> {
    const patients = await this.pacientsRepository.listAll();
    return patients;
  }
}

export { ListPacientsUseCase };
