import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import BookTicketForm from "./BookTicketForm";
import "../styles/showdetails.css";

function ShowDetails() {
  const [show, setShow] = useState(null);
  const [showticket, setShowticket] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="showDetails_container">
      <h3 className="back_to_shows">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back to Shows
        </Link>
      </h3>
      {show && (
        <div>
          <h2>{show.name}</h2>
          <p>{show.summary}</p>
          {!showticket && (
            <button
              onClick={() => setShowticket(!showticket)}
              className="click_ticket"
            >
              Click here to book Ticket
            </button>
          )}

          {showticket && <BookTicketForm showName={show.name} />}
        </div>
      )}
    </div>
  );
}

export default ShowDetails;
