import React, { useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { readDeck, deleteCard, deleteDeck } from "../../utils/api";
import DeckCardsList from "./DeckCardsList";

export default function Deck ({ setReloadList }) {
  const { deckId } = useRouteMatch().params;
  const { url } = useRouteMatch();
  const [ deck, setDeck ] = useState({});
  const history = useHistory();

  useEffect(() => {
    const ac = new AbortController();
    const loadDeck = async () => {
      const deck = await readDeck(deckId, ac.signal);
      setDeck({...deck});
    }
    loadDeck();
    return () => ac.abort();
  }, [deckId])
  
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
        <ol className="breadcrumb">
          <li key="1" className="breadcrumb-item">
            <Link to="/" >Home</Link>
          </li>
          <li key="2" className="breadcrumb-item active">
            { deck.name }
          </li>
        </ol>
      </nav>
      <h4>{deck.name}</h4>
      <p>{deck.description}</p>
      <div className="button-footer">
        <Link to={`/decks/${deckId}/edit`} className="btn btn-secondary">
          <span className="oi oi-pencil" title="pencil" aria-hidden="true"></span> Edit
        </Link>
        <Link to={`/decks/${deckId}/study`} className="btn btn-primary">
          <span className="oi oi-book" title="book" aria-hidden="true"></span> Study
        </Link>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">
          <span className="oi oi-plus" title="plus" aria-hidden="true"></span> &nbsp; Add Cards
        </Link>
        <button onClick={deleteDeckHandler} className="btn btn-danger">
          <span className="oi oi-trash" title="trash" aria-hidden="true"></span>
        </button>
      </div>
      <h3>Cards</h3>
      <ul style={{listStyleType:'none'}}>
        <DeckCardsList
          cards={deck.cards}
          deleteHandler={deleteHandler}
          history={history}
          url={url}
        />
      </ul>
    </>
  )
}