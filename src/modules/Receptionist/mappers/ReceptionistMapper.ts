import { Receptionist } from "@prisma/client";
import { instanceToInstance } from "class-transformer";
import { IResponseReceptionistProfile } from "../dtos/IResponseReceptionist";

class ReceptionistMapper {
  static ToDTO({
    name,
    email,
    password,
    phone,
  }: Receptionist): IResponseReceptionistProfile {
    const receptionistProfile = instanceToInstance({
      name,
      email,
      phone,
      password,
    });

    return receptionistProfile;
  }
}

export { ReceptionistMapper };
