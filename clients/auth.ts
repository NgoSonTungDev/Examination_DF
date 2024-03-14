import { IAuthResponse, ILogin } from "./../types/auth";
import ClientBase from "./base";

export interface ClientAuthMix {
  login: (data: ILogin) => Promise<IAuthResponse>;
  refreshToken: () => Promise<IAuthResponse>;
}

const ClientAuth = <TBase extends Constructor<ClientBase>>(superclass: TBase) =>
  class extends superclass implements ClientAuthMix {
    login = async (data: ILogin) => {
      return this.doFetch<IAuthResponse>(`${this.getBaseRoute()}/auth/login`, {
        method: "post",
        data: data,
      });
    };

    refreshToken = async () => {
      return this.doFetch<IAuthResponse>(
        `${this.getBaseRoute()}/auth/refresh-token`,
        {
          method: "get",
        }
      );
    };
  };

export default ClientAuth;
