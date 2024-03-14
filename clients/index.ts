import ClientBase from "./base";
import ClientAuth, { ClientAuthMix } from "./auth";
import mix from "../utils/mix";
import ClientProject, { ClientProjectMix } from "./project";

interface Client extends ClientBase, ClientAuthMix, ClientProjectMix {}

class Client extends mix(ClientBase).with(ClientAuth, ClientProject) {
  constructor() {
    super();
  }
}

const client = new Client();

export default client;
