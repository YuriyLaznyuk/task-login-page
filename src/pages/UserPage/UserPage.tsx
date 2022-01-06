import React from 'react';
import './userPage.scss';
import {useAction} from '../../hooks/useAction';

const UserPage = () => {
	const {setUser} = useAction();
	return (
		<div className='userPage'>
			<h1>User page</h1>
			<button
				onClick={() => setUser({email: 'my', name: 'rrr', password: '777'})}>
				Button
			</button>
		</div>
	);
};

export default UserPage;
