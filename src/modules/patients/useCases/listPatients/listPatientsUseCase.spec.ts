import { beforeAll, describe, expect, it } from "vitest";
import { CreatePatientUseCase } from "../createPatient/createPatientUseCase";
import { ListPatientsUseCase } from "./listPatientsUseCase";
import { PatientRepositoryInMemory } from "modules/patients/repositories/In-Memory/PatientRepositoryInMemory";

let patientRepositoryInMemory: PatientRepositoryInMemory;
let listPatientsUseCase: ListPatientsUseCase;
let createPatientUseCase: CreatePatientUseCase;

describe("List patients", () => {
  beforeAll(() => {
    patientRepositoryInMemory = new PatientRepositoryInMemory();
    listPatientsUseCase = new ListPatientsUseCase(patientRepositoryInMemory);
    createPatientUseCase = new CreatePatientUseCase(patientRepositoryInMemory);
  });

  it("should be able to list all the pacients", async () => {
    const patient = await createPatientUseCase.execute({
      name: "XXX",
      email: "XXX@gmail.com",
      phone: "XXX-XXX",
      insurance_id: 2444,
    });

    const patients = await listPatientsUseCase.execute();

    expect(patients).toEqual([patient]);
  });
});
