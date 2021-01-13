import { GET_GAMES_ON_DATE, LOAD_GAMES, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

/** action to reset EVERYTHING and add games into state*/
function games(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_GAMES:
      return {
        ...state,
        games: [ ...action.payload ]
      };
    
    case GET_GAMES_ON_DATE:
      return {
        ...state,
        games: [...action.payload]
      }

    default:
      return state;
  }
}

export default games;