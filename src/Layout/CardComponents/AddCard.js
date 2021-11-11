import React, { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import { createCard, readDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
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
  }, [deckId])

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
      <BreadCrumb breadcrumb={
        [{urlPath: deckId, linkName: deck.name},
         {linkName: "Add Card"}]
      }/>
      <h3>{deck.name}: Add Card</h3>
      <CardForm 
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        card={card} deckId={deckId} />
    </>
  )
}