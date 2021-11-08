import React from "react";

export default function StudyCard ({ card, front}) {
  const side = front ? "front" : "back";
  return (
    <>
      {card[side]}
    </>
  )

}