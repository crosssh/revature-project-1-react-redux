import { IApproved } from ".";
import { approvedTypes } from "../actions/approved/approved.types";




const initialState: IApproved = {
  approvedErrorMessage: '',
  approvedTickets: null,
}

export const approvedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case approvedTypes.GET_APPROVED_TICKETS:
      return {
        ...state,
        approvedTickets: action.payload.approvedTickets,
      };
    case approvedTypes.UPDATE_APPROVED_ERROR:
      return {
        ...state,
        approvedErrorMessage: action.payload.approvedErrorMessage,
      };
  }

  return state;
};
