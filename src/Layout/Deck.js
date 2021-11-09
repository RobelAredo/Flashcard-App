import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteCard, deleteDeck } from "../utils/api";

export default function Deck ({ setReloadList }) {
  const { deckId } = useRouteMatch().params;
  const { url } = useRouteMatch();
  const [ deck, setDeck ] = useState({});
  const history = useHistory();
  // const initialDeck = { name: "", description: "" }
  // const history = useHistory();
  const cardList = deck.cards?.map(card => (
    <li key={card.id} id={`card${card.id}`} className="card">
      <div className="row">
        <div className="col">
          <p>{card.front}</p>
        </div>
        <div className="col">
          <p>{card.back}</p>
          <div className="edit-button-footer">
            <button className= "btn btn-secondary" type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>Edit</button>
            <button className= "btn btn-danger" type="button" onClick={() => deleteHandler(card.id)}>Delete</button>
          </div>
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
    if (window.confirm("Delete this card?\n\nYou will not be able to recover it.")) {
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
  }

  const deleteDeckHandler = () => {
    if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
      const ac = new AbortController();
      const deleteDeckData = async () => {
        try {
          await deleteDeck(deckId, ac.signal);
          setReloadList(set => !set);
          history.push("/");
        } catch (error) {
          if (error.name !== "AbortError") throw error;
        }
      }
      deleteDeckData();
      return () => ac.abort();
    }
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
      <div className="button-footer">
        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary">Edit</Link>
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">Study</Link>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Cards</Link>
        <button onClick={deleteDeckHandler} className="btn btn-danger">Delete</button>
      </div>
      <h3>Cards</h3>
      <ul style={{listStyleType:'none'}}>
        {cardList}
      </ul>
    </>
  )
}