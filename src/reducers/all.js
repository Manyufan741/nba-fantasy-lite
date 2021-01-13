import { GET_ALL, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/** action to reset EVERYTHING and add games into state*/
function all(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case GET_ALL:
      return {
        ...state,
          games: [...action.payload.everything.games],
          teams: [...action.payload.everything.teams],
          players: [...action.payload.everything.players]
      };

    default:
      return state;
  }
}

export default all;