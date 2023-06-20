import { PacientRepositoryInMemory } from "../../repositories/In-Memory/PacientRepositoryInMemory";
import { beforeAll, describe, expect, it } from "vitest";
import { ListPacientsUseCase } from "./listPacientsUseCase";
import { CreatePatientUseCase } from "../createPatient/createPatientUseCase";

let pacientRepositoryInMemory: PacientRepositoryInMemory;
let listPacientsUseCase: ListPacientsUseCase;
let createPatientUseCase: CreatePatientUseCase;

describe("List pacients", () => {
  beforeAll(() => {
    pacientRepositoryInMemory = new PacientRepositoryInMemory();
    listPacientsUseCase = new ListPacientsUseCase(pacientRepositoryInMemory);
    createPatientUseCase = new CreatePatientUseCase(pacientRepositoryInMemory);
  });

  it("should be able to list all the pacients", async () => {
    await createPatientUseCase.execute({
      name: "XXX",
      email: "XXX@gmail.com",
      phone: "XXX-XXX",
    });

    const patients = await listPacientsUseCase.execute();

    expect(patients).toHaveProperty("name");
  });
});
