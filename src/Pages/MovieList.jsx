// import { useState } from "react";
// import { Movie } from "../Movies/Movie";
// import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
// import { AddMovie } from "./AddMovie";

// // Task: Create MovieList && Movie
// //Steps:
// //1. build Movie (presentation) component: take one object and paste it in the function and do the return with the html for one component
// //2. remove data from Movie
// //3. Now make smart component Movie list and make a section and call movie component inside <Movie/>
// //4 Make responsive by giving class name and doing the display
// //5. map though the array of objects and pass the data to the movie component as props
// //smart

// export function MovieList({ movieList }) {
//   /* Your Code */

//   return (
//     <main>
//       {/* Your Code */}

//       <section className="movie-list">
//         {movieList.map(({ name, poster, summary, rating }, index) => (
//           <Movie
//             key={index} //makes diffing faster
//             id={index}
//             name={name}
//             poster={poster}
//             summary={summary}
//             rating={rating}
//           />
//         ))}
//       </section>
//     </main>
//   );
// }

import { useEffect, useState } from "react";
import { Movie } from "../Movies/Movie";
import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
import { AddMovie } from "./AddMovie";
import { Button } from "@mui/material";

// Empower with own data
// setMovieList() - Re-render - fetch -> setMovieList()
// C=F(S)
//Smart gives API and data
export function MovieList() {
  /* Your Code */

  const [movieList, setMovieList] = useState([]);

  console.log("Re-render");

  // data -> 11 - [{},{}..]
  //componentDidMount - only on mount
  //empty dependancy array doesnt run in update
  //fetch - set movie list - chnage movie list - re render - will go into updation - [] shielded the code
  // [] - indicates that only on mounting the code must run
  useEffect(() => {
    fetch("https://6a4ceefee1cf82a4a17dd0d3.mockapi.io/movies")
      .then((res) => res.json())
      .then((data) => setMovieList(data));
  }, []);

  // // fetch - setMovie list - change movie list - rerender - updation
  // useEffect(() => {
  //   fetch("https://6a4ceefee1cf82a4a17dd0d3.mockapi.io/movies")
  //     .then((res) => res.json())
  //     .then((data) => setMovieList(data));
  // }, [movieList]);

   const getMovies = () => {
    fetch("https://6a4ceefee1cf82a4a17dd0d3.mockapi.io/movies", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setMovieList(data)); // 1s // old data
  };

  // mounted
  useEffect(() => {
    console.log("Mounting is Done");
    getMovies();
  }, []);


  //Task delete movie
  const deleteMovie = (id) => {
    console.log("deleting");
    fetch(`https://6a4ceefee1cf82a4a17dd0d3.mockapi.io/movies/${id}`, {
      method: "DELETE",
    }) .then((res) => res.json()) // 5s
      .then(() => getMovies()); // Delete -> GET // Safe - DB - UI Sync
  };

  return (
    <main>
      {/* Your Code */}

      <section className="movie-list">
        {movieList.map(({ name, poster, summary, rating, id }) => (
          <Movie
            key={id} //makes diffing faster
            id={id}
            name={name}
            poster={poster}
            summary={summary}
            rating={rating}
            deleteBtn={
              <button onClick={() => deleteMovie(id)}> Delete 🗑️</button>
            }
          />
        ))}
      </section>
    </main>
  );
}

//Pass JSX prop
