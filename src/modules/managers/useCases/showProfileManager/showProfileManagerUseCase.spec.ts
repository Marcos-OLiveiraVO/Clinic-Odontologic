import { ManagerRepositoryInMemory } from "modules/managers/repositories/In-Memory/ManagerRepositoryInMemory";
import { beforeAll, describe, expect, it } from "vitest";
import { CreateManagerUseCase } from "../createManager/createManagerUseCase";
import { ShowProfileManagerUseCase } from "./showProfileManagerUseCase";

let managerRepository: ManagerRepositoryInMemory;
let createManagerUseCase: CreateManagerUseCase;
let showProfileManagerUseCase: ShowProfileManagerUseCase;

describe("Show Profile Manager", async () => {
  beforeAll(async () => {
    managerRepository = new ManagerRepositoryInMemory();
    createManagerUseCase = new CreateManagerUseCase(managerRepository);
    showProfileManagerUseCase = new ShowProfileManagerUseCase(
      managerRepository
    );
  });

  it("should be able to show manager profile", async () => {
    const manager = await createManagerUseCase.execute({
      name: "manager1",
      email: "managerTest@gmail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    const managerProfile = await showProfileManagerUseCase.execute(
      manager.email
    );

    expect(managerProfile.name).toBe(manager.name);
  });
});
