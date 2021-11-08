import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom"

export default function Home ({ decks, setDecks }) {
  const { url } = useRouteMatch();
  const deckList = decks.map((deck, i) => (
  <li className="card" key={i}>
    <h2 className="card-title">{deck.name}</h2>
    <h5 className="card-text">{deck.description}</h5>
    <div>
      <Link to={`${url}/decks/${deck.id}`} className="btn btn-secondary">View</Link>
      <Link to={`${url}/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
      <button className="btn btn-primary">Delete</button>
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