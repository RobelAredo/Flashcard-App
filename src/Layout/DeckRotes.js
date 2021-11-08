import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Study from "./Study";
import Deck from "./Deck"
import EditDeck from "./EditDeck"
import CardRoutes from "./CardRoute";

export default function DeckRoutes () {
  const { url } = useRouteMatch();
  const { deckId } = useRouteMatch.params();
  return (
    <Switch>
      <Route exact url={url}>
        <Deck deckId={deckId}/>
      </Route>
      <Route exact path={`${url}/study`}>
        <Study deckId={deckId}/>
      </Route>
      <Route exact path={`${url}/edit`}>
        <EditDeck deckId={deckId}/>
      </Route>
      <Route path={`${url}/cards`}>
        <CardRoutes deckId={deckId}/>
      </Route>
    </Switch>
  )
}