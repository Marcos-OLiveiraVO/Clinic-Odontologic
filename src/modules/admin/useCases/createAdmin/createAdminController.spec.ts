import request from "supertest";
import { beforeAll, describe, it, afterAll } from "vitest";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "shared/infra/http/app.module";

describe("Admin Controller", async () => {
  let app: INestApplication;
  let access_token: string;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
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
