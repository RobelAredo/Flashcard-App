import "./index.css"
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { listDecks } from "../utils/api/index";
import Header from "./Header";
import Home from "./HomePage/Home";
import NotFound from "./NotFound";
import CreateDeck from "./DeckComponents/CreateDeck";
import Study from "./StudyPageComponents/Study";
import Deck from "./DeckPageComponents/Deck";
import EditDeck from "./DeckComponents/EditDeck";
import AddCard from "./CardComponents/AddCard";
import EditCard from "./CardComponents/EditCard";

function Layout() {
  const [decks, setDecks] = useState([]);
  const [reloadList, setReloadList] = useState(true)

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
  }, [reloadList])

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home decks={decks} setDecks={setDecks}/>
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck setReloadList={setReloadList}/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck setReloadList={setReloadList}/>
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck setReloadList={setReloadList}/>
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
