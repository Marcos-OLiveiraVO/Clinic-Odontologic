import { Module } from "@nestjs/common";
import { CreateAdminController } from "../useCases/createAdmin/createAdminController";
import { CreateAdminUseCase } from "../useCases/createAdmin/createAdminUseCase";
import { AdminRepository } from "../infra/prisma/adminRepository";
import { PrismaModule } from "../../../../prisma/prisma.module";
import { PrismaService } from "../../../../prisma/prisma.service";
import { IAdminRepository } from "../repositories/IAdminRepository";
import { AuthModule } from "modules/auth/nestModule/auth.module";

@Module({
  imports: [PrismaModule, AuthModule],
  controllers: [CreateAdminController],
  providers: [
    CreateAdminUseCase,
    AdminRepository,
    PrismaService,
    {
      provide: IAdminRepository,
      useClass: AdminRepository,
    },
  ],
  exports: [PrismaService],
})
export class AppAdminModule {}
