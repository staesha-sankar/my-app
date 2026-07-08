import { useNavigate, useParams } from "react-router";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

export function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    fetch(`https://6a4ceefee1cf82a4a17dd0d3.mockapi.io/movies/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  const styles = {
    color: movie?.rating >= 8 ? "teal" : "crimson",
  };

  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="518"
        src={movie?.trailer}
        title={movie?.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

      <div className="movie-content-container">
        <div className="movie-spec-container">
          <h2 className="movie-name">{movie?.name}</h2>

          <p className="movie-rating" style={styles}>
            ⭐ {movie?.rating}
          </p>
        </div>

        <p className="movie-summary">{movie?.summary}</p>

        <Button variant="contained" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}