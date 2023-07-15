interface IUpdateReceptionistRequest {
  originalEmail: string;
  newName: string;
  newEmail: string;
  newPassword: string;
  newPhone: string;
  updatedAt?: Date;
}

export { IUpdateReceptionistRequest };
