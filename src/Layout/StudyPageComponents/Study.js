import React, { useState, useEffect }  from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../../utils/api";
import BreadCrumb from "../BreadCrumb";
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
  }, [deckId])

  return (
    <>
      <BreadCrumb breadcrumb={
        [{urlPath: deckId, linkName: deck.name},
         {linkName: "Study"}]
      }/>
      <h2>{deck.name}: Study</h2>
      <StudyDeck cards={deck.cards}/>
    </>
  )
}