import { ticketManagerTypes } from "./ticket-manager.types";

export const getPendingTickets = () => (dispatch: any) => {
  fetch('http://localhost:3001/reimbursements/status/pending', { credentials: 'include' })
  .then(resp => {
      console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
          return;
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

export const setCurrentTicket = (ticket: any) => {
  return {
    payload: {
      ticket
    },
    type: ticketManagerTypes.SET_CURRENT_TICKET
  }
}