import { IPacientRepository } from "@modules/pacients/repositories/IPacientRepository";
import { Pacient, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PacientRepository implements IPacientRepository {
  async listAll(): Promise<Pacient[]> {
    return await prisma.pacient.findMany();
  }
}

export { PacientRepository };
