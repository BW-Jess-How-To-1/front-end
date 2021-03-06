import React, { useState } from 'react';

const TutorialCard = (props) => {
	return (
		<div key={props.id}>
			<h1>{props.title}</h1>
			<p>Materials: {props.materials}</p>
			<p>Directions: {props.directions}</p>
			<p>Likes: {props.likes}</p>
		</div>
	);
};

export default TutorialCard;
