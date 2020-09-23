import React from 'react';
import Title from './Component/Header';
import './App.css';
import FormBox from './Component/FormBox';
import ProtectedRoute from './Component/ProtectedRoute';
import CreatorDashboard from './Component/CreatorDashboard';
import { Route, Switch } from 'react-router-dom';

import NavBar from './Component/NavBar';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Switch>
			<Route exact path='/' component={FormBox}/>

			<ProtectedRoute path='/creatorDashboard'>
				<CreatorDashboard />
			</ProtectedRoute>
			</Switch>
		</div>
	);
}

export default App;