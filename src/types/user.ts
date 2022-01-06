import {IUser} from '../models/IUser';

export interface IUserState {
	isAuth: boolean;
	user: IUser;
}

export enum UserActionType {
	SET_USER = 'SET_USER',
	IS_AUTH = 'IS_AUTH',
}

export interface SetUser {
	type: UserActionType.SET_USER;
	payload: IUser;
}
interface IsAuth {
	type: UserActionType.IS_AUTH;
	payload: boolean;
}

export type UserAction = SetUser | IsAuth;
