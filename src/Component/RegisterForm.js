import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormDiv = styled.form`
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    color: white;
    flex-direction: column;
    background: lightskyblue;
    width: 80%;
`;

const RegisterForm = () => {
    const [errorState, setErrorState] = useState({
		username: '',
		password: '',
	});

	const [formState, setFormState] = useState({
		username: '',
		password: '',
	});

    const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		axios
			.post('https://how-to-app-backend-api.herokuapp.com/api/register', formState)
			.then((res) => {
                console.log(res);
                setFormState({username: '', password: ''})
			})
			.catch((err) => {
                console.log(errorState)
				setErrorState(err.response.data);
			});
	};

    return (
        <FormDiv onSubmit={handleSubmit}>
        <p>Let's get you signed up!</p>
        <label>Username:
            <input
                type='text'
                name='username'
                value={formState.username}
                placeholder='Create a Username'
                maxLength='30'
                onChange={handleChange}
            />
        </label>  
        <label>Password:
            <input
                type='password'
                name='password'
                value={formState.password}
                placeholder='Create a Password'
                maxLength='20'
                onChange={handleChange}
            />
        </label> 
        <button className='submit' >Submit</button>
    </FormDiv>
    )
}

export default RegisterForm;