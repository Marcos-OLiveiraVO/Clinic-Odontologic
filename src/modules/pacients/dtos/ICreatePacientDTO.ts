interface IPacientCreateDTO {
  id: string;
  name: string;
  birthDate: Date;
  address: Date;
  phone: string;
  email: string;
  medicalHistory: string;
  created_At: Date;
  updated_At: Date;
}

export { IPacientCreateDTO };
