import React, { useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";



export default function CreateDeck () {
  const initialDeck = { name: "", description: "" }
  const [ deck, setDeck ] = useState({...initialDeck});
  const history = useHistory();

  const changeHandler = ({target}) => {
    setDeck(deck => ({...deck, [target.name]: target.value}))
  }

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const pushDeckData = async () => {
      const pushedDeckData = await createDeck({...deck},  ac.signal);
      const deckId = pushedDeckData.id;
      setDeck({...initialDeck});
      history.push(`/decks/${deckId}`)
    }
    pushDeckData();
    return () => ac.abort();
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">
            Create Deck
          </li>
        </ol>
      </nav>
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
          placeholder="Brief description of the deck" onChange={changeHandler} value={deck.description} />
        </label>
        <div>
          <button className= "btn btn-secondary" type="button">Cancel</button>
          <button className= "btn btn-primary" type="submit">Submit</button>
        </div>

      </form>
    </>
  )
}