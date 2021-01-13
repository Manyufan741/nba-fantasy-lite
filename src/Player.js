import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToLineup, removeFromLineup } from "./actions/lineups";
import { refundBudget, deductBudget} from "./actions/budget";
import "./Player.css";
// import players from "./reducers/players";

const check = (arr, name) => {
    if (arr.length < 1) {
        return false;
    }
    for (let i of arr) {
        if (i) {
            if (i.name === name) {
                return true;
            }    
        }    
    }
    return false;
}

const Player = ({ data }) => {
    const playersInLineup = useSelector(st => st.lineups.currentLineup);
    const budget = useSelector(st => st.budget["currentBudget"]);
    const dispatch = useDispatch();
    const add = () => {
        dispatch(addToLineup(data));
        dispatch(deductBudget(data.value));
    }
    const remove = () => {
        dispatch(removeFromLineup(data));
        dispatch(refundBudget(data.value));
    }
    let selected = check(playersInLineup, data.name);
    let button;
    if (selected) {
        button = <button onClick={remove}>Remove from lineup</button>
    } else {
        if (playersInLineup.length >= 10) {
            button = <button>Lineup is full</button>
        } else if (data.value > budget) {
            button = <button>Insufficient Fund</button>
        } else {
            button = <button onClick={add}>Add to lineup</button>
        }
    }
    
    return (
        <div className="player">
            <img src={data.image} alt="./images/bball_avator.webp"/>
            <h3>Name: {data.name}</h3>
            <h4>Points per game: {data.points}</h4>
            <h4>Rebounds per game: {data.rebounds}</h4>
            <h4>Assists per game: {data.assists}</h4>
            <h4>Steals per game: {data.steals}</h4>
            <h4>Blocks per game: {data.blocks}</h4>
            <h4>Turnovers per game: {data.turnovers}</h4>            
            <h4>Team: {data.team}</h4>
            <h4>Value: {data.value}</h4>
            {/* {!selected && <button onClick={add}>Add to lineup</button>}
            {selected && <button onClick={remove}>Remove from lineup</button>} */}
            {button}
        </div>
    )
}

export default Player;