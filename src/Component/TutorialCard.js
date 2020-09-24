import React from 'react';
import axiosWithAuth from '../Auth/axiosWithAuth';

const TutorialCard = (props) => {
	// console.log(props);

	const deleteCard = (tutorial) => {
		console.log('deleteCard called.');
		axiosWithAuth()
			.delete(
				`https://how-to-app-backend-api.herokuapp.com/api/tutorials/${tutorial}`
			)
			.then((res) => console.log('deleteCard res: ', res))
			.catch((err) => console.log('deleteCard error: ', err));
	};

	return (
		<div key={props.id}>
			<h1>{props.title}</h1>
			<p>Materials: {props.materials}</p>
			<p>Directions: {props.directions}</p>
			<p>Likes: {props.likes}</p>
			<button
				onClick={() => deleteCard(props.tutorials.id)}
				style={{ color: 'red', fontSize: '3rem' }}
			>
				X
			</button>
		</div>
	);
};

export default TutorialCard;
