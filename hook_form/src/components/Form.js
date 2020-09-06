import React, { useState } from 'react';


const Form = (props) => {
    const {inputs, setInputs} = props;

    const onChange = e => {
        e.preventDefault();
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
       
    };

    return(
        <form >
            <div>
                <label htmlFor="firstname">First Name: </label>
                <input type="text" onChange={ onChange } name="firstname" />
            </div>
            <div>
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" onChange={ (onChange) } name="lastname" />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input type="text" onChange={ onChange } name="email" />
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" onChange={ onChange } name="password" />
            </div>
            <div>
                <label htmlFor="conformpw">Confirm Password: </label>
                <input type="password" onChange={ onChange } name="confirmpw" />
            </div>
        </form>

    );
};

export default Form;