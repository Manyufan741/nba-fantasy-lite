import {
  GET_PLAYERS_ON_DATE,
  GET_PLAYER_BY_NAME,
  RESET_PLAYERS,
  GET_PLAYER_IMAGE,
  SEARCH_PLAYER
} from "../actions/types";

const INITIAL_STATE = {
  playersOnDate: []
};

function players(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET_PLAYERS:
      delete state.searchedPlayers;
      return {
        ...state
      };
    
    case SEARCH_PLAYER:
      let lowerCaseSearchTerm = action.payload.playerName.toLowerCase();
      let playersWithNameMatch = state.playersOnDate.filter(player => {
        let lowerCasePlayerName = player.name.toLowerCase();
        return lowerCasePlayerName.includes(lowerCaseSearchTerm);
      });
      let playersWithinValueRange = playersWithNameMatch.filter(player =>
        player.value >= action.payload.lowerValueBound && player.value <= action.payload.upperValueBound
      )
      return {
        ...state,
        searchedPlayers: playersWithinValueRange
      };

    case GET_PLAYERS_ON_DATE:
      return {
        ...state,
        "playersOnDate": [ ...action.payload ]
      };
    
    case GET_PLAYER_BY_NAME:
      return {
        ...state,
        searchedPlayer:action.payload
      }
    
    case GET_PLAYER_IMAGE:
      return {
        ...state,
        [action.payload.name]: action.payload.image
      };

    default:
      return state;
  }
}

export default players;