import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [firstNameError, setfirstNameError] = useState(""); 
    
    const [lastName, setlastName] = useState("");
    const [lastNameError, setlastNameError] = useState(""); 

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(""); 

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setconfirmPassword] = useState("");
    const [confirmPasswordError, setconfirmPasswordError] = useState("");
    
    
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);



    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const handlefirstName = (e) => {
        setfirstName(e.target.value);
        if(e.target.value.length < 2) {
            setfirstNameError("Field must be at least two characters ");
        } else{
            setfirstNameError("");
        }
    }

    const handlelastName = (e) => {
        setlastName(e.target.value);
        if(e.target.value.length < 2) {
            setlastNameError("Field must be at least two characters ");
        } else{
            setlastNameError("");
        }
    }


    const handlEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Field must be at least 5 characters ");
        } else{
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Field must be at least 5 characters ");
        } else{
            setPasswordError("");
        }
    }

    const handleconfirmPassword = (e) => {
        setconfirmPassword(e.target.value);
        if(e.target.value !== password) {
            setconfirmPasswordError(" Passwords Must Match ");
        } else{
            setconfirmPasswordError("");
        }
    }



    return (
        <>
            <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3> :
                <h3>Welcome, please submit the form.</h3>
            }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(handlefirstName)} />
                    {
                        firstNameError ?
                        <p style={{color: 'red'}}>{firstNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(handlelastName)} />
                    {
                        lastNameError ?
                        <p style={{color: 'red'}}>{lastNameError}</p>:''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={(handlEmail)}/>
                    {
                        emailError ?
                        <p style={{color: 'red'}}>{emailError}</p>:''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={(handlePassword)} />
                    {
                        passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p>:''
                    }
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={(handleconfirmPassword)} />
                    {
                        confirmPasswordError ?
                        <p style={{color: 'red'}}>{confirmPasswordError}</p>:''
                    }
                </div>
                <input type="submit" value="Create User" />

            </form>

            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>

            <p>Email: {email}</p>

            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>

        </>

    );


};



export default UserForm;


