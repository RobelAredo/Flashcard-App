import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumb ({breadcrumb}) {

  const breadcrumbItems = breadcrumb.map(({urlPath, linkName}, i) => {
    if (breadcrumb.length - 1 === i) {
      return (
        <li key={i+2} className="breadcrumb-item active">
          {linkName}
        </li>
      )
    }
    return (
      <li key={i+2} className="breadcrumb-item">
        <Link to={`/decks/${urlPath}`}>{linkName}</Link>
      </li>
    )
    
  });

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li key="1" className="breadcrumb-item">
            <Link to="/">Home</Link>
        </li>
        {breadcrumbItems}
      </ol>
    </nav>
  )
}