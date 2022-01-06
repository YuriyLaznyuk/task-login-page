import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './app.scss';

const App = () => {
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/user' element={<UserPage />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
