import React from 'react';
import axiosWithAuth from '../Auth/axiosWithAuth';

const AddTutorial = ({ values, setValues }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.post(
				'https://how-to-app-backend-api.herokuapp.com/api/tutorials',
				values
			)
			.then((res) => {
				console.log('handleSubmit res: ', res.data);
				setValues(res.data);
			})
			.catch((err) => console.log('addTutorial err: ', err));
	};

	const handleChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title: </label>
				<input
					id='title'
					type='text'
					name='title'
					onChange={handleChange}
					value={values.title}
				></input>
				<br />
				<label htmlFor='directions'>Directions: </label>
				<input
					id='directions'
					type='text'
					name='directions'
					onChange={handleChange}
					value={values.directions}
				></input>
				<br />
				<label htmlFor='materials'>Materials: </label>
				<input
					id='materials'
					type='text'
					name='materials'
					onChange={handleChange}
					value={values.materials}
				></input>
				<br />
				<button type='submit'>Add</button>
			</form>
		</div>
	);
};

export default AddTutorial;
