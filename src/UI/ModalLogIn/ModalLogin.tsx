import React, {useState} from 'react';
import './modalLogin.scss';
import {useAction} from '../../hooks/useAction';

type userTypeLogin = {
	email: string;
	password: string;
};
const ModalLogin = () => {
	const {logInModal} = useAction();
	const [user, setUser] = useState<userTypeLogin>({email: '', password: ''});
	const loginEmail: boolean = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(
		user.email,
	);
	const loginPassword: boolean = /^\d{5,}$/.test(user.password);
	return (
		<div onClick={() => logInModal(false)} className='modalLogin'>
			<div
				onClick={(e) => e.stopPropagation()}
				className='modalLogin__container'>
				<span
					onClick={() => logInModal(false)}
					className='modalLogin__container-cross'>
					&#10006;
				</span>
				<div className='modalLogin__container-title'>Log in</div>
				<span className='modalLogin__container-text'>Email</span>
				{!loginEmail && user.email.length > 0 && (
					<span className='modalLogin__container-text invalid'>
						Invalid Email
					</span>
				)}

				<input
					className='modalLogin__container-input'
					onChange={(e) => setUser({...user, email: e.target.value})}
					type='text'
					placeholder='Email'
					value={user.email}
				/>
				<span className='modalLogin__container-text'>Password</span>
				{!loginPassword && user.password.length > 0 && (
					<span className='modalLogin__container-text invalid'>
						Invalid Password min five digit
					</span>
				)}
				<input
					className='modalLogin__container-input'
					onChange={(e) => setUser({...user, password: e.target.value})}
					type='password'
					placeholder='password min five digit'
					value={user.password}
				/>
				<div>
					<button
						className='modalLogin__container-button'
						disabled={!(loginPassword && loginEmail)}>
						SEND
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalLogin;
