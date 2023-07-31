import { Module } from "@nestjs/common";
import { CreateAdminController } from "../useCases/createAdmin/createAdminController";
import { CreateAdminUseCase } from "../useCases/createAdmin/createAdminUseCase";
import { PrismaModule } from "../../../shared/infra/prisma/prisma.module";
import { PrismaService } from "../../../shared/infra/prisma/prisma.service";
import { IAdminRepository } from "../repositories/IAdminRepository";
import { AuthModule } from "shared/infra/http/middlewares/auth/nestModule/auth.module";
import { AdminRepository } from "../infra/prisma/repositories/adminRepository";

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
