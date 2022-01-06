import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import UserPage from './pages/UserPage/UserPage';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import './app.scss';
import {useSelector} from 'react-redux';
import {RootState} from './store/reducers';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
	const {isAuth} = useSelector((state: RootState) => state.user);
	return (
		<BrowserRouter>
			<div className='app'>
				<Navigation />
				<Routes>
					<Route path='/' element={<Home />} />
					{isAuth && <Route path='/user' element={<UserPage />} />}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
