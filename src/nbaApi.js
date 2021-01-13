import axios from "axios";

const BASE_API_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";
// const BASE_API_URL = `localhost:${process.env.PORT}` || `http://localhost:3001`;

class nbaApi {
    static async request(endpoint, paramsOrData = {}, verb = "get") {
        console.debug("backend API Call:", endpoint, paramsOrData, verb);
        try {
            return (await axios({
                method: verb,
                url: `${BASE_API_URL}/${endpoint}`,
                [verb === "get" ? "params" : "data"]: paramsOrData
            })).data;
            // axios sends query string data via the "params" key,
            // and request body data via the "data" key,
            // so the key we need depends on the HTTP verb
        }

        catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.message;
            throw Array.isArray(message) ? message : [message];
        }
    }

    //This function also "clear and write" games into DB
    static async getGames(query) {
        const res = await this.request(`games`, query);
        return res.games;
    }

    //This function only get the games detail from DB
    static async getGamesOnDate(date) {
        const res = await this.request(`games/onDate`, date);
        return res.games;
    }

    static async getPlayersOnDate(query) {
        const res = await this.request(`players/onDate`, query);
        return res.players;
    }

    static async getPlayerByName(name) {
        const res = await this.request(`players/${name}`, name);
        return res.players[0];
    }

    static async writeLineupToDB(lineup, date) {
        const body = { lineup: lineup, date: date };
        const message = await this.request(`lineups`, body, "post");
        console.log("Written in DB in nbaApi!!", message);
        return message;
    }

    static async updateLineup(id, lineup, date) {
        const body = { lineup: lineup, date: date };
        const message = await this.request(`lineups/edit/${id}`, body, "post");
        return message;
    }

    static async getLineupsOnDate(date) {
        console.log("getLineupsOnDate");
        console.debug("getLineupsOnDate");
        const lineups = await this.request(`lineups/onDate`, date);
        return lineups;
    }

    static async getPlayersByLineupId(id) {
        const res = await this.request(`lineups/${id}/players`, id);
        return res.players;
    }

    static async deleteLineupFromDB(id) {
        const message = await this.request(`lineups/${id}`, id, "delete");
        // console.log("deleted in nbaApi!!", message);
        return message;
    }

    static async getAll(query) {
        const everything = await this.request(`all`, query);
        // console.log("everything in nbaApi", everything);
        return everything;
    }

    static async getScores(date) {
        const res = await this.request(`scores`, { date });
        console.log("scores and ids in getScores nbaApi", res.scores);
        return res.scores;
    }

    static async getPerformance(name, date) {
        const res = await this.request(`scores/${name}/performance`, { date });
        return res.stats;
    }

    static async getAllPerformance(date) {
        const res = await this.request(`scores/all-performance`, { date });
        return res.playerStats;
    }

    static async getPlayerImage(name) {
        const res = await this.request(`players/${name}/image`);
        return res.playerImage;
    }
}

export default nbaApi;