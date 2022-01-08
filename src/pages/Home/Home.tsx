import React from 'react';
import './home.scss';
import {useAction} from '../../hooks/useAction';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/reducers';
import ModalLogin from '../../UI/ModalLogIn/ModalLogin';
import ModalSignUp from '../../UI/ModalSignUp/ModalSignUp';

const Home = () => {
	const {logInModal, signUpModal} = useAction();
	const {logIn, signUp, isAuth, user} = useSelector(
		(state: RootState) => state.user,
	);
	return (
		<div className='home'>
			{logIn && <ModalLogin />}
			{signUp && <ModalSignUp />}
			<div className='home__wrap'>
				<h1>Home</h1>
				{isAuth && <h2>Hello {user.name}</h2>}
				{!isAuth && (
					<div className='home__wrap-buttons'>
						<button
							onClick={() => logInModal(true)}
							className='home__wrap-buttons-btn'>
							Log in
						</button>
						<button
							onClick={() => signUpModal(true)}
							className='home__wrap-buttons-btn'>
							Sigh up
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
