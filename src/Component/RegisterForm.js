import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    color: white;
    flex-direction: column;
    background: #a64949;
    width: 80%;
`;

const RegisterForm = () => {
    return (
        <FormDiv>
        <p>Let's get you signed up!</p>
        <label>Username:
            <input
                type='text'
                placeholder='Create a Username'
                maxLength='30'
            />
        </label>  
        <label>Password:
            <input
                type='password'
                placeholder='Create a Password'
                maxLength='20'
            />
        </label> 
        <button className='submit' >Submit</button>
    </FormDiv>
    )
}

export default RegisterForm;