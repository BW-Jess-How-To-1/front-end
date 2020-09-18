import React, {useState} from 'react';
import axios from 'axios';
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
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
        console.log(e.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        console.log(formData)
        axios
        .post( 'https://how-to-app-backend-api.herokuapp.com/api/login', formData)
        .then( response => {
            console.log(response)
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
                value={formData.username}
                name='username'
                placeholder='Enter Username'
                maxLength='30'
                onChange = {handleChange}
            />
        </label>  
        <label>Password:
            <input
                type='password'
                value={formData.password}
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