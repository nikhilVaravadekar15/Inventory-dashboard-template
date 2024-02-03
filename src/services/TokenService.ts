import { TToken } from "../types"
import Cookie from "universal-cookie";

class TokenService {
    private cookie: Cookie | undefined


    constructor() {
        this.cookie = new Cookie()
    }

    setTokenDetailsAfterLogin(token: TToken) {
        this.cookie?.set("token", JSON.stringify(token));
    }

    getToken() {
        return this.cookie?.get("token") as TToken;
    }

    removeToken() {
        this.cookie?.remove("token");
    }

}

export default new TokenService()
