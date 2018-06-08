import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { homeReducer } from "./home.reducer";

export interface ISignIn {
  username: string,
  password: string,
  errorMessage: string
}

export interface IHome {
  reimbursements: any[],
}

export interface IState {
  signIn: ISignIn,
  home: IHome,
};

export const state = combineReducers<IState>({
  home: homeReducer,
  signIn: signInReducer,
});