import { useNavigate, useParams } from "react-router";
import Button from "@mui/material/Button";


export function MovieDetails({ movieList }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movieList[id];

  const styles = {
    color: movie?.rating >= 8 ? "teal" : "crimson",
  };
  return (
    <div className="movie-detail-container">
      <iframe
        width="100%"
        height="518"
        src={movie.trailer}
        title="SPIDER-MAN: BRAND NEW DAY – New Trailer (4K)"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <div className="movie-content-container">
        <div className="movie-spec-container">
          <h2 className="movie-name">{movie?.name}</h2>
          <p className="movie-rating" style={styles}>
            ⭐ {movie?.rating}
          </p>
        </div>
        <p className="movie-summary">{movie?.summary}</p>
        <Button variant = "contained" onClick={() => navigate(-1)} >Back</Button>
      </div>
    </div>
  );
}
