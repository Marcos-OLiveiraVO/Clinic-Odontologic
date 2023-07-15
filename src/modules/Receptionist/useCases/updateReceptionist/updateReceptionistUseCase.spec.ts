import { ReceptionistRepositoryInMemory } from "modules/Receptionist/repositories/in-Memory/ReceptionistRepositoryInMemory";
import { beforeAll, describe, expect, it } from "vitest";
import { CreateReceptionistUseCase } from "../createReceptionist/createReceptionistUseCase";
import { UpdateReceptionistUseCase } from "./updateReceptionistUseCase";

let receptionistRepository: ReceptionistRepositoryInMemory;
let createReceptionistUseCase: CreateReceptionistUseCase;
let updateReceptionistUseCase: UpdateReceptionistUseCase;

describe("Update Receptionist", async () => {
  beforeAll(async () => {
    receptionistRepository = new ReceptionistRepositoryInMemory();

    updateReceptionistUseCase = new UpdateReceptionistUseCase(
      receptionistRepository
    );

    createReceptionistUseCase = new CreateReceptionistUseCase(
      receptionistRepository
    );
  });

  it("should be able to update the receptionist", async () => {
    const receptionist = await createReceptionistUseCase.execute({
      name: "Jessica",
      email: "jessicaTest@@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    const receptionistUpdated = await updateReceptionistUseCase.execute({
      newName: "Jessy",
      originalEmail: "jessicaTest@@mail.com",
      newEmail: "jessyTest@mail.com",
      newPassword: "123456",
      newPhone: "XXX-XXX-XXX",
    });

    console.log(receptionistUpdated);

    expect(receptionistUpdated.id).toEqual(receptionist.id);
  });
});
