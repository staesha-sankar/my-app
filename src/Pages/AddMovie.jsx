import { useState } from "react";
import Button from "@mui/material/Button";

// Separate into Components
// 1. Move JSX
// 2. Move variables only needed AddMovie
// 3. Pass shared variables as props
export function AddMovie({ movieList, setMovieList }) {
  const [movie, setMovie] = useState({
    name: "",
    poster: "",
    rating: "",
    summary: "",
  });

  function addMovie() {
    setMovieList([
      {
        ...movie,
        rating: Number(movie.rating),
      },
      ...movieList,
    ]);

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
        type="number"
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

      <Button variant="contained">Hello world</Button>
    </section>
  );
}