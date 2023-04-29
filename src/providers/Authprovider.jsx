import React from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
export const Authcontext = createContext(null)
const Authprovider = ({ children }) => {
    const user = { displayname: 'kodor ALi' }
    const authinfo = {
        user,
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;