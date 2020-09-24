import React, { useState } from 'react';
import Title from './Component/Header';
import './App.css';
import FormBox from './Component/FormBox';
import ProtectedRoute from './Component/ProtectedRoute';
import CreatorDashboard from './Component/CreatorDashboard';
import { Route, Switch } from 'react-router-dom';
import SearchBar from './Component/SearchBar';

function App() {
	const [tutorials, setTutorials] = useState([]);

	return (
		<div className='App'>
			<Title />
			<Switch>
				<Route exact path='/' component={FormBox} />

				<ProtectedRoute path='/creatorDashboard'>
					<SearchBar tutorials={tutorials} setTutorials={setTutorials} />
					<CreatorDashboard setTutorials={setTutorials} tutorials={tutorials} />
				</ProtectedRoute>
			</Switch>
		</div>
	);
}

export default App;
