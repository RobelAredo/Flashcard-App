import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddCard from "./AddCard"
import EditCard from "./EditCard"

export default function CardRoutes () {
  const {url} = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${url}/new`}>
        <AddCard/>
      </Route>
      <Route exact path={`${url}/:cardId/edit`}>
        <EditCard/>
      </Route>
    </Switch>
  )
}