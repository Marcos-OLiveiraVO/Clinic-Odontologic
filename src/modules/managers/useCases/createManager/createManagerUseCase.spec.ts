import { beforeAll, describe, expect, it } from "vitest";
import { CreateManagerUseCase } from "./createManagerUseCase";
import { ManagerRepositoryInMemory } from "modules/managers/repositories/In-Memory/ManagerRepositoryInMemory";

let managerRepository: ManagerRepositoryInMemory;
let createManageUseCase: CreateManagerUseCase;

describe("Create manager", async () => {
  beforeAll(async () => {
    (managerRepository = new ManagerRepositoryInMemory()),
      (createManageUseCase = new CreateManagerUseCase(managerRepository));
  });

  it("should be able to create a new manager", async () => {
    const manager = await createManageUseCase.execute({
      name: "manager1",
      email: "managerTest@mail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    expect(manager).toHaveProperty("id");
  });
});
