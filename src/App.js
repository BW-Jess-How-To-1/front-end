import React from 'react';
import Title from './Component/Header';
import './App.css';
import FormBox from './Component/FormBox';
import ProtectedRoute from './Component/ProtectedRoute';
import CreatorDashboard from './Component/CreatorDashboard';
import { Route, Switch } from 'react-router-dom';
import PostForm from './Component/PostForm';

function App() {
	return (
		<div className='App'>
			<Title/>
			<Switch>
			<Route exact path='/' component={FormBox}/>
			<Route exact path="/post" component={PostForm} />
			<ProtectedRoute path='/creatorDashboard'>
				<CreatorDashboard />
			</ProtectedRoute>
			</Switch>
		</div>
	);
}

export default App;