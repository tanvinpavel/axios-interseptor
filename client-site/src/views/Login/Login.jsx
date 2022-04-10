import React, { useRef } from 'react';
import { useNavigate } from "react-router-dom";
import axios from '../../api/axios';

const Login = () => {
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();

    const formHandler = async (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const pass = passRef.current.value;

        const payload = {email, pass};

        try {
            const response = await axios.post('/login', payload, {
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            });

            if(response.data.accessToken){
                navigate('/home');
            };
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='App'>
            <form className='form-style' onSubmit={formHandler}>
                <label>Email</label>
                <input ref={emailRef} type="email" placeholder='Email' />

                <label>Password</label>
                <input ref={passRef} type="password" placeholder='Password' />

                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;