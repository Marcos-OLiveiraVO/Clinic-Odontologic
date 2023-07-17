import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { beforeAll, describe, expect, it } from "vitest";
import { CreateAdminUseCase } from "../createAdmin/createAdminUseCase";
import { ShowProfileAdminUseCase } from "./showProfileAdminUseCase";
import { AppError } from "@errors/appError";

let showProfileAdminUseCase: ShowProfileAdminUseCase;
let createAdminUseCase: CreateAdminUseCase;
let adminRepository: AdminRepositoryInMemory;

describe("Show Admin Profile", async () => {
  beforeAll(async () => {
    adminRepository = new AdminRepositoryInMemory();
    showProfileAdminUseCase = new ShowProfileAdminUseCase(adminRepository);
    createAdminUseCase = new CreateAdminUseCase(adminRepository);
  });

  it("should be able to show admin profile", async () => {
    const admin = {
      name: "admin",
      username: "admin1",
      email: "admin@mail.com",
      password: "admin1234",
    };

    await createAdminUseCase.execute({
      name: admin.name,
      username: admin.username,
      email: admin.email,
      password: admin.password,
    });

    const adminProfile = await showProfileAdminUseCase.execute(admin.email);

    expect(adminProfile.name).toEqual(admin.name);
    expect(adminProfile.email).toEqual(admin.email);
    expect(adminProfile.username).toEqual(admin.username);
  });

  it("should not be able to show admin profile if email or account not exists", async () => {
    const admin = {
      name: "admin",
      username: "admin1",
      email: "admin@test.com",
      password: "admin1234",
    };

    await expect(showProfileAdminUseCase.execute(admin.email)).rejects.toEqual(
      new AppError("Email or account not exists!")
    );
  });
});
