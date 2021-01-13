import {
    GET_LINEUPS_ON_DATE,
    GET_PLAYERS_BY_LINEUP_ID,
    SAVE_CURRENT_LINEUP_ID,
    EDIT_LINEUP,
    UPDATE_LINEUP_SCORES,
    ADD_TO_LINEUP,
    ADD_LINEUP_TO_DB,
    REMOVE_LINEUP_FROM_DB,
    REMOVE_FROM_LINEUP,
    RESET_LINEUP} from "./types";
import nbaApi from "../nbaApi";


function getLineupsOnDate(date) {
    return async function (dispatch) {
    const res = await nbaApi.getLineupsOnDate(date);
    dispatch(getLineupsFromDB(res.lineups));
  };
}

function getLineupsFromDB(lineups) {
    return {
        type: GET_LINEUPS_ON_DATE,
        payload : lineups
    }
}

function updateLineupScores(date) {
    return async function (dispatch) {
        const scores = await nbaApi.getScores(date);
        dispatch(updateLineupScoreThunk(scores));
    }
}

function updateLineupScoreThunk(scores) {
    return {
        type: UPDATE_LINEUP_SCORES,
        payload: scores
    }
}

function getPlayersByLineupId(id) {
    return async function (dispatch) {
    const players = await nbaApi.getPlayersByLineupId(id);
    dispatch(gotPlayersByLineupId(players));
  };
}

function gotPlayersByLineupId(players) {
    return {
        type: GET_PLAYERS_BY_LINEUP_ID,
        payload : players
    }
}

function removeLineup(id) {
    return async function (dispatch) {
        await nbaApi.deleteLineupFromDB(id);
        dispatch(removeLineupFromDB(id))
    }
}

function removeLineupFromDB(id) {
    return {
        type: REMOVE_LINEUP_FROM_DB,
        payload: id
    }
}

function addToLineup(player) {
    return {
        type: ADD_TO_LINEUP,
        payload: player
    }
}

function removeFromLineup(player) {
    return {
        type: REMOVE_FROM_LINEUP,
        payload:player
    }
}

function resetLineup() {
    return {
        type: RESET_LINEUP
    }
}

function saveCurrentLineupId(id) {
    return {
        type: SAVE_CURRENT_LINEUP_ID,
        payload: id
    }
}

function addLineupToDB(lineup, date) {
  return async function (dispatch) {
    await nbaApi.writeLineupToDB(lineup, date);
    dispatch(addLineupToDBThunk());
  };
}

function addLineupToDBThunk() {
  return { type: ADD_LINEUP_TO_DB};
}

function editLineup(id, lineup, date) {
    return async function (dispatch) {
        await nbaApi.updateLineup(id, lineup, date);
        dispatch(editLineupThunk());
    }
}

function editLineupThunk() {
    return{type : EDIT_LINEUP}
}

export {
    addToLineup,
    removeFromLineup,
    editLineup,
    resetLineup,
    addLineupToDB,
    getLineupsOnDate,
    getPlayersByLineupId,
    saveCurrentLineupId,
    updateLineupScores,
    removeLineup
}