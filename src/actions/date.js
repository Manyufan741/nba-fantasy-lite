import {LOAD_DATE} from "./types";

export function loadDate(date) {
    return {
        type: LOAD_DATE,
        payload:date
    };
};