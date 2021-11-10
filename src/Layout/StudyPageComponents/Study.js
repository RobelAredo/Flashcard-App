import React, { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import StudyDeck from "./StudyDeck";

export default function Study () {
  const [ deck, setDeck ] = useState({});
  const { deckId } = useParams();
  
  useEffect (() => {
    const ac1 = new AbortController();

    const loadCard = async () => {
      setDeck(await readDeck( deckId, ac1.signal ));
    }
    loadCard();

    return () => ac1.abort();
  }, [])

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li key="1" className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li key="2" className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li key="3" className="breadcrumb-item active">
            Study
          </li>
        </ol>
      </nav>
      <h2>{deck.name}: Study</h2>
      <StudyDeck cards={deck.cards}/>
    </>
  )
}