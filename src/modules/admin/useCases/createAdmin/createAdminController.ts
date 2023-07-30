import { Body, Controller, HttpCode, Post, UseGuards } from "@nestjs/common";

import { CreateAdminUseCase } from "./createAdminUseCase";
import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { AuthGuard } from "shared/infra/http/middlewares/auth/AuthGuard/AuthGuard";
import { Admin } from "modules/admin/infra/prisma/entities/admin";

@Controller("admin")
class CreateAdminController {
  constructor(private createAdminUseCase: CreateAdminUseCase) {}

  @UseGuards(AuthGuard)
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
