import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { loadDate } from "./actions/date";
import { getAllfromApi } from "./actions/all";
import {
    removeLineup,
    resetLineup,
    getPlayersByLineupId,
    saveCurrentLineupId
} from "./actions/lineups";
import { resetBudget, deductBudget } from "./actions/budget";
import PlayerPerformance from "./PlayerPerformance";
import "./HomeLineup.css";


const HomeLineup = ({ lineup }) => {
    const dispatch = useDispatch();
    const lineupScore = useSelector(st => st.lineups.lineupScores[lineup.id]);
    const history = useHistory();
    const tmp = new Date(lineup.date);
    // console.log("date in homelineup", tmp);
    // const createdDate = tmp.toLocaleDateString('en-US');
    // const year = createdDate.split('/')[2];
    // const month = createdDate.split('/')[0];
    // const day = createdDate.split('/')[1];
    const year = tmp.getFullYear();
    const month = tmp.getMonth() + 1;
    const day = tmp.getDate();
    const fullDate = `${year}-${month}-${day}`;
    // console.log("fullDate in homelineup", fullDate);
    const edit = () => {
        dispatch(loadDate(fullDate));
        dispatch(getAllfromApi(fullDate));
        dispatch(resetBudget());
        dispatch(deductBudget(lineup.total_value));
        dispatch(resetLineup());
        dispatch(saveCurrentLineupId(lineup.id));
        dispatch(getPlayersByLineupId(lineup.id));
        history.push("/edit-lineup");        
    }
    const remove = () => {
        dispatch(removeLineup(lineup.id));
    }
    let players = [];
    for (let key in lineup) {
        if (key.includes("player") && lineup[key]) {
            players.push(lineup[key]);
        }
    }
    return (
        <div className="home-lineup-container">
            <section className="player-container">
            {players.map(name => {
                return <PlayerPerformance name={name} key={uuid()} />
            })}
            </section>
            <section className="cost-score-container">
                <div className="cost"><b>Total Cost: {lineup.total_value}</b></div>
                <div className="score"><b>Lineup Score: {lineupScore || 0}</b></div>
            </section>            
            <button onClick={edit}>Edit lineup</button>
            <button onClick={remove}>Remove this lineup</button>
        </div>
    )
}

export default HomeLineup;