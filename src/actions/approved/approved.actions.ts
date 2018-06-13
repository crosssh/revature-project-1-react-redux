import { approvedTypes } from "./approved.types";
import { environment } from "../../environment";

export const getApprovedTickets = () => (dispatch: any) => {
  fetch(environment.context+'reimbursements/status/approved', { credentials: 'include' })
  .then(resp => {
      console.log(resp.status)
      if (resp.status === 403) {
        dispatch({
          payload: {
            approvedErrorMessage: 'You do not have access to these tickets.',
          },
          type: approvedTypes.UPDATE_APPROVED_ERROR
        })
          return null;
      }
      return resp.json();
  })
  .then((approvedTickets) => {
    console.log('here ' + approvedTickets)
    dispatch({
      payload: {
        approvedTickets
      },
      type: approvedTypes.GET_APPROVED_TICKETS
    })
  })
  .catch(err => {
      console.log(err);
  })
}

export const updateApprovedError = (approvedErrorMessage: string) => (dispatch: any) => {
  dispatch({
    payload: {
      approvedErrorMessage
    }
  })
}