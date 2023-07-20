import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";

import { signInDTO } from "shared/infra/http/middlewares/auth/dto/signInDTO";
import { AuthService } from "../useCases/authAdmin/authUseCase";
import { AuthGuard } from "../AuthGuard/AuthGuard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  async signIn(@Body() { email, password }: signInDTO) {
    return this.authService.signIn(email, password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  async getProfile(@Request() req) {
    return req.user;
  }
}
