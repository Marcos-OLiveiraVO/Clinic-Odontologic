import { instanceToInstance } from "class-transformer";
import { IResponseAdminDTO } from "../dtos/IResponseAdminDTO";

class AdminMapper {
  static ToDTO({ name, email, username }: Admin): IResponseAdminDTO {
    const admin = instanceToInstance({
      name,
      email,
      username,
    });
    return admin;
  }
}

export { AdminMapper };
