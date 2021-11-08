import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import CreateDeck from "./CreateDeck";
import DeckRoutes from "./DeckRotes";

export default function Decks () {
  const {url} = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/new`}>
        <CreateDeck/>
      </Route>
      <Route exact path={`${url}/:deckId`}>
        <DeckRoutes/>
      </Route>
    </Switch>
  )
}