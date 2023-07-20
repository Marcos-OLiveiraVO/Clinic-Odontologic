import { Injectable, UnauthorizedException } from "@nestjs/common";

import { JwtService } from "@nestjs/jwt";
import { compareSync } from "bcrypt";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";

@Injectable()
class AuthService {
  constructor(
    private adminRepository: IAdminRepository,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string): Promise<any> {
    const admin = await this.adminRepository.findByEmail(email);

    if (!admin || !compareSync(password, admin.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: admin.id, username: admin.username };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

export { AuthService };
