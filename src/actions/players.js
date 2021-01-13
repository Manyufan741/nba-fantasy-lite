import {
  GET_PLAYERS_ON_DATE,
  GET_PLAYER_BY_NAME,
  GET_PLAYER_IMAGE,
  SEARCH_PLAYER,
  RESET_PLAYERS
} from "./types";
import nbaApi from "../nbaApi";

function searchPlayer(criteria) {
  return {
    type: SEARCH_PLAYER,
    payload: criteria
  }
}

// function searchPlayerByLowerValue(value) {
//   return {
//     type: SEARCH_PLAYER_BY_LOWER_VALUE,
//     payload: value
//   }
// }

/** Utilize redux-thunk to asynchronously get the data from
 *  nbaApi then create an LOAD_GAME action with the payload of data from nbaApi */
function getPlayersOnDateFromAPI(date) {
  return async function (dispatch) {
    const playersOnDate = await nbaApi.getPlayersOnDate({ "dates[]": date });
    dispatch(gotPlayersOnDate(playersOnDate));
  };
}


function gotPlayersOnDate(playersOnDate) {
  return { type: GET_PLAYERS_ON_DATE, payload: playersOnDate };
}

function getPlayerByName(name) {
  return async function (dispatch) {
    const player = await nbaApi.getPlayerByName(name);
    dispatch(gotPlayerByName(player));
  };
}


function gotPlayerByName(player) {
  return { type: GET_PLAYER_BY_NAME, payload: player };
}

function getPlayerImage(name) {
  return async function (dispatch) {
    const playerImage = await nbaApi.getPlayerImage(name);
    dispatch(gotPlayerImage(playerImage));
  }
}

function gotPlayerImage(playerImage) {
  return {
    type: GET_PLAYER_IMAGE,
    payload: playerImage
  }
}

function resetPlayers() {
  return {
    type:RESET_PLAYERS
  }
}


export {
  getPlayersOnDateFromAPI,
  getPlayerByName,
  getPlayerImage,
  searchPlayer,
  resetPlayers
};