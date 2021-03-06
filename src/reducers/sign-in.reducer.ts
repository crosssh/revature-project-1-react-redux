import { ISignIn } from '.';
import { signInTypes } from '../actions/sign-in/sign-in.types';

const initialState: ISignIn = {
  errorMessage: '',
  password: '',
  signedIn: false,
  username: '',
}

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signInTypes.UPDATE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
        password: '',
        username: '',
      };
    case signInTypes.UPDATE_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      };
    case signInTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload.username
      }
    case signInTypes.UPDATE_SIGNED_IN:
      return {
        ...state,
        signedIn: action.payload.signedIn,
      }
  }

  return state;
};
