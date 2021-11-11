import React, { useState }  from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
import DeckForm from "../FormLayouts/DeckForm";



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
      <BreadCrumb breadcrumb={[{linkName: "Create Card"}]}/>
      <DeckForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        deck={deck} url={`/`}
      />
    </>
  )
}