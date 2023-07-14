import { beforeAll, describe, expect, it } from "vitest";
import { CreateReceptionistUseCase } from "./createReceptionistUseCase";
import { ReceptionistRepositoryInMemory } from "../repositories/in-Memory/ReceptionistRepositoryInMemory";

let createReceptionistUseCase: CreateReceptionistUseCase;
let receptionistRepository: ReceptionistRepositoryInMemory;

describe("Create Receptionist", async () => {
  beforeAll(async () => {
    receptionistRepository = new ReceptionistRepositoryInMemory();
    createReceptionistUseCase = new CreateReceptionistUseCase(
      receptionistRepository
    );
  });

  it("should be able to create a new receptionist", async () => {
    const receptionist = await createReceptionistUseCase.execute({
      name: "Jessica",
      email: "jessicaTest@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    expect(receptionist).toHaveProperty("id");
    expect(receptionist).toHaveProperty("name");
    expect(receptionist).toHaveProperty("email");
    expect(receptionist).toHaveProperty("password");
    expect(receptionist).toHaveProperty("phone");
  });
});
