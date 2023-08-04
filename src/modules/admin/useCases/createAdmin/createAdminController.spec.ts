import request from "supertest";
import { describe, it, beforeEach, afterEach } from "vitest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "shared/infra/http/app.module";

describe("Admin Controller", async () => {
  let app: INestApplication;
  let access_token: string;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
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
