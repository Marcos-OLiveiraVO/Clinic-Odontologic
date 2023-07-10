import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { CreateAdminUseCase } from "../createAdmin/createAdminUseCase";
import { UpdateAdminUseCase } from "./updateAdminUseCase";
import { beforeAll, describe, expect, it } from "vitest";
import { AppError } from "@errors/appError";

let createAdminUseCase: CreateAdminUseCase;
let updateAdminUseCase: UpdateAdminUseCase;
let adminRepository: AdminRepositoryInMemory;

describe("Update Admin", async () => {
  beforeAll(async () => {
    adminRepository = new AdminRepositoryInMemory();
    createAdminUseCase = new CreateAdminUseCase(adminRepository);
    updateAdminUseCase = new UpdateAdminUseCase(adminRepository);
  });

  it("should be able to update the admin", async () => {
    const admin = await createAdminUseCase.execute({
      name: "admin1",
      username: "admin",
      email: "admin@mail.com",
      password: "1234",
    });

    await adminRepository.findByEmail(admin.email);

    const updateAdmin = await updateAdminUseCase.execute({
      newName: "new adminName",
      newUsername: "admin2",
      originalEmail: "admin@mail.com",
      newEmail: "newAdmin2@mail.com",
      newPassword: "66666",
    });

    expect(updateAdmin.id).toBe(admin.id);
  });

  it("should not be able to update a non exist admin", async () => {
    await expect(
      updateAdminUseCase.execute({
        newName: "new adminName",
        newUsername: "admin2",
        originalEmail: "admin@mail.com",
        newEmail: "newAdmin2@mail.com",
        newPassword: "66666",
      })
    ).rejects.toEqual(new AppError("Email or account not exists!"));
  });
});
