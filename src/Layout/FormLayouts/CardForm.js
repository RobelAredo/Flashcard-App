import React from "react";
import { Link } from "react-router-dom";

export default function CardForm ({ submitHandler, changeHandler, card, deckId }) {
  return (
    <form onSubmit={submitHandler} className="card">
      <label htmlFor="front">
        Front
        <br/>
        <textarea name='front' type="text" id="front" 
        onChange={changeHandler} value={card.front} />
      </label>
      <label htmlFor="back">
        Back
        <br/>
        <textarea name='back' type="text" id="back" 
        onChange={changeHandler} value={card.back} />
      </label>
      <div>
        <Link to={`/decks/${deckId}`} className= "btn btn-secondary" type="button">
          Cancel
        </Link>
        <button className= "btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}