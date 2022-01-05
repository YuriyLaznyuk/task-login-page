import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/Home/UserPage';
import Navigation from './components/Navigation/Navigation';

const App = () => {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/user' element={<UserPage />} />
			</Routes>
		</div>
	);
};

export default App;
