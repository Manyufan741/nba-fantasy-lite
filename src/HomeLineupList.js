import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getLineupsOnDate } from "./actions/lineups";
import { v4 as uuid } from "uuid";
import HomeLineup from "./HomeLineup";

const HomeLineupList = () => {
    const date = useSelector(st => st.date.date);
    const lineupsOnDate = useSelector(st => st.lineups.lineupsOnDate);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getLineupsOnDate(date));
    }, [dispatch, date]);

    return (
        <div>
            <h2>Lineups on {date}</h2>
            {lineupsOnDate.map(lineup => {
                return <HomeLineup lineup={lineup} key={uuid()} />
            })}
        </div>
    )
}
export default HomeLineupList;