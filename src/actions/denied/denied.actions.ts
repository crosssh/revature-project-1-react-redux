import { deniedTypes } from "./denied.types";
import { environment } from "../../environment";

export const getDeniedTickets = () => (dispatch: any) => {
  fetch(environment.context+'reimbursements/status/denied', { credentials: 'include' })
  .then(resp => {
      console.log(resp.status)
      if (resp.status === 403) {
        dispatch({
          payload: {
            deniedErrorMessage: 'You do not have access to these tickets.',
          },
          type: deniedTypes.UPDATE_DENIED_ERROR
        })
          return null;
      }
      return resp.json();
  })
  .then((deniedTickets) => {
    dispatch({
      payload: {
        deniedTickets
      },
      type: deniedTypes.GET_DENIED_TICKETS
    })
  })
  .catch(err => {
      console.log(err);
  })
}

export const updateDeniedError = (deniedErrorMessage: string) => {
  return {
    payload: {
      deniedErrorMessage
    },
    type: deniedTypes.UPDATE_DENIED_ERROR
  }
}