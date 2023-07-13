interface ICreateAdminDTO {
  id?: number;
  name: string;
  username: string;
  email: string;
  password: string;
  authorization_level?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ICreateAdminDTO };
