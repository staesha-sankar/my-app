import { useState } from "react";
import { MovieCounter } from "./MovieCounter";

//presentation

// Task 2.1
// If rating is 8 or more (green) otherwise (red)
//presentation
export function Movie({ name, poster, summary, rating }) {
  const [showSummary, setShowSummary] = useState(true);
  const style = {
    color: rating >= 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: showSummary ? "block" : "none",
  }

  return (
    <section className="movie-container">
      <img src={poster} alt="" />
      <div className="movie-details">
        <div className="movie-spec-container">
          <h2 className="movie-name">{name}</h2>
          <p className="movie-rating" style={style}>
            ⭐ {rating}
          </p>
        </div>
        <button onClick={() => setShowSummary(!showSummary)}>
          💡 Toggle Summary
        </button>
        {/* Conditional styling - remains in DOM*/}
        <p
          className="movie-summary"
          style={summaryStyle}
        >
          {summary}
        </p>

        {/* Conditional rendering - removes from DOM*/}

        {/* showSummary ? <p className="movie-summary">{summary}</p> : null */}

        <MovieCounter />
      </div>
    </section>
  );
}
