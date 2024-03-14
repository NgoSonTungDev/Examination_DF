import { IMovie } from "../types/auth";
import ClientBase from "./base";

export interface ClientAuthMix {
  getMovie: () => Promise<IMovie[]>;
}

const ClientAuth = <TBase extends Constructor<ClientBase>>(superclass: TBase) =>
  class extends superclass implements ClientAuthMix {
    getMovie = async () => {
      return this.doFetch<IMovie[]>(`${this.getBaseRoute()}`, {
        method: "get",
      });
    };
  };

export default ClientAuth;
