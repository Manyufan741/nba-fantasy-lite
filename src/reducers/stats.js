import {
    GET_PLAYER_STATS,
    GET_ALL_STATS_AND_SCORES,
    RESET_PLAYER_STATS
} from "../actions/types";


const INITIAL_STATE = {
    playerStats: []
};

function stats(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET_PLAYER_STATS:
            return { ...INITIAL_STATE };
        case GET_PLAYER_STATS:
            let name = action.payload.name;
            return {
                ...state,
                [name] : action.payload
            };
        case GET_ALL_STATS_AND_SCORES:
            return {
                ...state,
                playerStats: action.payload
            }
        default:
            return state;
    }
}

export default stats;