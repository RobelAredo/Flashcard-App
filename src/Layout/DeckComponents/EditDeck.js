import React, { useState, useEffect } from "react"
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import DeckForm from "../FormLayouts/DeckForm";

export default function EditDeck ({ setReloadList }) {
  const initialDeck = { name: "", description: "" }
  const [ deck, setDeck ] = useState({...initialDeck});
  const history = useHistory();
  const { deckId } = useParams();
  
  useEffect (() => {
    const ac = new AbortController();

    const loadCard = async () => {
      setDeck(await readDeck( deckId, ac.signal ));
    }
    loadCard();

    return () => ac.abort();
  }, [deckId])

  const changeHandler = ({target}) => {
    setDeck(deck => ({...deck, [target.name]: target.value}))
  }

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const updateDeckData = async () => {
      await updateDeck({...deck},  ac.signal);
      setDeck({...initialDeck});
      setReloadList(set => !set);
      history.push(`/decks/${deckId}`);
    }
    updateDeckData();
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
            Edit Deck
          </li>
        </ol>
      </nav>
      <h3>Edit Deck</h3>
      <DeckForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        deck={deck} url={`/decks/${deckId}`}
      />
    </>
  )
}