import React, { useState, useEffect }  from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard, readCard } from "../utils/api";

export default function EditCard () {
  const initialCard = { front: "", back: "" }
  const [ card, setCard ] = useState({...initialCard});
  const history = useHistory();
  const { deckId, cardId } = useParams();
  
  useEffect (() => {
    const ac = new AbortController();

    const loadCard = async () => {
      setCard(await readCard( cardId, ac.signal));
    }
    loadCard();

    return () => ac.abort();
  }, [])

  const changeHandler = ({target}) => {
    setCard(card => ({...card, [target.name]: target.value}))
  }

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const updateCardData = async () => {
      await updateCard({...card},  ac.signal);
      setCard({...initialCard});
      history.push(`/decks/${deckId}`)
    }
    updateCardData();
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
        <label htmlFor="front">
          Front
          <br/>
          <textarea name='front' type="text" id="front" 
          placeholder="Deck Name" onChange={changeHandler} value={card.front} />
        </label>
        <label htmlFor="back">
          Back
          <br/>
          <textarea name='back' type="text" id="back" 
          placeholder="Brief description of the deck" onChange={changeHandler} value={card.back} />
        </label>
        <div>
          <button className= "btn btn-secondary" type="button">Cancel</button>
          <button className= "btn btn-primary" type="submit">Submit</button>
        </div>

      </form>
    </>
  )
}