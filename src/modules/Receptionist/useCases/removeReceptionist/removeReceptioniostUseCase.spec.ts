import { ReceptionistRepositoryInMemory } from "modules/Receptionist/repositories/in-Memory/ReceptionistRepositoryInMemory";
import { CreateReceptionistUseCase } from "../createReceptionist/createReceptionistUseCase";
import { beforeAll, describe, it, expect } from "vitest";
import { RemoveReceptionistUseCase } from "./removeReceptionistUseCase";
import { AppError } from "@errors/appError";

let receptionistRepository: ReceptionistRepositoryInMemory;
let createReceptionistUseCase: CreateReceptionistUseCase;
let removeReceptionistUseCase: RemoveReceptionistUseCase;

describe("Remove Receptionist", async () => {
  beforeAll(async () => {
    receptionistRepository = new ReceptionistRepositoryInMemory();

    createReceptionistUseCase = new CreateReceptionistUseCase(
      receptionistRepository
    );

    removeReceptionistUseCase = new RemoveReceptionistUseCase(
      receptionistRepository
    );
  });

  it("should be able to remove a receptionist", async () => {
    const receptionist = await createReceptionistUseCase.execute({
      name: "Jessica",
      email: "jessicaTest@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    const receptionistBeRemoved = await removeReceptionistUseCase.execute(
      receptionist.email
    );

    expect(receptionistBeRemoved).toBeUndefined();
  });

  it("should not be able to remove a non exists receptionist", async () => {
    const ReceptionistEmail = "jessicaTest@mail.com";

    await expect(
      removeReceptionistUseCase.execute(ReceptionistEmail)
    ).rejects.toEqual(
      new AppError("Receptionist account or email not exists!")
    );
  });
});
