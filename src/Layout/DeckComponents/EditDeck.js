import React, { useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
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
      <BreadCrumb breadcrumb={
        [{urlPath: deckId, linkName: deck.name},
         {linkName: "Edit Deck"}]
      }/>
      <h3>Edit Deck</h3>
      <DeckForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        deck={deck} url={`/decks/${deckId}`}
      />
    </>
  )
}