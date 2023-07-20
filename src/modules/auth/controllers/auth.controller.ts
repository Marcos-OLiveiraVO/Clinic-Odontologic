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

import { signInDTO } from "modules/auth/dto/signInDTO";
import { AuthGuard } from "modules/auth/useCase/AuthGuard";
import { AuthService } from "modules/auth/useCase/authAdmin/auth.service";

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
