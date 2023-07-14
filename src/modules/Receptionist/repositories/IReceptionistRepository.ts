import { Receptionist } from "@prisma/client";

interface IReceptionistRepository {
  create(data: ICreateReceptionistDTO): Promise<Receptionist>;
  findByEmail(email: string): Promise<Receptionist>;
  remove(email: string): Promise<void>;
}

export { IReceptionistRepository };
