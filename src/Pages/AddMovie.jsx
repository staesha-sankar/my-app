import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router";

// Separate into Components
// 1. Move JSX
// 2. Move variables only needed AddMovie
// 3. Pass shared variables as props
export function AddMovie({ movieList, setMovieList }) {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

    /* Copy of movies + new movie */
    // setMovieList([newMovie, ...movieList]);
    // POST
    // 1. method - POST
    // 2. Body & JSON
    // 3. Headers we are sending JSON

    setLoading(true);
    fetch(`https://6971d50b32c6bacb12c4aa19.mockapi.io/movies`, {
      method: "POST",
      body: JSON.stringify(newMovie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => (res.ok ? res.json() : Promise.reject("Retry")))
      .then(() => navigate("/movies"))
      .catch((err) => setError(err))
      .finally(() => setLoading(false)); // loading state

    // Task
    // Success -> navigate to /movies
    // Failure -> Retry
  }

  return (
   

    <section className="add-movie-container">
       {loading ? <h1>{error}</h1> : ""}
       {error ? <h1>{error}</h1> : ""}
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

      <Button variant="contained" onClick={addMovie}>
        Add Movie
      </Button>
    </section>
  );
}
