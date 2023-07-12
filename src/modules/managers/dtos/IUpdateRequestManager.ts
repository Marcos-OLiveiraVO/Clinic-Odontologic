interface IUpdateRequestManager {
  originalEmail: string;
  newEmail: string;
  newName: string;
  newPassword: string;
  newPhone?: string;
}

export { IUpdateRequestManager };
