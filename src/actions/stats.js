import {
    GET_PLAYER_STATS,
    GET_ALL_STATS_AND_SCORES,
    RESET_PLAYER_STATS
} from "./types";
import nbaApi from "../nbaApi";

// function addPlayerScoreToLineupScore(id, playerScore) {
//     return {
//         type: ADD_PLAYER_SCORE_TO_LINEUP_SCORE,
//         payload: {id, playerScore}
//     }
// }

function getPlayerStats(name, date) {
    return async function (dispatch) {
        const stats = await nbaApi.getPerformance(name, date);
        dispatch(gotPlayerStats(stats));
    }
}

function gotPlayerStats(stats) {
    return { type: GET_PLAYER_STATS, payload: stats };
}

function getAllStatsAndScores(date) {
    return async function (dispatch) {
        const playerStats = await nbaApi.getAllPerformance(date);
        dispatch(gotAllStatsAndScore(playerStats));
    }
}

function gotAllStatsAndScore(playerStats) {
    return {
        type: GET_ALL_STATS_AND_SCORES,
        payload: playerStats
    }
}

function resetPlayerStats() {
    return { type: RESET_PLAYER_STATS };
}

export {
    getPlayerStats,
    getAllStatsAndScores,
    resetPlayerStats
}