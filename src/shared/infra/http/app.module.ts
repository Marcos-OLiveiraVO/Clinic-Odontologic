import { PacientRepository } from "@modules/pacients/infra/prisma/repositories/PacientRepository";
import { CreatePatientUseCase } from "@modules/pacients/useCases/createPatient/createPatientUseCase";
import { ListPacientsController } from "@modules/pacients/useCases/listPacients/listPacientsController";
import { ListPacientsUseCase } from "@modules/pacients/useCases/listPacients/listPacientsUseCase";
import { Module } from "@nestjs/common";
import { AppError } from "@shared/errors/appError";

@Module({
  imports: [AppError],
  controllers: [ListPacientsController],
  providers: [ListPacientsUseCase, PacientRepository, CreatePatientUseCase],
})
export class AppModule {}
