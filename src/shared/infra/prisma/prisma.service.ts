import { Injectable, Scope } from "@nestjs/common";
import { PrismaClient, Prisma } from "@prisma/client";

@Injectable({ scope: Scope.REQUEST })
export class PrismaService {
  public readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    try {
      await this.prisma.$disconnect();
    } catch (error) {
      console.error("Error while disconnecting PrismaClient:", error);
    }
  }
}
