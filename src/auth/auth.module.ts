import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRES_IN,
      },
    }),
  ],

  exports: [AdminRepositoryInMemory],

  controllers: [AuthController],

  providers: [AuthService],
})
export class AuthModule {}
