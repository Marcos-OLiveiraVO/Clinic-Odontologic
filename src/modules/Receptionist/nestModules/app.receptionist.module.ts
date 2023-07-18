import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { CreateReceptionistUseCase } from "../useCases/createReceptionist/createReceptionistUseCase";
import { RemoveReceptionistUseCase } from "../useCases/removeReceptionist/removeReceptionistUseCase";
import { ShowProfileReceptionistUseCase } from "../useCases/showProfileReceptionist/showProfileReceptionistUseCase";
import { UpdateReceptionistUseCase } from "../useCases/updateReceptionist/updateReceptionistUseCase";

@Module({
  imports: [AppError],
  controllers: [],
  providers: [
    CreateReceptionistUseCase,
    RemoveReceptionistUseCase,
    ShowProfileReceptionistUseCase,
    UpdateReceptionistUseCase,
    ReceptionistRepository,
  ],
  exports: [
    CreateReceptionistUseCase,
    RemoveReceptionistUseCase,
    ShowProfileReceptionistUseCase,
    UpdateReceptionistUseCase,
    ReceptionistRepository,
  ],
})
export class AppReceptionistModule {}
