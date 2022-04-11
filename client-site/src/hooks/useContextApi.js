import { useContext } from "react";
import { authContext } from "../ContextApi/ContextApi";


const useContextApi = () => {
    return useContext(authContext);    
};

export default useContextApi;