import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";

export default function EditDeck ({ setReloadList }) {
  const initialDeck = { name: "", description: "" }
  const [ deck, setDeck ] = useState({});
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect (() => {
    const ac = new AbortController();

    const loadCard = async () => {
      setDeck(await readDeck( deckId, ac.signal ));
    }
    loadCard();

    return () => ac.abort();
  }, [])

  const changeHandler = ({target}) => {
    setDeck(deck => ({...deck, [target.name]: target.value}))
  }

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const updateDeckData = async () => {
      await updateDeck({...deck},  ac.signal);
      setDeck({...initialDeck});
      setReloadList(set => !set);
      history.push(`/decks/${deckId}`);
    }
    updateDeckData();
    return () => ac.abort();
  }

  console.log("EDIT DECK")

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li class="breadcrumb-item active">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h3>Edit Deck</h3>
      <form onSubmit={submitHandler} className="card">
        <label htmlFor="name">
          Name
          <br/>
          <input name='name' type="text" id="name" 
          placeholder="Deck Name" onChange={changeHandler} value={deck.name} />
        </label>
        <label htmlFor="description">
          Description
          <br/>
          <textarea name='description' type="text" id="description" 
          placeholder="Brief description of the deck"
          onChange={changeHandler} value={deck.description} />
        </label>
        <div>
          <Link to={`/decks/${deckId}`} className="btn btn-secondary" type="button">
            Cancel
          </Link>
          <button className= "btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  )
}