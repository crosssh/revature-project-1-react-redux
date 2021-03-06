import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { homeReducer } from "./home.reducer";
import { ticketingReducer } from "./ticketing.reducer";
import { ticketManagerReducer } from "./ticket-manager.reducer";
import { approvedReducer } from "./approved.reducer";
import { deniedReducer } from "./denied.reducer";

export interface IApproved {
  approvedTickets: any,
  approvedErrorMessage: string,
  items: any,
}

export interface IDenied {
  deniedTickets: any,
  deniedErrorMessage: string,
  items: any,
}

export interface ISignIn {
  errorMessage: string,
  password: string,
  signedIn: boolean,
  username: string,
}

export interface IHome {
  reimbursements: any[]
  username: string
}

export interface ITicketing {
  title: string,
  amount: number,
  date: string,
  description: string,
  items: any[]
}

export interface ITicketManager {
  items: any
  ticketingErrorMessage: string
  tickets: any
  timeSubmitted: number
  username: string
}

export interface IState {
  approved: IApproved
  denied: IDenied
  home: IHome
  signIn: ISignIn
  ticketing: ITicketing
  ticketManager: ITicketManager
};

export const state = combineReducers<IState>({
  approved: approvedReducer,
  denied: deniedReducer,
  home: homeReducer,
  signIn: signInReducer,
  ticketManager: ticketManagerReducer,
  ticketing: ticketingReducer,
});