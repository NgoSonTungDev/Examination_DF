import { IProjectResponse } from "@/types/project";
import { IAuthResponse, ILogin } from "./../types/auth";
import ClientBase from "./base";

export interface ClientProjectMix {
  getProjects: () => Promise<IProjectResponse>;
}

const ClientProject = <TBase extends Constructor<ClientBase>>(
  superclass: TBase
) =>
  class extends superclass implements ClientProjectMix {
    getProjects = async () => {
      return this.doFetch<IProjectResponse>(`${this.getBaseRoute()}/projects`, {
        method: "get",
      });
    };
  };

export default ClientProject;
