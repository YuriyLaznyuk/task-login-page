import {IUser} from '../models/IUser';

export interface IUserState {
	isAuth: boolean;
	user: IUser;
	logIn: boolean;
	signUp: boolean;
}

export enum UserActionType {
	SET_USER = 'SET_USER',
	IS_AUTH = 'IS_AUTH',
	LOG_IN = 'LOG_IN',
	SIGN_UP = 'SIGN_UP',
}

export interface SetUser {
	type: UserActionType.SET_USER;
	payload: IUser;
}
interface IsAuth {
	type: UserActionType.IS_AUTH;
	payload: boolean;
}

export interface LogIn {
	type: UserActionType.LOG_IN;
	payload: boolean;
}

export interface SignUp {
	type: UserActionType.SIGN_UP;
	payload: boolean;
}
export type UserAction = SetUser | IsAuth | LogIn | SignUp;
