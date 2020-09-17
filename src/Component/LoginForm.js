import React from 'react';
import styled from 'styled-components';

const FormDiv = styled.form`
    display: flex;
    border-radius: 10px;
    color: white;
    margin: 0 auto;
    flex-direction: column;
    background: #a64949;
    width: 80%;
`;

const LoginForm = () => {
    return (
        <FormDiv>
        <p>Welcome Back!</p>
        <label>Username:
            <input
                type='text'
                placeholder='Enter Username'
                maxLength='30'
            />
        </label>  
        <label>Password:
            <input
                type='password'
                placeholder='Enter Password'
                maxLength='20'
            />
        </label> 
        <button className='submit' >Submit</button>
    </FormDiv>
    )
}

export default LoginForm;