import { ITicketManager } from ".";
import { ticketManagerTypes } from "../actions/ticket-manager/ticket-manager.types";



const initialState: ITicketManager = {
  ticket: null,
  ticketingErrorMessage: '',
  tickets: null,
}

export const ticketManagerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ticketManagerTypes.GET_PENDING_TICKETS:
      return {
        ...state,
        tickets: action.payload.tickets,
      };
      case ticketManagerTypes.SET_CURRENT_TICKET:
      return {
        ...state,
        ticket: action.payload.ticket,
      }
      case ticketManagerTypes.UPDATE_TICKETING_ERROR:
      return {
        ...state,
        ticketingErrorMessage: action.payload.ticketingErrorMessage,
      }
  }

  return state;
};
