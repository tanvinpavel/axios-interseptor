import React from 'react';
import useAuth from '../../hooks/useAuth';
import useContextApi from '../../hooks/useContextApi';

const Home = () => {
    const {user} = useContextApi();
    const axiosPrivate = useAuth();
    console.log(user);

    const formHandler = async (id) => {
        try {
            const response = await axiosPrivate.delete(`/delete/${id}`);

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='App'>
            <div>
                <h1>this is home</h1>
                <br />

                <button onClick={()=>formHandler(1)}>Delete user 1</button>
                <button onClick={()=>formHandler(2)}>Delete user 2</button>
            </div>
        </div>
    );
};

export default Home;