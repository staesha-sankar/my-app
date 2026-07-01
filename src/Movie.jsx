//presentation
export function Movie({ name, poster, summary, rating }) {
  return (
    <section className="movie-container">
      <img src={poster} alt="" />
      <div className="movie-details">
        <div className="movie-spec-container">
          <h2 className="movie-name">{name}</h2>
          <p className="movie-rating">⭐ {rating}</p>
        </div>
        <p className="movie-summary">{summary}</p>
      </div>
    </section>
  );
}
