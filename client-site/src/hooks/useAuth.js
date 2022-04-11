import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useContextApi from './useContextApi';

const useAuth = () => {
    const {user} = useContextApi();
    
    useEffect(()=>{
        const requestInterceptor = () => {
            axiosPrivate.interceptors.request.use((config)=>{
                if(!config?.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${user.accessToken}`;
                }

                return config;
            }, (error)=>{
                return Promise.reject(error);
            })
        }
    
        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
        }
    },[user]);

    return axiosPrivate;
};

export default useAuth;