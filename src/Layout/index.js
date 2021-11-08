import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home"
import Decks from "./Decks"
import { listDecks } from "../utils/api/index"

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect (() => {
    const ac = new AbortController();

    const loadDecks = async () => {
      try {
        const decksData = await listDecks(ac.signal);
        setDecks(decksData)
      } catch (error) {
        if (error.name !== "AbortController") throw error;
        console.log(error.name);
      }
    }
    loadDecks();
    return () => ac.abort();
  }, [])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks}/>
          </Route>
          <Route path="/decks">
            <Decks/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
