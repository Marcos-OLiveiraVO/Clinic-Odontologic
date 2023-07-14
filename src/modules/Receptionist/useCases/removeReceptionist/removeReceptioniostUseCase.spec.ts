import { ReceptionistRepositoryInMemory } from "modules/Receptionist/repositories/in-Memory/ReceptionistRepositoryInMemory";
import { CreateReceptionistUseCase } from "../createReceptionist/createReceptionistUseCase";
import { beforeAll, describe, it, expect } from "vitest";
import { RemoveReceptionistUseCase } from "./removeReceptionistUseCase";

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
      email: "jessicaTest@@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    const receptionistRemoved = await removeReceptionistUseCase.execute(
      receptionist.email
    );

    expect(receptionistRemoved).toBeUndefined();
  });
});
