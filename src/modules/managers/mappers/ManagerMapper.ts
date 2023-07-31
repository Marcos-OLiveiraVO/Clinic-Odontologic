import { instanceToInstance } from "class-transformer";
import { IResponseManagerProfile } from "../dtos/IResponseManagerProfile";
import { Manager } from "../infra/typeorm/entities/Manager";

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
