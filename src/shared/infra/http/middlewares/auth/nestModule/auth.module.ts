import { Module } from "@nestjs/common";

import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { PrismaModule } from "../../../../prisma/prisma.module";
import { AuthController } from "shared/infra/http/middlewares/auth/controllers/auth.controller";
import { AuthService } from "../useCases/authAdmin/authUseCase";

import { AdminRepository } from "modules/admin/infra/prisma/repositories/adminRepository";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    }),
    PrismaModule,
  ],

  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: IAdminRepository,
      useClass: AdminRepository,
    },
    JwtService,
    AdminRepository,
  ],
  exports: [AuthService, AdminRepository, IAdminRepository, JwtService],
})
export class AuthModule {}
