import { GET_ALL } from "./types";
import nbaApi from "../nbaApi";

/** Utilize redux-thunk to asynchronously get the data from
 *  nbaApi then create an LOAD_GAME action with the payload of data from nbaApi */
function getAllfromApi(date) {
  return async function (dispatch) {
    const everything = await nbaApi.getAll({ "dates[]": date });
    dispatch(gotAll(everything));
  };
}

function gotAll(everything) {
  return { type: GET_ALL, payload: everything };
}

export { getAllfromApi };