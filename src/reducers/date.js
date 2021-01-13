import { LOAD_DATE, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/** action to reset EVERYTHING and add games into state*/
function date(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_DATE:
      return {
        ...state,
        "date": action.payload
      };

    default:
      return state;
  }
}

export default date;