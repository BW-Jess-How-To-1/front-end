import React, { useEffect } from 'react';
import TutorialCard from './TutorialCard';
import styled from 'styled-components';
import axiosWithAuth from '../Auth/axiosWithAuth';

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

export default function Tutorials({ setTutorials, tutorials }) {
	useEffect(() => {
// 		const config = {
// 			headers: {
// 				'Access-Control-Allow-Origin': '*',
// 				'credentials': 'true"
// 				}
// 			};
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

	return (
		<div>
			{tutorials.map((each) => {
				return (
					<Container key={each.id}>
						<TutorialCard
							title={each.title}
							materials={each.materials}
							directions={each.directions}
							likes={each.likes}
							tutorials={tutorials}
						/>
					</Container>
				);
			})}
		</div>
	);
}
