import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import StudyCard from "./StudyCard";

export default function StudyDeck ({ cards }) {
  // const { deckId } = useParams();
  const initialStudySession = {front: true, cardIndex:0}
  const [studySession, setStudySession] = useState({...initialStudySession});
  const { deckId } = useParams();
  const history = useHistory();

  const nextCardHandler = () => {
      console.log("before loop", cards.length - 1, studySession.cardIndex + 1)
      console.log((cards.length - 1 )>( studySession.cardIndex + 1))
      if ( cards.length > studySession.cardIndex + 1) {
        setStudySession(({cardIndex}) => ({...studySession, cardIndex: cardIndex + 1}));
      } else {
        setStudySession({...initialStudySession});
        if (!window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")) {
          history.push("/");
        }
      }
  }

  if (!cards) return null;
  console.log(cards.length - 1, studySession.cardIndex)
  if (cards.length < 3) {
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
        onClick={nextCardHandler}>Next</button>
      </div>
    </div>
  )
}