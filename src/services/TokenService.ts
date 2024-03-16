import { TToken } from "../types";
import Cookie from "universal-cookie";

class TokenService {
  private cookie: Cookie | undefined;

  constructor() {
    this.cookie = new Cookie();
  }

  setTokenDetailsAfterLogin(token: TToken) {
    // username,ROLE
    this.cookie?.set("token", JSON.stringify(token));
  }

  getToken() {
    return this.cookie?.get("token") as TToken;
  }

  getAuthToken() {
    const token = this.cookie?.get("token") as TToken;
    return `${token?.tokenType} ${token?.accessToken}`;
  }

  removeToken() {
    this.cookie?.remove("token");
  }
}

export default new TokenService();
