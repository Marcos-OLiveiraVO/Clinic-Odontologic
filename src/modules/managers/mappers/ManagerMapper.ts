import { Manager } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IResponseManagerProfile } from "../dtos/IResponseManagerProfile";

class ManagerMapper {
  static ToDTO({
    name,
    email,
    phone,
    password,
  }: Manager): IResponseManagerProfile {
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
