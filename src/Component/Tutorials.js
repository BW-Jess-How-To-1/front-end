import React, { useEffect, useState } from 'react';
import TutorialCard from './TutorialCard';
import styled from 'styled-components';
import axiosWithAuth from '../Auth/axiosWithAuth';
import AddTutorial from './AddTutorial';

const Container = styled.div`
	transition: transform 0.2s ease-in;
	border-radius: 30px;
	background-size: contain;
	background-color: grey;
	color: #f5b942;
	width: 40%;
	margin: 0 auto;
	align-content: center;
	max-height: 350px;
	display: flex;
	opacity: 0.8;
	justify-content: space-around;
	margin-bottom: 25px;
	box-shadow: 0px 6px 10px -2px black;
	&:hover {
		transform: translateY(-5px) scale(1.1);
		background-color: #a64949;
	}
`;

const styling = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'space-evenly',
};

export default function Tutorials({ setTutorials, tutorials }) {
	const [values, setValues] = useState({
		title: '',
		directions: '',
		materials: '',
	});
	const [editValues, setEditValues] = useState({
		title: '',
		directions: '',
		materials: '',
	});
	const [editing, setEditing] = useState(false);

	useEffect(() => {
		axiosWithAuth()
			.get('https://how-to-app-backend-api.herokuapp.com/api/tutorials')
			.then((res) => {
				//  console.log(res.data);
				setTutorials(res.data);
			})
			.catch((error) => {
				console.log('the data was not returned', error);
			});
	}, []);

	const deleteCard = (id) => {
		axiosWithAuth()
			.delete(
				`https://how-to-app-backend-api.herokuapp.com/api/tutorials/${id}`
			)
			.then((res) => {
				console.log('deleteCard res: ', res);
				setTutorials(
					tutorials.filter((card) => {
						return card.id === card.id;
					})
				);
			})
			.catch((err) => console.log('deleteCard error: ', err));
	};

	const editCard = (tutorial) => {
		setEditing(true);
		setEditValues(tutorial);
	};

	const handleChange = (e) => {
		setEditValues({ ...editValues, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axiosWithAuth()
			.put(
				`https://how-to-app-backend-api.herokuapp.com/api/tutorials/${editValues.id}`,
				editValues
			)
			.then((res) => console.log('editCard res: ', res))
			.catch((err) => console.log('editCard error: ', err));
	};

	return (
		<div>
			<AddTutorial values={values} setValues={setValues} />

			{tutorials.map((each) => {
				return (
					<Container key={each.id}>
						<TutorialCard
							title={each.title}
							materials={each.materials}
							directions={each.directions}
							likes={each.likes}
						/>
						<div style={styling}>
							<button
								onClick={() => editCard(each)}
								style={{ fontSize: '1.1rem' }}
							>
								Edit
							</button>

							<br />
							<button
								style={styling}
								onClick={() => deleteCard(each.id)}
								style={{ color: 'red', fontSize: '2rem' }}
							>
								X
							</button>
						</div>
					</Container>
				);
			})}

			{editing && (
				<div style={{ margin: '5%' }}>
					<form onSubmit={handleSubmit}>
						<label htmlFor='title'>Edit: Title: </label>
						<input
							id='title'
							type='text'
							name='title'
							onChange={handleChange}
							value={editValues.title}
						></input>
						<br />
						<label htmlFor='directions'>Edit: Directions: </label>
						<input
							id='directions'
							type='text'
							name='directions'
							onChange={handleChange}
							value={editValues.directions}
						></input>
						<br />
						<label htmlFor='materials'>Edit: Materials: </label>
						<input
							id='materials'
							type='text'
							name='materials'
							onChange={handleChange}
							value={editValues.materials}
						></input>
						<br />
						<button type='submit'>Edit</button>
					</form>
				</div>
			)}
		</div>
	);
}
