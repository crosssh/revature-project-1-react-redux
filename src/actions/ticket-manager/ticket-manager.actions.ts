import { ticketManagerTypes } from "./ticket-manager.types";

export const getPendingTickets = () => (dispatch: any) => {
  fetch('http://localhost:3001/reimbursements/status/pending', { credentials: 'include' })
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

export const updateTicketingError = (ticketingErrorMessage: any) => {
  return {
    payload: {
      ticketingErrorMessage
    },
    type: ticketManagerTypes.UPDATE_TICKETING_ERROR
  }
}