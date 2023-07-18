import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { CreateManagerUseCase } from "../useCases/createManager/createManagerUseCase";
import { RemoveManagerUseCase } from "../useCases/removeManager/removeManagerUseCase";
import { ShowProfileManagerUseCase } from "../useCases/showProfileManager/showProfileManagerUseCase";
import { UpdateManagerUseCase } from "../useCases/updateManager/updateManagerUseCase";

@Module({
  imports: [AppError],
  controllers: [],
  providers: [
    CreateManagerUseCase,
    RemoveManagerUseCase,
    ShowProfileManagerUseCase,
    UpdateManagerUseCase,
    ManagerRepository,
  ],
})
export class AppManagersModule {}
