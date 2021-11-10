import React from "react";
import { Link } from "react-router-dom";

export default function DeckList ({ decks, deleteHandler }) {
  const decksList = decks.map((deck, i) => 
  <li key={i} className="card" id={`deck${deck.id}`} >
    <div className="card-title">
      <h2 className="deck-title">{deck.name}</h2>
      <p>{deck.cards.length} cards</p>
    </div>
    <h5 className="card-text">{deck.description}</h5>
    <div className="button-footer">
      <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
        <span className="oi oi-eye" title="eye" aria-hidden="true"></span> View
      
      </Link>
      <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">
        <span className="oi oi-book" title="book" aria-hidden="true"></span> Study
      </Link>
      <button className="btn btn-danger" onClick={() => deleteHandler(deck.id)}>
        <span className="oi oi-trash" title="trash" aria-hidden="true"></span>
      </button>
    </div>
  </li>
  )

  return decksList;
}