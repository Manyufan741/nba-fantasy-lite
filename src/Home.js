import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { loadDate } from "./actions/date";
import { getLineupsOnDate } from "./actions/lineups";
import { resetPlayers } from "./actions/players";
import HomeLineupList from "./HomeLineupList";
import Calculate from "./Calculate";

const Home = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());
    const dummy = useSelector(st => st.lineups.dummy);
    useEffect(() => {
        if (startDate) {
            let year = startDate.getFullYear() || 2020;
            let month = startDate.getMonth() + 1 || 0;
            let day = startDate.getDate() || 1;
            let fullDate = `${year}-${month}-${day}`;
            dispatch(loadDate(fullDate));
            dispatch(getLineupsOnDate(fullDate));
            dispatch(resetPlayers());
        } else {
            dispatch(loadDate(startDate));
            dispatch(getLineupsOnDate(startDate));
            dispatch(resetPlayers());
        }    
    }, [startDate, dispatch, dummy]);
    return (
        <div>
            <h1>Welcome to NBA Fantasy Lite</h1>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            <Link to="/games">Get games on this date</Link>
            <HomeLineupList />
            <Calculate />
        </div>
    )
}

export default Home;