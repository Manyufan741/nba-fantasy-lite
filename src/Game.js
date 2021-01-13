import React from "react";
import "./Game.css";
import { Card } from "react-bootstrap";

const Game = ({data}) => {
    return (
        <div className="game">
            <Card>
                <h3>Visitor Team: {data.visitor_team.full_name}</h3>
                <img src={data.visitorteam_logo} alt="logo not found" width="100px" height="100px" />
                <span><b>@</b></span>
                <h3>Home Team: {data.home_team.full_name}</h3>
                <img src={data.hometeam_logo} alt="logo not found" width="100px" height="100px"/>                
            </Card>
        </div>
    )
}

export default Game;