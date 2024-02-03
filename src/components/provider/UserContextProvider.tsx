import React from 'react'
import { TUsersignin } from '../../types';


type Props = {
    children: React.ReactNode
}

const user: TUsersignin = {
    usernameOrEmail: "",
    password: ""
}
const UserContext = React.createContext<TUsersignin>(user);


function AuthContextProvider({ children }: Props) {
    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContextProvider
