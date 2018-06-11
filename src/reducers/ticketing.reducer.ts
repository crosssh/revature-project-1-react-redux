import { ITicketing } from ".";
import { ticketingTypes } from "../actions/ticketing/ticketing.types";


const initialState: ITicketing = {
  amount: 0,
  date: '',
  description: '',
  items: [],
  title: '',
}

export const ticketingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ticketingTypes.ADD_ITEM:
      return {
        ...state,
        amount: 0,
        date: '',
        description: '',
        items: [
          ...state.items,
          {
            amount: action.payload.amount, description: action.payload.description,
            timeStamp: action.payload.date, title: action.payload.title
          }
        ],
        title: '',

      };
    case ticketingTypes.CLEAR_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      };
    case ticketingTypes.UPDATE_AMOUNT:
      return {
        ...state,
        amount: action.payload.amount
      };
    case ticketingTypes.UPDATE_TITLE:
      return {
        ...state,
        title: action.payload.title
      };
    case ticketingTypes.UPDATE_DATE:
      return {
        ...state,
        date: action.payload.date
      };
    case ticketingTypes.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.payload.description
      };
  }


  return state;
};
