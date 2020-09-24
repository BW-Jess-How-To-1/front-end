import React from 'react';
import Tutorials from './Tutorials';

const CreatorDashboard = ({ setTutorials, tutorials }) => {
	return (
		<div>
			<h1>Welcome back</h1>
			<h3>Tutorials</h3>
			<Tutorials setTutorials={setTutorials} tutorials={tutorials} />
		</div>
	);
};

export default CreatorDashboard;
