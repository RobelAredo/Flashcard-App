import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index"
import Header from "./Header";
import Home from "./Home"
import NotFound from "./NotFound";
import CreateDeck from "./CreateDeck";
import Study from "./Study";
import Deck from "./Deck"
import EditDeck from "./EditDeck"
import AddCard from "./AddCard"
import EditCard from "./EditCard"

function Layout() {
  const [decks, setDecks] = useState([]);

  useEffect (() => {
    const ac = new AbortController();

    const loadDecks = async () => {
      try {
        const decksData = await listDecks(ac.signal);
        setDecks(decksData)
        console.log(decksData)
      } catch (error) {
        if (error.name !== "AbortController") throw error;
        console.log(error.name);
      }
    }
    loadDecks();
    return () => ac.abort();
  }, [])

  console.log(decks)
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks}/>
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck/>
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard/>
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
