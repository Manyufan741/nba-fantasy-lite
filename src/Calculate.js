import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLineupScores } from "./actions/lineups";
import { getAllStatsAndScores } from "./actions/stats";

const Calculate = () => {
    const date = useSelector(st => st.date.date);
    const dispatch = useDispatch();
    const calc = () => {
        dispatch(getAllStatsAndScores(date));
        dispatch(updateLineupScores(date));
    }

    return (
        <div>
            <button onClick={calc}>Calculate scores</button>
        </div>
    )
}

export default Calculate;