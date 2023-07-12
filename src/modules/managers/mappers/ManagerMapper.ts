import { Manager } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IResponseManagerDTO } from "../dtos/IResponseManagerDTO";

class ManagerMapper {
  static ToDTO({ name, email, phone, password }: Manager): IResponseManagerDTO {
    const manager = instanceToInstance({
      name,
      email,
      phone,
      password,
    });

    return manager;
  }
}

export { ManagerMapper };
