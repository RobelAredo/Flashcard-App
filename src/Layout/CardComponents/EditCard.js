import React, { useState, useEffect }  from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../../utils/api";
import CardForm from "../FormLayouts/CardForm";

export default function EditCard () {
  const initialCard = { front: "", back: "" }
  const [ card, setCard ] = useState({...initialCard});
  const [ deck, setDeck ] = useState({});
  const history = useHistory();
  const { deckId, cardId } = useParams();
  
  useEffect (() => {
    const ac1 = new AbortController();
    const ac2 = new AbortController();

    const loadCard = async () => {
      setCard(await readCard( cardId, ac1.signal ));
      setDeck(await readDeck( deckId, ac2.signal ));
    }
    loadCard();

    return () => {
      ac1.abort();
      ac2.abort();
    }
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
      history.push(`/decks/${deckId}`);
    }
    updateCardData();
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
          <li kkey="3" className="breadcrumb-item active">
            Edit Card {card.id}
          </li>
        </ol>
      </nav>
      <CardForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        card={card} deckId={deckId} />
    </>
  )
}