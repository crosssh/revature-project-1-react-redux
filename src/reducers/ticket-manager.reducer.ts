import { ITicketManager } from ".";
import { ticketManagerTypes } from "../actions/ticket-manager/ticket-manager.types";



const initialState: ITicketManager = {
  items: null,
  ticketingErrorMessage: '',
  tickets: null,
  timeSubmitted: 0,
  username: '',
}

export const ticketManagerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ticketManagerTypes.CLEAR_TICKETS:
    return {
      ...state,
      ticketingErrorMessage: action.payload.ticketingErrorMessage,
      tickets: action.payload.tickets,
    }
    case ticketManagerTypes.GET_ITEMS:
    return {
      ...state,
      items: action.payload.items,
      timeSubmitted: action.payload.timeSubmitted,
      username: action.payload.username,
    }
    case ticketManagerTypes.GET_PENDING_TICKETS:
      return {
        ...state,
        tickets: action.payload.tickets,
      };
      case ticketManagerTypes.UPDATE_TICKETING_ERROR:
      return {
        ...state,
        ticketingErrorMessage: action.payload.ticketingErrorMessage,
      }
  }

  return state;
};
