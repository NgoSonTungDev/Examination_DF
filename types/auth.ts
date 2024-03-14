export interface ILogin {
  username: string;
  password: string;
}

export interface IAuthResponse {
  token: string;
  expiration: string;
}

export interface IUser {
  id: string;
  userCreated: string;
  userModified: string;
  dateCreated: string;
  dateModified: string;
  isDeleted: boolean;
  username: string;
  password: string;
  avatar: string;
  phoneNumber: string;
  email: string;
  description: string;
  status: number;
}

export interface IMovie {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
}
