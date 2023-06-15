import { Pacient } from "@prisma/client";

interface IPacientRepository {
  listAll(): Promise<Pacient[]>;
}

export { IPacientRepository };
