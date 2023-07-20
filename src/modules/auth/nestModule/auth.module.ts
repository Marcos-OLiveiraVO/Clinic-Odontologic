import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";

import { AdminRepository } from "modules/admin/infra/prisma/adminRepository";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { PrismaModule } from "../../../../prisma/prisma.module";
import { AuthController } from "modules/auth/controllers/auth.controller";
import { AuthService } from "modules/auth/useCase/authAdmin/auth.service";

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
