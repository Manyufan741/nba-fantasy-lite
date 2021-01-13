import { LOAD_GAMES, GET_GAMES_ON_DATE } from "./types";
import nbaApi from "../nbaApi";

/** Utilize redux-thunk to asynchronously get the data from
 *  nbaApi then create an LOAD_GAME action with the payload of data from nbaApi */
function getGamesFromAPI(date) {
  return async function (dispatch) {
    const games = await nbaApi.getGames({ "dates[]": date });
    dispatch(gotGames(games));
  };
}

function gotGames(games) {
  return { type: LOAD_GAMES, payload: games };
}

function getGamesOnDate(date) {
  return async function (dispatch) {
    const games = await nbaApi.getGamesOnDate(date);
    dispatch(getGamesFromDB(games));
  }
}

function getGamesFromDB(games) {
  return { type: GET_GAMES_ON_DATE, payload: games };
}


export { getGamesFromAPI, getGamesOnDate };