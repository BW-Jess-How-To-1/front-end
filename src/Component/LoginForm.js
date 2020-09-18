import React, {useState} from 'react';
// import axios from 'axios';
import axiosWithAuth from '../Auth/axiosWithAuth';
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



const LoginForm = (props) => {

    const [err, setErr] = useState();
    const [formState, setFormState] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(formState)
        axiosWithAuth()
        .post( 'https://how-to-app-backend-api.herokuapp.com/api/login', formState)
        .then( res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            props.history.push('/Users');
        })
        .catch(err=>{
            setErr(err.response.data)
        })
    }


    return (
        <FormDiv
        onSubmit = {handleSubmit}
        >
        <p>Welcome Back!</p>
        <label>Username:
            <input
                type='text'
                value={formState.username}
                name='username'
                placeholder='Enter Username'
                maxLength='30'
                onChange = {handleChange}
            />
        </label>  
        <label>Password:
            <input
                type='password'
                value={formState.password}
                name='password'
                placeholder='Enter Password'
                maxLength='20'
                onChange = {handleChange}
            />
        </label> 
        <button className='submit' >Submit</button>
    </FormDiv>
    )
}

export default LoginForm;