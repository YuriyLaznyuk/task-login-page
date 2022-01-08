import {IUser} from '../../models/IUser';
import {UserAction, UserActionType} from '../../types/user';
import {Dispatch} from 'redux';

const host: string = window.location.origin;

export const signUpModal = (payload: boolean): UserAction => ({
	type: UserActionType.SIGN_UP,
	payload,
});

export const logInModal = (payload: boolean): UserAction => ({
	type: UserActionType.LOG_IN,
	payload,
});

export const signUpUser =
	(payload: IUser) => async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await fetch(`${host}/api/user/signup`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json; charset=utf-8'},
				body: JSON.stringify(payload),
			});
			const json = await response.json();
			alert(json.message);
			if (json.message === 'user create') {
				dispatch({type: UserActionType.SIGN_UP, payload: false});
			}
		} catch (e) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			alert(e.message);
			dispatch({type: UserActionType.SIGN_UP, payload: false});
		}
	};
export const loginUser =
	(payload: IUser) => async (dispatch: Dispatch<UserAction>) => {
		try {
			const response = await fetch(`${host}/api/user/login`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json; charset=utf-8'},
				body: JSON.stringify(payload),
			});
			const json = await response.json();
			alert(json.message);
			if (json.message === 'success') {
				localStorage.setItem('token', json.token);
				dispatch({type: UserActionType.IS_AUTH, payload: true});
				dispatch({type: UserActionType.SET_USER, payload: json.user});
				dispatch({type: UserActionType.LOG_IN, payload: false});
			}
		} catch (e) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			alert(e.message);
			dispatch({type: UserActionType.LOG_IN, payload: false});
		}
	};

export const logout = () => (dispatch: Dispatch<UserAction>) => {
	localStorage.removeItem('token');
	dispatch({type: UserActionType.IS_AUTH, payload: false});
	dispatch({type: UserActionType.SET_USER, payload: {} as IUser});
};

export const userAuth = () => async (dispatch: Dispatch<UserAction>) => {
	try {
		const response = await fetch(`${host}/api/user/auth`, {
			method: 'POST',
			headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
		});
		const json = await response.json();
		if (json.token) {
			dispatch({type: UserActionType.SET_USER, payload: json.user});
			dispatch({type: UserActionType.IS_AUTH, payload: true});
			localStorage.setItem('token', json.token);
		} else {
			dispatch({type: UserActionType.IS_AUTH, payload: false});
		}
	} catch (e) {
		localStorage.removeItem('token');
		console.log('Error: ', e);
	}
};
