import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { homeReducer } from "./home.reducer";
import { ticketingReducer } from "./ticketing.reducer";
import { ticketManagerReducer } from "./ticket-manager.reducer";

export interface ISignIn {
  username: string,
  password: string,
  errorMessage: string
}

export interface IHome {
  reimbursements: any[],
}

export interface ITicketing {
  title: string,
  amount: number,
  date: string,
  description: string,
  items: any[]
}

export interface ITicketManager {
  tickets: any;
  ticket: any;
}

export interface IState {
  home: IHome,
  signIn: ISignIn,
  ticketing: ITicketing,
  ticketManager: ITicketManager,
};

export const state = combineReducers<IState>({
  home: homeReducer,
  signIn: signInReducer,
  ticketManager: ticketManagerReducer,
  ticketing: ticketingReducer,
});