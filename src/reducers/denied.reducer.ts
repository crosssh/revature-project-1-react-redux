import { IDenied } from ".";
import { deniedTypes } from "../actions/denied/denied.types";


const initialState: IDenied = {
  deniedErrorMessage: '',
  deniedTickets: null,
}

export const deniedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case deniedTypes.GET_DENIED_TICKETS:
      return {
        ...state,
        deniedTickets: action.payload.deniedTickets,
      };
    case deniedTypes.UPDATE_DENIED_ERROR:
      return {
        ...state,
        deniedErrorMessage: action.payload.deniedErrorMessage,
      };
  }

  return state;
};
