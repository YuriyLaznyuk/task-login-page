import {IUser} from '../../models/IUser';
import {UserAction, UserActionType} from '../../types/user';
import {Dispatch} from 'redux';

const host: string = window.location.origin;

export const setUser = (user: IUser): UserAction => ({
	type: UserActionType.SET_USER,
	payload: user,
});

export const isAuth = (isAuth: boolean): UserAction => ({
	type: UserActionType.IS_AUTH,
	payload: isAuth,
});

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
				dispatch({type: UserActionType.SET_USER, payload: json.user});
			}
		} catch (e) {
			alert(e);
		}
	};
