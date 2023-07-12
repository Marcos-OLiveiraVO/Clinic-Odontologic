import { ManagerRepositoryInMemory } from "modules/managers/repositories/In-Memory/ManagerRepositoryInMemory";
import { CreateManagerUseCase } from "../createManager/createManagerUseCase";
import { beforeAll, describe, expect, it } from "vitest";
import { UpdateManagerUseCase } from "./updateManagerUseCase";
import { AppError } from "@errors/appError";

let createManagerUseCase: CreateManagerUseCase;
let managerRepository: ManagerRepositoryInMemory;
let updateManagerUseCase: UpdateManagerUseCase;

describe("Update Manager", async () => {
  beforeAll(async () => {
    managerRepository = new ManagerRepositoryInMemory();
    createManagerUseCase = new CreateManagerUseCase(managerRepository);
    updateManagerUseCase = new UpdateManagerUseCase(managerRepository);
  });

  it("should be able to update manager", async () => {
    const manager = await createManagerUseCase.execute({
      name: "manager1",
      email: "managerTest@gmail.com",
      password: "1234",
      phone: "XXX-XXX-XXX-XXX",
    });

    const managerUpdated = await updateManagerUseCase.execute({
      originalEmail: "managerTest@gmail.com",
      newName: "newManager",
      newEmail: "managerTest2@mail.com",
      newPassword: "123456",
      newPhone: "XXX-XXX-XXX-XXX",
    });

    expect(managerUpdated.id).toEqual(manager.id);
  });

  it("should not be able to update a non exists manager", async () => {
    await expect(
      updateManagerUseCase.execute({
        originalEmail: "managerTest@gmail.com",
        newName: "newManager",
        newEmail: "managerTest2@mail.com",
        newPassword: "123456",
        newPhone: "XXX-XXX-XXX-XXX",
      })
    ).rejects.toEqual(new AppError("Manager Account or email not exists!"));
  });
});
