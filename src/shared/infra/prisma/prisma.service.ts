import { Injectable, OnModuleInit, Scope } from "@nestjs/common";
import { PrismaClient, Prisma } from "@prisma/client";

@Injectable()
class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

export { PrismaService };
