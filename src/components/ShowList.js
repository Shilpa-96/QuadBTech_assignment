import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/showlist.css";
import fallbackImage from "../fallback.png";

function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="showlist_container">
      <h1>TV Shows</h1>
      <div className="product_container">
        {shows.map((show) => (
          <div className="product_card" key={show.show.id}>
            <h2>
              <Link to={`/show/${show.show.id}`}>{show.show.name}</Link>
            </h2>
            <img
              className="product_card_img"
              alt={show.show.name}
              src={show.show.image ? show.show.image.medium : fallbackImage}
              loading="lazy"
            />

            <p>Language: {show.show.language}</p>
            <p>
              Generes:{" "}
              {show.show.genres.map((item) => (
                <span>{item} </span>
              ))}
            </p>
            <p>Status: {show.show.status ? show.show.status : "null"}</p>
            <p>Runtime: {show.show.runtime ? show.show.runtime : "null"}</p>
            <p>
              AverageRuntime:
              {show.show.averageRunTime ? show.show.averageRunTime : " null"}
            </p>
            <p>
              Premiered: {show.show.premiered ? show.show.premiered : "null"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
