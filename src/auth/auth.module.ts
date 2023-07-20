import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from "@nestjs/jwt";
import { AdminRepository } from "modules/admin/infra/prisma/adminRepository";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { PrismaModule } from "../../prisma/prisma.module";

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
