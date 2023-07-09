import { describe, expect, it, beforeAll } from "vitest";
import { CreateAdminUseCase } from "./createAdminUseCase";
import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";

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
});
