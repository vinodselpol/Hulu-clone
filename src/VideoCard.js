import React, { forwardRef } from "react";
import "./VideoCard.css";
import TextTruncate from "react-text-truncate";

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=" movie poster"
      />
      <h2> {movie.title || movie.original_name}</h2>
      <TextTruncate
        line={1}
        element="p"
        truncateText="..."
        text={movie.overview}
      />

      <p className="videocard__stats">
        {movie.media_type && `${movie.media_type} •`}
        {movie.release_date || movie.first_air_date} {"  "}
        {"  "}•{movie.vote_count} likes
      </p>
    </div>
  );
});

export default VideoCard;
