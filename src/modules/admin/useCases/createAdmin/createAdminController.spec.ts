import request from "supertest";
import { beforeAll, describe, it, expect, afterAll } from "vitest";
import { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { PrismaService } from "shared/infra/prisma/prisma.service";
import { AppModule } from "shared/infra/http/app.module";

describe("Admin Controller", async () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to create a new admin", async () => {
    return request(app.getHttpServer())
      .post("/admin")
      .send({
        name: "admin335",
        email: "admintest256@gmail.com",
        password: "1234567",
        username: "adminTest293",
      })
      .expect(201);
  });
});
