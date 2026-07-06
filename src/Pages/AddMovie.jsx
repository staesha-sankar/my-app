import { useState } from "react";

// Separate into Components
// 1. Move JSX
// 2. Move variables only needed AddMovie
// 3. Pass shared variables as props
export function AddMovie() {
  const [movie, setMovie] = useState({
    name: "",
    poster: "",
    rating: "",
    summary: "",
  });

  function addMovie({ movieList, setMovieList }) {
    setMovieList([movie, ...movieList]);

    setMovie({
      name: "",
      poster: "",
      rating: "",
      summary: "",
    });
  }

  return (
    <section>
      <input
        type="text"
        placeholder="Name"
        value={movie.name}
        onChange={(event) => setMovie({ ...movie, name: event.target.value })}
      />
      <input
        type="text"
        placeholder="Poster"
        value={movie.poster}
        onChange={(event) => setMovie({ ...movie, poster: event.target.value })}
      />
      <input
        type="text"
        placeholder="Rating"
        value={movie.rating}
        onChange={(event) => setMovie({ ...movie, rating: event.target.value })}
      />
      <input
        type="text"
        placeholder="Summary"
        value={movie.summary}
        onChange={(event) =>
          setMovie({ ...movie, summary: event.target.value })
        }
      />
      <button onClick={addMovie}>Add Movie</button>
    </section>
  );
}
