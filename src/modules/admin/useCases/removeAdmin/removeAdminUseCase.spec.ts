import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { CreateAdminUseCase } from "../createAdmin/createAdminUseCase";
import { beforeAll, expect, it, describe } from "vitest";
import { RemoveAdminUseCase } from "./removeAdminUseCase";
import { AppError } from "@errors/appError";

let adminRepository: AdminRepositoryInMemory;
let removeAdminUseCase: RemoveAdminUseCase;
let createAdminUseCase: CreateAdminUseCase;

describe("Remove admin", async () => {
  beforeAll(async () => {
    adminRepository = new AdminRepositoryInMemory();
    removeAdminUseCase = new RemoveAdminUseCase(adminRepository);
    createAdminUseCase = new CreateAdminUseCase(adminRepository);
  });

  it("should be able to remove the admin", async () => {
    const admin = await createAdminUseCase.execute({
      name: "admin1",
      username: "admin",
      email: "admin@mail.com",
      password: "1234",
    });

    await adminRepository.findByEmail(admin.email);

    const adminBeRemoved = await removeAdminUseCase.execute(admin.email);

    expect(adminBeRemoved).toBeUndefined();
  });

  it("should not be able to remove a non exists admin", async () => {
    const email = "admin@mail.com";

    await expect(removeAdminUseCase.execute(email)).rejects.toEqual(
      new AppError("Admin or account not exists!")
    );
  });
});
