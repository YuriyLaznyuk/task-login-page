import React from 'react';
import './userPage.scss';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';

const UserPage = () => {
	const {user} = useSelector((state: RootState) => state.user);
	return (
		<div className='userPage'>
			<h1>User page</h1>
			<h2>user name: {user.name}</h2>
			<h2>email: {user.email}</h2>
		</div>
	);
};

export default UserPage;
