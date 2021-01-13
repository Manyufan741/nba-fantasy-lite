import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getGamesFromAPI } from "./actions/games";
import Game from "./Game";
import "./GameList.css";


const GameList = () => {
    const games = useSelector(st => st.games["games"]);
    const date = useSelector(st => st.date["date"]);       
    const dispatch = useDispatch();
    let missing = !games;

    useEffect(() => {
        dispatch(getGamesFromAPI(date));
    }, [missing, dispatch, date]);


    if (missing) return "No games on this date.";

    return (
        <div>
            <h1>Game List on {date}</h1>
            <section className="container">
                {games.map(game => {
                    return <Game data={game} key={game.id}/>
                })}
            </section>
            <Link to="/players">Players List</Link>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default GameList;