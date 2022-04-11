import { createContext, useState } from 'react';

export const authContext = createContext({});

const ContextApi = ({children}) => {

    const [user, setUser] = useState({}) ;

    return (
        <authContext.Provider value={{user, setUser}}>
            {children}
        </authContext.Provider>
    );
};

export default ContextApi;