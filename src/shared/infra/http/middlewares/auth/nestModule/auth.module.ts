import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { AdminRepository } from "modules/admin/infra/prisma/adminRepository";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { PrismaModule } from "../../../../prisma/prisma.module";
import { AuthController } from "shared/infra/http/middlewares/auth/controllers/auth.controller";
import { AuthService } from "../useCases/authAdmin/authUseCase";

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
  ],
  exports: [AuthService],
})
export class AuthModule {}
