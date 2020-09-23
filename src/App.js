import React from 'react';
import Title from './Component/Header';
import Tutorials from './Component/Tutorial';
import './App.css';
import FormBox from './Component/FormBox';
import SearchBar from './Component/SearchBar';

function App() {
	return (
		<div className='App'>
			<Title />
			<SearchBar />
			<FormBox />
			<Tutorials />
		</div>
	);
}

export default App;
