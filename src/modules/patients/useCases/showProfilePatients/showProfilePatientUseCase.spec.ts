import { PatientRepositoryInMemory } from "modules/patients/repositories/In-Memory/PatientRepositoryInMemory";
import { CreatePatientUseCase } from "../createPatient/createPatientUseCase";
import { ShowProfilePatientUseCase } from "./showProfilePatientUseCase";
import { beforeAll, describe, expect, it } from "vitest";
import { AppError } from "@errors/appError";

let patientRepository: PatientRepositoryInMemory;
let createPatientUseCase: CreatePatientUseCase;
let showProfilePatientUseCase: ShowProfilePatientUseCase;

describe("Show Patient Profile", async () => {
  beforeAll(async () => {
    patientRepository = new PatientRepositoryInMemory();
    createPatientUseCase = new CreatePatientUseCase(patientRepository);
    showProfilePatientUseCase = new ShowProfilePatientUseCase(
      patientRepository
    );
  });

  it("should be able to show the patient profile", async () => {
    const patient = {
      name: "XXX",
      email: "XXX@mail.com",
      phone: "XXX-XXX",
      insurance_id: 6666,
    };

    await createPatientUseCase.execute({
      name: patient.name,
      email: patient.email,
      phone: patient.phone,
      insurance_id: patient.insurance_id,
    });

    await patientRepository.findByEmail(patient.email);

    const showPatientProfile = await showProfilePatientUseCase.execute(
      patient.email
    );

    expect(showPatientProfile).toEqual(patient);
  });

  it("should not be able to show profile if patients not exists", async () => {
    const patientEmail = "patientTest@mail.com";

    await expect(
      showProfilePatientUseCase.execute(patientEmail)
    ).rejects.toEqual(new AppError("Patient or email not exists!"));
  });
});
