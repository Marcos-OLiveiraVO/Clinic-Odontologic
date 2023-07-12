interface ICreateManagerDTO {
  name: string;
  email: string;
  password: string;
  phone?: string;
  authorization_level?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { ICreateManagerDTO };
