import React, {useState} from 'react';
import {useAction} from '../../hooks/useAction';
import './modalSignUp.scss';

type userTypeSignup = {
	email: string;
	password: string;
	name: string;
};
const ModalSignUp = () => {
	const {signUpModal, signUpUser} = useAction();
	const [user, setUser] = useState<userTypeSignup>({
		email: '',
		password: '',
		name: '',
	});
	const signUpEmail: boolean = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(
		user.email,
	);
	const signUpPassword: boolean = /^\d{5,}$/.test(user.password);
	const signUpName: boolean = /^[A-Za-z0-9]{2,10}$/g.test(user.name);
	return (
		<div onClick={() => signUpModal(false)} className='modalLogin'>
			<div
				onClick={(e) => e.stopPropagation()}
				className='modalSignUp__container'>
				<span
					onClick={() => signUpModal(false)}
					className='modalSignUp__container-cross'>
					&#10006;
				</span>
				<div className='modalSignUp__container-title'>Sign up</div>

				<span className='modalSignUp__container-text'>Name</span>
				{!signUpName && user.name.length > 0 && (
					<span className='modalSignUp__container-text invalid'>
						Invalid Name
					</span>
				)}

				<input
					className='modalSignUp__container-input'
					onChange={(e) => setUser({...user, name: e.target.value})}
					type='text'
					placeholder='Name'
					value={user.name}
				/>

				<span className='modalSignUp__container-text'>Email</span>
				{!signUpEmail && user.email.length > 0 && (
					<span className='modalSignUp__container-text invalid'>
						Invalid Email
					</span>
				)}

				<input
					className='modalSignUp__container-input'
					onChange={(e) => setUser({...user, email: e.target.value})}
					type='text'
					placeholder='Email'
					value={user.email}
				/>
				<span className='modalSignUp__container-text'>Password</span>
				{!signUpPassword && user.password.length > 0 && (
					<span className='modalSignUp__container-text invalid'>
						Invalid Password min five digit
					</span>
				)}
				<input
					className='modalSignUp__container-input'
					onChange={(e) => setUser({...user, password: e.target.value})}
					type='password'
					placeholder='password min five digit'
					value={user.password}
				/>
				<div>
					<button
						onClick={() => signUpUser(user)}
						className='modalSignUp__container-button'
						disabled={!(signUpPassword && signUpEmail && signUpName)}>
						SEND
					</button>
				</div>
			</div>
		</div>
	);
};

export default ModalSignUp;
