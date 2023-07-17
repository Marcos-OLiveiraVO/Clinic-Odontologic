import { beforeAll, describe, it, expect } from "vitest";

import { PatientRepositoryInMemory } from "modules/patients/repositories/In-Memory/PatientRepositoryInMemory";
import { RemovePatientUseCase } from "./removePatientUseCase";
import { CreatePatientUseCase } from "../createPatient/createPatientUseCase";
import { AppError } from "@errors/appError";

let createPatientUseCase: CreatePatientUseCase;
let patientRepository: PatientRepositoryInMemory;
let removePatientUseCase: RemovePatientUseCase;

describe("Remove patient", () => {
  beforeAll(async () => {
    patientRepository = new PatientRepositoryInMemory();
    removePatientUseCase = new RemovePatientUseCase(patientRepository);
    createPatientUseCase = new CreatePatientUseCase(patientRepository);
  });

  it("should be able to remove a patient", async () => {
    const patient = {
      name: "XXX",
      email: "sameEmail@gmail.com",
      phone: "XXX-XXX",
      insurance_id: 5555,
    };

    await createPatientUseCase.execute({
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
      insurance_id: patient.insurance_id,
    });

    await removePatientUseCase.execute(patient.email);

    const patientBeRemoved = await patientRepository.findByEmail(patient.email);
    expect(patientBeRemoved).toBeUndefined();
  });

  it("should not be able to remove a patient if patient not exists", async () => {
    const patientEmail = "patientTest@mail.com";

    await expect(removePatientUseCase.execute(patientEmail)).rejects.toEqual(
      new AppError("Email or patient not exists!")
    );
  });
});
