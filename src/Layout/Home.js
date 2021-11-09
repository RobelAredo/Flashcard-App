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
    <div className="card-title">
      <h2 className="deck-title">{deck.name}</h2>
      <p>{deck.cards.length} cards</p>
    </div>
    <h5 className="card-text">{deck.description}</h5>
    <div class="button-footer">
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
        <span class="oi oi-eye" title="eye" aria-hidden="true"></span> View
      
      </Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
        <span class="oi oi-book" title="book" aria-hidden="true"></span> Study
      </Link>
      <button className="btn btn-danger" onClick={() => deleteHandler(deck.id)}>
        <span class="oi oi-trash" title="trash" aria-hidden="true"></span>
      </button>
    </div>
  </li>
  ))

  return (
  <div>
    <Link to={`${url}decks/new`} className="btn btn-secondary">
      <span class="oi oi-plus" title="plus" aria-hidden="true"></span> &nbsp; Create Deck
    </Link>
    <ul>{deckList}</ul>
  </div>
  )
}