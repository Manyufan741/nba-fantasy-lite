import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid }from "uuid";
import { getPlayersOnDateFromAPI } from "./actions/players";
import { resetLineup } from "./actions/lineups";
import { resetBudget } from "./actions/budget";
import Game from "./Game";
import Player from "./Player";
import Lineup from "./Lineup";
import Search from "./Search";
import "./PlayerList.css";


const PlayerList = () => {
    const games = useSelector(st => st.games["games"]);
    const date = useSelector(st => st.date["date"]);
    const allPlayers = useSelector(st => st.players["playersOnDate"]);
    const searchedPlayers = useSelector(st => st.players["searchedPlayers"]);
    const players = (searchedPlayers ? searchedPlayers : allPlayers);
    const budget = useSelector(st => st.budget["currentBudget"]);
    // console.log("date", date);            
    const dispatch = useDispatch();
    let missing = !players;

    useEffect(() => {
        dispatch(getPlayersOnDateFromAPI(date));
        dispatch(resetLineup());
        dispatch(resetBudget());
    }, [missing, dispatch, date]);

    if (missing) return "loading";

    return (
        <div>
            <h1>Game List on {date}</h1>
            <section className="game-container">            
            {games.map(game => {
                return <Game data={game} key={game.id}/>
            })}
            </section>
            <h1>Players on {date}</h1>
            <h2>Budget: {budget}</h2>
            <Search date={date}/>
            <section className = "player-container">                      
                {players.map(player => {
                    return <Player data={player} key={uuid()}/>
                })}
            </section>
            <h1>Your Lineup</h1>
            <section className="list-container">            
                <Lineup />
            </section>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default PlayerList;