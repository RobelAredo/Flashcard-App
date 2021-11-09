import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom"
import { deleteDeck } from "../utils/api";

export default function Home ({ decks, setDecks }) {
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

  const deckList = decks.map((deck, i) => (
  <li className="card" id={`deck${deck.id}`} key={i}>
    <h2 className="card-title">{deck.name}</h2>
    <h5 className="card-text">{deck.description}</h5>
    <div>
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary">View</Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
      <button className="btn btn-primary" onClick={() => deleteHandler(deck.id)}>Delete</button>
    </div>
  </li>
  ))

  return (
  <div>
    <Link to={`${url}decks/new`} className="btn btn-secondary">+ Create Deck</Link>
    <ul>{deckList}</ul>
  </div>
  )
}