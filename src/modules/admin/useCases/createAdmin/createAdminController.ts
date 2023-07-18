import { Body, Controller, HttpCode, Post, Res } from "@nestjs/common";
import { CreateAdminUseCase } from "./createAdminUseCase";
import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { Admin } from "@prisma/client";

@Controller("admin")
class CreateAdminController {
  constructor(private createAdminUseCase: CreateAdminUseCase) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createAdminDTo: ICreateAdminDTO): Promise<Admin> {
    const { name, email, password, username } = createAdminDTo;

    const admin = await this.createAdminUseCase.execute({
      name,
      email,
      password,
      username,
    });

    return admin;
  }
}

export { CreateAdminController };
