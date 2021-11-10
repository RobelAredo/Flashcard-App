import React, { useState, useEffect }  from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import CardForm from "../FormLayouts/CardForm";

export default function AddCard () {
  const { deckId } = useParams();
  const initialCard = { front: "", back: "", deckId }
  const [ card, setCard ] = useState({...initialCard});
  const [ deck, setDeck ] = useState({});

  const changeHandler = ({target}) => {
    setCard(card => ({...card, [target.name]: target.value}))
  }

    
  useEffect (() => {
    const ac = new AbortController();

    const loadCard = async () => {
      setDeck(await readDeck( deckId, ac.signal ));
    }
    loadCard();

    return () => ac.abort();
  }, [])

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const addCardData = async () => {
      await createCard( deckId, {...card}, ac.signal );
      setCard({...initialCard});
    }
    addCardData();
    return () => ac.abort();
  }

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
            Add Card
          </li>
        </ol>
      </nav>
      <h3>{deck.name}: Add Card</h3>
      <CardForm 
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        card={card} deckId={deckId} />
    </>
  )
}