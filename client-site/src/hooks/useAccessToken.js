import { axiosPrivate } from '../api/axios';
import useContextApi from './useContextApi';

const useAccessToken =  () => {
    const {setUser} = useContextApi();
     const refresh = async () => {
        try {
            const response = await axiosPrivate.get('/refreshToken');
            setUser((prev) => {
                return {...prev, accessToken: response.data.accessToken}
            })
            return response.data.accessToken;
         } catch (err) {
             console.log(err);
         }
     }

     return refresh;
};

export default useAccessToken;