import { Receptionist } from "@prisma/client";
import { IUpdateReceptionistRequest } from "../dtos/IUpdateReceptionistRequest";

interface IReceptionistRepository {
  create(data: ICreateReceptionistDTO): Promise<Receptionist>;
  findByEmail(email: string): Promise<Receptionist>;
  update(data: IUpdateReceptionistRequest): Promise<Receptionist>;
  remove(email: string): Promise<void>;
}

export { IReceptionistRepository };
