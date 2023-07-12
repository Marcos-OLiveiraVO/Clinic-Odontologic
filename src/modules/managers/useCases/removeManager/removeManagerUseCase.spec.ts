import { ManagerRepositoryInMemory } from "modules/managers/repositories/In-Memory/ManagerRepositoryInMemory";
import { CreateManagerUseCase } from "../createManager/createManagerUseCase";
import { beforeAll, it, describe, expect } from "vitest";
import { RemoveManagerUseCase } from "./removeManagerUseCase";

let createManagerUseCase: CreateManagerUseCase;
let managerRepository: ManagerRepositoryInMemory;
let removeManagerUseCase: RemoveManagerUseCase;

describe("Remove manager", async () => {
  beforeAll(async () => {
    managerRepository = new ManagerRepositoryInMemory();
    createManagerUseCase = new CreateManagerUseCase(managerRepository);
    removeManagerUseCase = new RemoveManagerUseCase(managerRepository);
  });

  it("should be able to remove a manager", async () => {
    const manager = await createManagerUseCase.execute({
      name: "manager1",
      email: "managerTest@mail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    const managerRemoved = await removeManagerUseCase.execute(manager.email);

    expect(managerRemoved).toBeUndefined();
  });
});
