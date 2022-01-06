import {IUserState, UserAction, UserActionType} from '../../types/user';
import {IUser} from '../../models/IUser';

const initialState: IUserState = {
	isAuth: true,
	user: {} as IUser,
	logIn: false,
	signUp: false,
};
export const userReducer = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case UserActionType.SET_USER:
			return {...state, user: action.payload};
		case UserActionType.IS_AUTH:
			return {...state, isAuth: action.payload};
		case UserActionType.SIGN_UP:
			return {...state, signUp: action.payload};
		case UserActionType.LOG_IN:
			return {...state, logIn: action.payload};

		default:
			return state;
	}
};
