import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";
import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "shared/infra/prisma/prisma.service";
import { Admin } from "../entities/Admin";

@Injectable()
class AdminRepository implements IAdminRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    name,
    email,
    username,
    password,
    authorization_level,
    createdAt,
    updatedAt,
    id,
  }: ICreateAdminDTO): Promise<Admin> {
    return await this.prismaService.admin.create({
      data: {
        id,
        name,
        email,
        username,
        password,
        authorization_level,
        createdAt,
        updatedAt,
      },
    });
  }

  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.prismaService.admin.findFirst({
      where: {
        email,
      },
    });

    return admin;
  }

  async update({
    newEmail,
    newName,
    newPassword,
    newUsername,
    originalEmail,
  }: IAdminUpdateRequestDTO): Promise<Admin> {
    const adminUpdated = await this.prismaService.admin.update({
      where: {
        email: originalEmail,
      },
      data: {
        name: newName,
        email: newEmail,
        username: newUsername,
        password: newPassword,
      },
    });

    return adminUpdated;
  }
  async remove(email: string): Promise<void> {
    await this.prismaService.admin.delete({
      where: {
        email,
      },
    });
  }
}

export { AdminRepository };
