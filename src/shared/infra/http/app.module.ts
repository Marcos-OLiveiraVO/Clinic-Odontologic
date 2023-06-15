import { PacientRepository } from "@modules/pacients/infra/prisma/repositories/PacientRepository";
import { ListPacientsController } from "@modules/pacients/useCases/listPacients/listPacientsController";
import { ListPacientsUseCase } from "@modules/pacients/useCases/listPacients/listPacientsUseCase";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [ListPacientsController],
  providers: [ListPacientsUseCase, PacientRepository],
})
export class AppModule {}
