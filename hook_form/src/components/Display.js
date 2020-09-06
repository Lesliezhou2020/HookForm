import React, {useState} from 'react';


const Display = (props) => {
    const { firstname, lastname, email, password, confirmpw } = props.data;

    return (
        <div>
            <h2>Your Form Data</h2>
            <p>First Name { firstname }</p>
            <p>Last Name { lastname }</p>
            <p>Email { email }</p>
            <p>Password { password }</p>
            <p>Confirm Password { confirmpw }</p>
        </div>
    );
}

export default Display;
