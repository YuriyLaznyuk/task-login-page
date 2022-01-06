import {IUserState, UserAction, UserActionType} from '../../types/user';
import {IUser} from '../../models/IUser';

const initialState: IUserState = {
	isAuth: true,
	user: {} as IUser,
};
export const userReducer = (state = initialState, action: UserAction) => {
	switch (action.type) {
		case UserActionType.SET_USER:
			return {...state, user: action.payload};
		case UserActionType.IS_AUTH:
			return {...state, isAuth: action.payload};

		default:
			return state;
	}
};
