class Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  insurance_id?: number;
  medical_history_id?: number;
  medical_record_id?: number;
  authorization_level: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { Patient };
