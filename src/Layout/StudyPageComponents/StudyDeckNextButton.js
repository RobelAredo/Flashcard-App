import React from "react";

export default function StudyDeckNextButton ({ display, nextCardHandler }) {
  if (!display) return null;
  return (
    <button className="btn btn-primary" type="submit"
    onClick={nextCardHandler}>Next</button>
  )
}