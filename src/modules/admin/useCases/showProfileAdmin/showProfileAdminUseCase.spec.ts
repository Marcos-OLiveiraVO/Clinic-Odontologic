import { AdminRepositoryInMemory } from "modules/admin/repositories/InMemory/AdminRepositoryInMemory";
import { beforeAll, describe, expect, it } from "vitest";
import { CreateAdminUseCase } from "../createAdmin/createAdminUseCase";
import { ShowProfileAdminUseCase } from "./showProfileAdminUseCase";

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

    await adminRepository.findByEmail(admin.email);

    const adminProfile = await showProfileAdminUseCase.execute(admin.email);

    expect(adminProfile.name).toEqual(admin.name);
    expect(adminProfile.username).toEqual(admin.username);
    expect(adminProfile.email).toEqual(admin.email);
  });
});
