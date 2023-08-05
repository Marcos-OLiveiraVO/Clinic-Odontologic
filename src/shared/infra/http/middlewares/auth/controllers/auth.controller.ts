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

import { AuthService } from "../useCases/authAdmin/authUseCase";
import { AuthGuard } from "../AuthGuard/AuthGuard";
import { signInDTO } from "../dto/signInDTO";

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
