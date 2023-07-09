interface ICreateAdminDTO {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_At?: Date;
}

export { ICreateAdminDTO };
