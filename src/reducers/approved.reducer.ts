import { IApproved } from ".";
import { approvedTypes } from "../actions/approved/approved.types";




const initialState: IApproved = {
  approvedErrorMessage: '',
  approvedTickets: null,
  items: null,
}

export const approvedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case approvedTypes.GET_APPROVED_TICKETS:
      return {
        ...state,
        approvedTickets: action.payload.approvedTickets,
      };
      case approvedTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      }
    case approvedTypes.UPDATE_APPROVED_ERROR:
      return {
        ...state,
        approvedErrorMessage: action.payload.approvedErrorMessage,
      };
  }

  return state;
};
