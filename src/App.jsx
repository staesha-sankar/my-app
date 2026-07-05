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
import { MovieList } from "./Movies/MovieList";
import { UserList } from "./Users/UserList";
import { Counter } from "./Users/Counter";
import { ColorGame } from "./Color Game/ColorGame";
import { Routes, Route, NavLink } from "react-router";

// Default export (only one per file)
export default function App() {
  const names = ["Staesha", "Lauren", "Zulu", "Nolo"];
  // Array Strings -> Array of JSX (Transform)

  return (
    // JSX starts
    <div className="App">
      <h2>Welcome to the App</h2>

      {/* Navigation */}
      <nav className="nav-bar">
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/color-game">Color Game</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      {/* Matching */}
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/movies" element={<MovieList />} />
        <Route path="/color-game" element={<ColorGame />} />
        <Route path="/users" element={<UserList />} />
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
