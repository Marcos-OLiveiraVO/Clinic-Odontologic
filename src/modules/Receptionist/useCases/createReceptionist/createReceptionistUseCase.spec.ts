import { beforeAll, describe, expect, it } from "vitest";
import { AppError } from "@errors/appError";
import { ReceptionistRepositoryInMemory } from "modules/Receptionist/repositories/in-Memory/ReceptionistRepositoryInMemory";
import { CreateReceptionistUseCase } from "./createReceptionistUseCase";

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
      email: "jessicaTest@@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    expect(receptionist).toHaveProperty("id");
    expect(receptionist).toHaveProperty("name");
    expect(receptionist).toHaveProperty("email");
    expect(receptionist).toHaveProperty("password");
    expect(receptionist).toHaveProperty("phone");
    expect(receptionist).toHaveProperty("authorization_level");
    expect(receptionist).toHaveProperty("createdAt");
    expect(receptionist).toHaveProperty("updatedAt");
  });

  it("should not be able to create a exists receptionist", async () => {
    await createReceptionistUseCase.execute({
      name: "Jessica",
      email: "jessicaTest@mail.com",
      password: "12345",
      phone: "XXX-XXX-XXX-XXX",
    });

    await expect(
      createReceptionistUseCase.execute({
        name: "Lucas",
        email: "jessicaTest@mail.com",
        password: "123456",
        phone: "XXX-XXX-XXX-XXX-XXX",
      })
    ).rejects.toEqual(
      new AppError("Receptionist account or email already exists")
    );
  });
});
