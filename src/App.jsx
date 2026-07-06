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

import "./index.css";
import { MovieList } from "./Pages/MovieList";
import { UserList } from "./Pages/UserList";
import { Counter } from "./Users/Counter";
import { ColorGame } from "./Pages/ColorGame";
import { Routes, Route, NavLink, Navigate } from "react-router";
import { notFound } from "./Pages/notFound";
import { useState } from "react";
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import { AddMovie } from "./Pages/AddMovie";

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

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
        <Route path="/" element={<h1>Home Page</h1>} />
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
