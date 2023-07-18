import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

interface signInDTO {
  username: string;
  email: string;
  password: string;
}

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDTO: signInDTO) {
    return this.authService.signIn(signInDTO.email, signInDTO.password);
  }
}
