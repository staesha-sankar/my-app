import { useState } from "react";
import { MovieCounter } from "./MovieCounter";
import { useNavigate } from "react-router";

// // //presentation

// // // Task 2.1
// // // If rating is 8 or more (green) otherwise (red)
// // //presentation

// Task 1.1 - Info -> /movies/0 or /movies/1 ... depending movie clicked
export function Movie({ id, name, poster, summary, rating, deleteBtn }) {
  const [showSummary, setShowSummary] = useState(true);

  //navigate is a function
  const navigate = useNavigate();

  const style = {
    color: rating >= 8 ? "green" : "red",
  };

  const summaryStyle = {
    display: showSummary ? "block" : "none",
  };

  
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
        <button onClick={() => navigate(`/movies/${id}`)}>ℹ️ Info</button>
        {/* Conditional styling - remains in DOM*/}
        <p className="movie-summary" style={summaryStyle}>
          {summary}
        </p>

        {/* Conditional rendering - removes from DOM*/}

        {/* showSummary ? <p className="movie-summary">{summary}</p> : null */}

        <MovieCounter />

        {deleteBtn}
      </div>
    </section>
  );
}

// import { useState } from "react";
// import { MovieCounter } from "./MovieCounter";

// import Card from "@mui/material/Card";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";

// //presentation

// // Task 2.1
// // If rating is 8 or more (green) otherwise (red)
// //presentation
// export function Movie({ name, poster, summary, rating }) {
//   const [showSummary, setShowSummary] = useState(true);

//   const style = {
//     color: rating >= 8 ? "green" : "red",
//   };

//   const summaryStyle = {
//     display: showSummary ? "block" : "none",
//   };

//   return (
//     <Card className="movie-container">
//       <CardMedia
//         component="img"
//         image={poster}
//         alt={name}
//         className="movie-poster"
//       />

//       <CardContent className="movie-details">
//         <div className="movie-spec-container">
//           <Typography variant="h5" component="h2" className="movie-name">
//             {name}
//           </Typography>

//           <Typography
//             variant="h6"
//             component="p"
//             className="movie-rating"
//             style={style}
//           >
//             ⭐ {rating}
//           </Typography>
//         </div>

//         <IconButton
//           onClick={() => setShowSummary(!showSummary)}
//           className="toggle-summary-button"
//           aria-label="toggle summary"
//         >
//           {showSummary ? "⬆️" : "⬇️"}
//         </IconButton>

//         {/* Conditional styling - remains in DOM*/}
//         <Typography
//           variant="body2"
//           component="p"
//           className="movie-summary"
//           style={summaryStyle}
//         >
//           {summary}
//         </Typography>

//         {/* Conditional rendering - removes from DOM*/}

//         {/* showSummary ? <p className="movie-summary">{summary}</p> : null */}

//         <MovieCounter />
//       </CardContent>
//     </Card>
//   );
// }
