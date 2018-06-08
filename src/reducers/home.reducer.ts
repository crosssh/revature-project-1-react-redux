import { IHome } from ".";
import { homeTypes } from "../actions/home/home.types";


const initialState: IHome = {
  reimbursements: [],
}

export const homeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case homeTypes.UPDATE_REIMBURSEMNTS:
      return {
        ...state,
        reimbursements: action.payload.reimbursements,
      };
  }

  return state;
};
