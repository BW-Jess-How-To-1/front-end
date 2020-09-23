import React from 'react';
import Title from './Component/Header';
import Tutorials from './Component/Tutorial';
import './App.css';
import FormBox from './Component/FormBox';
import ProtectedRoute from './Component/ProtectedRoute';
import CreatorDashboard from './Component/CreatorDashboard';
import { Switch } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Title />
			<FormBox />
			<Tutorials />

			<ProtectedRoute path='/creatorDashboard'>
				<CreatorDashboard />
			</ProtectedRoute>
		</div>
	);
}

export default App;
