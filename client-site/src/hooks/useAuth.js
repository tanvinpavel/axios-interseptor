import { useEffect } from 'react';
import { axiosPrivate } from '../api/axios';
import useAccessToken from './useAccessToken';
import useContextApi from './useContextApi';

const useAuth = () => {
    const {user} = useContextApi();
    const refresh = useAccessToken();
    useEffect(()=>{
        const requestInterceptor = axiosPrivate.interceptors.request.use((config)=>{
            if(!config?.headers['Authorization']){
                config.headers['Authorization'] = `Bearer ${user.accessToken}`;
            }
            return config;
        }, error => Promise.reject(error));

        const responseInterceptor = axiosPrivate.interceptors.response.use((response) => response, async (error) => {
            if(error?.response?.status === 403 && !error?.send){
                error.send = true;
                const accessToken = await refresh();
                error.config.headers['Authorization'] = `Bearer ${accessToken}`;
                return axiosPrivate(error.config);
            }

            return Promise.reject(error);
        })

        return () => {
            axiosPrivate.interceptors.request.eject(requestInterceptor);
            axiosPrivate.interceptors.response.eject(responseInterceptor);
        }
    },[refresh, user.accessToken]);

    return axiosPrivate;
};

export default useAuth;