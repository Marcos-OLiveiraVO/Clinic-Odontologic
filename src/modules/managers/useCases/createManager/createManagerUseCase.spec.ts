import { beforeAll, describe, expect, it } from "vitest";
import { CreateManagerUseCase } from "./createManagerUseCase";
import { ManagerRepositoryInMemory } from "modules/managers/repositories/In-Memory/ManagerRepositoryInMemory";
import { AppError } from "@errors/appError";

let managerRepository: ManagerRepositoryInMemory;
let createManagerUseCase: CreateManagerUseCase;

describe("Create manager", async () => {
  beforeAll(async () => {
    (managerRepository = new ManagerRepositoryInMemory()),
      (createManagerUseCase = new CreateManagerUseCase(managerRepository));
  });

  it("should be able to create a new manager", async () => {
    const manager = await createManagerUseCase.execute({
      name: "manager1",
      email: "managerTest@gmail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    expect(manager).toHaveProperty("id");
  });

  it("should not be able to create a new manager if manager email already exists", async () => {
    await createManagerUseCase.execute({
      name: "manager1",
      email: "managerTest@mail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    await expect(
      createManagerUseCase.execute({
        name: "manager2",
        email: "managerTest@mail.com",
        password: "123456",
        phone: "XXX-XXX-XXX-XXX",
      })
    ).rejects.toEqual(new AppError("Account admin or email not exists!"));
  });
});
