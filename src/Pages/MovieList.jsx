import { useState } from "react";
import { Movie } from "../Movies/Movie";
import { INITIAL_MOVIES } from "../Movies/INITIAL_MOVIES";
import { AddMovie } from "./AddMovie";

// Task: Create MovieList && Movie
//Steps:
//1. build Movie (presentation) component: take one object and paste it in the function and do the return with the html for one component
//2. remove data from Movie
//3. Now make smart component Movie list and make a section and call movie component inside <Movie/>
//4 Make responsive by giving class name and doing the display
//5. map though the array of objects and pass the data to the movie component as props
//smart

export function MovieList({movieList}) {
  /* Your Code */

  

  return (
    <main>
      {/* Your Code */}
      

      <section className="movie-list">
        {movieList.map(({ name, poster, summary, rating }) => (
          <Movie
            key={name}
            name={name}
            poster={poster}
            summary={summary}
            rating={rating}
          />
        ))}
      </section>
    </main>
  );
}
