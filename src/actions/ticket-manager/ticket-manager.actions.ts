import { ticketManagerTypes } from "./ticket-manager.types";
import { environment } from "../../environment";

export const getPendingTickets = () => (dispatch: any) => {
  fetch(environment.context+'reimbursements/status/pending', { credentials: 'include' })
  .then(resp => {
      console.log(resp.status)
      if (resp.status === 403) {
        dispatch({
          payload: {
            ticketingErrorMessage: 'You do not have access to these tickets.',
          },
          type: ticketManagerTypes.UPDATE_TICKETING_ERROR
        })
          return null;
      }
      return resp.json();
  })
  .then((tickets) => {
    dispatch({
      payload: {
        tickets
      },
      type: ticketManagerTypes.GET_PENDING_TICKETS
    })
  })
  .catch(err => {
      console.log(err);
  })
}

export const getItems = (items: any, timeSubmitted: number, username: string) => {
  console.log(timeSubmitted)
  console.log(username);
  return {
    payload: {
      items,
      timeSubmitted,
      username
    },
    type: ticketManagerTypes.GET_ITEMS
  }
}

export const updateTicketingError = (ticketingErrorMessage: any) => {
  return {
    payload: {
      ticketingErrorMessage
    },
    type: ticketManagerTypes.UPDATE_TICKETING_ERROR
  }
}