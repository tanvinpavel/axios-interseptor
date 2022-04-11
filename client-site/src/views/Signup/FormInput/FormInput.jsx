import React from 'react';

const FormInput = (props) => {
    const {id, onChange, label, ...attribute} = props;
    return (
        <>
            <label htmlFor={label}>{label}</label>   
            <input id={label} onChange={onChange} {...attribute} />
        </>
    );
};

export default FormInput;