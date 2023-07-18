import { AppError } from "@errors/appError";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { hash } from "bcrypt";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

@Injectable()
class AuthService {
  constructor(
    private adminRepository: IAdminRepository,
    private jwtService: JwtService
  ) {}

  async signIn(pass: string, email: string): Promise<any> {
    const admin = await this.adminRepository.findByEmail(email);

    if (admin?.password !== pass) {
      throw new AppError("Unauthorized Access");
    }

    const payload = { sub: admin.id, admin: admin.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

export { AuthService };
