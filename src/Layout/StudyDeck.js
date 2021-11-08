import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import StudyCard from "./StudyCard";

export default function StudyDeck ({ cards }) {
  // const { deckId } = useParams();
  const initialStudySession = {front: true, cardIndex:0}
  const [studySession, setStudySession] = useState({...initialStudySession});
  const { deckId } = useParams();
  if (!cards) return null;
  else if (cards.length < 3) {
    return (
      <>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary">Add Card</Link>
      </>
    )
  }
  return (
    <div className="card">
      <StudyCard card={cards[studySession.cardIndex]} front={studySession.front}/>
      <div>
        <button className= "btn btn-secondary" type="button"
        onClick={() => setStudySession(({front}) => ({...studySession, front: !front}))}>Flip</button>
        <button className= "btn btn-primary" type="submit"
        onClick={() => setStudySession(({cardIndex}) => ({...studySession, cardIndex: cardIndex + 1}))}>Next</button>
      </div>
    </div>
  )
}