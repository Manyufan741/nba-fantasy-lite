import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import GameList from "./GameList";
import PlayerList from "./PlayerList";
import EditLineupPlayerList from "./EditLineupPlayerList";

/**Routes that direct to different pages */
function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route exact path="/films/:id">
        <Film />
      </Route> */}
      <Route exact path="/games">
        <GameList />
      </Route>
      <Route exact path="/players">
        <PlayerList />
      </Route>
      <Route exact path="/edit-lineup">
        <EditLineupPlayerList />
      </Route>
      <Route>
        <div>Page not found.</div>
      </Route>
    </Switch>
  );
}

export default Routes;
