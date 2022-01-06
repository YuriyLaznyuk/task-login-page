import {IUser} from '../../models/IUser';
import {UserAction, UserActionType} from '../../types/user';

export const setUser = (user: IUser): UserAction => ({
	type: UserActionType.SET_USER,
	payload: user,
});

export const isAuth = (isAuth: boolean): UserAction => ({
	type: UserActionType.IS_AUTH,
	payload: isAuth,
});
