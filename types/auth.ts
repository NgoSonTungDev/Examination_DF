export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthResponse {
  access_token: string;
  refresh_token: string;
}
