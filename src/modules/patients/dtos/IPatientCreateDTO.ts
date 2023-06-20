interface IPatientCreateDTO {
  id?: number;
  name: string;
  email: string;
  phone: string;
  insurance_id?: number;
  medical_history_id?: number;
  medical_record_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export { IPatientCreateDTO };
