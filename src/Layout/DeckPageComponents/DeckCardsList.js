import React from "react";

export default function DeckCardsList ({ cards, deleteHandler, history, url}) {
  if (!cards) return null;
  
  const cardsList = cards.map(card =>
    <li key={card.id} id={`card${card.id}`} className="card">
      <div className="row">
        <div className="col">
          <p>{card.front}</p>
        </div>
        <div className="col">
          <p>{card.back}</p>
          <div className="edit-button-footer">
            <button className= "btn btn-secondary" type="button" onClick={() => history.push(`${url}/cards/${card.id}/edit`)}>
              <span className="oi oi-pencil" title="pencil" aria-hidden="true"></span> Edit
            </button>
            <button className= "btn btn-danger" type="button" onClick={() => deleteHandler(card.id)}>
              <span className="oi oi-trash" title="trash" aria-hidden="true"></span> Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  )

  return cardsList;
}