interface IPatientRequestDTO {
  newName: string;
  originalEmail: string;
  newEmail: string;
  new_insurance_id: number;
  new_medical_history_id: number;
  new_medical_record_id: number;
}

export { IPatientRequestDTO };
