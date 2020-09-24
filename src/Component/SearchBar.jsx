import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../Auth/axiosWithAuth';

const SearchBar = ({ setTutorials }) => {
	const [searchState, setSearchState] = useState({ search: '' });

	useEffect(() => {
		axiosWithAuth()
			.get('https://how-to-app-backend-api.herokuapp.com/api/tutorials')
			.then((res) => {
				const data = res.data;
				const filteredTutorials = data.filter((card) => {
					if (
						card.title
							.toLowerCase()
							.includes(searchState.search.toLowerCase()) ||
						card.directions
							.toLowerCase()
							.includes(searchState.search.toLowerCase())
					) {
						return card;
					}
				});
				setTutorials(filteredTutorials);
			})
			.catch((err) => {
				console.log('handleSearch error: ', err);
			});
	}, [searchState.search]);

	const handleChange = (e) => {
		setSearchState({ [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form style={{ margin: '1%' }}>
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search for text'
					onChange={handleChange}
					value={searchState.search}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
