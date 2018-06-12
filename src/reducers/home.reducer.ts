import { IHome } from ".";
import { homeTypes } from "../actions/home/home.types";


const initialState: IHome = {
  reimbursements: [],
  username: ''
}

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case homeTypes.UPDATE_REIMBURSEMNTS:
      return {
        ...state,
        reimbursements: action.payload.reimbursements,
      };
      case homeTypes.UPDATE_USERNAME:
      return {
        ...state,
        username: action.payload.username
      }
  }

  return state;
};
