import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { v4 as uuid }from "uuid";
import LineupPlayer from "./LineupPlayer";
import { addLineupToDB, editLineup } from "./actions/lineups";
import "./Lineup.css";

const Lineup = ({editting = false}) => {
    const history = useHistory();
    const playersInLineup = useSelector(st => st.lineups.currentLineup);
    console.log("playersInLineup", playersInLineup);
    const date = useSelector(st => st.date.date);
    const lineupId = useSelector(st => st.lineups.currentLineupId);
    const dispatch = useDispatch();
    async function add() {
        await dispatch(addLineupToDB(playersInLineup, date));
        history.push("/");
    }
    async function edit() {
        await dispatch(editLineup(lineupId, playersInLineup, date));
        history.push("/");
    }
    return (
        <div className="lineup-container">
            {playersInLineup.map(player => {
                return <LineupPlayer data={player} key={uuid()}/>
            })}
            {editting && playersInLineup.length >=1 && <button onClick={edit}>Save Editted Lineup</button>}
            {!editting && playersInLineup.length >= 1 && <button onClick={add}>Submit lineup</button>}
        </div>
    )
}

export default Lineup;