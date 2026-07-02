import { MovieCounter } from "./MovieCounter";

//presentation


// Task 2.1
// If rating is 8 or more (green) otherwise (red)
//presentation
export function Movie({ name, poster, summary, rating }) {

  const style = {
    color: rating >= 8 ? "green" : "red",
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
        <button>💡 Toggle Summary</button>
        <p className="movie-summary">{summary}</p>
        <MovieCounter />
      </div>
    </section>
  );
}