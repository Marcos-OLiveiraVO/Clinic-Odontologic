import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { ListPatientsController } from "../useCases/listPatients/listPatientsController";
import { AuthService } from "auth/auth.service";
import { CreatePatientUseCase } from "../useCases/createPatient/createPatientUseCase";
import { ListPatientsUseCase } from "../useCases/listPatients/listPatientsUseCase";
import { RemovePatientUseCase } from "../useCases/removePatient/removePatientUseCase";
import { ShowProfilePatientUseCase } from "../useCases/showProfilePatients/showProfilePatientUseCase";
import { UpdatePatientUseCase } from "../useCases/updatePatients/updatePatientUseCase";
import { PatientRepository } from "../infra/prisma/repositories/PatientRepository";

@Module({
  imports: [AppError],
  controllers: [ListPatientsController],
  providers: [
    CreatePatientUseCase,
    ListPatientsUseCase,
    RemovePatientUseCase,
    ShowProfilePatientUseCase,
    UpdatePatientUseCase,
    PatientRepository,
  ],
})
export class AppPatientsModule {}
