import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPlayer } from "./actions/players";

const Search = () => {
    const dispatch = useDispatch();
    const INITIAL_STATE = {
        playerName: '',
        lowerValueBound: 1,
        upperValueBound: 200
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    // let criteria = {};
    const search = (e) => {
        // console.log("name, value", e.target.name, e.target.value);
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // criteria[name] = value;
        // console.log("criteria", criteria);
        let criteria = {};
        if (name === 'playerName') {
            criteria[name] = value;
            criteria['lowerValueBound'] = formData.lowerValueBound;
            criteria['upperValueBound'] = formData.upperValueBound;
        } else if (name === 'lowerValueBound') {
            criteria[name] = value;
            criteria['playerName'] = formData.playerName;
            criteria['upperValueBound'] = formData.upperValueBound;
        } else {
            criteria[name] = value;
            criteria['lowerValueBound'] = formData.lowerValueBound;
            criteria['playerName'] = formData.playerName;
        }
        // console.log("criteria", criteria);
        dispatch(searchPlayer(criteria));
    }


    // const valueSearchLow = (e) => {
    //     // console.log("name, value", e.target.name, e.target.value);
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     dispatch(searchPlayerByLowerValue(value));
    // }

    // const valueSearchUp = (e) => {
    //     // console.log("name, value", e.target.name, e.target.value);
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });        
    // }

    return (
        <form>
            <h3>Player Search</h3>
            <label>Player Name
                <input type="text" name="playerName" value={formData.playerName} onChange={search}/>
            </label>
            <label>Value Range
                <input type="number" name="lowerValueBound" min="1" max="200" value={formData.lowerValueBound} onChange={search} />
                <input type="number" name="upperValueBound" min="1" max="200" value={formData.upperValueBound} onChange={search} />
            </label>
        </form>
    );
}

export default Search;