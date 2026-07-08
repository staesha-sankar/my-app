//Staesha

// Summary
// One component per file
// 1. Select
// 2. Right click
// 3. Refactor
// 4. Move to new file
// 5. Save all file
// 6. After saving only then goto next component

// Dont move multiple components at same time

import { useState } from "react";
import { NavLink, Navigate, Route, Routes } from "react-router";
import "./index.css";
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import { AddMovie } from "./Pages/AddMovie";
import { ColorGame } from "./Pages/ColorGame";
import { MovieDetails } from "./Pages/MovieDetails";
import { MovieList } from "./Pages/MovieList";
import { notFound } from "./Pages/notFound";
import { UserList } from "./Pages/UserList";

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  //lifting the state up
  //sibling want to share data so you move it to a common parent data and pass it down as props
  const [movieList, setMovieList] = useState(INITIAL_MOVIES);
  return (
    // JSX starts
    <div className="App">
      <h2>Welcome to the App</h2>

      {/* Navigation */}
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/"> Home </NavLink>
            </li>
            <li>
              <NavLink to="/movies"> Movies </NavLink>
            </li>
            <li>
              <NavLink to="/movies/add"> Add Movie </NavLink>
            </li>
            <li>
              <NavLink to="/color-game"> Color Game </NavLink>
            </li>
            <li>
              <NavLink to="/users"> Users </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Matching */}
      <Routes>
        {/* Redirection */}

        <Route path="/films" element={<Navigate replace to="/movies" />} />
        <Route path="/movies" element={<MovieList movieList={movieList} />} />
        <Route
          path="/movies/add"
          element={
            <AddMovie movieList={movieList} setMovieList={setMovieList} />
          }
        />
        <Route path="/color-game" element={<ColorGame />} />
        <Route path="/users" element={<UserList />} />
        {/* : makes it variable */}
        <Route
          path="/movies/:id"
          element={<MovieDetails movieList={movieList} />}
        />
        {/*Special- if none matches | * - matches any*/}
        <Route path="/*" element={notFound()} />
      </Routes>

      {/*<UserList />*/}
      {/*<MovieList />*/}
      {/*<Counter />*/}

      {/*Parent component dictates style*/}
      {/*<Fun />*/}

      {/*Conditional rendering*/}

      {/*<ConditionalRendering />*/}

      {/*<ConditionalStyling />*/}
      {/*<ColorGame />*/}
    </div>
    // JSX ends
  );
}


//Routing fundamentals
//Security and marketing
//Brand aquisition

//Replace takes care of a loop and indicates to forget about slash films

//Rerendering process:
//Real DOM is so expensive because it redoes all elements and its costly
//Virtual DOM (copy of the real dom)(object) - scheduling + performance
//Performance - Key(react)
//reconciliation = diffing + updating
//key speeds up

//steps
//make updates on virtual dom
//diff: then compare to real dom (to improve diffing should have a key)
//after diffing -> reconciliation
//compressed update from virtual dom to real dom

//keep a copy of real dom, update, diff it, then do reconciliation
//if you use dom methods you lose benefits of virtual dom
//hook -> accesses virtual dom
