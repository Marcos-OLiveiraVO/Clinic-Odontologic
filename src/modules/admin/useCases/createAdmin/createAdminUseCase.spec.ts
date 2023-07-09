import { describe, expect, it, beforeAll } from "vitest";
import { CreateAdminUseCase } from "./createAdminUseCase";
import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { AppError } from "@errors/appError";

let adminRepository: AdminRepositoryInMemory;
let createAdminUseCase: CreateAdminUseCase;

describe("Create Admin", async () => {
  beforeAll(async () => {
    adminRepository = new AdminRepositoryInMemory();
    createAdminUseCase = new CreateAdminUseCase(adminRepository);
  });

  it("should be able to create an admin", async () => {
    const admin = await createAdminUseCase.execute({
      name: "admin1",
      username: "admin",
      email: "admin@mail.com",
      password: "1234",
    });

    expect(admin).toHaveProperty("id");
    expect(admin.name).toBe(admin.name);
    expect(admin.username).toBe(admin.username);
    expect(admin.password).toBe(admin.password);
  });

  it("should not be able to create an admin if admin already exists", async () => {
    const admin = {
      name: "admin",
      username: "admin1",
      email: "admin@gmail.com",
      password: "1234",
    };

    await createAdminUseCase.execute({
      name: admin.name,
      username: admin.username,
      email: admin.email,
      password: admin.password,
    });

    await expect(
      createAdminUseCase.execute({
        name: admin.name,
        username: admin.username,
        email: admin.email,
        password: admin.password,
      })
    ).rejects.toEqual(new AppError("Admin already exists"));
  });
});
