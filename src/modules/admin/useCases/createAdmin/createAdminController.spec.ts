import request from "supertest";
import { describe, it, beforeEach, afterEach } from "vitest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "shared/infra/http/app.module";

describe("Admin Controller", async () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it("should be able to create a new admin", async () => {
    const response = await request(app.getHttpServer())
      .post("/admin")
      .send({
        name: "admin22",
        email: "admin2@gmail.com",
        password: "123456",
        username: "adminTestTest",
      })
      .expect(201);

    console.log(response.body);
  });
});
