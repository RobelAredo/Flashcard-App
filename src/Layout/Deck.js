import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard, readDeck } from "../utils/api";

export default function Deck ({ deckId }) {
  const { url } = useRouteMatch();
  const [ deck, setDeck ] = useState({});
  const history = useHistory();
  console.log(deckId)
  // const initialDeck = { name: "", description: "" }
  // const history = useHistory();
  const cardList = deck.cards?.map(card => (
    <li key={card.id} id={`card${card.id}`} className="card">
      <div className="row">
        <div className="col">
          <p>{card.front}</p>
        </div>
        <div  className="col">
          <p>{card.back}</p>
          <button className= "btn btn-secondary" type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
          <button className= "btn btn-primary" type="button" onClick={() => deleteHandler(card.id)}>Delete</button>
        </div>
      </div>
    </li>
  ))

  useEffect(() => {
    const ac = new AbortController();
    const loadDeck = async () => {
      const deck = await readDeck(deckId, ac.signal);
      setDeck({...deck});
    }
    loadDeck();
    return () => ac.abort();
  }, [])

  const deleteHandler = (cardId) => {
    const ac = new AbortController();
    const cardForDeletion = document.querySelector(`#card${cardId}`);
    const deleteCardData = async () => {
      try {
        deleteCard(cardId, ac.signal);
        cardForDeletion.remove()
      } catch (error) {
        if (error.name !== "AbortError") throw error;
      }
    }
    deleteCardData();
    return () => ac.abort();
  }

  return (
     <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/" >Home</Link>
          </li>
          <li class="breadcrumb-item active">
            { deck.name }
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div>
        <button className="btn btn-secondary">Edit</button>
        <button className="btn btn-primary">Study</button>
        <button className="btn btn-primary">Add Cards</button>
        <button className="btn btn-danger">Delete</button>
      </div>
      <h3>Cards</h3>
      <ul style={{listStyleType:'none'}}>
        {cardList}
      </ul>
    </>
  )
}