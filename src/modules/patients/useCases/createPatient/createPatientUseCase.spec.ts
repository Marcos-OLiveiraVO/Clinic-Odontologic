import { beforeAll, describe, expect, it } from "vitest";

import { PatientRepositoryInMemory } from "modules/patients/repositories/In-Memory/PatientRepositoryInMemory";
import { CreatePatientUseCase } from "./createPatientUseCase";
import { AppError } from "@errors/appError";

let createPatientUseCase: CreatePatientUseCase;
let patientRepository: PatientRepositoryInMemory;

describe("Create Patient", () => {
  beforeAll(async () => {
    patientRepository = new PatientRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientRepository);
  });

  it("should be able to create a patient", async () => {
    const patient = await createPatientUseCase.execute({
      name: "XXX",
      email: "XXX@gmail.com",
      phone: "XXX-XXX",
      insurance_id: 5555,
    });

    console.log(patient);

    expect(patient).toHaveProperty("id");
  });

  it("should not be able to create a patient with exists email", async () => {
    const patient = {
      name: "XXX",
      email: "XXX@mail.com",
      phone: "XXXX-XXX",
      insurance_id: 6666,
    };

    await createPatientUseCase.execute({
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
      insurance_id: patient.insurance_id,
    });

    await expect(
      createPatientUseCase.execute({
        name: patient.name,
        email: patient.email,
        phone: patient.phone,
        insurance_id: patient.insurance_id,
      })
    ).rejects.toEqual(new AppError("Patient Already exists!"));
  });
});
