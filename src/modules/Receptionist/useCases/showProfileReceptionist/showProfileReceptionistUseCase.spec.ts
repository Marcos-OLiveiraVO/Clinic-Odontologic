import { ReceptionistRepositoryInMemory } from "modules/Receptionist/repositories/in-Memory/ReceptionistRepositoryInMemory";
import { CreateReceptionistUseCase } from "../createReceptionist/createReceptionistUseCase";
import { beforeAll, describe, it, expect } from "vitest";
import { ShowProfileReceptionistUseCase } from "./showProfileReceptionistUseCase";

let receptionistRepository: ReceptionistRepositoryInMemory;
let createReceptionistUseCase: CreateReceptionistUseCase;
let showProfileReceptionistUseCase: ShowProfileReceptionistUseCase;

describe("Show Receptionist profile", async () => {
  beforeAll(async () => {
    receptionistRepository = new ReceptionistRepositoryInMemory();

    createReceptionistUseCase = new CreateReceptionistUseCase(
      receptionistRepository
    );

    showProfileReceptionistUseCase = new ShowProfileReceptionistUseCase(
      receptionistRepository
    );
  });

  it("should be able to show receptionist profile", async () => {
    const receptionist = await createReceptionistUseCase.execute({
      name: "Jessica",
      email: "jessicaTest@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    const receptionistProfile = await showProfileReceptionistUseCase.execute(
      receptionist.email
    );

    expect(receptionistProfile.name).toEqual(receptionist.name);
    expect(receptionistProfile.email).toEqual(receptionist.email);
    expect(receptionistProfile.password).toEqual(receptionist.password);
    expect(receptionistProfile.phone).toEqual(receptionist.phone);
  });
});
