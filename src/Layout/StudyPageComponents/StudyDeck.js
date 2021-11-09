import React, { useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import StudyCard from "./StudyCard";
import StudyDeckNextButton from "./StudyDeckNextButton";

export default function StudyDeck ({ cards }) {
  const initialStudySession = { front: true, cardIndex:0 }
  const [studySession, setStudySession] = useState({...initialStudySession});
  const { deckId } = useParams();
  const history = useHistory();

  const nextCardHandler = () => {
      if ( cards.length > studySession.cardIndex + 1) {
        setStudySession(({ cardIndex }) => ({ front: true, cardIndex: cardIndex + 1 }));
      } else {
        setStudySession({...initialStudySession});
        if (!window.confirm("Restart cards?\n\nClick 'cancel' to return to the home page.")) {
          history.push("/");
        }
      }
  }

  if (!cards) return null;
  else if (cards.length < 3) {
    return (
      <>
        <h3>Not enough cards.</h3>
        <p>You need at least 3 cards to study. There are {cards.length} cards in this deck.</p>
        <Link to={`/decks/${deckId}/cards/new`} className="btn btn-primary"><span class="oi oi-plus" title="plus" aria-hidden="true"></span> &nbsp; Add Card</Link>
      </>
    )
  }
  return (
    <div className="card">
      <h4>Card {studySession.cardIndex + 1} of {cards.length}</h4>
      <StudyCard card={cards[studySession.cardIndex]} front={studySession.front}/>
      <div>
        <button className= "btn btn-secondary" type="button"
        onClick={() => setStudySession(({front}) => ({...studySession, front: !front}))}>Flip</button>
        <StudyDeckNextButton display={!studySession.front} nextCardHandler={nextCardHandler}/>
      </div>
    </div>
  )
}