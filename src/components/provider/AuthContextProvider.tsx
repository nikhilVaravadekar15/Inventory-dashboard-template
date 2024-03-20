import React from "react";
import { TToken, TTokenContext } from "../../types";

type Props = {
  children: React.ReactNode;
};

export const defaultToken: TToken = {
  accessToken: "",
  tokenType: "",
};

export const AuthContext = React.createContext<TTokenContext>({
  token: defaultToken,
  setTokenDetails: () => {},
});

function AuthContextProvider({ children }: Props) {
  const [token, setToken] = React.useState<TToken>(defaultToken);

  function setTokenDetails(token: TToken) {
    setToken(token);
  }

  return (
    <AuthContext.Provider
      value={{
        token: token,
        setTokenDetails: setTokenDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
