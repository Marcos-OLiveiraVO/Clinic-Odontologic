import { instanceToInstance } from "class-transformer";
import { IResponseAdminDTO } from "../dtos/IResponseAdminDTO";
import { Admin } from "../infra/prisma/entities/admin";

class AdminMapper {
  static ToDTO({ name, email, username, password }: Admin): IResponseAdminDTO {
    const admin = instanceToInstance({
      name,
      email,
      username,
      password,
    });
    return admin;
  }
}

export { AdminMapper };
