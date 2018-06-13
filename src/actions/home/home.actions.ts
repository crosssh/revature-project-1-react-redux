import { homeTypes } from "./home.types";
import { environment } from "../../environment";


export const updateReimbursement = () => (dispatch: any) => {
  fetch(environment.context+'reimbursements/username', { credentials: 'include' })
    .then(resp => {
      console.log(resp.status)
      if (resp.status === 401 || resp.status === 403) {
        return;
      }
      return resp.json();
    })
    .then((reimbursements) => {
      console.log(reimbursements[0].timeSubmitted);
      dispatch({
        payload: {
          reimbursements
        },
        type: homeTypes.UPDATE_REIMBURSEMNTS
      })
    })
    .catch(err => {
      console.log(err);
    })
}

export const updateUsername = (username: string) => {
  return {
    payload: {
      username
    },
    type: homeTypes.UPDATE_USERNAME
  }
}