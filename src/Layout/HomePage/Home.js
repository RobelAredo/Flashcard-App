import React from "react";
import { Link, useRouteMatch } from "react-router-dom"
import { deleteDeck } from "../../utils/api";
import DeckList from "./DeckList";

export default function Home ({ decks }) {
  const { url } = useRouteMatch();

  const deleteHandler = (deckId) => {
    if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
      const ac = new AbortController();
      const deckForDeletion = document.querySelector(`#deck${deckId}`);
      const deleteDeckData = async () => {
        try {
          deleteDeck(deckId, ac.signal);
          deckForDeletion.remove()
        } catch (error) {
          if (error.name !== "AbortError") throw error;
        }
      }
      deleteDeckData();
      return () => ac.abort();
    }
  }

  return (
  <div>
    <Link to={`${url}decks/new`} className="btn btn-secondary">
      <span className="oi oi-plus" title="plus" aria-hidden="true"></span> &nbsp; Create Deck
    </Link>
    <ul>
      <DeckList decks={decks} deleteHandler={deleteHandler} />
    </ul>
  </div>
  )
}