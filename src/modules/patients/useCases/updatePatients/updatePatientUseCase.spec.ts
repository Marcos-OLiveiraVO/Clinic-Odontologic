import { PatientRepositoryInMemory } from "modules/patients/repositories/In-Memory/PatientRepositoryInMemory";
import { UpdatePatientUseCase } from "./updatePatientUseCase";
import { CreatePatientUseCase } from "../createPatient/createPatientUseCase";
import { beforeAll, describe, it, expect } from "vitest";
import { AppError } from "@errors/appError";

let updatePatientUseCase: UpdatePatientUseCase;
let patientRepository: PatientRepositoryInMemory;
let createPatientUseCase: CreatePatientUseCase;

describe("Update Patient", async () => {
  beforeAll(async () => {
    patientRepository = new PatientRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientRepository);
    updatePatientUseCase = new UpdatePatientUseCase(patientRepository);
  });

  it("should be able to update the patient", async () => {
    const patient = await createPatientUseCase.execute({
      name: "XXX",
      email: "sameEmail@gmail.com",
      phone: "XXX-XXX",
      insurance_id: 5555,
    });

    const updatedPatient = await updatePatientUseCase.execute({
      name: "new XXX",
      email: "sameEmail@gmail.com",
    });

    expect(updatedPatient.id).toBe(patient.id);
  });

  it("should not be able to update a non exists patient", async () => {
    await expect(
      updatePatientUseCase.execute({
        name: "XXXX",
        email: "XXX@mail.com",
      })
    ).rejects.toEqual(new AppError("Patient not found."));
  });
});
