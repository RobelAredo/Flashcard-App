import React from "react";
import { Link } from "react-router-dom";

export default function DeckForm ({ submitHandler, changeHandler, deck, url }) {
  return (
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
        <Link to={url} className="btn btn-secondary" type="button">
          Cancel
        </Link>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}