import { IDenied } from ".";
import { deniedTypes } from "../actions/denied/denied.types";


const initialState: IDenied = {
  deniedErrorMessage: '',
  deniedTickets: null,
  items: null,
}

export const deniedReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case deniedTypes.CLEAR_DENIED:
    return {
      ...state,
      deniedErrorMessage: action.payload.deniedErrorMessage,
      deniedTickets: action.payload.deniedTickets,
    }
    case deniedTypes.GET_DENIED_TICKETS:
      return {
        ...state,
        deniedTickets: action.payload.deniedTickets,
      };
      case deniedTypes.GET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      }
    case deniedTypes.UPDATE_DENIED_ERROR:
      return {
        ...state,
        deniedErrorMessage: action.payload.deniedErrorMessage,
      };
  }

  return state;
};
