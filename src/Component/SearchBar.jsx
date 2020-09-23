import React, { useState } from 'react';

const SearchBar = () => {
	const [searchState, setSearchState] = useState({ search: '' });

	const handleSearch = (e) => {
		e.preventDefault();
	};

	const handleChange = (e) => {
		setSearchState({ [e.target.name]: e.target.value });
	};

	return (
		<div>
			<form onSubmit={handleSearch} style={{ margin: '1%' }}>
				<input
					type='search'
					name='search'
					id='search'
					placeholder='Search for text'
					onChange={handleChange}
					value={searchState.searchf}
				/>
				<button>Search</button>
			</form>
		</div>
	);
};

export default SearchBar;
