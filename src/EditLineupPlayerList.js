import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { getPlayersOnDateFromAPI } from "./actions/players";
import Game from "./Game";
import Player from "./Player";
import Lineup from "./Lineup";
import Search from "./Search";
import "./EditLineupPlayerList.css";

const EditLineupPlayerList = () => {
    const dispatch = useDispatch();
    const games = useSelector(st => st.all.games);
    const date = useSelector(st => st.date["date"]);
    const allPlayers = useSelector(st => st.all.players);
    const searchedPlayers = useSelector(st => st.players["searchedPlayers"]);
    const players = (searchedPlayers ? searchedPlayers : allPlayers);
    const budget = useSelector(st => st.budget["currentBudget"]);
    let missing = !players;

    useEffect(() => {
        dispatch(getPlayersOnDateFromAPI(date));
    }, [missing, dispatch, date, searchedPlayers]);

    if (missing) return "loading";

    return (
        <div>
            <h1>Game List on {date}</h1>
            <section className="games-container">
            {games.map(game => {
                return <Game data={game} key={game.id}/>
            })}
            </section>
            <h1>Players on {date}</h1>
            <h2>Budget: {budget}</h2>
            <Search date={date}/>
            <section className="players-container">                
                {players.map(player => {
                    return <Player data={player} key={uuid()}/>
                })}
            </section>
            <h1>Your Lineup</h1>
            <section>
                <Lineup editting={true}/>
            </section>
            <Link to="/">Go Home</Link>
        </div>
    )
}

export default EditLineupPlayerList;