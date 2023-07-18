import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { AuthModule } from "auth/auth.module";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { AppManagersModule } from "modules/managers/nestModules/app.managers.module";
import { AppPatientsModule } from "modules/patients/nestModules/app.patients.module";
import { ListPatientsController } from "modules/patients/useCases/listPatients/listPatientsController";
import { AppReceptionistModule } from "modules/receptionist/nestModules/app.receptionist.module";

@Module({
  imports: [AppError],
  controllers: [],
  providers: [
    AppPatientsModule,
    AppAdminModule,
    AppManagersModule,
    AppReceptionistModule,
    AuthModule,
  ],
})
export class AppModule {}
