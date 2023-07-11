interface ICreateAdminDTO {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ICreateAdminDTO };
