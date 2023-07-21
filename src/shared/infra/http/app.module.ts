import { Module } from "@nestjs/common";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule, AppAdminModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
