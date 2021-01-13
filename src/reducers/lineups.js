import {
    GET_LINEUPS_ON_DATE,
    GET_PLAYERS_BY_LINEUP_ID,
    EDIT_LINEUP,
    UPDATE_LINEUP_SCORES,
    SAVE_CURRENT_LINEUP_ID,
    ADD_TO_LINEUP,
    ADD_LINEUP_TO_DB,
    REMOVE_LINEUP_FROM_DB,
    REMOVE_FROM_LINEUP,
    RESET_LINEUP } from "../actions/types";


const INITIAL_STATE = {
    currentLineup: [],
    lineupsOnDate: [],
    lineupScores: {},
    dummy: true
};

function lineups(state = INITIAL_STATE, action) {
    switch (action.type) {
        case RESET_LINEUP:
            return { ...INITIAL_STATE };
        case GET_LINEUPS_ON_DATE:
            return { ...state, lineupsOnDate: [...action.payload] };
        case GET_PLAYERS_BY_LINEUP_ID:
            return { ...state, currentLineup: [...action.payload] };
        case UPDATE_LINEUP_SCORES:
            // console.log("action.payload in UPDATE_LINEUP_SCORES", action.payload);
            return {
                ...state,
                dummy: !state.dummy,
                lineupScores: action.payload
            };
        case SAVE_CURRENT_LINEUP_ID:
            return { ...state, currentLineupId: action.payload };
        case REMOVE_LINEUP_FROM_DB:
            let newLineupsOnDate = state.lineupsOnDate.filter(lineup => lineup.id !== action.payload);
            return { ...state, lineupsOnDate: [...newLineupsOnDate] };
        case ADD_TO_LINEUP:
            return {
                ...state,
                currentLineup: [...state.currentLineup, action.payload]
            }
        case REMOVE_FROM_LINEUP:
            let lineupCopy = [...state.currentLineup];
            let idx = 0;
            for (let player of lineupCopy) {
                if (player.name === action.payload.name) {
                    break;
                }
                idx += 1;
            }
            let modLineup = lineupCopy.slice(0, idx).concat(lineupCopy.slice(idx + 1));
            return {
                ...state,
                currentLineup:[...modLineup]
            }
        case ADD_LINEUP_TO_DB:
            return state;
        case EDIT_LINEUP:
            return { ...state, dummy: !state.dummy } ;
        default:
            return state;
    }
}

export default lineups;