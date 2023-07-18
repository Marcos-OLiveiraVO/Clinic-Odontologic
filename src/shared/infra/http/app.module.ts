import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { AuthModule } from "auth/auth.module";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { AppManagersModule } from "modules/managers/nestModules/app.managers.module";
import { AppPatientsModule } from "modules/patients/nestModules/app.patients.module";
import { AppReceptionistModule } from "modules/receptionist/nestModules/app.receptionist.module";

@Module({
  imports: [
    AppError,
    AppPatientsModule,
    AppAdminModule,
    AppManagersModule,
    AppReceptionistModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
