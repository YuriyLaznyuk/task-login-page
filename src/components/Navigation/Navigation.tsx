import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import './navigation.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';

const Navigation = () => {
	const {pathname} = useLocation();
	const active = (pathname: string, path: string): string =>
		pathname === path ? 'navigation__nav-link active' : 'navigation__nav-link';
	const {isAuth} = useSelector((state: RootState) => state.user);
	return (
		<div className='navigation'>
			<nav className='navigation__nav'>
				<Link className={active(pathname, '/')} to='/'>
					Home
				</Link>
				{isAuth && (
					<Link className={active(pathname, '/user')} to='/user'>
						UserPage
					</Link>
				)}
			</nav>
		</div>
	);
};

export default Navigation;
