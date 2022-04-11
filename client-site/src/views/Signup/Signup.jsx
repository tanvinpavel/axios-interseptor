import React, { useState } from 'react';
import FormInput from './FormInput/FormInput';

const Signup = () => {

    const [values, setValues] = useState({
        username: '',
        email: '',
        birthDate: '',
        phone: '',
        password: '',
    });


    const inputs = [
        {
            id: 1,
            name: 'username',
            label: 'Username',
            placeholder: 'Username',
            type: 'text'
        },
        {
            id: 2,
            name: 'email',
            label: 'Email',
            placeholder: 'Email',
            type: 'email'
        },
        {
            id: 3,
            name: 'birthDate',
            label: 'Date Of Birth',
            placeholder: 'Date Of Birth',
            type: 'date'
        },
        {
            id: 4,
            name: 'phone',
            label: 'Phone',
            placeholder: 'Phone',
            type: 'text'
        },
        {
            id: 5,
            name: 'password',
            label: 'Password',
            placeholder: 'Password',
            type: 'password'
        },
    ];

    const onChange = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    }

    const formHandler = (e) => {
        e.preventDefault();

        const data = new FormData(e.target);
        const payload = Object.fromEntries(data.entries());
        console.log(payload);
    }

    console.log(values);

    return (
        <div className='App'>
            <form className='form-style' onSubmit={formHandler}>
                {
                    inputs.map(input => 
                    <FormInput key={input.id} onChange={onChange} value={values[input.name]} {...input}/>)
                }
                <button>Signin</button>
            </form>
        </div>
    );
};

export default Signup;