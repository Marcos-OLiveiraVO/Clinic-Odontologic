import request from "supertest";
import {
  beforeAll,
  describe,
  it,
  afterAll,
  beforeEach,
  afterEach,
} from "vitest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "shared/infra/http/app.module";
import { CreateAdminController } from "./createAdminController";
import { CreateAdminUseCase } from "./createAdminUseCase";
import { PrismaService } from "shared/infra/prisma/prisma.service";
import { AdminRepository } from "modules/admin/infra/prisma/repositories/adminRepository";
import { JwtService } from "@nestjs/jwt";
import { AppAdminModule } from "modules/admin/nestModules/app.admin.modules";
import { AuthModule } from "shared/infra/http/middlewares/auth/nestModule/auth.module";
import { IAdminRepository } from "modules/admin/repositories/IAdminRepository";
import { PrismaModule } from "shared/infra/prisma/prisma.module";
import { AuthController } from "shared/infra/http/middlewares/auth/controllers/auth.controller";

describe("Admin Controller", async () => {
  let app: INestApplication;
  let access_token: string;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AppAdminModule, AuthModule, PrismaModule],
      controllers: [AuthController, CreateAdminController],
      providers: [
        CreateAdminUseCase,
        PrismaService,
        { provide: IAdminRepository, useClass: AdminRepository },
        JwtService,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it("should be able to create a new admin", async () => {
    const authenticate = await request(app.getHttpServer())
      .post("/auth/login")
      .send({
        email: "admintest2727@gmail.com",
        password: "admin",
      })
      .expect(200);

    access_token = authenticate.body;
    console.log(access_token);

    return request(app.getHttpServer())
      .post("/admin")
      .send({
        name: "admin335",
        email: "admintest256@gmail.com",
        password: "1234567",
        username: "adminTest293",
      })
      .set("Authorization", `Bearer ${access_token}`)
      .expect(201);
  });
});
