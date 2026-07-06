import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

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
    <section className = "add-movie-container">
      <TextField
        label="Name"
        variant="outlined"
        value={movie.name}
        onChange={(event) => setMovie({ ...movie, name: event.target.value })}
      />

      <TextField
        label="Poster"
        variant="outlined"
        value={movie.poster}
        onChange={(event) => setMovie({ ...movie, poster: event.target.value })}
      />

      <TextField
        label="Rating"
        variant="outlined"
        type="number"
        value={movie.rating}
        onChange={(event) => setMovie({ ...movie, rating: event.target.value })}
      />

      <TextField
        label="Summary"
        variant="outlined"
        value={movie.summary}
        onChange={(event) =>
          setMovie({ ...movie, summary: event.target.value })
        }
      />

      <Button variant="contained" onClick={addMovie}>Add Movie</Button>
    </section>
  );
}
