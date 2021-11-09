import React from "react";

export default function DeckCardItem ({card, deleteHandler, history, url}) {
  return  (
  <li key={card.id} id={`card${card.id}`} className="card">
    <div className="row">
      <div className="col">
        <p>{card.front}</p>
      </div>
      <div className="col">
        <p>{card.back}</p>
        <div className="edit-button-footer">
          <button className= "btn btn-secondary" type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>
            <span class="oi oi-pencil" title="pencil" aria-hidden="true"></span> Edit
          </button>
          <button className= "btn btn-danger" type="button" onClick={() => deleteHandler(card.id)}>
            <span class="oi oi-trash" title="trash" aria-hidden="true"></span> Delete
          </button>
        </div>
      </div>
    </div>
  </li>
  )
}