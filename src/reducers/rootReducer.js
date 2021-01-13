import { combineReducers } from "redux";
import date from "./date";
import games from "./games";
import players from "./players";
import lineups from "./lineups";
import budget from "./budget";
import stats from "./stats";
import all from "./all";

/**Combine all reducers */
export default combineReducers({
    date,
    games,
    players,
    lineups,
    budget,
    stats,
    all
});