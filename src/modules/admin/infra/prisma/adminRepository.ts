import { Admin } from "@prisma/client";
import { IAdminUpdateRequestDTO } from "modules/admin/dtos/IAdminUpdateRequestDTO";
import { ICreateAdminDTO } from "modules/admin/dtos/ICreateAdminDTO";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { PrismaService } from "../../../../../prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { v4 as uuidV4 } from "uuid";

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
    return await this.prismaService.prisma.admin.create({
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
    const admin = await this.prismaService.prisma.admin.findFirst({
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
    const adminUpdated = await this.prismaService.prisma.admin.update({
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
    await this.prismaService.prisma.admin.delete({
      where: {
        email,
      },
    });
  }
}

export { AdminRepository };
