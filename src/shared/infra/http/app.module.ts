import { Module } from "@nestjs/common";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { PrismaModule } from "../prisma/prisma.module";
import { AuthModule } from "./middlewares/auth/nestModule/auth.module";

@Module({
  imports: [PrismaModule, AppAdminModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
