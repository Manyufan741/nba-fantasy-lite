import React, { useEffect }from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";
import { getPlayerImage } from "./actions/players";
import "./PlayerPerformance.css";

const PlayerPerformance = ({ name }) => {
    const dispatch = useDispatch();
    const playerStat = useSelector(st => st.stats.playerStats[name]);
    const image = useSelector(st => st.players[name])
    useEffect(() => {
        dispatch(getPlayerImage(name));
    }, [dispatch, name]);
    
    return (
        <Card className="player-frame">
            <Card.Img src={image} alt="hmm.." />
            <Card.Body>
                <Card.Title><b>{name}</b></Card.Title>
                <ListGroup>
                    <ListGroup.Item>Points: {playerStat && playerStat.pts}</ListGroup.Item>
                    <ListGroup.Item>Rebouds: {playerStat && playerStat.reb}</ListGroup.Item>
                    <ListGroup.Item>Assists: {playerStat && playerStat.ast}</ListGroup.Item>
                    <ListGroup.Item>Steals: {playerStat && playerStat.stl}</ListGroup.Item>
                    <ListGroup.Item>Blocks: {playerStat && playerStat.blk}</ListGroup.Item>
                    <ListGroup.Item>Turnovers: {playerStat && playerStat.turnover}</ListGroup.Item>
                    <ListGroup.Item style={{color: "green"}}>Score: {playerStat && playerStat.score}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default PlayerPerformance;