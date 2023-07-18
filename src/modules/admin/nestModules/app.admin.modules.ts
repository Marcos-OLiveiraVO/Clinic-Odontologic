import { AppError } from "@errors/appError";
import { Module } from "@nestjs/common";
import { CreateAdminUseCase } from "../useCases/createAdmin/createAdminUseCase";
import { RemoveAdminUseCase } from "../useCases/removeAdmin/removeAdminUseCase";
import { ShowProfileAdminUseCase } from "../useCases/showProfileAdmin/showProfileAdminUseCase";
import { UpdateAdminUseCase } from "../useCases/updateAdmin/updateAdminUseCase";

@Module({
  imports: [AppError],
  controllers: [],
  providers: [
    CreateAdminUseCase,
    RemoveAdminUseCase,
    ShowProfileAdminUseCase,
    UpdateAdminUseCase,
    AdminRepository,
  ],
  exports: [
    CreateAdminUseCase,
    RemoveAdminUseCase,
    ShowProfileAdminUseCase,
    UpdateAdminUseCase,
    AdminRepository,
  ],
})
export class AppAdminModule {}
