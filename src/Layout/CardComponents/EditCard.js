import React, { useState, useEffect }  from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { updateCard, readCard, readDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
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
  }, [deckId, cardId])

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
      <BreadCrumb breadcrumb={
        [{urlPath: deckId, linkName: deck.name},
         {linkName: "Edit Card"}]
      }/>
      <CardForm
        submitHandler={submitHandler}
        changeHandler={changeHandler}
        card={card} deckId={deckId} />
    </>
  )
}