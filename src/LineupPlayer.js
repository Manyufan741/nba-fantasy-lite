import React from "react";
import { useDispatch } from "react-redux";
import { removeFromLineup } from "./actions/lineups";
import { refundBudget} from "./actions/budget";
import "./Player.css";

const LineupPlayer = ({ data }) => {
    const dispatch = useDispatch();
    const remove = () => {
        dispatch(removeFromLineup(data));
        dispatch(refundBudget(data.value));
    }
    return (
        <div className="lineup">
            <img src={data.image} alt="./images/bball_avator.webp"/>
            <h3>Name: {data.name}</h3>
            <h4>Team: {data.team}</h4>
            <h4>Value: {data.value}</h4>
            <button onClick={remove}>Remove from lineup</button>
        </div>
    )
}

export default LineupPlayer;