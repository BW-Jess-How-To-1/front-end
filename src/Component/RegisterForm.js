import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import * as yup from 'yup';

const formSchema = yup.object().shape({
	username: yup
		.string()
        .max(15, '* Username must be 15 characters or less')
        .min(2, "* Username must have more than 2 characters")
		.required('* Username is required'),
    password: yup.string()
    .min(5, "* Password must be more than 5 characters long")
    .required('* Password is required'),
});

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
    const [errorState, setErrorState] = useState({
		username: '',
		password: '',
	});

	const [formState, setFormState] = useState({
		username: '',
		password: '',
	});

    const validate = (e) => {
		let value =
			e.target.type === 'checkbox' ? e.target.checked : e.target.value;
		yup
			.reach(formSchema, e.target.name)
			.validate(value)
			.then((valid) => {
				setErrorState({
					...errorState,
					[e.target.name]: '',
				});
			})
			.catch((err) => {
				setErrorState({
					...errorState,
					[e.target.name]: err.errors[0],
				});
			});
	};

	const handleChange = (e) => {
		e.persist();
		validate(e);
		let value =
		  e.target.type === "checkbox" ? e.target.checked : e.target.value;
		setFormState({ ...formState, [e.target.name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		const config = {
			headers: {
				'Access-Control-Allow-Origin': '*',
// 				'credentials': 'true"
				}
			};
		axios
			.post('https://how-to-app-backend-api.herokuapp.com/api/register', formState, config)
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
        {errorState.username.length > 0 ? <p>{errorState.username}</p> : null}

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
        {errorState.password.length > 0 ? <p>{errorState.password}</p> : null}

        <button className='submit' >Submit</button>
    </FormDiv>
    )
}

export default RegisterForm;
