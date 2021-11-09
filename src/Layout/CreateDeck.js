import React, { useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import DeckForm from "./FormLayouts/DeckForm";



export default function CreateDeck ({ setReloadList }) {
  const initialDeck = { name: "", description: "" }
  const [ deck, setDeck ] = useState({...initialDeck});
  const history = useHistory();

  const changeHandler = ({target}) => {
    setDeck(deck => ({...deck, [target.name]: target.value}))
  }

  const submitHandler = event => {
    event.preventDefault();
    const ac = new AbortController();
    const pushDeckData = async () => {
      const pushedDeckData = await createDeck({...deck},  ac.signal);
      const deckId = pushedDeckData.id;
      setDeck({...initialDeck});
      setReloadList(set => !set)
      history.push(`/decks/${deckId}`)
    }
    pushDeckData();
    return () => ac.abort();
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item active">
            Create Deck
          </li>
        </ol>
      </nav>
      <DeckForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        deck={deck} url={`/`}
      />
    </>
  )
}