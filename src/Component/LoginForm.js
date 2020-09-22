import React, { useState } from 'react';
// import axios from 'axios';
import axiosWithAuth from '../Auth/axiosWithAuth';
import styled from 'styled-components';
// import * as yup from 'yup';

const FormDiv = styled.form`
	display: flex;
	border-radius: 10px;
	color: white;
	margin: 0 auto;
	flex-direction: column;
	background: #a64949;
	width: 80%;
`;
// const formSchema = yup.object().shape({
// 	username: yup
// 		.string()
// 		.max(15, 'Username must be 15 characters or less')
// 		.required('* Username is required'),
// 	password: yup.string().required('* Password is required'),
// });

const LoginForm = (props) => {
	const [errorState, setErrorState] = useState({
		username: '',
		password: '',
	});

	const [formState, setFormState] = useState({
		username: '',
		password: '',
	});

	// const validate = (e) => {
	// 	let value =
	// 		e.target.type === 'checkbox' ? e.target.checked : e.target.value;
	// 	yup
	// 		.reach(formSchema, e.target.name)
	// 		.validate(value)
	// 		.then((valid) => {
	// 			setErrorState({
	// 				...errorState,
	// 				[e.target.name]: '',
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			setErrorState({
	// 				...errorState,
	// 				[e.target.name]: err.errors[0],
	// 			});
	// 		});
	// };

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formState);
		axiosWithAuth()
			.post('https://how-to-app-backend-api.herokuapp.com/api/login', formState)
			.then((res) => {
				console.log(res);
				localStorage.setItem('token', res.data.token);
				setFormState({username: '', password: ''})
			})
			.catch((err) => {
				setErrorState(err.response.data);
			});
	};

	return (
		<FormDiv onSubmit={handleSubmit}>
			<p>Welcome Back!</p>
			<label>
				Username:
				<input
					type='text'
					value={formState.username}
					name='username'
					placeholder='Enter Username'
					maxLength='30'
					onChange={handleChange}
				/>
			</label>
			{errorState.username.length > 0 ? <p>{errorState.username}</p> : null}
			<label>
				Password:
				<input
					type='password'
					value={formState.password}
					name='password'
					placeholder='Enter Password'
					maxLength='20'
					onChange={handleChange}
				/>
			</label>
			{errorState.password.length > 0 ? <p>{errorState.password}</p> : null}
			<button className='submit'>Submit</button>
		</FormDiv>
	);
};

export default LoginForm;
